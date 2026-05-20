import {execFileSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const sourceRoot = path.resolve(process.env.SOURCE_ROOT ?? '..');
const docsApiDir = path.join(repoRoot, 'docs', 'references', 'api');
const staticApiDir = path.join(repoRoot, 'static', 'api');
const generatedDir = path.join(repoRoot, '.generated');
const publicBaseUrl = process.env.DOCS_PUBLIC_BASE_URL ?? 'https://techindustryx.github.io/docs';

const repos = [
  {
    name: 'hsds-dotnet',
    title: 'HSDS .NET',
    dotnet: ['src/TechIndustry.Hsds/TechIndustry.Hsds.csproj'],
  },
  {
    name: 'industria4-platform',
    title: 'Industria4 Platform',
    dotnet: ['src/Industria4.sln', 'src/Industria4.IoT.sln', 'src/Industria4.Licensing.sln'],
  },
  {
    name: 'opcua-bridge',
    title: 'OPC UA Bridge',
    dotnet: [
      'src/OpcUaServer/Industria4.Bridge.OpcUaServer.csproj',
      'src/Grpc/Industria4.Bridge.Grpc.csproj',
      'src/Plugin.Echo/Industria4.Bridge.Plugin.Echo.csproj',
    ],
    proto: ['src/OpcUaServer/Plugin/PluginService.proto'],
  },
  {
    name: 'simatic-wincc-chromium',
    title: 'SIMATIC WinCC Chromium',
    dotnet: ['WinCC.Chronium.sln'],
  },
  {
    name: 'twincat-analytics-collector',
    title: 'TwinCAT Analytics Collector',
    dotnet: ['TechIndustry.TwinCAT.Analytics.sln'],
  },
  {
    name: 'twincat-data-streaming',
    title: 'TwinCAT Data Streaming',
    dotnet: ['TechIndustry.Streaming.sln'],
  },
  {
    name: 'twincat-hmi-ui-controls',
    title: 'TwinCAT HMI UI Controls',
    hmi: true,
  },
  {
    name: 'twincat-rpc',
    title: 'TwinCAT RPC',
    dotnet: ['TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT.sln'],
    plc: true,
  },
];

function walk(dir, predicate, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const entry of readdirSync(dir)) {
    if (entry === '.git' || entry === 'node_modules' || entry === 'bin' || entry === 'obj') continue;
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, predicate, acc);
    else if (predicate(full)) acc.push(full);
  }
  return acc.sort();
}

function commandExists(command) {
  try {
    execFileSync(command, ['--version'], {stdio: 'ignore'});
    return true;
  } catch {
    return false;
  }
}

function safeRead(file) {
  try {
    return readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

function parseProto(file) {
  const text = safeRead(file);
  const services = [...text.matchAll(/service\s+([A-Za-z0-9_]+)/g)].map((m) => m[1]);
  const messages = [...text.matchAll(/message\s+([A-Za-z0-9_]+)/g)].map((m) => m[1]);
  return {services, messages};
}

function summarizeHmi(repoPath) {
  const manifests = walk(repoPath, (f) => path.basename(f) === 'Manifest.json');
  const descriptions = walk(repoPath, (f) => path.basename(f) === 'Description.json');
  return {
    manifests: manifests.map((f) => path.relative(repoPath, f)),
    descriptions: descriptions.map((f) => path.relative(repoPath, f)),
  };
}

function summarizePlc(repoPath) {
  const files = walk(repoPath, (f) => /\.(TcPOU|TcDUT|TcGVL)$/i.test(f));
  const byType = files.reduce((acc, file) => {
    const ext = path.extname(file).slice(1);
    acc[ext] = (acc[ext] ?? 0) + 1;
    return acc;
  }, {});
  return {count: files.length, byType};
}

function ensureDocfxEntryPoint(outputDir) {
  const rootIndex = path.join(outputDir, 'index.html');
  if (existsSync(rootIndex)) return true;

  const htmlFiles = walk(outputDir, (f) => path.extname(f).toLowerCase() === '.html');
  if (htmlFiles.length === 0) return false;

  const preferred = htmlFiles.find((f) => path.relative(outputDir, f).split(path.sep).join('/') === 'api/index.html') ?? htmlFiles[0];
  const target = path.relative(outputDir, preferred).split(path.sep).join('/');
  writeFileSync(
    rootIndex,
    [
      '<!doctype html>',
      '<meta charset="utf-8">',
      `<meta http-equiv="refresh" content="0; url=${target}">`,
      `<script>window.location.replace(${JSON.stringify(target)});</script>`,
      `<a href="${target}">Open API reference</a>`,
      '',
    ].join('\n'),
  );
  return true;
}

function runDocfx(repo, repoPath) {
  if (!repo.dotnet?.length || !commandExists('docfx')) return null;

  const existing = repo.dotnet.filter((p) => existsSync(path.join(repoPath, p)));
  if (existing.length === 0) return null;

  const docfxWorkDir = path.join(generatedDir, 'docfx', repo.name);
  const outputDir = path.join(staticApiDir, 'dotnet', repo.name);
  mkdirSync(docfxWorkDir, {recursive: true});
  mkdirSync(outputDir, {recursive: true});

  const config = {
    metadata: [
      {
        src: [{src: repoPath, files: existing}],
        dest: 'metadata',
        disableGitFeatures: true,
        disableDefaultFilter: false,
      },
    ],
    build: {
      content: [{files: ['metadata/**.yml', 'metadata/index.md']}],
      dest: outputDir,
      globalMetadata: {
        _appTitle: `${repo.title} API Reference`,
      },
    },
  };

  const configPath = path.join(docfxWorkDir, 'docfx.json');
  writeFileSync(configPath, JSON.stringify(config, null, 2));

  try {
    execFileSync('docfx', [configPath], {stdio: 'inherit'});
    if (!ensureDocfxEntryPoint(outputDir)) return null;
    return `${publicBaseUrl}/api/dotnet/${repo.name}/`;
  } catch (error) {
    if (process.env.DOCS_STRICT_API === 'true') throw error;
    console.warn(`DocFX failed for ${repo.name}; the API landing page will still be written.`);
    return null;
  }
}

function writeRepoPage(repo) {
  const repoPath = path.join(sourceRoot, repo.name);
  const present = existsSync(repoPath);
  const docfxUrl = present ? runDocfx(repo, repoPath) : null;
  const protoSummaries = present
    ? (repo.proto ?? [])
        .filter((p) => existsSync(path.join(repoPath, p)))
        .map((p) => ({path: p, ...parseProto(path.join(repoPath, p))}))
    : [];
  const plc = present && repo.plc ? summarizePlc(repoPath) : null;
  const hmi = present && repo.hmi ? summarizeHmi(repoPath) : null;

  const lines = [
    '---',
    `title: ${repo.title}`,
    '---',
    '',
    `# ${repo.title} API Reference`,
    '',
    `Source repository: \`TechIndustryX/${repo.name}\``,
    '',
  ];

  if (!present) {
    lines.push('> Source checkout not found. The CI workflow checks out this repository before building the site.', '');
  }

  if (docfxUrl) {
    lines.push('## .NET API', '', `DocFX output: [open .NET API reference](${docfxUrl})`, '');
  } else if (repo.dotnet?.length) {
    lines.push('## .NET API', '', 'DocFX is configured for:', '', ...repo.dotnet.map((p) => `- \`${p}\``), '');
  }

  if (protoSummaries.length) {
    lines.push('## gRPC / Protobuf', '');
    for (const proto of protoSummaries) {
      lines.push(`### ${proto.path}`, '');
      lines.push('Services:', '', ...(proto.services.length ? proto.services.map((s) => `- \`${s}\``) : ['- None detected']), '');
      lines.push('Messages:', '', ...(proto.messages.length ? proto.messages.map((m) => `- \`${m}\``) : ['- None detected']), '');
    }
  }

  if (plc) {
    lines.push('## TwinCAT PLC Inventory', '', `Detected ${plc.count} PLC files.`, '');
    for (const [type, count] of Object.entries(plc.byType)) lines.push(`- \`${type}\`: ${count}`);
    lines.push('');
  }

  if (hmi) {
    lines.push('## TwinCAT HMI Inventory', '', 'Manifests:', '', ...(hmi.manifests.length ? hmi.manifests.map((p) => `- \`${p}\``) : ['- None detected']), '');
    lines.push('Descriptions:', '', ...(hmi.descriptions.length ? hmi.descriptions.map((p) => `- \`${p}\``) : ['- None detected']), '');
  }

  writeFileSync(path.join(docsApiDir, `${repo.name}.md`), `${lines.join('\n')}\n`);
}

rmSync(generatedDir, {recursive: true, force: true});
mkdirSync(docsApiDir, {recursive: true});
mkdirSync(staticApiDir, {recursive: true});

for (const repo of repos) writeRepoPage(repo);

const index = [
  '---',
  'title: API Index',
  '---',
  '',
  '# API Index',
  '',
  'This page lists API reference entry points for the TechIndustry repositories.',
  '',
  ...repos.map((repo) => `- [${repo.title}](./${repo.name}.md)`),
  '',
].join('\n');

writeFileSync(path.join(docsApiDir, 'index.md'), index);
console.log(`Wrote API reference pages from ${sourceRoot}`);

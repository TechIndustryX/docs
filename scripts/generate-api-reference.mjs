import {execFileSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const sourceRoot = path.resolve(process.env.SOURCE_ROOT ?? '..');
const docsLibrariesDir = path.join(repoRoot, 'docs', 'libraries');
const legacyDocsApiDir = path.join(repoRoot, 'docs', 'references', 'api');
const staticApiDir = path.join(repoRoot, 'static', 'api');
const generatedDir = path.join(repoRoot, '.generated');
const apiSidebarPath = path.join(repoRoot, 'api-sidebars.ts');
const publicBaseUrl = process.env.DOCS_PUBLIC_BASE_URL ?? 'https://techindustryx.github.io/docs';
const enableDocfx = process.env.DOCS_ENABLE_DOCFX === 'true';

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
    name: 'twincat-integration',
    title: 'TwinCAT Integration',
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

function safeJson(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'));
  } catch {
    return null;
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

function parseHmiControls(repoPath) {
  const descriptions = walk(repoPath, (f) => path.basename(f) === 'Description.json');
  return descriptions
    .map((file) => {
      const relative = path.relative(repoPath, file);
      const json = safeJson(file) ?? {};
      const folderName = path.basename(path.dirname(file));
      const packageName = relative.split(path.sep)[0] ?? 'TwinCAT HMI';
      const displayName =
        json.displayName ??
        json.name ??
        json.controlName ??
        json.controlType ??
        json.type ??
        folderName;
      const description = json.description ?? json.shortDescription ?? json.summary ?? '';
      const category = json.category ?? json.group ?? packageName;
      const properties =
        json.properties ??
        json.Property ??
        json.propertyDefinitions ??
        json.propertyDescriptions ??
        json.members ??
        {};
      return {
        namespace: packageName,
        kind: 'control',
        name: String(displayName),
        summary: typeof description === 'string' ? description : '',
        source: relative,
        category: String(category),
        properties,
      };
    })
    .sort((a, b) => `${a.namespace}:${a.name}`.localeCompare(`${b.namespace}:${b.name}`));
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

function cleanXmlDoc(lines) {
  if (!lines.length) return '';
  const text = lines
    .join('\n')
    .replace(/<see(?:\s+cref="[^"]+")?\s*\/>/g, '')
    .replace(/<see(?:\s+cref="([^"]+)")?\s*>(.*?)<\/see>/g, '$1$2')
    .replace(/<paramref\s+name="([^"]+)"\s*\/>/g, '`$1`')
    .replace(/<typeparamref\s+name="([^"]+)"\s*\/>/g, '`$1`')
    .replace(/<c>(.*?)<\/c>/gs, '`$1`')
    .replace(/<code>(.*?)<\/code>/gs, '`$1`')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text;
}

function normalizeSignature(signature) {
  return signature.replace(/\s+/g, ' ').replace(/\s+([,>)])/g, '$1').replace(/([(<,])\s+/g, '$1').trim();
}

function escapeMdxText(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;');
}

function mdCode(value) {
  return `\`${escapeMdxText(String(value).replace(/`/g, "'"))}\``;
}

function yamlString(value) {
  return JSON.stringify(String(value));
}

function slugify(value) {
  return (
    String(value)
      .replace(/<.*?>/g, '')
      .replace(/[`'"]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'item'
  );
}

function uniqueSlug(base, used) {
  const clean = slugify(base);
  let slug = clean;
  let index = 2;
  while (used.has(slug)) {
    slug = `${clean}-${index}`;
    index += 1;
  }
  used.add(slug);
  return slug;
}

function makeSlugMap(items, toBase) {
  const used = new Set();
  const map = new Map();
  for (const item of items) map.set(item, uniqueSlug(toBase(item), used));
  return map;
}

function docId(...parts) {
  return parts.join('/').replace(/\.md$/, '').replace(/\/index$/, '/index');
}

function writeMarkdown(file, title, lines) {
  mkdirSync(path.dirname(file), {recursive: true});
  writeFileSync(file, ['---', `title: ${yamlString(title)}`, '---', '', ...lines, ''].join('\n'));
}

function sidebarDoc(repo, relPath) {
  return `libraries/${repo.name}/api/${relPath.replace(/\.md$/, '').replace(/\/index$/, '/index')}`;
}

function displayNamespace(namespaceName) {
  return namespaceName === '(global)' ? 'Global namespace' : namespaceName;
}

function memberGroupTitle(kind) {
  const labels = {
    constructor: 'Constructors',
    property: 'Properties',
    method: 'Methods',
    event: 'Events',
  };
  return labels[kind] ?? `${kind[0].toUpperCase()}${kind.slice(1)}s`;
}

function parseRecordParameters(typeName, paramsText, source, summary) {
  if (!paramsText?.trim()) return [];
  return paramsText
    .split(',')
    .map((part) => part.trim())
    .map((part) => {
      const match = part.match(/^(?:\[[^\]]+\]\s*)*(.+?)\s+([A-Za-z_]\w*)$/);
      if (!match) return null;
      return {
        kind: 'property',
        access: 'public',
        name: match[2],
        signature: `${match[1]} ${match[2]}`,
        summary: summary ? `Record parameter on ${typeName}.` : '',
        source,
      };
    })
    .filter(Boolean);
}

function parseCSharpApi(repoPath) {
  const files = walk(
    repoPath,
    (f) =>
      path.extname(f).toLowerCase() === '.cs' &&
      !/([/\\])(bin|obj|node_modules|Migrations)([/\\])/.test(f) &&
      !/(AssemblyInfo|GlobalUsings|\.Designer)\.cs$/i.test(path.basename(f)),
  );

  const types = [];

  for (const file of files) {
    const relative = path.relative(repoPath, file);
    const lines = safeRead(file).replace(/^\uFEFF/, '').split(/\r?\n/);
    let namespaceName = '(global)';
    let currentType = null;
    let pendingDocs = [];

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (line.startsWith('///')) {
        pendingDocs.push(line.replace(/^\/\/\/\s?/, ''));
        continue;
      }

      if (!line || line.startsWith('//') || line.startsWith('[')) continue;

      const namespaceMatch = line.match(/^namespace\s+([A-Za-z_][\w.]+)/);
      if (namespaceMatch) {
        namespaceName = namespaceMatch[1];
        pendingDocs = [];
        continue;
      }

      const typeMatch = line.match(
        /^(public|internal|protected|private)?\s*(?:(?:static|abstract|sealed|partial|readonly|unsafe|new)\s+)*(class|interface|record|struct|enum)\s+([A-Za-z_]\w*(?:<[^>{};()]+>)?)(?:\s*\(([^;{]*)\))?/,
      );
      if (typeMatch) {
        const summary = cleanXmlDoc(pendingDocs);
        const type = {
          namespace: namespaceName,
          access: typeMatch[1] ?? 'internal',
          kind: typeMatch[2],
          name: typeMatch[3],
          summary,
          source: relative,
          members: [],
        };
        if (type.kind === 'record') {
          type.members.push(...parseRecordParameters(type.name, typeMatch[4], relative, summary));
        }
        types.push(type);
        currentType = type;
        pendingDocs = [];
        continue;
      }

      if (!currentType) {
        pendingDocs = [];
        continue;
      }

      const accessPrefix = /^(public|protected|internal|private)\s+/;
      if (!accessPrefix.test(line)) {
        if (!line.startsWith('{') && !line.startsWith('}')) pendingDocs = [];
        continue;
      }

      const constructorPattern = new RegExp(`^(public|protected|internal|private)\\s+${currentType.name.replace(/<.*$/, '')}\\s*\\(([^)]*)\\)`);
      const constructorMatch = line.match(constructorPattern);
      if (constructorMatch) {
        currentType.members.push({
          kind: 'constructor',
          access: constructorMatch[1],
          name: currentType.name.replace(/<.*$/, ''),
          signature: normalizeSignature(`${currentType.name.replace(/<.*$/, '')}(${constructorMatch[2]})`),
          summary: cleanXmlDoc(pendingDocs),
          source: relative,
        });
        pendingDocs = [];
        continue;
      }

      const eventMatch = line.match(
        /^(public|protected|internal|private)\s+(?:(?:static|virtual|override|abstract|sealed|new)\s+)*event\s+(.+?)\s+([A-Za-z_]\w*)\s*(?:;|\{|=>)/,
      );
      if (eventMatch) {
        currentType.members.push({
          kind: 'event',
          access: eventMatch[1],
          name: eventMatch[3],
          signature: normalizeSignature(`event ${eventMatch[2]} ${eventMatch[3]}`),
          summary: cleanXmlDoc(pendingDocs),
          source: relative,
        });
        pendingDocs = [];
        continue;
      }

      const methodMatch = line.match(
        /^(public|protected|internal|private)\s+(?:(?:static|async|virtual|override|abstract|sealed|partial|extern|new|unsafe)\s+)*(.+?)\s+([A-Za-z_]\w*)\s*(<[^>]+>)?\s*\(([^)]*)\)/,
      );
      if (
        methodMatch &&
        !['if', 'for', 'foreach', 'while', 'switch', 'catch', 'using', 'new'].includes(methodMatch[3]) &&
        !/[=<>]/.test(methodMatch[2].replace(/<[^>]+>/g, ''))
      ) {
        currentType.members.push({
          kind: 'method',
          access: methodMatch[1],
          name: methodMatch[3],
          signature: normalizeSignature(`${methodMatch[2]} ${methodMatch[3]}${methodMatch[4] ?? ''}(${methodMatch[5]})`),
          summary: cleanXmlDoc(pendingDocs),
          source: relative,
        });
        pendingDocs = [];
        continue;
      }

      const propertyMatch = line.match(
        /^(public|protected|internal|private)\s+(?:(?:static|virtual|override|abstract|sealed|new|readonly|required)\s+)*(.+?)\s+([A-Za-z_]\w*)\s*(?:\{|=>)/,
      );
      if (propertyMatch && !propertyMatch[2].includes('(')) {
        currentType.members.push({
          kind: 'property',
          access: propertyMatch[1],
          name: propertyMatch[3],
          signature: normalizeSignature(`${propertyMatch[2]} ${propertyMatch[3]}`),
          summary: cleanXmlDoc(pendingDocs),
          source: relative,
        });
        pendingDocs = [];
        continue;
      }

      pendingDocs = [];
    }
  }

  const publicTypes = types.filter((type) => type.access !== 'private');
  for (const type of publicTypes) {
    type.members = type.members.filter((member) => member.access !== 'private');
  }
  const memberCount = publicTypes.reduce((sum, type) => sum + type.members.length, 0);
  const namespaces = [...new Set(publicTypes.map((type) => type.namespace))].sort();
  return {files: files.length, namespaces, types: publicTypes, memberCount};
}

function writeCSharpApi(lines, api) {
  lines.push(
    '## .NET API',
    '',
    `Detected ${api.types.length} C# types and ${api.memberCount} members across ${api.namespaces.length} namespaces.`,
    '',
  );

  if (api.types.length === 0) {
    lines.push('No C# API surface was detected from the checked-out source.', '');
    return;
  }

  for (const namespaceName of api.namespaces) {
    lines.push(`### ${mdCode(namespaceName)}`, '');
    for (const type of api.types.filter((item) => item.namespace === namespaceName).sort((a, b) => a.name.localeCompare(b.name))) {
      lines.push(`#### ${mdCode(type.name)}`, '', `_${type.access} ${type.kind}_`, '', `Source: ${mdCode(type.source)}`, '');
      if (type.summary) lines.push(escapeMdxText(type.summary), '');
      if (type.members.length) {
        lines.push('Members:', '');
        for (const member of type.members.sort((a, b) => `${a.kind}:${a.name}`.localeCompare(`${b.kind}:${b.name}`))) {
          const summary = member.summary ? ` — ${escapeMdxText(member.summary)}` : '';
          lines.push(`- ${mdCode(member.signature)} _${member.kind}_${summary}`);
        }
        lines.push('');
      }
    }
  }
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
  if (!enableDocfx || !repo.dotnet?.length || !commandExists('docfx')) return null;

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

function writeTypePage(repo, apiDir, namespaceSlug, typeSlug, type) {
  const lines = [
    `# ${escapeMdxText(type.name)}`,
    '',
    `_${escapeMdxText(`${type.access} ${type.kind}`)}_`,
    '',
    `Namespace: ${mdCode(type.namespace)}`,
    '',
    `Source: ${mdCode(type.source)}`,
    '',
  ];

  if (type.summary) lines.push('## Summary', '', escapeMdxText(type.summary), '');

  const order = ['constructor', 'property', 'method', 'event'];
  const kinds = [...new Set([...order, ...type.members.map((member) => member.kind)])];
  for (const kind of kinds) {
    const members = type.members
      .filter((member) => member.kind === kind)
      .sort((a, b) => `${a.name}:${a.signature}`.localeCompare(`${b.name}:${b.signature}`));
    if (!members.length) continue;

    lines.push(`## ${memberGroupTitle(kind)}`, '');
    for (const member of members) {
      lines.push(`### ${escapeMdxText(member.name)}`, '', `_${escapeMdxText(member.kind)}_`, '', '```csharp', member.signature, '```', '');
      if (member.summary) lines.push(escapeMdxText(member.summary), '');
    }
  }

  if (!type.members.length) lines.push('No public members were detected for this type.', '');
  writeMarkdown(path.join(apiDir, namespaceSlug, `${typeSlug}.md`), type.name, lines);
}

function writeNamespacePage(repo, apiDir, namespaceName, namespaceSlug, types, typeSlugs) {
  const lines = [
    `# ${escapeMdxText(displayNamespace(namespaceName))}`,
    '',
    `This namespace contains ${types.length} public API ${types.length === 1 ? 'type' : 'types'}.`,
    '',
    '## Types',
    '',
    ...types
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((type) => {
        const summary = type.summary ? ` - ${escapeMdxText(type.summary)}` : '';
        return `- [${escapeMdxText(type.name)}](./${typeSlugs.get(type)}.md) _${escapeMdxText(type.kind)}_${summary}`;
      }),
  ];

  writeMarkdown(path.join(apiDir, namespaceSlug, 'index.md'), displayNamespace(namespaceName), lines);
}

function writeCSharpPages(repo, apiDir, api) {
  if (!api || !api.types.length) return [];

  const namespaceSlugs = makeSlugMap(api.namespaces, (namespaceName) => (namespaceName === '(global)' ? 'global' : namespaceName));
  const sidebarItems = [];

  for (const namespaceName of api.namespaces) {
    const namespaceSlug = namespaceSlugs.get(namespaceName);
    const types = api.types.filter((type) => type.namespace === namespaceName);
    const typeSlugs = makeSlugMap(types, (type) => type.name);

    writeNamespacePage(repo, apiDir, namespaceName, namespaceSlug, types, typeSlugs);

    const typeItems = types
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((type) => sidebarDoc(repo, `${namespaceSlug}/${typeSlugs.get(type)}.md`));

    for (const type of types) writeTypePage(repo, apiDir, namespaceSlug, typeSlugs.get(type), type);

    sidebarItems.push({
      type: 'category',
      label: displayNamespace(namespaceName),
      link: {type: 'doc', id: sidebarDoc(repo, `${namespaceSlug}/index.md`)},
      collapsed: true,
      items: typeItems,
    });
  }

  return sidebarItems;
}

function writeProtoPages(repo, apiDir, protoSummaries) {
  if (!protoSummaries.length) return [];

  const dir = path.join(apiDir, 'grpc-contracts');
  const items = [];

  for (const proto of protoSummaries) {
    const slug = uniqueSlug(path.basename(proto.path, path.extname(proto.path)), new Set(items.map((item) => item.slug)));
    const rel = `grpc-contracts/${slug}.md`;
    const lines = [
      `# ${escapeMdxText(path.basename(proto.path))}`,
      '',
      `Source: ${mdCode(proto.path)}`,
      '',
      '## Services',
      '',
      ...(proto.services.length ? proto.services.map((service) => `- ${mdCode(service)}`) : ['No services were detected.']),
      '',
      '## Messages',
      '',
      ...(proto.messages.length ? proto.messages.map((message) => `- ${mdCode(message)}`) : ['No messages were detected.']),
    ];
    writeMarkdown(path.join(dir, `${slug}.md`), path.basename(proto.path), lines);
    items.push({slug, doc: sidebarDoc(repo, rel)});
  }

  return [
    {
      type: 'category',
      label: 'gRPC Contracts',
      collapsed: true,
      items: items.map((item) => item.doc),
    },
  ];
}

function writePlcPages(repo, apiDir, plc) {
  if (!plc) return [];

  const lines = [
    '# TwinCAT PLC Assets',
    '',
    `Detected ${plc.count} TwinCAT PLC files in the source repository.`,
    '',
    '## File Types',
    '',
    ...Object.entries(plc.byType)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([type, count]) => `- ${mdCode(type)}: ${count}`),
  ];

  writeMarkdown(path.join(apiDir, 'twincat-plc-assets.md'), 'TwinCAT PLC Assets', lines);
  return [sidebarDoc(repo, 'twincat-plc-assets.md')];
}

function propertyEntries(properties) {
  if (Array.isArray(properties)) {
    return properties
      .map((property) => {
        if (typeof property === 'string') return {name: property, description: ''};
        const name = property.name ?? property.propertyName ?? property.id ?? property.displayName;
        const description = property.description ?? property.summary ?? property.displayName ?? '';
        return name ? {name: String(name), description: String(description)} : null;
      })
      .filter(Boolean);
  }

  if (properties && typeof properties === 'object') {
    return Object.entries(properties).map(([name, value]) => {
      const description =
        value && typeof value === 'object'
          ? (value.description ?? value.summary ?? value.displayName ?? value.type ?? '')
          : String(value ?? '');
      return {name, description: String(description)};
    });
  }

  return [];
}

function writeHmiControlPage(repo, apiDir, namespaceSlug, controlSlug, control) {
  const properties = propertyEntries(control.properties);
  const lines = [
    `# ${escapeMdxText(control.name)}`,
    '',
    '_TwinCAT HMI control_',
    '',
    `Package: ${mdCode(control.namespace)}`,
    '',
    `Category: ${mdCode(control.category)}`,
    '',
    `Source: ${mdCode(control.source)}`,
    '',
  ];

  if (control.summary) lines.push('## Summary', '', escapeMdxText(control.summary), '');

  lines.push('## Properties', '');
  if (properties.length) {
    for (const property of properties.sort((a, b) => a.name.localeCompare(b.name))) {
      const description = property.description ? ` - ${escapeMdxText(property.description)}` : '';
      lines.push(`- ${mdCode(property.name)}${description}`);
    }
  } else {
    lines.push('No public control properties were detected from the description file.');
  }

  writeMarkdown(path.join(apiDir, namespaceSlug, `${controlSlug}.md`), control.name, lines);
}

function writeHmiPages(repo, apiDir, controls) {
  if (!controls.length) return [];

  const namespaces = [...new Set(controls.map((control) => control.namespace))].sort();
  const namespaceSlugs = makeSlugMap(namespaces, (namespaceName) => namespaceName);
  const sidebarItems = [];

  for (const namespaceName of namespaces) {
    const namespaceSlug = namespaceSlugs.get(namespaceName);
    const namespaceControls = controls.filter((control) => control.namespace === namespaceName);
    const controlSlugs = makeSlugMap(namespaceControls, (control) => control.name);

    const namespaceLines = [
      `# ${escapeMdxText(namespaceName)}`,
      '',
      `This package contains ${namespaceControls.length} TwinCAT HMI ${namespaceControls.length === 1 ? 'control' : 'controls'}.`,
      '',
      '## Controls',
      '',
      ...namespaceControls
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((control) => {
          const summary = control.summary ? ` - ${escapeMdxText(control.summary)}` : '';
          return `- [${escapeMdxText(control.name)}](./${controlSlugs.get(control)}.md)${summary}`;
        }),
    ];
    writeMarkdown(path.join(apiDir, namespaceSlug, 'index.md'), namespaceName, namespaceLines);

    for (const control of namespaceControls) writeHmiControlPage(repo, apiDir, namespaceSlug, controlSlugs.get(control), control);

    sidebarItems.push({
      type: 'category',
      label: namespaceName,
      link: {type: 'doc', id: sidebarDoc(repo, `${namespaceSlug}/index.md`)},
      collapsed: true,
      items: namespaceControls
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((control) => sidebarDoc(repo, `${namespaceSlug}/${controlSlugs.get(control)}.md`)),
    });
  }

  return sidebarItems;
}

function writeRepoApi(repo) {
  const repoPath = path.join(sourceRoot, repo.name);
  const present = existsSync(repoPath);
  const docfxUrl = present ? runDocfx(repo, repoPath) : null;
  const csharpApi = present && repo.dotnet?.length ? parseCSharpApi(repoPath) : null;
  const protoSummaries = present
    ? (repo.proto ?? [])
        .filter((p) => existsSync(path.join(repoPath, p)))
        .map((p) => ({path: p, ...parseProto(path.join(repoPath, p))}))
    : [];
  const plc = present && repo.plc ? summarizePlc(repoPath) : null;
  const hmiControls = present && repo.hmi ? parseHmiControls(repoPath) : [];
  const apiDir = path.join(docsLibrariesDir, repo.name, 'api');

  rmSync(apiDir, {recursive: true, force: true});
  mkdirSync(apiDir, {recursive: true});

  const sidebarItems = [
    ...writeCSharpPages(repo, apiDir, csharpApi),
    ...writeHmiPages(repo, apiDir, hmiControls),
    ...writeProtoPages(repo, apiDir, protoSummaries),
    ...writePlcPages(repo, apiDir, plc),
  ];

  const lines = [
    `# ${repo.title} API Reference`,
    '',
    `Source repository: \`TechIndustryX/${repo.name}\``,
    '',
  ];

  if (!present) {
    lines.push('> Source checkout not found. The CI workflow checks out this repository before building the site.', '');
  }

  if (csharpApi?.types.length) {
    lines.push(
      '## .NET API',
      '',
      `Detected ${csharpApi.types.length} public C# types and ${csharpApi.memberCount} members across ${csharpApi.namespaces.length} namespaces.`,
      '',
      '## Namespaces',
      '',
      ...csharpApi.namespaces.map((namespaceName) => {
        const namespaceSlug = slugify(namespaceName === '(global)' ? 'global' : namespaceName);
        return `- [${escapeMdxText(displayNamespace(namespaceName))}](./${namespaceSlug}/index.md)`;
      }),
      '',
    );
    if (docfxUrl) {
      lines.push('Additional DocFX output:', '', `- [Open rendered .NET API reference](${docfxUrl})`, '');
    }
  } else if (repo.dotnet?.length) {
    lines.push('## .NET API', '', 'No public C# API surface was detected from the checked-out source.', '');
  }

  if (protoSummaries.length) {
    lines.push('## gRPC Contracts', '');
    for (const proto of protoSummaries) {
      const slug = slugify(path.basename(proto.path, path.extname(proto.path)));
      lines.push(`- [${escapeMdxText(path.basename(proto.path))}](./grpc-contracts/${slug}.md)`);
    }
    lines.push('');
  }

  if (plc) {
    lines.push('## TwinCAT PLC Assets', '', `Detected ${plc.count} PLC files.`, '', '- [TwinCAT PLC Assets](./twincat-plc-assets.md)', '');
  }

  if (hmiControls.length) {
    lines.push(
      '## TwinCAT HMI Controls',
      '',
      `Detected ${hmiControls.length} controls across ${new Set(hmiControls.map((control) => control.namespace)).size} packages.`,
      '',
      ...[...new Set(hmiControls.map((control) => control.namespace))]
        .sort()
        .map((namespaceName) => `- [${escapeMdxText(namespaceName)}](./${slugify(namespaceName)}/index.md)`),
      '',
    );
  }

  if (!sidebarItems.length) {
    lines.push('No API artifacts were detected from the checked-out source.', '');
  }

  writeMarkdown(path.join(apiDir, 'index.md'), `${repo.title} API Reference`, lines);
  return sidebarItems;
}

rmSync(generatedDir, {recursive: true, force: true});
rmSync(legacyDocsApiDir, {recursive: true, force: true});
mkdirSync(staticApiDir, {recursive: true});

const apiSidebars = {};
for (const repo of repos) apiSidebars[repo.name] = writeRepoApi(repo);

writeFileSync(
  apiSidebarPath,
  [
    `export const apiSidebars: Record<string, any[]> = ${JSON.stringify(apiSidebars, null, 2)};`,
    '',
  ].join('\n'),
);

console.log(`Wrote API reference pages from ${sourceRoot}`);

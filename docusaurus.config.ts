import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TechIndustry Docs',
  tagline: 'Documentation, guides, examples and API references for TechIndustry projects.',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: 'https://techindustryx.github.io',
  baseUrl: '/docs/',
  organizationName: 'TechIndustryX',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        language: ['en'],
        docsRouteBasePath: '/',
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/TechIndustryX/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'TechIndustry',
      logo: {
        alt: 'TechIndustry',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs'},
        {to: '/getting-started/overview', label: 'Getting Started', position: 'left'},
        {to: '/libraries/overview', label: 'Libraries', position: 'left'},
        {href: 'https://github.com/TechIndustryX', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Getting Started', to: '/getting-started/overview'},
            {label: 'Libraries', to: '/libraries/overview'},
          ],
        },
        {
          title: 'Operations',
          items: [
            {label: 'Packages', to: '/getting-started/packages'},
            {label: 'Containers', to: '/getting-started/containers'},
            {label: 'Release Process', to: '/guides/release-process'},
          ],
        },
        {
          title: 'Code',
          items: [
            {label: 'GitHub Organization', href: 'https://github.com/TechIndustryX'},
            {label: 'Docs Repository', href: 'https://github.com/TechIndustryX/docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TechIndustry.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['csharp', 'powershell', 'json', 'yaml', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

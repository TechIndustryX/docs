import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const libraryItems = (id: string) => [
  `libraries/${id}/overview`,
  `libraries/${id}/quickstart`,
  `libraries/${id}/examples`,
  `libraries/${id}/guides`,
  `libraries/${id}/reference`,
];

const referenceApiItems = [
  'references/api/hsds-dotnet',
  'references/api/industria4-platform',
  'references/api/opcua-bridge',
  'references/api/simatic-wincc-chromium',
  'references/api/twincat-analytics-collector',
  'references/api/twincat-data-streaming',
  'references/api/twincat-hmi-ui-controls',
  'references/api/twincat-rpc',
];

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'doc', id: 'getting-started/overview'},
      items: [
        'getting-started/installation',
        'getting-started/packages',
        'getting-started/containers',
        'getting-started/runtime-environment',
      ],
    },
    {
      type: 'category',
      label: 'HSDS .NET',
      items: libraryItems('hsds-dotnet'),
    },
    {
      type: 'category',
      label: 'Industria4 Platform',
      items: libraryItems('industria4-platform'),
    },
    {
      type: 'category',
      label: 'OPC UA Bridge',
      items: libraryItems('opcua-bridge'),
    },
    {
      type: 'category',
      label: 'SIMATIC WinCC Chromium',
      items: libraryItems('simatic-wincc-chromium'),
    },
    {
      type: 'category',
      label: 'TwinCAT Analytics Collector',
      items: libraryItems('twincat-analytics-collector'),
    },
    {
      type: 'category',
      label: 'TwinCAT Data Streaming',
      items: libraryItems('twincat-data-streaming'),
    },
    {
      type: 'category',
      label: 'TwinCAT HMI UI Controls',
      items: libraryItems('twincat-hmi-ui-controls'),
    },
    {
      type: 'category',
      label: 'TwinCAT RPC',
      items: libraryItems('twincat-rpc'),
    },
    {
      type: 'category',
      label: 'References',
      link: {type: 'doc', id: 'references/overview'},
      items: [
        {
          type: 'category',
          label: 'API Reference',
          link: {type: 'doc', id: 'references/api/index'},
          items: referenceApiItems,
        },
        {
          type: 'category',
          label: 'Registries',
          items: ['references/packages', 'references/containers'],
        },
        {
          type: 'category',
          label: 'Project Index',
          items: ['references/repositories', 'references/naming-conventions', 'references/compatibility', 'references/glossary'],
        },
      ],
    },
  ],
};

export default sidebars;

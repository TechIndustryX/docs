import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {apiSidebars} from './api-sidebars';

type LibraryId = keyof typeof apiSidebars;

const libraryItems = (id: LibraryId) => [
  `libraries/${id}/overview`,
  `libraries/${id}/quickstart`,
  `libraries/${id}/examples`,
  `libraries/${id}/guides`,
  {
    type: 'category' as const,
    label: 'API Reference',
    link: {type: 'doc' as const, id: `libraries/${id}/api/index`},
    items: apiSidebars[id] ?? [],
  },
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

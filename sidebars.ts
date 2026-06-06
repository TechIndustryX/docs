import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {apiSidebars} from './api-sidebars';

type LibraryId =
  | 'hsds-dotnet'
  | 'industria4-platform'
  | 'opcua-bridge'
  | 'simatic-wincc-chromium'
  | 'twincat-analytics-collector'
  | 'twincat-data-streaming'
  | 'twincat-hmi-ui-controls'
  | 'twincat-rpc';

const libraryExamples = {
  'hsds-dotnet': [
    'domain-and-client',
    'groups-and-attributes',
    'datasets-and-chunks',
    'worker-service',
  ],
  'industria4-platform': [
    'local-composition',
    'module-hosting',
    'backend-module',
    'frontend-module',
    'module-definition',
    'dependency-injection',
    'section-provider',
    'webforms-controls',
    'command-messaging',
    'standardized-api-odata',
    'identity-users-roles',
    'cqrs-command-flow',
    'recipes-and-mes',
    'opcua-data-logger',
    'production-composition',
  ],
  'opcua-bridge': [
    'run-server',
    'echo-plugin',
    'dynamic-namespace',
    'node-read-write',
    'write-and-method-interception',
    'edge-container',
  ],
  'simatic-wincc-chromium': [
    'embed-webview',
    'runtime-context',
    'rdp-client',
    'test-host',
  ],
  'twincat-analytics-collector': [
    'mqtt-collector',
    'decode-and-store',
    'parquet-storage',
    'hsds-storage',
    'historical-download-cleanup',
  ],
  'twincat-data-streaming': [
    'twincat-symbol-reader',
    'mqtt-forwarder',
    'azure-functions-ingestion',
    'log-analytics-query',
    'realtime-dashboard',
    'simulator-to-cloud',
  ],
  'twincat-hmi-ui-controls': [
    'basic-controls',
    'gauge-zones',
    'live-svg',
    'slide-panel',
    'custom-function',
  ],
  'twincat-rpc': [
    'register-host',
    'invoke-notifications',
    'request-reply',
    'typed-payloads',
    'tester-workflow',
    'router-service',
  ],
} satisfies Record<LibraryId, string[]>;

const libraryItems = (id: LibraryId) => [
  `libraries/${id}/overview`,
  `libraries/${id}/quickstart`,
  {
    type: 'category' as const,
    label: 'Examples',
    link: {type: 'doc' as const, id: `libraries/${id}/examples/index`},
    items: libraryExamples[id].map((example) => `libraries/${id}/examples/${example}`),
  },
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
  ],
};

export default sidebars;

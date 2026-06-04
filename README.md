# TechIndustry Docs

Docusaurus documentation portal for TechIndustry projects, guides, examples and API references.

## Local Development

```bash
npm ci
npm run references:generate
npm start
```

## Build

```bash
npm run build:with-references
```

## API Reference

The API builder reads source repositories from `SOURCE_ROOT` and writes API pages under `docs/libraries/<project>/api`.

```bash
SOURCE_ROOT=../ npm run references:generate
```

When `docfx` is installed, the API builder also produces static .NET API output under `static/api/dotnet/<repo>`. Protobuf, TwinCAT PLC and TwinCAT HMI inventories are extracted directly from source files.

## GitHub Pages

`.github/workflows/pages.yml` checks out the source repositories, refreshes API pages, builds Docusaurus and deploys to GitHub Pages.

For private repositories, configure `DOCS_READ_TOKEN` with read access to the `TechIndustry` organization.

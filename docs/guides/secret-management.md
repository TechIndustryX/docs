---
title: Secret Management
---

# Secret Management

Use GitHub Actions secrets for tokens and registry credentials. Do not commit deployment profiles, personal tokens, connection strings or private keys.

Recommended secrets for the docs portal:

- `DOCS_READ_TOKEN`: read access to private source repositories.

Most package/container workflows can use the repository `GITHUB_TOKEN` when package permissions are configured correctly in GitHub.

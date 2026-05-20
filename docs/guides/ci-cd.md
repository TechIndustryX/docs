---
title: CI/CD
---

# CI/CD

CI/CD is implemented with GitHub Actions. Azure Pipeline definitions have been removed from migrated repositories.

The common workflow pattern is:

- pull requests run build/validation only;
- pushes to `main` publish packages, containers or releases;
- references are refreshed in the `docs` repository before deployment.

---
title: Packages
---

# Packages

NuGet packages are published to GitHub Packages under the `TechIndustryX` GitHub organization. The product and package namespace remains `TechIndustry`.

```bash
dotnet nuget add source https://nuget.pkg.github.com/TechIndustryX/index.json \
  --name techindustry \
  --username USERNAME \
  --password TOKEN \
  --store-password-in-clear-text
```

The token needs permission to read packages in the organization.

See [Packages Reference](../references/packages.md) for the package list.

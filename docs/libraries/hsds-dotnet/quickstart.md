---
title: Quickstart
---

# HSDS .NET Quickstart

Use `TechIndustry.Hsds` from a .NET application when you need to create or navigate HSDS domains, groups and datasets from application code.

## 1. Configure the package feed

Add the GitHub Packages NuGet feed to the consuming application:

```bash
dotnet nuget add source https://nuget.pkg.github.com/TechIndustryX/index.json \
  --name techindustry \
  --username YOUR_GITHUB_USERNAME \
  --password YOUR_GITHUB_TOKEN \
  --store-password-in-clear-text
```

Then add the package:

```bash
dotnet add package TechIndustry.Hsds
```

## 2. Connect to HSDS

Create the client with the HSDS endpoint, domain and user credentials:

```csharp
using TechIndustry.Hsds;

var httpClient = new HttpClient
{
    BaseAddress = new Uri("https://hsds.example.com/")
};

var hsds = new SimpleHsdsClient(httpClient)
{
    Domain = "/production/line-a.h5",
    Username = "hsds-user",
    Password = "hsds-password"
};

await hsds.EnsureDomainAsync();
var groupId = await hsds.EnsureGroupAsync("/machines/press-01");
```

## 3. Validate the first operation

Use a dedicated test domain first, then verify in HSDS that the domain and group were created. Keep credentials outside source control by loading them from environment variables, Key Vault, GitHub Actions secrets or your platform secret manager.

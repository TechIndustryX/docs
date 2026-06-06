---
title: Groups and Attributes
---

# Groups and Attributes

## Scenario

Create a predictable HSDS hierarchy for a machine or production line and attach metadata that other services can discover later.

## Target Structure

```text
/FactoryA
  /Line01
    /Press01
      attributes:
        assetId = "press-01"
        area = "forming"
        samplingPeriodMs = 1000
```

## Complete Example

```csharp title="CreateAssetTree.cs"
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TechIndustry.Hsds;

var builder = Host.CreateApplicationBuilder(args);
builder.Services.AddHsdsClient(new Uri(builder.Configuration["Hsds:Endpoint"]!));

using var host = builder.Build();
var hsds = host.Services.GetRequiredService<SimpleHsdsClient>();
hsds.Username = builder.Configuration["Hsds:Username"];
hsds.Password = builder.Configuration["Hsds:Password"];
hsds.Domain = builder.Configuration["Hsds:Domain"];

await hsds.EnsureDomainAsync();

var groupId = await hsds.EnsureGroupAsync("FactoryA/Line01/Press01");

await hsds.SetGroupAttributeAsync(groupId, "assetId", "press-01");
await hsds.SetGroupAttributeAsync(groupId, "area", "forming");
await hsds.SetGroupAttributeAsync(groupId, "samplingPeriodMs", 1000);

var attributes = await hsds.GetGroupAttributesAsync(groupId);
foreach (var attribute in attributes)
{
    Console.WriteLine($"{attribute.Name}: {attribute.Value}");
}
```

## Step By Step

1. Ensure the HSDS domain exists.
2. Create the full path with `EnsureGroupAsync("FactoryA/Line01/Press01")`.
3. Store stable identifiers as attributes, not only as path segments.
4. Store operational metadata such as area, line, unit or sampling period.
5. Read back attributes immediately in setup scripts to fail fast on permission errors.

## Validation

Use `GetLinksAsync()` on the root or parent group to confirm the hierarchy:

```csharp
var rootLinks = await hsds.GetLinksAsync();
foreach (var link in rootLinks)
{
    Console.WriteLine($"{link.Title} -> {link.Id}");
}
```

## Practical Advice

- Use group paths for navigation and attributes for machine-readable metadata.
- Keep path segments stable; changing them later affects consumers that store dataset paths.
- Avoid storing secrets in attributes. Attributes are metadata and should be safe to inspect.

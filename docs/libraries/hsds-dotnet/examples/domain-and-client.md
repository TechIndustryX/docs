---
title: Domain and Client
---

# Domain and Client

## Scenario

Create a .NET application that connects to an HSDS server, authenticates and works inside a single HDF5 domain. This is the first step before creating groups or datasets.

## Prerequisites

- HSDS endpoint reachable from the application host.
- HSDS user with access to the target domain.
- NuGet package `TechIndustry.Hsds`.

Keep endpoint, user and password in configuration. Do not hard-code real credentials in source control.

## Configuration

```json title="appsettings.json"
{
  "Hsds": {
    "Endpoint": "https://hsds.example.local/",
    "Username": "hsds-user",
    "Password": "<set from secret store>",
    "Domain": "/home/line-a.h5"
  }
}
```

## Complete Example

```csharp title="Program.cs"
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TechIndustry.Hsds;

var builder = Host.CreateApplicationBuilder(args);

var endpoint = builder.Configuration.GetRequiredSection("Hsds").GetValue<Uri>("Endpoint");
builder.Services.AddHsdsClient(endpoint);

using var host = builder.Build();

var hsds = host.Services.GetRequiredService<SimpleHsdsClient>();
hsds.Username = builder.Configuration["Hsds:Username"];
hsds.Password = builder.Configuration["Hsds:Password"];
hsds.Domain = builder.Configuration["Hsds:Domain"];

var domains = await hsds.GetDomainsAsync("/home/");
foreach (var domain in domains.Domains)
{
    Console.WriteLine($"{domain.Name} created {domain.Created.ToDateTimeOffset()}");
}

await hsds.EnsureDomainAsync();
Console.WriteLine($"Ready: {hsds.Domain}");
```

## Step By Step

1. Add the package to your application.
2. Register the client with `AddHsdsClient(endpoint)`.
3. Resolve `SimpleHsdsClient` from dependency injection.
4. Assign `Username`, `Password` and `Domain`.
5. Call `GetDomainsAsync()` to verify that authentication works.
6. Call `EnsureDomainAsync()` before creating content in the domain.

## Validation

Run the application and confirm that:

- The `/home/` domain list is printed.
- No authentication exception is thrown.
- The configured domain exists after `EnsureDomainAsync()`.

## Common Variants

- Use one domain per production line, for example `/home/line-a.h5`.
- Use one domain per tenant or plant when data must be separated operationally.
- Resolve `SimpleHsdsClient` in scoped services when multiple flows use different domains.

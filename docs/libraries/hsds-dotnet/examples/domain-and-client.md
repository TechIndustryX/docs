---
title: Domain and Client
---

# Domain and Client

## Scenario

Use `TechIndustry.Hsds` from a .NET application that needs to connect to an HSDS server, authenticate, and operate inside one domain.

## Source Pattern

This follows the support console pattern in `src/TechIndustry.Hsds.Console/Program.cs`: register the HSDS client, resolve `SimpleHsdsClient`, set credentials and assign `Domain`.

## Steps

1. Register the client in dependency injection with the HSDS base URI.
2. Resolve `SimpleHsdsClient` from the service provider.
3. Set `Username`, `Password` and `Domain`.
4. Call `GetDomainsAsync()` to verify access.
5. Call `EnsureDomainAsync()` before writing data.

## Example

```csharp
var builder = new HostApplicationBuilder();
builder.Services.AddHsdsClient(new Uri("https://hsds.example.local/"));

var host = builder.Build();
var hsds = host.Services.GetRequiredService<SimpleHsdsClient>();

hsds.Username = configuration["Hsds:Username"];
hsds.Password = configuration["Hsds:Password"];
hsds.Domain = "/home/line-a.h5";

await hsds.EnsureDomainAsync();
```

## Expected Result

The application has a configured high-level HSDS client and can perform operations against the selected domain without manually constructing low-level REST client calls.

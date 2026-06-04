---
title: "ApplicationBuilderExtensions"
---

# ApplicationBuilderExtensions

_public class_

Namespace: `Microsoft.AspNetCore.Builder`

Source: `src/Shared/Web/ApplicationBuilderExtensions.cs`

## Summary

Extensions for

## Methods

### UseAlternativeStaticFiles

_method_

```csharp
IApplicationBuilder UseAlternativeStaticFiles(this IApplicationBuilder app)
```

Support loading wwwroot folder from %programdata%\industria4\wwwroot folder

### UseHttpProxy

_method_

```csharp
IApplicationBuilder UseHttpProxy(this IApplicationBuilder app)
```

Registers the in the pipeline so that requests bearing an `x-proxy-host` header are forwarded. The application builder. The same for chaining.

### UseRequestLocalizationWithAllCultures

_method_

```csharp
IApplicationBuilder UseRequestLocalizationWithAllCultures(this IApplicationBuilder app)
```

Adds the localization middleware and supports all available cultures, with en-US as default culture https://msdn.microsoft.com/en-us/library/ee825488%28v=cs.20%29.aspx?


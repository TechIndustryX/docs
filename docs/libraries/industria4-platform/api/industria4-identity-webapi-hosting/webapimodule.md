---
title: "WebApiModule"
---

# WebApiModule

_public class_

Namespace: `Industria4.Identity.WebApi.Hosting`

Source: `src/Identity/Identity.WebApi.Hosting/WebApiModule.cs`

## Summary

Process module that manages the Identity Web API executable as a hosted sub-process.

## Constructors

### WebApiModule

_constructor_

```csharp
WebApiModule(ILogger<WebApiModule> logger,IConfiguration configuration)
```

Initializes a new instance of . The logger instance. The application configuration.

## Properties

### Environment

_property_

```csharp
IDictionary<string,string> Environment
```

### Name

_property_

```csharp
string Name
```

### ProcessNameExe

_property_

```csharp
string ProcessNameExe
```

### WorkingDir

_property_

```csharp
string WorkingDir
```


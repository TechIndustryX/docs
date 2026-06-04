---
title: "WebApiModule"
---

# WebApiModule

_public class_

Namespace: `Industria4.Production.WebApi.Hosting`

Source: `src/Production/Production.WebApi.Hosting/WebApiModule.cs`

## Summary

Process module that manages the Production WebApi executable as an out-of-process host.

## Constructors

### WebApiModule

_constructor_

```csharp
WebApiModule(ILogger<WebApiModule> logger,IConfiguration configuration)
```

Initializes a new . Logger for this module. Application configuration.

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


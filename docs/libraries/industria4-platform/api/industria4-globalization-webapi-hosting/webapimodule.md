---
title: "WebApiModule"
---

# WebApiModule

_public class_

Namespace: `Industria4.Globalization.WebApi.Hosting`

Source: `src/Globalization/Globalization.WebApi.Hosting/WebApiModule.cs`

## Summary

Process module that manages the Globalization Web API out-of-process host.

## Constructors

### WebApiModule

_constructor_

```csharp
WebApiModule(ILogger<WebApiModule> logger,IConfiguration configuration)
```

Initialises a new instance of with the specified logger and configuration. Logger for the module. Application configuration used to resolve environment variables.

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


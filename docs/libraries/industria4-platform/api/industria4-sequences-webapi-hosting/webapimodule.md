---
title: "WebApiModule"
---

# WebApiModule

_public class_

Namespace: `Industria4.Sequences.WebApi.Hosting`

Source: `src/Sequences/Sequences.WebApi.Hosting/WebApiModule.cs`

## Summary

Process module that launches and manages the Sequences Web API executable.

## Constructors

### WebApiModule

_constructor_

```csharp
WebApiModule(ILogger<WebApiModule> logger,IConfiguration configuration)
```

Initializes a new instance of . Logger for the module. The application configuration.

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


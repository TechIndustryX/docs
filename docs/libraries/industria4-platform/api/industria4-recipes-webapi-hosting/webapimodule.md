---
title: "WebApiModule"
---

# WebApiModule

_public class_

Namespace: `Industria4.Recipes.WebApi.Hosting`

Source: `src/Recipes/Recipes.WebApi.Hosting/WebApiModule.cs`

## Summary

Process module that manages the lifecycle of the Recipes Web API child process.

## Constructors

### WebApiModule

_constructor_

```csharp
WebApiModule(ILogger<WebApiModule> logger,IConfiguration configuration)
```

Initializes a new with the given logger and configuration. Logger used by the base . Application configuration used to resolve environment variables for the child process.

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


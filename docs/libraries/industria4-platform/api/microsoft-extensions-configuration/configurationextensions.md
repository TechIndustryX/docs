---
title: "ConfigurationExtensions"
---

# ConfigurationExtensions

_public class_

Namespace: `Microsoft.Extensions.Configuration`

Source: `src/Shared/Core/ConfigurationExtensions.cs`

## Summary

Extension methods for for converting configuration sections to environment-variable dictionaries.

## Methods

### GetEnvironmentVariables

_method_

```csharp
IDictionary<string,string> GetEnvironmentVariables(this IConfiguration configuration,string prefix)
```

Flattens a configuration section into a dictionary using environment-variable naming conventions (colons replaced by double-underscores). The configuration section to enumerate. The section prefix to strip from keys. A dictionary of environment-variable keys mapped to their values.

### GetEnvironmentVariablesFromSection

_method_

```csharp
IDictionary<string,string> GetEnvironmentVariablesFromSection(this IConfiguration configuration,string name)
```

Reads a named configuration section and returns its values as environment-variable name/value pairs. The configuration root. The section name to read. A dictionary of environment-variable keys mapped to their values.


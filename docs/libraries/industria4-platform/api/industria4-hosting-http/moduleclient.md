---
title: "ModuleClient"
---

# ModuleClient

_public class_

Namespace: `Industria4.Hosting.Http`

Source: `src/Hosting/Hosting.Http/ModuleClient.cs`

## Summary

HTTP client for managing packages via the module API endpoint.

## Constructors

### ModuleClient

_constructor_

```csharp
ModuleClient(RestClient restClient)
```

Initializes a new instance of with the provided REST client. The REST client used to send HTTP requests.

## Methods

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the package with the specified identifier from the server. The unique identifier of the package to delete. An optional cancellation token.

### GetAreReadyAsync

_method_

```csharp
Task<bool> GetAreReadyAsync(CancellationToken token = default)
```

Gets a value indicating whether all modules have finished loading. An optional cancellation token.

### GetAsync

_method_

```csharp
Task<Package> GetAsync(string id,CancellationToken token = default)
```

Gets detailed information about the package with the specified identifier. The unique identifier of the package to retrieve. An optional cancellation token.

### GetConfigurationsAsync

_method_

```csharp
Task<JToken> GetConfigurationsAsync(CancellationToken token = default)
```

Gets the merged JSON configuration for all installed packages. An optional cancellation token.

### RestartAsync

_method_

```csharp
Task RestartAsync(CancellationToken token = default)
```

Requests the server to restart the hosting application. An optional cancellation token.

### SetConfigurationAsync

_method_

```csharp
Task SetConfigurationAsync(string id,JToken configuration,CancellationToken token = default)
```

Updates the JSON configuration for the package with the specified identifier. The unique identifier of the package to configure. The new JSON configuration to apply. An optional cancellation token.


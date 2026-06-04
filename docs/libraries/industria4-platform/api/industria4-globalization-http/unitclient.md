---
title: "UnitClient"
---

# UnitClient

_public class_

Namespace: `Industria4.Globalization.Http`

Source: `src/Globalization/Globalization.Http/UnitClient.cs`

## Summary

HTTP client for querying units of measure via the Globalization REST API.

## Constructors

### UnitClient

_constructor_

```csharp
UnitClient(RestClient restClient,IOptions<HttpGlobalizationOptions> options)
```

Initializes a new . The underlying REST client. Options containing the service base URI.

## Methods

### GetAsync

_method_

```csharp
Task<Unit> GetAsync(string id,CancellationToken token = default)
```

Retrieves the full domain unit for the given identifier.


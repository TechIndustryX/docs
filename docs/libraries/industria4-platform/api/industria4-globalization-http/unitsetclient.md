---
title: "UnitsetClient"
---

# UnitsetClient

_public class_

Namespace: `Industria4.Globalization.Http`

Source: `src/Globalization/Globalization.Http/UnitsetClient.cs`

## Summary

HTTP client for querying unit-sets via the Globalization REST API.

## Constructors

### UnitsetClient

_constructor_

```csharp
UnitsetClient(RestClient restClient,IOptions<HttpGlobalizationOptions> options)
```

Initializes a new . The underlying REST client. Options containing the service base URI.

## Methods

### GetAsync

_method_

```csharp
Task<UnitSet> GetAsync(string id,CancellationToken token = default)
```

Retrieves the full domain unit-set for the given identifier.


---
title: "LicenseClient"
---

# LicenseClient

_public class_

Namespace: `Industria4.Hosting.Http`

Source: `src/Hosting/Hosting.Http/LicenseClient.cs`

## Summary

HTTP client for interacting with the license API endpoint.

## Constructors

### LicenseClient

_constructor_

```csharp
LicenseClient(RestClient restClient)
```

Initializes a new instance of with the provided REST client. The REST client used to send HTTP requests.

## Methods

### ActivateAsync

_method_

```csharp
Task<bool> ActivateAsync(string key,CancellationToken token = default)
```

Activates the license using the provided license key. The license key to activate. An optional cancellation token. if activation succeeded; otherwise .

### CancelAsync

_method_

```csharp
Task CancelAsync(CancellationToken token = default)
```

Cancels the current license on the server. An optional cancellation token.

### GetAsync

_method_

```csharp
Task<LicenseModel> GetAsync(CancellationToken token = default)
```

Gets the current license information from the server. An optional cancellation token.


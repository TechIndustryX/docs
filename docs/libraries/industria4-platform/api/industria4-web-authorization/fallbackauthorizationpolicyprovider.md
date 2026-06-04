---
title: "FallbackAuthorizationPolicyProvider"
---

# FallbackAuthorizationPolicyProvider

_public class_

Namespace: `Industria4.Web.Authorization`

Source: `src/Shared/Web.Core/Authorization/FallbackAuthorizationPolicyProvider.cs`

## Summary

Authorization policy provider that returns a configurable fallback policy when a named policy is not registered.

## Constructors

### FallbackAuthorizationPolicyProvider

_constructor_

```csharp
FallbackAuthorizationPolicyProvider(IOptions<AuthorizationOptions> options,IOptions<PolicyOptions> policyOptions)
```

Initializes a new instance, building the fallback policy from `policyOptions`. The ASP.NET Core authorization options. The application-level policy options that control the fallback behaviour.

## Methods

### GetPolicyAsync

_method_

```csharp
Task<AuthorizationPolicy> GetPolicyAsync(string policyName)
```

Returns the named policy if registered, otherwise returns the fallback policy. The name of the requested policy. The policy, or the fallback if no policy with `policyName` is found.


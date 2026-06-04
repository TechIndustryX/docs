---
title: "PolicyItemOptions"
---

# PolicyItemOptions

_public class_

Namespace: `Industria4.Web.Authorization`

Source: `src/Shared/Web.Core/Authorization/PolicyOptions.cs`

## Summary

Requirements for a single named authorization policy.

## Properties

### OnlyAuthenticated

_property_

```csharp
bool? OnlyAuthenticated
```

When set, overrides the flag for this specific policy.

### Roles

_property_

```csharp
string[] Roles
```

Gets or sets the roles allowed to satisfy this policy.


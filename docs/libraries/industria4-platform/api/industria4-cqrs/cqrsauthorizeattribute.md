---
title: "CqrsAuthorizeAttribute"
---

# CqrsAuthorizeAttribute

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Shared/Cqrs/CqrsAuthorizeAttribute.cs`

## Summary

Requires that the caller satisfies the specified authorization policy before a CQRS command or query is dispatched.

## Properties

### Policy

_property_

```csharp
string Policy
```

Gets the authorization policy name that must be satisfied.


---
title: "SubTypesContractResolver"
---

# SubTypesContractResolver

_public class_

Namespace: `Industria4.DomainModel.Json`

Source: `src/Shared/DomainModel/Json/SubTypesContractResolver.cs`

## Summary

A contract resolver that applies sub-type converters to polymorphic types while delegating to an inner resolver.

## Constructors

### SubTypesContractResolver

_constructor_

```csharp
SubTypesContractResolver(IContractResolver contractResolver,params Type[] excludeTypes)
```

Initialises a new instance wrapping the given contract resolver and excluding the specified types from sub-type conversion. The inner resolver used to create contracts. Types that should not receive sub-type converters.

## Methods

### CreateContract

_method_

```csharp
JsonContract CreateContract(Type objectType)
```


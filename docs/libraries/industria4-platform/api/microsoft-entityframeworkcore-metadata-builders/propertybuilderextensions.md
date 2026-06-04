---
title: "PropertyBuilderExtensions"
---

# PropertyBuilderExtensions

_public class_

Namespace: `Microsoft.EntityFrameworkCore.Metadata.Builders`

Source: `src/Shared/EntityFramework/PropertyBuilderExtensions.cs`

## Summary

Extension methods for that register and value converters.

## Methods

### HasDataArrayValueConversion

_method_

```csharp
PropertyBuilder<TProperty> HasDataArrayValueConversion<TProperty>(this PropertyBuilder<TProperty> property)
```

Configures the property to store and retrieve values using binary serialisation. The CLR type of the property. The property builder to configure. The same builder so that further calls can be chained.

### HasDataValueConversion

_method_

```csharp
PropertyBuilder<TProperty> HasDataValueConversion<TProperty>(this PropertyBuilder<TProperty> property)
```

Configures the property to store and retrieve values using binary serialisation. The CLR type of the property. The property builder to configure. The same builder so that further calls can be chained.


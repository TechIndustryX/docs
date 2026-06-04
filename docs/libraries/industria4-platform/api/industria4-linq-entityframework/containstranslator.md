---
title: "ContainsTranslator"
---

# ContainsTranslator

_public class_

Namespace: `Industria4.Linq.EntityFramework`

Source: `src/Shared/Linq.EntityFramework/ContainsTranslator.cs`

## Summary

Translates a LINQ `string.Contains` call into an EF Core `LIKE '%value%'` expression for database execution.

## Methods

### SupportExpression

_method_

```csharp
bool SupportExpression(Expression expression)
```

### TranslateExpression

_method_

```csharp
void TranslateExpression(TranslationContext context)
```


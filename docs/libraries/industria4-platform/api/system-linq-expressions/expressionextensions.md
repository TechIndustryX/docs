---
title: "ExpressionExtensions"
---

# ExpressionExtensions

_public class_

Namespace: `System.Linq.Expressions`

Source: `src/Shared/Linq/ExpressionExtensions.cs`

## Summary

Extensions for

## Methods

### GetConstantValue

_method_

```csharp
TValue GetConstantValue<TValue>(this IEnumerable<Expression> expressions)
```

Returns the first expression whose type returns the searched value. If needed, it compiles and evaluates the expression

### GetMemberInfo

_method_

```csharp
MemberInfo GetMemberInfo<T,TValue>(this Expression<Func<T,TValue>> property)
```

Gets the member used in the expression

### Optimize

_method_

```csharp
T Optimize<T>(this T expression)
```

Optimizes expressions by simplifying AND and OR logic.

### Replace

_method_

```csharp
T Replace<T>(this T expression,Expression from,Expression to)
```

Replaces an expression inside a parent expression with another one.

### Replace

_method_

```csharp
T Replace<T>(this T expression,Func<Expression,bool> match,Func<Expression,Expression> replaceWith,bool visitReplaced)
```

Replaces an expression inside a parent expression according to match rules.

### Replace

_method_

```csharp
T Replace<T>(this T expression,Func<Expression,bool> match,Func<Expression,Expression> replaceWith)
```

Replaces an expression inside a parent expression according to match rules.

### Visit

_method_

```csharp
IEnumerable<Expression> Visit(this Expression expression)
```

Visits an expression and returns an IEnumerable of visited nodes.

### Visit

_method_

```csharp
void Visit(this Expression expression,Action<Expression> visit)
```

Visits an expression by traversing it.


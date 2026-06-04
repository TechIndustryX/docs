---
title: "DictionaryExpressionTranslator"
---

# DictionaryExpressionTranslator

_internal class_

Namespace: `Industria4.Linq.EntityFramework`

Source: `src/Shared/Linq.EntityFramework/DictionaryExpressionTranslator.cs`

## Constructors

### DictionaryExpressionTranslator

_constructor_

```csharp
DictionaryExpressionTranslator(MethodInfo jsonValueMethod,LambdaExpression fakeLambda,LambdaExpression realLambdaLambda)
```

Initializes a new instance of .

### DictionaryExpressionTranslator

_constructor_

```csharp
DictionaryExpressionTranslator(MethodInfo jsonValueMethod,Type entityType,MemberInfo memberInfo,LambdaExpression realLambdaLambda)
```

Initializes a new instance of .

## Properties

### EntityType

_property_

```csharp
Type EntityType
```

Gets entity type.

### JsonValueMethod

_property_

```csharp
MethodInfo JsonValueMethod
```

Gets json value method.

### MemberInfo

_property_

```csharp
MemberInfo MemberInfo
```

Gets member info.

### RealLambdaExpression

_property_

```csharp
LambdaExpression RealLambdaExpression
```

Gets real lambda expression.

## Methods

### SupportExpression

_method_

```csharp
bool SupportExpression(Expression expression)
```

support expression.

### TranslateExpression

_method_

```csharp
void TranslateExpression(TranslationContext context)
```

translate expression.


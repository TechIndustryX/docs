---
title: "MatchKey"
---

# MatchKey

_public struct_

Namespace: `Industria4.DataLogger.WebApp`

Source: `src/DataLogger/DataLogger.WebApp/MatchKey.cs`

## Summary

A parsed field-matching key that optionally includes a comparison operator and value.

## Constructors

### MatchKey

_constructor_

```csharp
MatchKey(string key,Func<object,bool> @operator)
```

Initializes a new . The field name to match against. The optional comparison delegate.

## Methods

### Match

_method_

```csharp
bool Match(string key,object value)
```

Returns `true` when this key matches the field name and the value satisfies the comparison operator.

### Match

_method_

```csharp
bool Match(string key)
```

Returns `true` when this key matches the field name with no value comparison.

### TryParse

_method_

```csharp
bool TryParse(string key,out MatchKey value)
```

Attempts to parse a match-key expression such as `field`, `field=value`, or `field&amp;gt;10`. The expression string to parse. The parsed when the method returns `true`. `true` if parsing succeeded; otherwise `false`.


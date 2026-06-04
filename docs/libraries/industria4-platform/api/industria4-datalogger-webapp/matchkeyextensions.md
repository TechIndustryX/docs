---
title: "MatchKeyExtensions"
---

# MatchKeyExtensions

_public class_

Namespace: `Industria4.DataLogger.WebApp`

Source: `src/DataLogger/DataLogger.WebApp/MatchKey.cs`

## Summary

Extension methods for searching collections keyed by using wildcard/value matching.

## Methods

### TryMatch

_method_

```csharp
bool TryMatch<T>(this IEnumerable<KeyValuePair<MatchKey,T>> source,string key,object value,out T found)
```

Tries to find the first entry in `source` whose matches both the field `key` and the associated `value`. The value type stored in the collection. The sequence of key-value pairs to search. The field name to match against. The field value to match against. When this method returns `true`, contains the matched value; otherwise the default value. `true` if a matching entry was found; otherwise `false`.

### TryMatch

_method_

```csharp
bool TryMatch<T>(this IEnumerable<KeyValuePair<MatchKey,T>> source,string key,out T found)
```

Tries to find the first entry in `source` whose matches the given field `key`. The value type stored in the collection. The sequence of key-value pairs to search. The field name to match against. When this method returns `true`, contains the matched value; otherwise the default value. `true` if a matching key was found; otherwise `false`.


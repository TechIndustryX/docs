---
title: "LanguageDictionary"
---

# LanguageDictionary

_public class_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/LanguageDictionary.cs`

## Summary

Provides static helpers for resolving culture-based language lookups and the application default language.

## Methods

### GetTryCultures

_method_

```csharp
IEnumerable<CultureInfo> GetTryCultures()
```

Returns an ordered sequence of cultures to try based on the current UI culture. An enumerable of cultures in fallback order.

### GetTryCultures

_method_

```csharp
IEnumerable<CultureInfo> GetTryCultures(CultureInfo cultureInfo,bool includeSiblings)
```

Returns an ordered sequence of cultures to try when looking up a localized value, walking up to the default language. The starting culture. When `true`, sibling cultures of the resolved parent are also included. An enumerable of cultures in fallback order.


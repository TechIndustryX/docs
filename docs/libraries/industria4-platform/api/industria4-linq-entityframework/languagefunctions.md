---
title: "LanguageFunctions"
---

# LanguageFunctions

_public class_

Namespace: `Industria4.Linq.EntityFramework`

Source: `src/Shared/Linq.EntityFramework/LanguageFunctions.cs`

## Summary

Functions for query language

## Methods

### Current

_method_

```csharp
string Current(string jsonValue,string defaultValue)
```

Gets the current language from the json value It looks for CurrentUICulture, falls back to generic CurrentUICulture and tries with default culture


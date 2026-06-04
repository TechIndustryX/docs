---
title: "LanguageDictionary<T>"
---

# LanguageDictionary&lt;T&gt;

_public class_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/LanguageDictionary.cs`

## Summary

Defines contents per language

## Constructors

### LanguageDictionary

_constructor_

```csharp
LanguageDictionary()
```

Initializes a new empty dictionary for the default language.

### LanguageDictionary

_constructor_

```csharp
LanguageDictionary(IEnumerable<KeyValuePair<CultureInfo,T>> source)
```

Initializes a new instance from a sequence of culture/value pairs. The pairs to copy into this dictionary.

### LanguageDictionary

_constructor_

```csharp
LanguageDictionary(params KeyValuePair<CultureInfo,T>[] source)
```

Initializes a new instance from one or more culture/value pairs. The pairs to copy into this dictionary.

## Methods

### AddRange

_method_

```csharp
void AddRange(IEnumerable<KeyValuePair<CultureInfo,T>> items)
```

Adds all items to the dictionary

### Equals

_method_

```csharp
bool Equals(LanguageDictionary<T> other)
```

Determines whether this dictionary is equal to another by comparing all keys and values in sequence. The other dictionary to compare with. `true` if both dictionaries contain the same key-value pairs in the same order; otherwise, `false`.

### Equals

_method_

```csharp
bool Equals(object obj)
```

### Get

_method_

```csharp
T Get(CultureInfo cultureInfo)
```

Returns the content based on the culture If not found it try to use the parent culture or .

### GetCurrentOrDefault

_method_

```csharp
T GetCurrentOrDefault(T defaultValue)
```

Returns the content based on the current culture If not found it try to use the parent culture or .

### GetHashCode

_method_

```csharp
int GetHashCode()
```

### GetOrDefault

_method_

```csharp
T GetOrDefault(CultureInfo cultureInfo,T defaultValue)
```

Returns the content based on the culture If not found it try to use the parent culture or .

### NormalizeLanguage

_method_

```csharp
void NormalizeLanguage()
```

Check if contains , if not autofill it with the first value available

### SetOne

_method_

```csharp
void SetOne(CultureInfo culture,T value)
```

Adds one default value and clear all other cultures

### TryAddOne

_method_

```csharp
bool TryAddOne(T value)
```

Adds one default value if the dictionary is empty


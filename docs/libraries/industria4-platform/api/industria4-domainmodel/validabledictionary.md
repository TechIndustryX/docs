---
title: "ValidableDictionary<TKey, TValue>"
---

# ValidableDictionary&lt;TKey, TValue&gt;

_public class_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/ValidableDictionary.cs`

## Summary

Dictionary that allows to validate keys and values

## Constructors

### ValidableDictionary

_constructor_

```csharp
ValidableDictionary()
```

Initialises a new empty dictionary with no validation callbacks.

### ValidableDictionary

_constructor_

```csharp
ValidableDictionary(Action<TKey> validateKey,Action<TValue> validateValue)
```

Initialises a new dictionary that validates keys and values using the provided callbacks. Action invoked for each key before insertion. Optional action invoked for each value before insertion.

### ValidableDictionary

_constructor_

```csharp
ValidableDictionary(Action<TKey> validateKey)
```

Initialises a new dictionary that validates each key using the provided callback. Action invoked for each key before insertion. Throw to reject the key.

## Properties

### Count

_property_

```csharp
int Count
```

### IsReadOnly

_property_

```csharp
bool IsReadOnly
```

### Keys

_property_

```csharp
ICollection<TKey> Keys
```

### Values

_property_

```csharp
ICollection<TValue> Values
```

## Methods

### Add

_method_

```csharp
void Add(KeyValuePair<TKey,TValue> item)
```

### Add

_method_

```csharp
void Add(TKey key,TValue value)
```

### Clear

_method_

```csharp
void Clear()
```

### Contains

_method_

```csharp
bool Contains(KeyValuePair<TKey,TValue> item)
```

### ContainsKey

_method_

```csharp
bool ContainsKey(TKey key)
```

### CopyTo

_method_

```csharp
void CopyTo(KeyValuePair<TKey,TValue>[] array,int arrayIndex)
```

### Remove

_method_

```csharp
bool Remove(KeyValuePair<TKey,TValue> item)
```

### Remove

_method_

```csharp
bool Remove(TKey key)
```

### TryGetValue

_method_

```csharp
bool TryGetValue(TKey key,out TValue value)
```


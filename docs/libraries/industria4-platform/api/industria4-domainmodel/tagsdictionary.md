---
title: "TagsDictionary"
---

# TagsDictionary

_public class_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/TagsDictionary.cs`

## Summary

Defines tags using a key and a value

## Constructors

### TagsDictionary

_constructor_

```csharp
TagsDictionary()
```

Initializes a new empty .

### TagsDictionary

_constructor_

```csharp
TagsDictionary(IDictionary<string,string> dictionary)
```

Initializes a new instance pre-populated from the given dictionary. Key/value pairs to copy into this instance.

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
ICollection<string> Keys
```

### Values

_property_

```csharp
ICollection<string> Values
```

## Methods

### Add

_method_

```csharp
void Add(KeyValuePair<string,string> item)
```

### Add

_method_

```csharp
void Add(string key,string value)
```

### AddRange

_method_

```csharp
void AddRange(IEnumerable<KeyValuePair<string,string>> items)
```

Adds all key/value pairs from the sequence, sanitizing each key. The items to add.

### Clear

_method_

```csharp
void Clear()
```

### Contains

_method_

```csharp
bool Contains(KeyValuePair<string,string> item)
```

### ContainsKey

_method_

```csharp
bool ContainsKey(string key)
```

### CopyTo

_method_

```csharp
void CopyTo(KeyValuePair<string,string>[] array,int arrayIndex)
```

### Remove

_method_

```csharp
bool Remove(KeyValuePair<string,string> item)
```

### Remove

_method_

```csharp
bool Remove(string key)
```

### TryGetValue

_method_

```csharp
bool TryGetValue(string key,out string value)
```


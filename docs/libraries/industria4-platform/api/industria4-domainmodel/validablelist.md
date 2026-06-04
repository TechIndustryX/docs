---
title: "ValidableList<T>"
---

# ValidableList&lt;T&gt;

_public class_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/ValidableList.cs`

## Summary

Validable list

## Constructors

### ValidableList

_constructor_

```csharp
ValidableList()
```

Initialises a new empty list with no validation callback.

### ValidableList

_constructor_

```csharp
ValidableList(Action<T> validate)
```

Initialises a new list that validates each item using the provided callback. Action invoked before each insertion. Throw to reject the item.

## Properties

### Count

_property_

```csharp
int Count
```

### get

_property_

```csharp
T this[int index] { get
```

### IsReadOnly

_property_

```csharp
bool IsReadOnly
```

## Methods

### Add

_method_

```csharp
void Add(T item)
```

### AddRange

_method_

```csharp
void AddRange(IEnumerable<T> items)
```

Validates and appends all items from the sequence to the end of the list. The items to add.

### Clear

_method_

```csharp
void Clear()
```

### Contains

_method_

```csharp
bool Contains(T item)
```

### CopyTo

_method_

```csharp
void CopyTo(T[] array,int arrayIndex)
```

### GetEnumerator

_method_

```csharp
IEnumerator<T> GetEnumerator()
```

### IndexOf

_method_

```csharp
int IndexOf(T item)
```

### Insert

_method_

```csharp
void Insert(int index,T item)
```

### Remove

_method_

```csharp
bool Remove(T item)
```

### RemoveAt

_method_

```csharp
void RemoveAt(int index)
```


---
title: "WeakRefObject"
---

# WeakRefObject

_internal class_

Namespace: `System.Windows.Forms`

Source: `src/Shared/Globalization/Resources/ClientUtils.cs`

## Summary

Wraps a weak ref object. WARNING: Use this class carefully! When the weak ref is collected, this object looses its identity. This is bad when the object has been added to a collection since Contains(WeakRef(item)) and Remove(WeakRef(item)) would not be able to identify the item.

## Constructors

### WeakRefObject

_constructor_

```csharp
WeakRefObject(object obj)
```

## Methods

### Equals

_method_

```csharp
bool Equals(object obj)
```

### GetHashCode

_method_

```csharp
int GetHashCode()
```


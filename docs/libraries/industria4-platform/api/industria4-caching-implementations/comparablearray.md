---
title: "ComparableArray<T>"
---

# ComparableArray&lt;T&gt;

_public struct_

Namespace: `Industria4.Caching.Implementations`

Source: `src/Shared/Caching/Implementations/ComparableArray.cs`

## Summary

An immutable, equality-comparable wrapper around a read-only list, suitable for use as a composite cache key. The element type.

## Constructors

### ComparableArray

_constructor_

```csharp
ComparableArray(IReadOnlyList<T> array)
```

Initialises a new instance wrapping the given list and pre-computing the hash code. The list of values to wrap.

## Methods

### Equals

_method_

```csharp
bool Equals(ComparableArray<T> other)
```

Determines whether this array is element-wise equal to another . The array to compare against. `true` if both arrays contain the same elements in the same order; otherwise, `false`.

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


---
title: "WeakRefCollection"
---

# WeakRefCollection

_internal class_

Namespace: `System.Windows.Forms`

Source: `src/Shared/Globalization/Resources/ClientUtils.cs`

## Summary

WeakRefCollection - a collection that holds onto weak references Essentially you pass in the object as it is, and under the covers we only hold a weak reference to the object. ----------------------------------------------------------------- !!!IMPORTANT USAGE NOTE!!! Users of this class should set the RefCheckThreshold property explicitly or call ScavengeReferences every once in a while to remove dead references. Also avoid calling Remove(item). Instead call RemoveByHashCode(item) to make sure dead refs are removed. -----------------------------------------------------------------

## Constructors

### WeakRefCollection

_constructor_

```csharp
WeakRefCollection()
```

### WeakRefCollection

_constructor_

```csharp
WeakRefCollection(int size)
```

## Properties

### Count

_property_

```csharp
int Count
```

### InnerList

_property_

```csharp
ArrayList InnerList
```

### IsFixedSize

_property_

```csharp
bool IsFixedSize
```

### IsReadOnly

_property_

```csharp
bool IsReadOnly
```

### RefCheckThreshold

_property_

```csharp
int RefCheckThreshold
```

Indicates the value where the collection should check its items to remove dead weakref left over. Note: When GC collects weak refs from this collection the WeakRefObject identity changes since its Target becomes null. This makes the item unrecognizable by the collection and cannot be removed - Remove(item) and Contains(item) will not find it anymore.

## Methods

### Add

_method_

```csharp
int Add(object value)
```

### Clear

_method_

```csharp
void Clear()
```

### Contains

_method_

```csharp
bool Contains(object value)
```

### CopyTo

_method_

```csharp
void CopyTo(Array array,int index)
```

### Equals

_method_

```csharp
bool Equals(object obj)
```

### GetEnumerator

_method_

```csharp
IEnumerator GetEnumerator()
```

### GetHashCode

_method_

```csharp
int GetHashCode()
```

### IndexOf

_method_

```csharp
int IndexOf(object value)
```

### Insert

_method_

```csharp
void Insert(int index,object value)
```

### Remove

_method_

```csharp
void Remove(object value)
```

### RemoveAt

_method_

```csharp
void RemoveAt(int index)
```

### RemoveByHashCode

_method_

```csharp
void RemoveByHashCode(object value)
```

Removes the value using its hash code as its identity. This is needed because the underlying item in the collection may have already been collected changing the identity of the WeakRefObject making it impossible for the collection to identify it. See WeakRefObject for more info.

### ScavengeReferences

_method_

```csharp
void ScavengeReferences()
```


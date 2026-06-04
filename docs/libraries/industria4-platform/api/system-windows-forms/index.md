---
title: "System.Windows.Forms"
---

# System.Windows.Forms

This namespace contains 2 public API types.

## Types

- [WeakRefCollection](./weakrefcollection.md) _class_ - WeakRefCollection - a collection that holds onto weak references Essentially you pass in the object as it is, and under the covers we only hold a weak reference to the object. ----------------------------------------------------------------- !!!IMPORTANT USAGE NOTE!!! Users of this class should set the RefCheckThreshold property explicitly or call ScavengeReferences every once in a while to remove dead references. Also avoid calling Remove(item). Instead call RemoveByHashCode(item) to make sure dead refs are removed. -----------------------------------------------------------------
- [WeakRefObject](./weakrefobject.md) _class_ - Wraps a weak ref object. WARNING: Use this class carefully! When the weak ref is collected, this object looses its identity. This is bad when the object has been added to a collection since Contains(WeakRef(item)) and Remove(WeakRef(item)) would not be able to identify the item.

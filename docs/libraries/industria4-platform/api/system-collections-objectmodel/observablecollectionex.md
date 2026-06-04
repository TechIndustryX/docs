---
title: "ObservableCollectionEx<T>"
---

# ObservableCollectionEx&lt;T&gt;

_public class_

Namespace: `System.Collections.ObjectModel`

Source: `src/Shared/Web.Forms/ObservableCollectionEx.cs`

## Summary

Observable collection with ability to delay or suspend CollectionChanged notifications

## Constructors

### ObservableCollectionEx

_constructor_

```csharp
ObservableCollectionEx()
```

Initializes a new instance of ObservableCollectionEx that is empty and has default initial capacity.

### ObservableCollectionEx

_constructor_

```csharp
ObservableCollectionEx(IEnumerable<T> collection)
```

Initializes a new instance of the ObservableCollection class that contains elements copied from the specified collection and has sufficient capacity to accommodate the number of elements copied. The collection whose elements are copied to the new list. The elements are copied onto the ObservableCollection in the same order they are read by the enumerator of the collection. collection is a null reference

### ObservableCollectionEx

_constructor_

```csharp
ObservableCollectionEx(List<T> list)
```

Initializes a new instance of the ObservableCollectionEx class that contains elements copied from the specified list The list whose elements are copied to the new list. The elements are copied onto the ObservableCollectionEx in the same order they are read by the enumerator of the list. list is a null reference

### ObservableCollectionEx

_constructor_

```csharp
ObservableCollectionEx(ObservableCollectionEx<T> parent,bool notify)
```

Constructor that configures the container to delay or disable notifications. Reference to an original collection whos events are being postponed Specifies if notifications needs to be delayed or disabled

## Methods

### BlockReentrancy

_method_

```csharp
IDisposable BlockReentrancy()
```

Disallow reentrant attempts to change this collection. E.g. a event handler of the CollectionChanged event is not allowed to make changes to this collection. typical usage is to wrap e.g. a OnCollectionChanged call with a using() scope: ` using (BlockReentrancy()) &#123; CollectionChanged(this, new NotifyCollectionChangedEventArgs(action, item, index)); &#125; `

### CheckReentrancy

_method_

```csharp
void CheckReentrancy()
```

Check and assert for reentrant attempts to change this collection. raised when changing the collection while another collection change is still being notified to other listeners

### ClearItems

_method_

```csharp
void ClearItems()
```

Called by base class Collection&amp;lt;T&amp;gt; when the list is being cleared; raises a CollectionChanged event to any listeners.

### DelayNotifications

_method_

```csharp
ObservableCollectionEx<T> DelayNotifications()
```

Returns an instance of class which manipulates original collection but suppresses notifications untill this instance has been released and Dispose() method has been called. To supress notifications it is recommended to use this instance inside using() statement: ` using (var iSuppressed = collection.DelayNotifications()) &#123; iSuppressed.Add(x); iSuppressed.Add(y); iSuppressed.Add(z); &#125; ` Each delayed interface is bound to only one type of operation such as Add, Remove, etc. Different types of operation on the same delayed interface are not allowed. In order to do other type of opertaion you can allocate another wrapper by calling .DelayNotifications() on either original object or any delayed instances.

### DisableNotifications

_method_

```csharp
ObservableCollectionEx<T> DisableNotifications()
```

Returns a wrapper instance of an ObservableCollectionEx class. Calling methods of this instance will modify original collection but will not generate any notifications.

### Dispose

_method_

```csharp
void Dispose()
```

Called by the application code to fire all delayed notifications.

### Dispose

_method_

```csharp
void Dispose(bool reason)
```

Fires notification with all accumulated events True is called by App code. False if called from GC.

### InsertItem

_method_

```csharp
void InsertItem(int index,T item)
```

Called by base class Collection&amp;lt;T&amp;gt; when an item is added to list; raises a CollectionChanged event to any listeners.

### Move

_method_

```csharp
void Move(int oldIndex,int newIndex)
```

Move item at oldIndex to newIndex.

### MoveItem

_method_

```csharp
void MoveItem(int oldIndex,int newIndex)
```

Called by base class ObservableCollection&amp;lt;T&amp;gt; when an item is to be moved within the list; raises a CollectionChanged event to any listeners.

### OnCollectionChanged

_method_

```csharp
void OnCollectionChanged(NotifyCollectionChangedEventArgs e)
```

Raise CollectionChanged event to any listeners. Properties/methods modifying this ObservableCollection will raise a collection changed event through this virtual method. When overriding this method, either call its base implementation or call to guard against reentrant collection changes.

### OnPropertyChanged

_method_

```csharp
void OnPropertyChanged(PropertyChangedEventArgs e)
```

Raises a PropertyChanged event (per ).

### RemoveItem

_method_

```csharp
void RemoveItem(int index)
```

Called by base class Collection&amp;lt;T&amp;gt; when an item is removed from list; raises a CollectionChanged event to any listeners.

### SetItem

_method_

```csharp
void SetItem(int index,T item)
```

Called by base class Collection&amp;lt;T&amp;gt; when an item is set in list; raises a CollectionChanged event to any listeners.

## Events

### _emptyDelegate

_event_

```csharp
event NotifyCollectionChangedEventHandler CollectionChanged = _emptyDelegate
```

Occurs when the collection changes, either by adding or removing an item. See

### PropertyChanged

_event_

```csharp
event PropertyChangedEventHandler PropertyChanged
```

PropertyChanged event .


---
title: "ObservableTracker"
---

# ObservableTracker

_public class_

Namespace: `Industria4.Web.Forms`

Source: `src/Shared/Web.Forms/ObservableTracker.cs`

## Summary

Tracks changes on objects and collections that implement or , and surfaces aggregated change events.

## Properties

### TrackedItems

_property_

```csharp
IEnumerable<object> TrackedItems
```

Gets the set of objects currently being tracked.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

### OnCollectionChanged

_method_

```csharp
void OnCollectionChanged(object s,NotifyCollectionChangedEventArgs e)
```

### OnPropertyChanged

_method_

```csharp
void OnPropertyChanged(object s,PropertyChangedEventArgs e)
```

### OnSomethingChanged

_method_

```csharp
void OnSomethingChanged(object s,EventArgs e)
```

### TrackChanges

_method_

```csharp
void TrackChanges(object obj,Action<ObservableTrackRules> rules)
```

Begins tracking changes on `obj` using a rules builder delegate. The object to track. An action that configures which child members to also track.

### TrackChanges

_method_

```csharp
void TrackChanges(object obj,ObservableTrackRules rules)
```

Begins tracking changes on `obj` using the supplied rules. The object to track. Rules that determine which child members to also track.

### TrackChanges

_method_

```csharp
void TrackChanges(object obj)
```

Begins tracking changes on `obj` with default rules. The object to track.

### UntrackChanges

_method_

```csharp
void UntrackChanges(object obj)
```

Stops tracking changes on `obj`. The object to stop tracking.

## Events

### CollectionChanged

_event_

```csharp
event NotifyCollectionChangedEventHandler CollectionChanged
```

### PropertyChanged

_event_

```csharp
event PropertyChangedEventHandler PropertyChanged
```

### SomethingChanged

_event_

```csharp
event EventHandler SomethingChanged
```

Raised when any tracked property or collection change is detected.


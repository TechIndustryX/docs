---
title: "ObservableTrackRules"
---

# ObservableTrackRules

_public class_

Namespace: `Industria4.Web.Forms`

Source: `src/Shared/Web.Forms/ObservableTracker.cs`

## Summary

Defines rules for which child members an should recursively track.

## Methods

### Add

_method_

```csharp
void Add<T>(Func<T,object> item)
```

Adds a rule that extracts a child object of type `T` to also track. The source object type. Function that extracts the child member to track.

### Apply

_method_

```csharp
void Apply(ObservableTracker observableTracker,object obj)
```

Applies the matching rule (if any) to `obj` by extracting its child and registering it with the tracker. The tracker to register child members with. The object whose child members should be tracked.


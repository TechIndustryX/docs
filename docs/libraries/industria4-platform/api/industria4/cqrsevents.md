---
title: "CqrsEvents"
---

# CqrsEvents

_public class_

Namespace: `Industria4`

Source: `src/Shared/Cqrs/CqrsEvents.cs`

## Summary

Base events exposed for Cqrs

## Constructors

### CqrsEvents

_constructor_

```csharp
CqrsEvents(IAvailableEntityEvents availableEntityEvents)
```

Initialises a new instance bound to the given entity events group. The entity events that supply the base ID offset.

## Properties

### Added

_property_

```csharp
EventId Added
```

Gets the log-event ID for an entity-added event.

### Concurrency

_property_

```csharp
EventId Concurrency
```

Gets the log-event ID for a concurrency conflict event.

### Conflict

_property_

```csharp
EventId Conflict
```

Gets the log-event ID for a conflict event.

### Deleted

_property_

```csharp
EventId Deleted
```

Gets the log-event ID for an entity-deleted event.

### DeletedConflict

_property_

```csharp
EventId DeletedConflict
```

Gets the log-event ID for a delete-conflict event.

### DescriptionConflict

_property_

```csharp
EventId DescriptionConflict
```

Gets the log-event ID for a description-conflict event.

### NotFound

_property_

```csharp
EventId NotFound
```

Gets the log-event ID for a not-found event.

### Removed

_property_

```csharp
EventId Removed
```

Gets the log-event ID for an entity-removed event.

### Updated

_property_

```csharp
EventId Updated
```

Gets the log-event ID for an entity-updated event.


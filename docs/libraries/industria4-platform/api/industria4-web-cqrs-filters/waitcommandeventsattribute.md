---
title: "WaitCommandEventsAttribute"
---

# WaitCommandEventsAttribute

_public class_

Namespace: `Industria4.Web.Cqrs.Filters`

Source: `src/Shared/Web.Cqrs/Filters/WaitCommandEventsAttribute.cs`

## Summary

Block any action for completetion until an event is received of any command involved into the action

## Properties

### Disabled

_property_

```csharp
bool Disabled
```

Gets or sets a value indicating whether this filter is disabled.

### EventTypes

_property_

```csharp
Type[] EventTypes
```

Gets or sets the event types to wait for. Defaults to completed, error, and validation event types.

## Methods

### GetShouldHandle

_method_

```csharp
bool GetShouldHandle(ActionExecutingContext context)
```

### OnActionExecutionAsync

_method_

```csharp
Task OnActionExecutionAsync(ActionExecutingContext context,ActionExecutionDelegate next)
```


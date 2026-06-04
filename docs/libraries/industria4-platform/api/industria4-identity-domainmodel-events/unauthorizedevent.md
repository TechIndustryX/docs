---
title: "UnauthorizedEvent"
---

# UnauthorizedEvent

_public class_

Namespace: `Industria4.Identity.DomainModel.Events`

Source: `src/Identity/Identity.DomainModel/Events/UnauthorizedEvent.cs`

## Summary

Event raised when an unauthorized access attempt is detected.

## Constructors

### UnauthorizedEvent

_constructor_

```csharp
UnauthorizedEvent(string userId,string userName)
```

Initializes a new unauthorized-access event for the given user. The identifier of the user who attempted unauthorized access. The username of the user who attempted unauthorized access.


---
title: "GatewayController"
---

# GatewayController

_public class_

Namespace: `Industria4.Web.Cqrs.Controllers`

Source: `src/Shared/Web.Cqrs/Controllers/GatewayController.cs`

## Summary

Generic MVC controller that acts as an HTTP gateway for CQRS commands, forwarding POST/PUT requests to the bus for processing.

## Constructors

### GatewayController

_constructor_

```csharp
GatewayController(IBus bus)
```

Initialises a new instance with the given Rebus bus. The bus used to send commands.

## Methods

### Delete

_method_

```csharp
Task<IActionResult> Delete(ICommand id)
```

Handles DELETE requests by sending the command to the bus and returning the entity id if applicable. The delete command to send. 200 OK with the entity id if the command implements .

### PostPut

_method_

```csharp
Task<IActionResult> PostPut(ICommand value)
```

Handles POST and PUT requests by sending the command to the bus and returning the entity id if applicable. The command to send. 200 OK with the entity id, or 400 Bad Request on validation failure.


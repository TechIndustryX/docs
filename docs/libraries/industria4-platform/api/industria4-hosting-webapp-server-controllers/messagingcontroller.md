---
title: "MessagingController"
---

# MessagingController

_public class_

Namespace: `Industria4.Hosting.WebApp.Server.Controllers`

Source: `src/Hosting/Hosting.WebApp.Server/Controllers/MessagingController.cs`

## Summary

API controller that forwards messages to all connected SignalR clients via .

## Constructors

### MessagingController

_constructor_

```csharp
MessagingController(IHubContext<MessagingHub> hubContext)
```

Initializes a new instance of with the hub context.

## Methods

### Send

_method_

```csharp
Task<IActionResult> Send(MessageModel model)
```

Broadcasts a message to all connected SignalR clients.


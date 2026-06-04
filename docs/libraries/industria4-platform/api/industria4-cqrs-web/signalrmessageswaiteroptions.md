---
title: "SignalrMessagesWaiterOptions"
---

# SignalrMessagesWaiterOptions

_public class_

Namespace: `Industria4.Cqrs.Web`

Source: `src/Shared/Cqrs.Web/SignalrMessagesWaiterOptions.cs`

## Summary

Configuration options for the SignalR-based implementation.

## Properties

### HttpConnectionOptions

_property_

```csharp
Action<HttpConnectionOptions> HttpConnectionOptions
```

Gets or sets an optional callback for configuring the underlying HTTP connection options.

### ReconnectionDelay

_property_

```csharp
TimeSpan ReconnectionDelay
```

Gets or sets the delay between reconnection attempts when the SignalR connection is lost. Defaults to 3 seconds.

### Uri

_property_

```csharp
Uri Uri
```

Gets or sets the SignalR hub URI to connect to.


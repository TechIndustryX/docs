---
title: "MessagingClient"
---

# MessagingClient

_public class_

Namespace: `Industria4.Hosting.Http`

Source: `src/Hosting/Hosting.Http/MessagingClient.cs`

## Summary

HTTP client for publishing messages to the messaging API endpoint.

## Constructors

### MessagingClient

_constructor_

```csharp
MessagingClient(RestClient restClient)
```

Initializes a new instance of with the provided REST client. The REST client used to send HTTP requests.

## Methods

### SendAsync

_method_

```csharp
Task SendAsync(MessageModel model,CancellationToken token = default)
```

Sends a pre-built to the messaging endpoint. The message to send. An optional cancellation token.

### SendAsync

_method_

```csharp
Task SendAsync(string topic,IDictionary<string,object> data,CancellationToken token = default)
```

Sends a message on the specified topic with the provided data dictionary. The topic to publish on. A dictionary of additional data to include in the message. An optional cancellation token.


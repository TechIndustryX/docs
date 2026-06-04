---
title: "HttpToPubMessage"
---

# HttpToPubMessage

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Functions`

Source: `TechIndustry.Streaming.AzureFunctions/Functions/HttpToPubMessage.cs`

## Summary

Azure Function that acts as an HTTP gateway to Azure Web PubSub: GET returns a client-access URI; POST publishes a message to a hub.

## Methods

### Run

_method_

```csharp
Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function,"get","post")
```

Handles GET (return a client access URI) or POST (publish a message) requests to the configured Web PubSub hub.


---
title: "InputPubMessage"
---

# InputPubMessage

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Models`

Source: `TechIndustry.Streaming.AzureFunctions/Models/InputPubMessage.cs`

## Summary

Represents an Azure Web PubSub message payload that carries a target hub, content, and optional additional data.

## Properties

### Content

_property_

```csharp
string Content
```

Gets or sets the message content body published to the PubSub hub.

### Data

_property_

```csharp
IDictionary<string,object>? Data
```

Gets or sets any additional JSON fields included in the message payload.

### Hub

_property_

```csharp
string Hub
```

Gets or sets the Web PubSub hub name that the message is published to.


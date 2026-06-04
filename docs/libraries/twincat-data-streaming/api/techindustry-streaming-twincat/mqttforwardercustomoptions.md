---
title: "MqttForwarderCustomOptions"
---

# MqttForwarderCustomOptions

_public class_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

## Summary

Options for a custom Roslyn C# script that intercepts and transforms each before publishing.

## Properties

### Parameters

_property_

```csharp
Dictionary<string,string> Parameters
```

Gets or sets the named parameters passed to the script via .

### Source

_property_

```csharp
string Source
```

Gets or sets the C# script source code (or a path to a script file) applied to each forwarder item.


---
title: "MqttOptions"
---

# MqttOptions

_public class_

Namespace: `TechIndustry.TwinCAT.Analytics.Collector`

Source: `TechIndustry.TwinCAT.Analytics.Collector/MqttOptions.cs`

## Summary

Configuration options for the MQTT broker connection used by the analytics collector.

## Properties

### ClientId

_property_

```csharp
string ClientId
```

Gets or sets the MQTT client identifier. Defaults to the machine name.

### DownloadTopic

_property_

```csharp
string DownloadTopic
```

Gets or sets the sub-topic used to receive download/export commands from the broker.

### MainTopic

_property_

```csharp
string MainTopic
```

Gets or sets the root topic prefix under which all TwinCAT Analytics messages are published.

### Password

_property_

```csharp
string Password
```

Gets or sets the password used to authenticate with the MQTT broker.

### Port

_property_

```csharp
int Port
```

Gets or sets the TCP port of the MQTT broker.

### Server

_property_

```csharp
string Server
```

Gets or sets the hostname or IP address of the MQTT broker.

### Username

_property_

```csharp
string Username
```

Gets or sets the username used to authenticate with the MQTT broker.

### UseTls

_property_

```csharp
bool UseTls
```

Gets or sets whether TLS is used for the broker connection.


---
title: "MqttBroker"
---

# MqttBroker

_public class_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/MqttBroker.cs`

## Summary

Holds the connection parameters for a single MQTT broker.

## Properties

### ClientId

_property_

```csharp
string ClientId
```

Gets or sets the MQTT client identifier. Defaults to `"TechIndustry"`.

### Host

_property_

```csharp
string Host
```

Gets the MQTT broker host name or IP address.

### Password

_property_

```csharp
string Password
```

Gets or sets the MQTT password for authenticated brokers.

### Port

_property_

```csharp
int Port
```

Gets or sets the TCP port. Defaults to `1883`.

### Tls

_property_

```csharp
bool Tls
```

Gets or sets a value indicating whether TLS is used for the connection.

### Username

_property_

```csharp
string Username
```

Gets or sets the MQTT username for authenticated brokers.


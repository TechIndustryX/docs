---
title: "AuditLogRead"
---

# AuditLogRead

_public class_

Namespace: `Industria4.Identity.ReadModel`

Source: `src/Identity/Identity.ReadModel/AuditLogRead.cs`

## Summary

Read model representing an audit-log entry as returned by the Identity query stack.

## Properties

### Date

_property_

```csharp
DateTimeOffset Date
```

Gets or sets the timestamp of the operation.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique audit-log entry identifier.

### IpAddress

_property_

```csharp
IPAddress IpAddress
```

Gets or sets the client IP address.

### Metadata

_property_

```csharp
Dictionary<string,object> Metadata
```

Gets or sets the deserialized metadata dictionary.

### MetadataJson

_property_

```csharp
string MetadataJson
```

Gets or sets the raw JSON string of the metadata (not serialized to API responses).

### Operation

_property_

```csharp
string Operation
```

Gets or sets the label identifying the operation that was performed.

### ServerIpAddress

_property_

```csharp
IPAddress ServerIpAddress
```

Gets or sets the server IP address that handled the request.

### UserId

_property_

```csharp
string UserId
```

Gets or sets the identifier of the user who performed the operation.


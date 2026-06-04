---
title: "AuditLog"
---

# AuditLog

_public class_

Namespace: `Industria4.Identity.DomainModel`

Source: `src/Identity/Identity.DomainModel/AuditLog.cs`

## Summary

Represents a single audit-log entry recording who performed an operation and from where.

## Constructors

### AuditLog

_constructor_

```csharp
AuditLog(string id,DateTimeOffset date,IPAddress ipAddress,IPAddress serverIpAddress,string? userId,string operation)
```

Initializes a new audit-log entry with all required tracking data. The unique identifier of this log entry. The point in time the operation occurred. The IP address of the client that performed the operation. The IP address of the server that processed the operation. The identifier of the user who performed the operation, or `null` for anonymous operations. A short label describing the operation performed.

## Properties

### Date

_property_

```csharp
DateTimeOffset Date
```

Gets the timestamp at which the operation occurred.

### Id

_property_

```csharp
string Id
```

### IpAddress

_property_

```csharp
IPAddress IpAddress
```

Gets the IP address of the client.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary key/value metadata attached to this log entry (lazily initialised).

### Operation

_property_

```csharp
string Operation
```

Gets the short label identifying what operation was performed.

### ServerIpAddress

_property_

```csharp
IPAddress ServerIpAddress
```

Gets the IP address of the server.

### UserId

_property_

```csharp
string? UserId
```

Gets the identifier of the user who performed the operation, or `null` for anonymous access.


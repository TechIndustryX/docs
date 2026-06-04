---
title: "AddAuditLogCommand"
---

# AddAuditLogCommand

_public class_

Namespace: `Industria4.Identity.Cqrs.Commands.AuditLogs`

Source: `src/Identity/Identity.Cqrs/Commands/AuditLogs/AddAuditLogCommand.cs`

## Summary

Command to record a new audit log entry for a user action.

## Constructors

### AddAuditLogCommand

_constructor_

```csharp
AddAuditLogCommand(string id,string operation,string userId,IPAddress ipAddress,IPAddress serverIpAddress,DateTimeOffset date,MetadataDictionary metadata)
```

Initializes a new audit-log command with all required fields. The unique identifier for this audit log entry. The name of the audited operation. The identifier of the acting user. The client IP address. The server IP address. The timestamp of the operation. Optional additional metadata.

## Properties

### Date

_property_

```csharp
DateTimeOffset Date
```

Gets the timestamp of the audited operation.

### IpAddress

_property_

```csharp
IPAddress IpAddress
```

Gets the IP address of the client that initiated the request.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets optional additional metadata associated with the audited operation.

### Operation

_property_

```csharp
string Operation
```

Gets the name of the operation that was audited (e.g. "User.Login").

### ServerIpAddress

_property_

```csharp
IPAddress ServerIpAddress
```

Gets the IP address of the server that handled the request.

### UserId

_property_

```csharp
string UserId
```

Gets the identifier of the user who performed the operation.


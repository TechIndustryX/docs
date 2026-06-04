---
title: "AuditLogEventSink"
---

# AuditLogEventSink

_public class_

Namespace: `Industria4.Identity.WebApi.Components`

Source: `src/Identity/Identity.WebApi/Components/AuditLogEventSink.cs`

## Summary

IdentityServer4 event sink that persists authentication events as audit log entries.

## Constructors

### AuditLogEventSink

_constructor_

```csharp
AuditLogEventSink(IRepository<AuditLog> repository)
```

Initializes a new instance of . The audit log repository used to persist events.

## Methods

### PersistAsync

_method_

```csharp
Task PersistAsync(Event evt)
```

Persists an IdentityServer4 event as an audit log entry. The IdentityServer4 event to record.


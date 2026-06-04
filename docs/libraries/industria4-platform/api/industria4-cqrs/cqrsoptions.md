---
title: "CqrsOptions"
---

# CqrsOptions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Shared/Cqrs.Rebus/CqrsOptions.cs`

## Summary

Options containing connection strings and service bus settings

## Properties

### AssembliesToSimplify

_property_

```csharp
List<Assembly> AssembliesToSimplify
```

Gets assemblies whose message type names are simplified to short names in topic convention.

### RabbitMqConnectionString

_property_

```csharp
string RabbitMqConnectionString
```

Gets or sets the RabbitMQ connection string.

### ServiceBusWorkers

_property_

```csharp
int ServiceBusWorkers
```

Gets or sets the number of Rebus service bus worker threads. Defaults to 10.

### SqlServerConnectionString

_property_

```csharp
string SqlServerConnectionString
```

Gets or sets the SQL Server connection string used for transport or saga storage.

### StoragePath

_property_

```csharp
string StoragePath
```

Gets or sets the file-system path used by the file-system transport/storage.

### StoreConnectionString

_property_

```csharp
string StoreConnectionString
```

Gets or sets a generic store connection string for other storage backends.


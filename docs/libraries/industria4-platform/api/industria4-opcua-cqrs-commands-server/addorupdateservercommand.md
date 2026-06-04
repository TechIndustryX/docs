---
title: "AddOrUpdateServerCommand"
---

# AddOrUpdateServerCommand

_public class_

Namespace: `Industria4.OpcUa.Cqrs.Commands.Server`

Source: `src/OpcUa/OpcUa.Cqrs/Commands/Server/AddOrUpdateServerCommand.cs`

## Summary

CQRS command that creates or updates an OPC-UA server entry.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised display name(s) of the server.

### EntityVersion

_property_

```csharp
byte[] EntityVersion
```

Gets the concurrency token of the entity being updated.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata associated with the server.

### Password

_property_

```csharp
string Password
```

Gets the authentication password.

### Uri

_property_

```csharp
Uri Uri
```

Gets the OPC-UA endpoint URI.

### UserName

_property_

```csharp
string UserName
```

Gets the authentication user name.

### UseSecurity

_property_

```csharp
bool UseSecurity
```

Gets a value indicating whether transport-level security is required.


---
title: "Server"
---

# Server

_public class_

Namespace: `Industria4.OpcUa.DomainModel.Server`

Source: `src/OpcUa/OpcUa.DomainModel/Server/Server.cs`

## Summary

Represents an OPC-UA server connection entry, including its endpoint URI and optional credentials.

## Constructors

### Server

_constructor_

```csharp
Server(string id,Uri uri)
```

Initializes a new server with the specified endpoint URI. The unique identifier of this server entry. The OPC-UA endpoint URI.

### Server

_constructor_

```csharp
Server(string id)
```

Initializes a new server with a default OPC-TCP endpoint URI. The unique identifier of this server entry.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this server, keyed by language.

### HasCredential

_property_

```csharp
bool HasCredential
```

Gets a value indicating whether this server has a non-empty username credential configured.

### Id

_property_

```csharp
string Id
```

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata for this server (lazily initialised).

### UseSecurity

_property_

```csharp
bool UseSecurity
```

Gets or sets a value indicating whether security (e.g., encrypted transport) is enabled.

## Methods

### GetCredential

_method_

```csharp
NetworkCredential GetCredential()
```

Returns the extracted from the current . The network credential for this server's endpoint.


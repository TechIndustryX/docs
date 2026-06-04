---
title: "Deployment"
---

# Deployment

_public class_

Namespace: `Industria4.Production.DomainModel.Deployment`

Source: `src/Production/Production.DomainModel/Deployment/Deployment.cs`

## Summary

Aggregate root representing a specific deployment of a to production servers.

## Constructors

### Deployment

_constructor_

```csharp
Deployment(string id,string compositionId)
```

Initializes a new deployment linked to the specified composition. The unique deployment identifier. The identifier of the composition being deployed.

## Properties

### CompositionId

_property_

```csharp
string CompositionId
```

Gets the identifier of the composition this deployment is based on.

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this deployment, keyed by language.

### Id

_property_

```csharp
string Id
```

### Items

_property_

```csharp
ValidableList<DeploymentItem> Items
```

Gets the ordered list of deployment items.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata for this deployment (lazily initialised).

### Tags

_property_

```csharp
TagsDictionary Tags
```

Gets the tag dictionary for filtering and classification.

## Methods

### Equals

_method_

```csharp
bool Equals(Deployment other)
```

Determines whether this deployment is equal to the specified deployment by comparing identifiers. The deployment to compare with. if both deployments share the same ; otherwise, .

### Equals

_method_

```csharp
bool Equals(object obj)
```

### GetHashCode

_method_

```csharp
int GetHashCode()
```


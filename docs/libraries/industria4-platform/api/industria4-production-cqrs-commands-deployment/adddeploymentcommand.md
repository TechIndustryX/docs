---
title: "AddDeploymentCommand"
---

# AddDeploymentCommand

_public class_

Namespace: `Industria4.Production.Cqrs.Commands.Deployment`

Source: `src/Production/Production.Cqrs/Commands/Deployment/AddDeploymentCommand.cs`

## Summary

Command to create a new deployment of a composition to production servers.

## Properties

### CompositionId

_property_

```csharp
string CompositionId
```

Gets the identifier of the composition being deployed.

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for the deployment.

### Items

_property_

```csharp
DeploymentItem[] Items
```

Gets the ordered list of deployment items mapping composition item keys to servers.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the metadata to attach to the deployment.

### Tags

_property_

```csharp
TagsDictionary Tags
```

Gets the tag dictionary for filtering and classification.


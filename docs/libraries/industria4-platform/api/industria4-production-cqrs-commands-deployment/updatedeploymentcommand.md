---
title: "UpdateDeploymentCommand"
---

# UpdateDeploymentCommand

_public class_

Namespace: `Industria4.Production.Cqrs.Commands.Deployment`

Source: `src/Production/Production.Cqrs/Commands/Deployment/UpdateDeploymentCommand.cs`

## Summary

Command to update the details of an existing deployment.

## Properties

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

Gets the ordered list of updated deployment items.

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


---
title: "DeploymentItemViewModel"
---

# DeploymentItemViewModel

_public class_

Namespace: `Industria4.Production.WebApp.ViewModels.Deployment`

Source: `src/Production/Production.WebApp/ViewModels/Deployment/DeploymentItemViewModel.cs`

## Summary

View model for a single item within a deployment, associating an OPC UA server with a composition item.

## Properties

### CompositionItem

_property_

```csharp
CompositionItem CompositionItem
```

Gets the composition item that this deployment item is based on.

### Model

_property_

```csharp
ModelRead Model
```

Gets the OPC UA model associated with this deployment item.

### Parent

_property_

```csharp
DeploymentViewModel Parent
```

Gets the parent that owns this item.

### Recipe

_property_

```csharp
RecipeRead Recipe
```

Gets the recipe associated with this deployment item.

## Methods

### ToCommand

_method_

```csharp
DeploymentItem ToCommand()
```

Creates a command payload from the current view-model state. A representing this item for the deployment command.


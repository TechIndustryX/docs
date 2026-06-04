---
title: "GetNodeValuesModel"
---

# GetNodeValuesModel

_public class_

Namespace: `Industria4.Recipes.Http.Recipe`

Source: `src/Recipes/Recipes.Http/Recipe/GetNodeValuesApiModel.cs`

## Summary

API model that converts a map of value parameters to a write-node-ID to dictionary.

## Constructors

### GetNodeValuesModel

_constructor_

```csharp
GetNodeValuesModel(IDictionary<DomainModel.Model.ValueParameterBase,List<DomainModel.Recipe.ValueParameter>> values)
```

Initializes a new model by flattening parameter values keyed by their OPC-UA write node ID. A map from parameter definition to the list of recipe value parameters for that definition.

## Properties

### Nodes

_property_

```csharp
Dictionary<string,DataArrayValue> Nodes
```

Gets or sets the map of OPC-UA write node IDs to their combined .


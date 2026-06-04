---
title: "Industria4.Recipes.DomainModel.Model"
---

# Industria4.Recipes.DomainModel.Model

This namespace contains 10 public API types.

## Types

- [LookupValueItem](./lookupvalueitem.md) _class_ - Represents a single allowable value in a .
- [LookupValueParameter](./lookupvalueparameter.md) _class_ - A recipe model parameter whose value must be chosen from a fixed list of allowable items.
- [Model](./model.md) _class_ - Aggregate root describing the parameter structure (groups and parameters) that a recipe must adhere to.
- [ModelLinkParameter](./modellinkparameter.md) _class_ - A model parameter that also carries a default recipe to apply when the referenced model is used.
- [ModelParameter](./modelparameter.md) _class_ - A parameter that references another model by its identifier, enabling nested model composition.
- [ParameterBase](./parameterbase.md) _class_ - Base class for all recipe/model parameters, providing common localisation, metadata, and array-size features.
- [ParameterGroup](./parametergroup.md) _class_ - Groups a set of parameters under a shared key and sort order.
- [ParameterOperation](./parameteroperation.md) _class_ - Describes the data-type, measurement unit, and display format for a value parameter.
- [ValueParameter](./valueparameter.md) _class_ - A recipe model parameter that holds a typed scalar value constrained by an .
- [ValueParameterBase](./valueparameterbase.md) _class_ - Abstract base for value-type model parameters, providing OPC-UA node IDs, an operation descriptor, and a default value.

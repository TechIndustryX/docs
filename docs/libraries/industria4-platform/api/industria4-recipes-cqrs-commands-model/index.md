---
title: "Industria4.Recipes.Cqrs.Commands.Model"
---

# Industria4.Recipes.Cqrs.Commands.Model

This namespace contains 10 public API types.

## Types

- [AddOrUpdateModelCommand](./addorupdatemodelcommand.md) _class_ - Command to create a new recipe model or update an existing one.
- [DeleteModelCommand](./deletemodelcommand.md) _class_ - Command to permanently delete a recipe model.
- [LookupValueItem](./lookupvalueitem.md) _class_ - A single selectable item in a definition.
- [LookupValueParameter](./lookupvalueparameter.md) _class_ - A value parameter definition whose allowed values are constrained to a predefined lookup list.
- [ModelLinkParameter](./modellinkparameter.md) _class_ - A model parameter definition that links to an existing recipe (model-link pattern).
- [ModelParameter](./modelparameter.md) _class_ - A model parameter definition that references another nested model.
- [ParameterBase](./parameterbase.md) _class_ - Abstract base for all model parameter definition command DTOs.
- [ParameterGroup](./parametergroup.md) _class_ - A group of parameter definitions within a recipe model, identified by a unique key.
- [ValueParameter](./valueparameter.md) _class_ - A numeric value parameter definition with optional minimum and maximum bounds.
- [ValueParameterBase](./valueparameterbase.md) _class_ - Abstract base for value-type model parameter definitions with OPC-UA node IDs and a data type.

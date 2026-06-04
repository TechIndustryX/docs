---
title: "Industria4.Recipes.Cqrs.Commands.Recipe"
---

# Industria4.Recipes.Cqrs.Commands.Recipe

This namespace contains 9 public API types.

## Types

- [AddRecipeCommand](./addrecipecommand.md) _class_ - Command to create a new recipe.
- [CloneRecipeCommand](./clonerecipecommand.md) _class_ - Command to clone an existing recipe into a new recipe with the given descriptions.
- [DeleteRecipeCommand](./deleterecipecommand.md) _class_ - Command to permanently delete a recipe.
- [ModelLinkParameter](./modellinkparameter.md) _class_ - Recipe parameter value DTO that references a linked recipe by ID.
- [ModelParameter](./modelparameter.md) _class_ - Recipe parameter value DTO that holds nested parameter groups for each element of an array model parameter.
- [ParameterBase](./parameterbase.md) _class_ - Abstract base for recipe parameter value command DTOs.
- [ParameterGroup](./parametergroup.md) _class_ - A group of recipe parameter values, scoped to a model and key.
- [UpdateRecipeCommand](./updaterecipecommand.md) _class_ - Command to update an existing recipe's descriptions, parameters, remote links, and metadata.
- [ValueParameter](./valueparameter.md) _class_ - Recipe parameter value DTO holding a .

---
title: "ModelLinkParameter"
---

# ModelLinkParameter

_public class_

Namespace: `Industria4.Recipes.DomainModel.Model`

Source: `src/Recipes/Recipes.DomainModel/Model/ModelLinkParameter.cs`

## Summary

A model parameter that also carries a default recipe to apply when the referenced model is used.

## Constructors

### ModelLinkParameter

_constructor_

```csharp
ModelLinkParameter(string modelId,string defaultRecipeId)
```

Initializes a new model-link parameter with a referenced model and optional default recipe. The identifier of the referenced model. The default recipe identifier, or `null` for no default.


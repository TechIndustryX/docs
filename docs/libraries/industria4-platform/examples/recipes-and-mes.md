---
title: Recipes and MES
---

# Recipes and MES

## Scenario

Use recipe models to define production parameters and connect selected recipes to MES/order execution.

## Recipe Model

```json title="press-recipe.json"
{
  "code": "PRESS-A",
  "name": "Press Recipe A",
  "parameters": [
    { "name": "Temperature", "type": "Real", "unit": "C", "min": 20, "max": 90 },
    { "name": "Pressure", "type": "Real", "unit": "bar", "min": 1, "max": 8 },
    { "name": "CycleTime", "type": "TimeSpan", "unit": "s", "min": 1, "max": 20 }
  ]
}
```

## Execution Pattern

```csharp
public async Task ApplyRecipeToOrderAsync(Guid recipeId, Guid orderId, CancellationToken token)
{
    var recipe = await recipes.GetAsync(recipeId, token);
    var order = await mes.GetOrderAsync(orderId, token);

    order.AssignRecipe(recipe.Code, recipe.Parameters);
    await mes.SaveOrderAsync(order, token);

    await commandBus.Send(new SendRecipeToLineCommand(orderId, recipe.Code), token);
}
```

## Step By Step

1. Define recipe models with parameter types and validation ranges.
2. Create recipe instances approved for production.
3. Link a recipe to a MES order.
4. Validate parameters against the model before release.
5. Send the recipe to the line through a command.
6. Track command completion and operator acknowledgement.

## Validation

Try one valid and one invalid parameter set. The invalid set must be rejected before it reaches the production line.

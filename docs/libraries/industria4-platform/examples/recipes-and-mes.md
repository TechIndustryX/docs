---
title: Recipes and MES
---

# Recipes and MES

## Scenario

Coordinate production recipes with MES work orders and operational state.

## Source Pattern

`RecipeHandler` manages recipe add/update/delete/clone flows. `MesHandler` creates work orders, applies quantity changes, validates state and publishes work-order events.

## Steps

1. Create or update recipe/model data.
2. Create a MES work order that references the operational context.
3. Move the work order through valid states.
4. Apply done or waste quantity changes only when the work order state allows it.
5. Listen for work-order changed and quantity-added events.

## Expected Result

Recipe configuration and production execution share a consistent command/event model.


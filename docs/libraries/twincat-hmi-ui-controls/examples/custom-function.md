---
title: Custom Function
---

# Custom Function

## Scenario

Use a project function to transform HMI state before it reaches a control property.

## Source Pattern

`TcHmiSample/Functions/BoolToRedGreenFunction.ts` registers a function that converts a boolean into a red or green solid color. `LiveSvgSample.content` uses the function in a binding expression.

## Steps

1. Implement the function under `TcHmi.Functions.<Project>`.
2. Register it with `registerFunctionEx`.
3. Reference the function from a binding expression.
4. Return the exact type expected by the target property.

## Expected Result

Control styling rules stay reusable and testable instead of being duplicated in page triggers.


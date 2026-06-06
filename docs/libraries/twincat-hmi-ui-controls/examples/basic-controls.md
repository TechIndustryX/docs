---
title: Basic Controls
---

# Basic Controls

## Scenario

Build a compact operator panel with input, status and command controls.

## Source Pattern

`TcHmiSample/Contents/ControlsSample.content` uses `NumericTextBox`, `IconLabel`, `Progress`, `Led`, `IconButton`, `Switch`, `Popover` and `ImageCanvas`.

## Steps

1. Add the extension package to the TwinCAT HMI project.
2. Place the control on the content page.
3. Bind values with TwinCAT HMI symbol expressions.
4. Configure visual classes such as Bootstrap button or alert styles.
5. Use triggers when a control should update another control property.

## Expected Result

The screen uses reusable controls instead of custom one-off markup for common operator interactions.


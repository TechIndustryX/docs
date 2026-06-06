---
title: Custom Function
---

# Custom Function

## Scenario

Create a small HMI function that converts a PLC value into a display color or CSS class.

## Function Example

```js title="BoolToColor.js"
TcHmi.Functions.registerFunctionEx(
  'BoolToColor',
  'TechIndustry.TcHmi',
  function (value, trueColor, falseColor) {
    return value ? trueColor : falseColor;
  }
);
```

## Binding Example

```html
<TcHmi.Controls.TechIndustry_TcHmi_Bootstrap_Controls.IconLabel
  Data-tchmi-name="AutoModeLabel"
  Data-tchmi-text="Auto"
  Data-tchmi-color="%f%TechIndustry.TcHmi.BoolToColor(%s%PLC1.MAIN.bAutoMode%/s%, '#27ae60', '#95a5a6')%/f%" />
```

## Step By Step

1. Create the JavaScript function in the HMI project.
2. Register it with `TcHmi.Functions.registerFunctionEx`.
3. Use only simple, deterministic logic.
4. Call the function from a binding expression.
5. Test true, false, null and unexpected values.
6. Use the function across controls that need the same visual rule.

## Validation

Toggle the bound PLC boolean and confirm the control color changes immediately.

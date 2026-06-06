---
title: Basic Controls
---

# Basic Controls

## Scenario

Build a simple machine control panel with state indicators, commands and numeric setpoints.

## Control Layout

```html title="ControlsSample.content"
<TcHmi.Controls.TechIndustry_TcHmi_Bootstrap_Controls.Switch
  Data-tchmi-name="AutoModeSwitch"
  Data-tchmi-left="24"
  Data-tchmi-top="24"
  Data-tchmi-width="120"
  Data-tchmi-height="44"
  Data-tchmi-value="%s%PLC1.MAIN.bAutoMode%/s%" />

<TcHmi.Controls.TechIndustry_TcHmi_Bootstrap_Controls.Led
  Data-tchmi-name="RunningLed"
  Data-tchmi-left="24"
  Data-tchmi-top="84"
  Data-tchmi-width="32"
  Data-tchmi-height="32"
  Data-tchmi-value="%s%PLC1.MAIN.bRunning%/s%" />

<TcHmi.Controls.TechIndustry_TcHmi_Bootstrap_Controls.NumericTextbox
  Data-tchmi-name="SpeedSetpoint"
  Data-tchmi-left="24"
  Data-tchmi-top="136"
  Data-tchmi-width="160"
  Data-tchmi-height="44"
  Data-tchmi-value="%s%PLC1.MAIN.fSpeedSetpoint%/s%" />
```

## Step By Step

1. Add the controls package to the TwinCAT HMI project.
2. Place controls from the toolbox or copy from `ControlsSample.content`.
3. Bind `Switch.Value` to a boolean PLC symbol.
4. Bind `Led.Value` to a boolean state symbol.
5. Bind `NumericTextbox.Value` to a numeric setpoint.
6. Test write permissions for command/setpoint bindings.
7. Apply consistent sizing so controls align in operator screens.

## Validation

Toggle the switch from the HMI and confirm the PLC symbol changes. Force the PLC running state and confirm the LED updates.

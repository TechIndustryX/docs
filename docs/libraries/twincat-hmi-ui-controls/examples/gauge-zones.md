---
title: Gauge Zones
---

# Gauge Zones

## Scenario

Show a process value with visual ranges for normal, warning and alarm states.

## Gauge Example

```html title="GaugeSample.content"
<TcHmi.Controls.TechIndustry_TcHmi_Controls.Gauge
  Data-tchmi-name="TemperatureGauge"
  Data-tchmi-left="32"
  Data-tchmi-top="32"
  Data-tchmi-width="280"
  Data-tchmi-height="220"
  Data-tchmi-value="%s%PLC1.MAIN.fTemperature%/s%"
  Data-tchmi-min-value="0"
  Data-tchmi-max-value="120"
  Data-tchmi-unit="°C" />
```

## Step By Step

1. Place the `Gauge` control on the page.
2. Bind `Value` to the PLC process value.
3. Set minimum and maximum values to the real engineering range.
4. Configure unit text for operator clarity.
5. Add warning/alarm zones in the control properties when available.
6. Test low, normal and high values from the PLC.

## Validation

Simulate values around the range boundaries and confirm the operator can distinguish normal, warning and alarm zones immediately.

---
title: Gauge Zones
---

# Gauge Zones

## Scenario

Visualize a process value with operating ranges and clear thresholds.

## Source Pattern

`TcHmiSample/Contents/GaugeSample.content` configures a `Gauge` with min/max values, zones, labels and pointer/stroke colors.

## Steps

1. Add the `Gauge` control to the HMI content.
2. Bind `Value` to the process value.
3. Set `MinValue` and `MaxValue`.
4. Configure zones for normal, warning and alarm ranges.
5. Configure labels so operators can read thresholds quickly.

## Expected Result

The gauge communicates value and operating range without requiring the operator to interpret raw numbers.


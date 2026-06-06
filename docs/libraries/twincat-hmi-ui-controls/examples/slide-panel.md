---
title: Slide Panel
---

# Slide Panel

## Scenario

Build a collapsible panel for secondary controls, diagnostics or manual operations.

## Control Example

```html title="SlidePanelSample.content"
<TcHmi.Controls.TechIndustry_TcHmi_Bootstrap_Controls.SlidePanel
  Data-tchmi-name="ManualPanel"
  Data-tchmi-left="0"
  Data-tchmi-top="0"
  Data-tchmi-width="360"
  Data-tchmi-height="100%"
  Data-tchmi-position="Right"
  Data-tchmi-is-open="%s%PLC1.MAIN.bManualPanelOpen%/s%" />
```

## Step By Step

1. Add `SlidePanel` to the page edge where it should open.
2. Bind `IsOpen` to a PLC or HMI symbol.
3. Put manual controls inside the panel.
4. Keep primary machine status outside the panel.
5. Add a clear open/close button.
6. Test that opening the panel does not cover critical alarms.

## Validation

Open and close the panel repeatedly while machine values update. The page should not shift unexpectedly and bindings should remain active.

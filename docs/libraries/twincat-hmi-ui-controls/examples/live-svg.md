---
title: Live SVG
---

# Live SVG

## Scenario

Use `LiveSvg` to render a machine drawing and update visual state from PLC values.

## Control Example

```html title="LiveSvgSample.content"
<TcHmi.Controls.TechIndustry_TcHmi_Controls.LiveSvg
  Data-tchmi-name="PressSvg"
  Data-tchmi-left="0"
  Data-tchmi-top="0"
  Data-tchmi-width="640"
  Data-tchmi-height="360"
  Data-tchmi-src="Images/press.svg" />
```

## Script Pattern

```js title="press-state.js"
TcHmi.EventProvider.register('PressSvg.onAttached', function () {
  // Resolve the LiveSvg control after TcHmi has attached it to the page.
  const control = TcHmi.Controls.get('PressSvg');

  TcHmi.Symbol.readEx2('%s%PLC1.MAIN.bRunning%/s%', function (data) {
    if (data.error === TcHmi.Errors.NONE) {
      // Drive visual state by changing the SVG element class.
      control.setElementClass('motor', data.value ? 'running' : 'stopped');
    }
  });
});
```

## Step By Step

1. Create an SVG with stable element IDs or class names.
2. Add `LiveSvg` to the HMI page.
3. Set `Src` to the SVG asset.
4. Bind or script PLC values to SVG element classes.
5. Define CSS classes for states such as running, stopped and alarm.
6. Test all states from PLC simulation.

## Validation

The SVG should change state without reloading the page and without losing scale when the panel is resized.

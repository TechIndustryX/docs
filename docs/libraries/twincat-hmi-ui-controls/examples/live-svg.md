---
title: Live SVG
---

# Live SVG

## Scenario

Turn a machine SVG into a live HMI element with text, color and click interactions.

## Source Pattern

`TcHmiSample/Contents/LiveSvgSample.content` binds SVG selectors to text and fill values and handles `onItemClicked`.

## Steps

1. Place `LiveSvg` and set `Src` to the SVG asset.
2. Add item mappings with CSS selectors.
3. Bind text or fill values to controls, symbols or functions.
4. Add an `onItemClicked` trigger for interactive elements.
5. Write the result to the relevant control or symbol.

## Expected Result

The SVG becomes a live operator surface instead of a static image.


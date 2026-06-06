---
title: Slide Panel
---

# Slide Panel

## Scenario

Create a dynamic panel that opens a set of reusable cards or user controls.

## Source Pattern

`TcHmiSample/Contents/SlidePanelSample.content` configures a `SlidePanel` with items that point to `Card.usercontrol`, `Card2.usercontrol` and `Card3.usercontrol`.

## Steps

1. Create user controls for reusable cards.
2. Add a `SlidePanel` to the page.
3. Configure item title, id, icon and target user control.
4. Pass attributes to the user control when it needs input data.
5. Bind the panel value to control open/close state.

## Expected Result

Operators can navigate modular content without duplicating card layouts across screens.


---
title: Runtime Context
---

# Runtime Context

## Scenario

Pass WinCC runtime context to the web page so it can adapt language and user-specific behavior.

## Source Pattern

`ChroniumBrowser.OpenUrl` appends the `culture` query-string parameter and exposes a `hosting` object to page scripts with user data.

## Steps

1. Set `Culture` from the HMI language.
2. Set `UserName` and `Password` only when the hosted application requires runtime context.
3. Let the control recreate navigation when context changes.
4. Read the `hosting` object from the web page.

## Expected Result

The hosted page receives the same session context as the HMI screen and can localize or authenticate accordingly.


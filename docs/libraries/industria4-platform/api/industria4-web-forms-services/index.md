---
title: "Industria4.Web.Forms.Services"
---

# Industria4.Web.Forms.Services

This namespace contains 10 public API types.

## Types

- [DialogMessage](./dialogmessage.md) _class_ - Describes a modal dialog to display, including its title, body text, optional description, and an optional result callback.
- [DialogService](./dialogservice.md) _class_ - Default implementation of that raises for each dialog request.
- [IDialogService](./idialogservice.md) _interface_ - Provides modal dialog operations for showing informational messages and asking yes/no questions.
- [ILoadingService](./iloadingservice.md) _interface_ - Abstracts the loading-indicator state and safe execution of async operations with error handling.
- [IMenuService](./imenuservice.md) _interface_ - Manages the main and bottom navigation menu items and provides scoped menu registration.
- [LoadingService](./loadingservice.md) _class_ - Implements by wrapping an async operation with loading-indicator management and centralised error handling via .
- [MenuItem](./menuitem.md) _class_ - Represents a single navigation menu entry, supporting link, click, icon, and nested children.
- [MenuService](./menuservice.md) _class_ - Default implementation of that stores navigation items and supports scoped overrides.
- [MenuServiceExtensions](./menuserviceextensions.md) _class_ - Extension methods for removing entries from navigation lists.
- [Scope](./scope.md) _class_ - Snapshot scope that clears the menu collections on enter and restores them on dispose.

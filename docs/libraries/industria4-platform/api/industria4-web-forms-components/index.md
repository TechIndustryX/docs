---
title: "Industria4.Web.Forms.Components"
---

# Industria4.Web.Forms.Components

This namespace contains 32 public API types.

## Types

- [ComponentHook&lt;T&gt;](./componenthook.md) _class_ - Blazor component that wraps another component and forwards parameter-set notifications through . The type of the target component to hook into.
- [ComponentsHook](./componentshook.md) _class_ - Scoped service that allows external code to register callbacks for Blazor component parameter-set events, with optional history replay.
- [ComponentsHookExtensions](./componentshookextensions.md) _class_ - Extension methods for that simplify adding typed component hooks.
- [ContextSection&lt;TContext&gt;](./contextsection.md) _class_ - Blazor component that registers a named typed render fragment into the current .
- [DataGrid&lt;T&gt;](./datagrid.md) _class_ - Extends with Bootstrap styling, integration, and a row-selection event. The item type displayed in the grid.
- [DataGridFilteringMode](./datagridfilteringmode.md) _enum_ - Controls how items in a data grid or select component are matched against a search string.
- [DataGridPaginator](./datagridpaginator.md) _class_ - A hooked version of Paginator that integrates with the ComponentsHook system and provides a custom Bootstrap-styled pagination template.
- [DataGridPropertyColumn&lt;T, TProp&gt;](./datagridpropertycolumn.md) _class_ - Extends to integrate with and support row click interception via .
- [DataGridTemplateColumn&lt;T&gt;](./datagridtemplatecolumn.md) _class_ - Extends to integrate with and optionally intercept row clicks via .
- [IComponentViewModel](./icomponentviewmodel.md) _interface_ - Exposes a public view-model from a Blazor component for use by component hooks and external consumers.
- [InputNumberHack&lt;T&gt;](./inputnumberhack.md) _class_ - Extends to format values using invariant culture, avoiding parse errors with locale-specific decimal separators, and integrates with .
- [ISectionsProvider](./isectionsprovider.md) _interface_ - Contract for objects that supply static section items to a .
- [ModelComponentsHook&lt;T&gt;](./modelcomponentshook.md) _class_ - Fluent builder for registering model-scoped component hooks, keyed by property expressions. The model type used to match row-input and plain-input components.
- [MonitorComponentBase](./monitorcomponentbase.md) _class_ - Base Blazor component that tracks observable changes on registered objects and triggers state re-renders on changes.
- [MultiTagSelection](./multitagselection.md) _class_ - Blazor component for selecting multiple key-value tag pairs, raising events when the selection changes.
- [ObjectRowInput](./objectrowinput.md) _class_ - Blazor row input component that dynamically renders a typed based on the runtime type of the untyped `Value` parameter.
- [ObjectSelect&lt;T&gt;](./objectselect.md) _class_ - Generic Blazor select input bound to a typed data collection with a customisable item template.
- [QuickGridExtensions](./quickgridextensions.md) _class_ - Extension methods for that persist and restore column layout in browser local storage.
- [RowInputBase&lt;TItem&gt;](./rowinputbase.md) _class_ - Base Blazor component for typed form row inputs, providing label, help, and value binding with automatic label inference from data annotations. The value type bound to this input.
- [SearchEvent&lt;TValue&gt;](./searchevent.md) _class_ - Carries a search string and the mutable list of matching items populated by the search handler. The item type.
- [Section](./section.md) _class_ - Blazor component that registers a named render fragment into the current .
- [SectionItem](./sectionitem.md) _class_ - Describes a named render fragment entry registered with a .
- [SectionPlaceholder&lt;TContext&gt;](./sectionplaceholder.md) _class_ - Blazor component that renders registered render fragments for a named section with an optional typed context. The context type passed to typed render fragments.
- [SectionsContext](./sectionscontext.md) _class_ - Manages named render fragments and notifies placeholder components when sections change.
- [Select&lt;TValue&gt;](./select.md) _class_ - Generic Blazor select component backed by SlimSelect, supporting data binding, async search, and customisable text-field display. The type of item displayed and selected by this component.
- [Spinner](./spinner.md) _class_ - Blazor component that renders a Bootstrap spinner element when visible.
- [SwitchInput](./switchinput.md) _class_ - A Blazor checkbox input rendered as a toggle switch, integrated with for parameter-set notifications.
- [TagSelection](./tagselection.md) _class_ - Blazor component for selecting a single key-value tag pair, with async key and value search support.
- [TagSelectionItem](./tagselectionitem.md) _class_ - Represents a single key-value tag selection pair.
- [TagsSelectionExtensions](./tagsselectionextensions.md) _class_ - Extension methods for converting between dictionaries and collections.
- [TagsSelectionKeysEventArgs](./tagsselectionkeyseventargs.md) _class_ - Event arguments for the tag-key search event, carrying the triggering tag item, the filter text, and the result keys.
- [TagsSelectionValuesEventArgs](./tagsselectionvalueseventargs.md) _class_ - Event arguments for the tag-value search event, carrying the selected key, the filter text, and the result values.

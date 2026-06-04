---
title: "Select<TValue>"
---

# Select&lt;TValue&gt;

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/Select.razor.cs`

## Summary

Generic Blazor select component backed by SlimSelect, supporting data binding, async search, and customisable text-field display. The type of item displayed and selected by this component.

## Properties

### AdditionalAttributes

_property_

```csharp
IReadOnlyDictionary<string,object> AdditionalAttributes
```

Gets or sets additional HTML attributes passed through to the underlying select element.

### Data

_property_

```csharp
IReadOnlyList<TValue> Data
```

Gets or sets the static data source for the select options.

### FilteringMode

_property_

```csharp
DataGridFilteringMode FilteringMode
```

Gets or sets the filtering mode applied when matching search input against options.

### Search

_property_

```csharp
EventCallback<SearchEvent<TValue>> Search
```

Gets or sets the callback raised when the user types in the search box.

### TextFieldName

_property_

```csharp
string TextFieldName
```

Gets or sets the property name used to derive the display text for each item.

### Value

_property_

```csharp
TValue Value
```

Gets or sets the currently selected value.

### ValueChanged

_property_

```csharp
EventCallback<TValue> ValueChanged
```

Gets or sets the callback raised when the selected value changes.

### ValueExpression

_property_

```csharp
Expression<Func<TValue>> ValueExpression
```

Gets or sets an expression identifying the bound value, used for validation.

## Methods

### HandleChange

_method_

```csharp
Task HandleChange(List<string> values)
```

Receives JS interop notification when the SlimSelect selection changes. The list of selected value indices as strings.

### HandleSearch

_method_

```csharp
Task<object> HandleSearch(string search)
```

Receives JS interop notification when the user types in the SlimSelect search box, raises the event, and returns SlimSelect-formatted option objects. The search text entered by the user. An array of anonymous SlimSelect option objects.

### OnAfterRenderAsync

_method_

```csharp
Task OnAfterRenderAsync(bool firstRender)
```

### OnParametersSetAsync

_method_

```csharp
Task OnParametersSetAsync()
```


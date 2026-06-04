---
title: "ContextSection<TContext>"
---

# ContextSection&lt;TContext&gt;

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/Section.cs`

## Summary

Blazor component that registers a named typed render fragment into the current .

## Properties

### ChildContent

_property_

```csharp
RenderFragment<TContext> ChildContent
```

Gets or sets the typed content to register under .

### Name

_property_

```csharp
string Name
```

Gets or sets the section name under which the content is registered.

### SectionsContext

_property_

```csharp
SectionsContext SectionsContext
```

Gets or sets the injected sections context used to register content.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

### OnParametersSet

_method_

```csharp
void OnParametersSet()
```


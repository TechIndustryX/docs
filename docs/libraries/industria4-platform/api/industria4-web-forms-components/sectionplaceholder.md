---
title: "SectionPlaceholder<TContext>"
---

# SectionPlaceholder&lt;TContext&gt;

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/SectionPlaceholder.cs`

## Summary

Blazor component that renders registered render fragments for a named section with an optional typed context. The context type passed to typed render fragments.

## Properties

### Context

_property_

```csharp
TContext Context
```

Gets or sets the context value passed to typed render fragments.

### Name

_property_

```csharp
string Name
```

Gets or sets the name of the section whose fragments this placeholder renders.

### SectionsContext

_property_

```csharp
SectionsContext SectionsContext
```

Gets or sets the injected sections context used to look up registered fragments.

## Methods

### BuildRenderTree

_method_

```csharp
void BuildRenderTree(RenderTreeBuilder builder)
```

### Dispose

_method_

```csharp
void Dispose()
```


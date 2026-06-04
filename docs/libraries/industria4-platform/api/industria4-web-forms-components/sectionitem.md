---
title: "SectionItem"
---

# SectionItem

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/SectionPlaceholder.cs`

## Summary

Describes a named render fragment entry registered with a .

## Properties

### Fragment

_property_

```csharp
Delegate Fragment
```

Gets the render fragment delegate registered for this section item.

### Name

_property_

```csharp
string Name
```

Gets the section name this item is registered under.

### Order

_property_

```csharp
int Order
```

Gets or sets the rendering order of this item within its section.

## Methods

### Create

_method_

```csharp
SectionItem Create(string name,RenderFragment fragment,int order = 0)
```

Creates a wrapping a plain render fragment. The section name. The render fragment to register. Optional rendering order.

### Create

_method_

```csharp
SectionItem Create<TComponent>(string name,int order = 0)
```

Creates a that renders a component of type `TComponent`. The component type to render. The section name. Optional rendering order.

### Create

_method_

```csharp
SectionItem Create<TContext>(string name,RenderFragment<TContext> fragment,int order = 0)
```

Creates a wrapping a typed render fragment. The context type passed to the fragment. The section name. The typed render fragment. Optional rendering order.

### CreateWithContextParameter

_method_

```csharp
SectionItem CreateWithContextParameter<TComponent,TContext>(string name,int order = 0)
```

Creates a that renders `TComponent` and passes the section context as a `Context` parameter. The component type to render. The context type passed to the component. The section name. Optional rendering order.


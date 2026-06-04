---
title: "SectionsContext"
---

# SectionsContext

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/Section.cs`

## Summary

Manages named render fragments and notifies placeholder components when sections change.

## Constructors

### SectionsContext

_constructor_

```csharp
SectionsContext(NavigationManager navigationManager,IEnumerable<ISectionsProvider> sectionsProviders)
```

Initialises a new instance, subscribes to navigation changes, and pre-populates sections from registered providers. The navigation manager used to detect page changes. Optional providers that supply static section content.

## Properties

### Callbacks

_property_

```csharp
Dictionary<string,Action> Callbacks
```

Gets the registered notification callbacks keyed by section name.

### RenderFragments

_property_

```csharp
Dictionary<string,List<Delegate>> RenderFragments
```

## Methods

### Add

_method_

```csharp
void Add(string name,Delegate fragment)
```

Adds a render fragment delegate under the specified section name. The section name. The delegate to register.

### Remove

_method_

```csharp
void Remove(string name,Delegate fragment)
```

Removes a specific render fragment delegate from the named section. The section name. The delegate to remove.

### Remove

_method_

```csharp
void Remove(string name)
```

Removes all render fragments registered under the specified section name. The section name to remove.


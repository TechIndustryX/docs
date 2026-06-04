---
title: "WorkOrderViewModelBase"
---

# WorkOrderViewModelBase

_public class_

Namespace: `Industria4.Mes.WebApp.ViewModels.WorkOrder`

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrderViewModelBase.cs`

## Summary

Abstract base view model shared by the work-order edit and changes views. Manages the navigation menu scope and exposes common services.

## Constructors

### WorkOrderViewModelBase

_constructor_

```csharp
WorkOrderViewModelBase(IServiceProvider serviceProvider)
```

## Properties

### LanguageContext

_property_

```csharp
ILanguageContext LanguageContext
```

Gets the language/culture context for localised display.

### ServiceProvider

_property_

```csharp
IServiceProvider ServiceProvider
```

Gets the DI service provider scoped to this view model.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

Releases the active navigation-menu scope, removing any menu items registered by this view model.

### InitMenu

_method_

```csharp
void InitMenu(bool showChanges)
```


---
title: "PackageViewModel"
---

# PackageViewModel

_public class_

Namespace: `Industria4.Hosting.WebApp.ViewModels`

Source: `src/Hosting/Hosting.WebApp/ViewModels/PackageViewModel.cs`

## Constructors

### PackageViewModel

_constructor_

```csharp
PackageViewModel(PackageRead packageRead,IServiceProvider serviceProvider)
```

## Properties

### Configuration

_property_

```csharp
string Configuration
```

### Id

_property_

```csharp
string Id
```

### Modules

_property_

```csharp
IEnumerable<PackageModuleViewModel> Modules
```

### Name

_property_

```csharp
string Name
```

### Version

_property_

```csharp
Version Version
```

## Methods

### LoadAsync

_method_

```csharp
Task LoadAsync()
```

### SaveAsync

_method_

```csharp
Task SaveAsync()
```


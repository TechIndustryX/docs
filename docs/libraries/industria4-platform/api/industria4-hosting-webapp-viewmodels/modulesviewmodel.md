---
title: "ModulesViewModel"
---

# ModulesViewModel

_public class_

Namespace: `Industria4.Hosting.WebApp.ViewModels`

Source: `src/Hosting/Hosting.WebApp/ViewModels/ModulesViewModel.cs`

## Properties

### Packages

_property_

```csharp
IEnumerable<PackageViewModel> Packages
```

### SelectedPackage

_property_

```csharp
PackageViewModel SelectedPackage
```

## Methods

### AddPackagesAsync

_method_

```csharp
Task AddPackagesAsync(string[] ids)
```

### DeleteAsync

_method_

```csharp
Task DeleteAsync()
```

### LoadAsync

_method_

```csharp
Task LoadAsync()
```

### PackageUploadFailedAsync

_method_

```csharp
Task PackageUploadFailedAsync(string error)
```

### PackageUploadStartedAsync

_method_

```csharp
Task PackageUploadStartedAsync()
```

### Restart

_method_

```csharp
Task Restart()
```

### SetSelectedPackageAsync

_method_

```csharp
Task SetSelectedPackageAsync(PackageViewModel package)
```


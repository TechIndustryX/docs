---
title: "DeploymentViewModel"
---

# DeploymentViewModel

_public class_

Namespace: `Industria4.Production.WebApp.ViewModels.Deployment`

Source: `src/Production/Production.WebApp/ViewModels/Deployment/DeploymentViewModel.cs`

## Summary

View-model for the deployment create/edit page, encapsulating load, save, delete, and download operations.

## Constructors

### DeploymentViewModel

_constructor_

```csharp
DeploymentViewModel(IServiceProvider serviceProvider)
```

Initialises a new instance of . The application service provider used to resolve dependencies.

## Properties

### CompositionId

_property_

```csharp
string CompositionId
```

Gets the identifier of the parent composition for this deployment.

### DeploymentId

_property_

```csharp
string DeploymentId
```

Gets the identifier of the deployment currently being edited, or for a new deployment.

### Description

_property_

```csharp
LanguageDictionary<string> Description
```

Gets or sets the multilingual description of the deployment.

### IsNew

_property_

```csharp
bool IsNew
```

Gets or sets a value indicating whether this is a new (unsaved) deployment.

### Items

_property_

```csharp
ObservableCollectionEx<DeploymentItemViewModel> Items
```

Gets the collection of deployment item view-models belonging to this deployment.

### LanguageContext

_property_

```csharp
ILanguageContext LanguageContext
```

Gets the active language context used for localisation.

### Models

_property_

```csharp
ModelRead[] Models
```

Gets the available product models that can be selected for items.

### Recipes

_property_

```csharp
RecipeRead[] Recipes
```

Gets the available recipes that can be selected for items.

### Servers

_property_

```csharp
ServerRead[] Servers
```

Gets the available OPC UA servers that can be assigned to deployment items.

### ServiceProvider

_property_

```csharp
IServiceProvider ServiceProvider
```

Gets the application service provider.

## Methods

### DeleteAsync

_method_

```csharp
Task DeleteAsync()
```

Prompts the user to confirm deletion, then deletes the deployment and navigates back to the list. A representing the asynchronous operation.

### Dispose

_method_

```csharp
void Dispose()
```

Releases menu-scope resources.

### DownloadAsync

_method_

```csharp
Task DownloadAsync()
```

Downloads the deployment configuration, prompting to save first if required. A representing the asynchronous operation.

### LoadAsync

_method_

```csharp
Task LoadAsync(string compositionId,string deploymentId)
```

Loads deployment data, composition items, and related lookup data for the given identifiers. The parent composition identifier. The deployment identifier to load, or / empty for a new deployment. A representing the asynchronous load operation.

### SaveAsync

_method_

```csharp
Task<bool> SaveAsync()
```

Persists the deployment (create or update) and shows a confirmation toast. if the save succeeded; otherwise .


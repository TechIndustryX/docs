---
title: "NavigationManagerExtensions"
---

# NavigationManagerExtensions

_public class_

Namespace: `Microsoft.AspNetCore.Components`

Source: `src/Production/Production.WebApp/Routing/NavigationManagerExtensions.cs`

## Summary

Extension methods that provide strongly-typed navigation for Production routes.

## Methods

### NavigateToCompositions

_method_

```csharp
void NavigateToCompositions(this NavigationManager navigationManager)
```

Navigates to the compositions list page.

### NavigateToDeployments

_method_

```csharp
void NavigateToDeployments(this NavigationManager navigationManager)
```

Navigates to the deployments list page.

### NavigateToEditComposition

_method_

```csharp
void NavigateToEditComposition(this NavigationManager navigationManager,string compositionId)
```

Navigates to the edit page for the given composition. The navigation manager. The identifier of the composition to edit.

### NavigateToEditDeployment

_method_

```csharp
void NavigateToEditDeployment(this NavigationManager navigationManager,string deploymentId)
```

Navigates to the edit page for the given deployment. The navigation manager. The identifier of the deployment to edit.

### NavigateToNewComposition

_method_

```csharp
void NavigateToNewComposition(this NavigationManager navigationManager,string groupKey)
```

Navigates to the new composition page, optionally scoped to the given group key. The navigation manager. Optional group key to pre-select on the new composition page.

### NavigateToNewComposition

_method_

```csharp
void NavigateToNewComposition(this NavigationManager navigationManager)
```

Navigates to the new composition page without a group key.

### NavigateToNewDeployment

_method_

```csharp
void NavigateToNewDeployment(this NavigationManager navigationManager,string compositionId,string groupKey)
```

Navigates to the new deployment page for the given composition, optionally scoped to the given group key. The navigation manager. The identifier of the composition to deploy. Optional group key to pre-select on the new deployment page.

### NavigateToNewDeployment

_method_

```csharp
void NavigateToNewDeployment(this NavigationManager navigationManager,string compositionId)
```

Navigates to the new deployment page for the given composition. The navigation manager. The identifier of the composition to deploy.


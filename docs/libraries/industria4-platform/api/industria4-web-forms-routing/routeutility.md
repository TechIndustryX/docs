---
title: "RouteUtility"
---

# RouteUtility

_public class_

Namespace: `Industria4.Web.Forms.Routing`

Source: `src/Shared/Web.Forms/Routing/RouteUtility.cs`

## Summary

Utility methods for reflecting over Blazor routing and authorization attributes.

## Methods

### GetAuthorizes

_method_

```csharp
IEnumerable<AuthorizeAttribute> GetAuthorizes(Type type)
```

Returns the instances declared on the given `type`. The component type to inspect. The authorize attributes.

### GetRouteRootTemplate

_method_

```csharp
string GetRouteRootTemplate(Type type)
```

Returns the first route template with no path parameters, throwing if none exists. The component type to inspect. The root (parameter-free) route template.

### GetRouteRootTemplate

_method_

```csharp
string GetRouteRootTemplate<T>()
```

Returns the first route template with no path parameters for component type `T`. The component type to inspect. The root (parameter-free) route template.

### GetRouteTemplates

_method_

```csharp
IEnumerable<string> GetRouteTemplates(Type type)
```

Returns the route templates declared on the given `type`. The component type to inspect. The route template strings.

### GetRouteTemplates

_method_

```csharp
IEnumerable<string> GetRouteTemplates<T>()
```

Returns the route templates declared on component type `T`. The component type to inspect. The route template strings.


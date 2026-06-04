---
title: "LoadingDataEventArgs"
---

# LoadingDataEventArgs

_public class_

Namespace: `Industria4.Mes.WebApp.ViewModels.WorkOrder`

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrdersViewModel.cs`

## Summary

Event arguments passed to the event. Subscribers may replace or extend to add extra filter predicates.

## Constructors

### LoadingDataEventArgs

_constructor_

```csharp
LoadingDataEventArgs(IQueryable<WorkOrderRead> query)
```

Initialises a new instance with the initial `query`.

## Properties

### Query

_property_

```csharp
IQueryable<WorkOrderRead> Query
```

Gets or sets the OData queryable that will be sent to the server. Subscribers can wrap this with additional `.Where()` clauses.


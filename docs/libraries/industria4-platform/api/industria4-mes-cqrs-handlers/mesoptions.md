---
title: "MesOptions"
---

# MesOptions

_public class_

Namespace: `Industria4.Mes.Cqrs.Handlers`

Source: `src/Mes/Mes.Cqrs.Handlers/MesOptions.cs`

## Summary

Runtime configuration options for the MES command handler and scheduler.

## Properties

### ActiveWorkOrderMode

_property_

```csharp
ActiveWorkOrderMode ActiveWorkOrderMode
```

Gets or sets the concurrency policy that controls how many work orders can be in `Running` state simultaneously.

### AutoExpireWorkOrdersInterval

_property_

```csharp
TimeSpan? AutoExpireWorkOrdersInterval
```

Gets or sets the interval at which overdue work orders are automatically transitioned to `Expired`. When `null` auto-expiry is disabled.

### AutoPromoteWorkOrdersInterval

_property_

```csharp
TimeSpan? AutoPromoteWorkOrdersInterval
```

Gets or sets the interval at which `New` work orders whose release date has passed are automatically promoted to `Ready`. When `null` auto-promotion is disabled.

### CanAlwaysCompleteOrder

_property_

```csharp
bool CanAlwaysCompleteOrder
```

Gets or sets a value indicating whether a work order can always be completed even if is still less than .

### OrderNumberFormat

_property_

```csharp
string OrderNumberFormat
```

Gets or sets the format string used to auto-generate order numbers (positional argument `&#123;0&#125;` is the sequential count). Defaults to `"&#123;0:0000000&#125;"`.

### WorkOrderPriority

_property_

```csharp
WorkOrderPriorityMode WorkOrderPriority
```

Gets or sets the sort direction applied to work-order priority when selecting the next work order to run. Defaults to (highest number first).


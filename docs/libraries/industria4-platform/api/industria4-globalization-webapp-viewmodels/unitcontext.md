---
title: "UnitContext"
---

# UnitContext

_internal class_

Namespace: `Industria4.Globalization.WebApp.ViewModels`

Source: `src/Globalization/Globalization.WebApp/ViewModels/UnitContext.cs`

## Constructors

### UnitContext

_constructor_

```csharp
UnitContext(UnitsetClient unitsetClient,UnitClient unitClient)
```

## Properties

### CurrentUnitSetId

_property_

```csharp
string CurrentUnitSetId
```

## Methods

### Convert

_method_

```csharp
object Convert(string fromUnitId,string toUnitId,object value)
```

### ConvertToString

_method_

```csharp
string ConvertToString(string fromUnitId,string toUnitId,object value)
```

### GetMappedDescription

_method_

```csharp
string GetMappedDescription(string unitId)
```

### GetMappedUnitId

_method_

```csharp
string GetMappedUnitId(string unitId)
```

### LoadAsync

_method_

```csharp
Task LoadAsync()
```

### SetCurrentUnitSetIdAsync

_method_

```csharp
Task SetCurrentUnitSetIdAsync(string unitSetId)
```


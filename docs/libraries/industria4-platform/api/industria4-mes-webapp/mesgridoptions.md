---
title: "MesGridOptions"
---

# MesGridOptions

_public class_

Namespace: `Industria4.Mes.WebApp`

Source: `src/Mes/Mes.WebApp/MesOptions.cs`

## Summary

Configuration for the work-order grid columns and sort order.

## Properties

### AdditionalColumns

_property_

```csharp
Dictionary<string,MesGridAdditionalColumnOptions> AdditionalColumns
```

Gets or sets the map of extra column definitions (key = field name). Each entry contains a culture→label dictionary.

### AdditionalColumnsTyped

_property_

```csharp
Dictionary<string,LanguageDictionary<string>> AdditionalColumnsTyped
```

Gets a lazily computed version of with camelCase keys and strongly-typed values.

### Columns

_property_

```csharp
string[] Columns
```

Gets or sets the ordered list of column names to show. When `null`, a built-in default set is used.

### ColumnsOrDefaults

_property_

```csharp
string[] ColumnsOrDefaults
```

### DefaultSortColumn

_property_

```csharp
MesGridDefaultSortColumnOptions DefaultSortColumn
```

Gets or sets the default sort column and direction applied on first load.


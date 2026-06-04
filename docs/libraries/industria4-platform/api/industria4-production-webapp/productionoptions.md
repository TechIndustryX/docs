---
title: "ProductionOptions"
---

# ProductionOptions

_public class_

Namespace: `Industria4.Production.WebApp`

Source: `src/Production/Production.WebApp/ProductionOptions.cs`

## Summary

Runtime configuration options for the Production WebApp module (additional display fields, OpcUa support flag).

## Properties

### AdditionalFields

_property_

```csharp
Dictionary<string,Dictionary<string,string>> AdditionalFields
```

Gets the raw dictionary of additional display fields keyed by field name, with a nested culture→label map. Populated directly from configuration.

### AdditionalFieldsTyped

_property_

```csharp
Dictionary<string,LanguageDictionary<string>> AdditionalFieldsTyped
```

Gets a lazily-materialised version of with camelCase keys and properly-typed values.

### SupportOpcUa

_property_

```csharp
bool SupportOpcUa
```

Gets or sets a value indicating whether OpcUa integration features are enabled in the UI. Defaults to `true`.


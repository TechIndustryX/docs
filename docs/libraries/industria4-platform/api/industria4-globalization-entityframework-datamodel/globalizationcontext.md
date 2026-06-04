---
title: "GlobalizationContext"
---

# GlobalizationContext

_internal class_

Namespace: `Industria4.Globalization.EntityFramework.DataModel`

Source: `src/Globalization/Globalization.EntityFramework/DataModel/GlobalizationContext.cs`

## Constructors

### GlobalizationContext

_constructor_

```csharp
GlobalizationContext(DbContextOptions<GlobalizationContext> options)
```

## Properties

### Units

_property_

```csharp
DbSet<Units.Unit> Units
```

### UnitSets

_property_

```csharp
DbSet<Units.UnitSet> UnitSets
```

## Methods

### OnModelCreating

_method_

```csharp
void OnModelCreating(ModelBuilder modelBuilder)
```


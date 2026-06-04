---
title: "ProductionContext"
---

# ProductionContext

_internal class_

Namespace: `Industria4.Production.EntityFramework.DataModel`

Source: `src/Production/Production.EntityFramework/DataModel/ProductionContext.cs`

## Constructors

### ProductionContext

_constructor_

```csharp
ProductionContext(DbContextOptions<ProductionContext> options)
```

## Properties

### CompositionItems

_property_

```csharp
DbSet<Composition.CompositionItem> CompositionItems
```

### Compositions

_property_

```csharp
DbSet<Composition.Composition> Compositions
```

### Deployments

_property_

```csharp
DbSet<Deployment.Deployment> Deployments
```

## Methods

### OnModelCreating

_method_

```csharp
void OnModelCreating(ModelBuilder modelBuilder)
```


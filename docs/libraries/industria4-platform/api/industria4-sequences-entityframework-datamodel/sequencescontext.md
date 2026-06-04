---
title: "SequencesContext"
---

# SequencesContext

_internal class_

Namespace: `Industria4.Sequences.EntityFramework.DataModel`

Source: `src/Sequences/Sequences.EntityFramework/DataModel/SequencesContext.cs`

## Constructors

### SequencesContext

_constructor_

```csharp
SequencesContext(DbContextOptions<SequencesContext> options)
```

## Properties

### Sequences

_property_

```csharp
DbSet<Sequence> Sequences
```

## Methods

### OnConfiguring

_method_

```csharp
void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
```

### OnModelCreating

_method_

```csharp
void OnModelCreating(ModelBuilder modelBuilder)
```


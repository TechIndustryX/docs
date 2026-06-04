---
title: "IdentityContext"
---

# IdentityContext

_internal class_

Namespace: `Industria4.Identity.EntityFramework.DataModel`

Source: `src/Identity/Identity.EntityFramework/DataModel/IdentityContext.cs`

## Constructors

### IdentityContext

_constructor_

```csharp
IdentityContext(DbContextOptions<IdentityContext> options)
```

## Properties

### AuditLogs

_property_

```csharp
DbSet<AuditLog> AuditLogs
```

## Methods

### ConfigureConventions

_method_

```csharp
void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
```

### OnModelCreating

_method_

```csharp
void OnModelCreating(ModelBuilder builder)
```


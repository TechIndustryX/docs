---
title: "DepdendenciesExtensions"
---

# DepdendenciesExtensions

_public class_

Namespace: `Industria4.Web`

Source: `src/Shared/Web/Dependencies.cs`

## Summary

Extension methods for configuring dependency checkers on .

## Methods

### AddSqlConnectionCheck

_method_

```csharp
DependenciesConfiguration AddSqlConnectionCheck(this DependenciesConfiguration configuration,string connectionString)
```

Adds a SQL Server check

### AddSqlConnectionsCheck

_method_

```csharp
DependenciesConfiguration AddSqlConnectionsCheck(this DependenciesConfiguration configuration)
```

Adds a SQL Server check for all available connection strings

### AddTcpCheck

_method_

```csharp
DependenciesConfiguration AddTcpCheck(this DependenciesConfiguration configuration,string host,int port)
```

Adds a TCP connection check


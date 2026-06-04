---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.OpcUa.WebApi`

Source: `src/OpcUa/OpcUa.WebApi/Startup.cs`

## Summary

ASP.NET Core startup configuration for the OPC-UA WebApi service.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)
```

Initialises a new with configuration and hosting environment.

## Properties

### Configuration

_property_

```csharp
IConfiguration Configuration
```

Gets the application configuration.

### HostingEnvironment

_property_

```csharp
IHostEnvironment HostingEnvironment
```

Gets the current hosting environment.

## Methods

### Configure

_method_

```csharp
void Configure(IApplicationBuilder app)
```

Configures the HTTP request pipeline.

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Configures the dependency-injection container.


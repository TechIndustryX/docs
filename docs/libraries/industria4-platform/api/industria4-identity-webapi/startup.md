---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.Identity.WebApi`

Source: `src/Identity/Identity.WebApi/Startup.cs`

## Summary

Configures services and the HTTP request pipeline for the Identity Web API.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)
```

Initializes a new instance of . The application configuration. The hosting environment.

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

Gets the hosting environment.

## Methods

### Configure

_method_

```csharp
void Configure(IApplicationBuilder app)
```

Configures the HTTP request pipeline. The application builder.

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Registers application services with the dependency injection container. The service collection.


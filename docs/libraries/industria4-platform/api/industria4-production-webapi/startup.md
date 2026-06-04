---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.Production.WebApi`

Source: `src/Production/Production.WebApi/Startup.cs`

## Summary

Configures services and the HTTP request pipeline for the Production Web API.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)
```

Initializes a new with the supplied configuration and host environment. Application configuration. The hosting environment.

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

Configures the HTTP request pipeline, routing, authentication, and OpenAPI middleware.

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Registers application services, EF, CQRS, OpenAPI, and authorization with the DI container.


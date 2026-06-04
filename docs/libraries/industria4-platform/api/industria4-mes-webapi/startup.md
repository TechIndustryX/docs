---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.Mes.WebApi`

Source: `src/Mes/Mes.WebApi/Startup.cs`

## Summary

ASP.NET Core startup class for the MES Web API host.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)
```

Initialises a new with the application configuration and hosting environment.

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

Gets the current hosting environment (Development, Staging, Production…).

## Methods

### Configure

_method_

```csharp
void Configure(IApplicationBuilder app)
```

Configures the HTTP request pipeline: CORS, localisation, routing, authentication, OpenAPI, and OData endpoints.

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Registers all required services: EF, service-bus, CQRS handlers, OData controllers, OpenAPI, and security policies.


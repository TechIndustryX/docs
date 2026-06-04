---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.Gateway.WebApi`

Source: `src/Gateway/Gateway.WebApi/Startup.cs`

## Summary

ASP.NET Core startup class that configures the Gateway Web API service container and HTTP pipeline.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)
```

Initializes a new with application configuration and hosting environment.

## Properties

### Configuration

_property_

```csharp
IConfiguration Configuration
```

Gets the application configuration provided by the host.

### HostingEnvironment

_property_

```csharp
IHostEnvironment HostingEnvironment
```

Gets the hosting environment (Development, Testing, Production, etc.).

## Methods

### Configure

_method_

```csharp
void Configure(IApplicationBuilder app,IWebHostEnvironment env)
```

Configures the HTTP request pipeline (CORS, localization, routing, OpenAPI, controllers).

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Registers all services required by the Gateway (service bus, CQRS gateway, OData, OpenAPI).


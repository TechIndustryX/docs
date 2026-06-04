---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.Globalization.WebApi`

Source: `src/Globalization/Globalization.WebApi/Startup.cs`

## Summary

ASP.NET Core startup class that configures services and the HTTP pipeline for the Globalization API.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)
```

Initialises a new instance of with the given configuration and hosting environment. The application configuration. The hosting environment.

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

Configures the HTTP request pipeline including CORS, routing, authentication, OpenAPI, and endpoint mapping. The application builder.

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Registers all services required by the Globalization API, including EF Core, service bus, CQRS, OpenAPI, and security. The service collection to populate.


---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.Hosting.WebApp.Server`

Source: `src/Hosting/Hosting.WebApp.Server/Startup.cs`

## Summary

Configures services and the HTTP request pipeline for the Industria4 hosting web application.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration)
```

Initializes a new instance of with the given configuration.

## Properties

### Configuration

_property_

```csharp
IConfiguration Configuration
```

Gets the application configuration.

## Methods

### Configure

_method_

```csharp
void Configure(IApplicationBuilder app,IWebHostEnvironment env)
```

Configures the HTTP request pipeline.

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Registers application services with the DI container.


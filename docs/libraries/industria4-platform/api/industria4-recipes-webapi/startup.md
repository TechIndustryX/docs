---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.Recipes.WebApi`

Source: `src/Recipes/Recipes.WebApi/Startup.cs`

## Summary

ASP.NET Core startup class that configures services and the HTTP request pipeline for the Recipes Web API.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)
```

Initializes a new with the given configuration and hosting environment. The application configuration (appsettings, environment variables, etc.). The hosting environment used for environment-specific branching.

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

Configures the HTTP request pipeline middleware. The application builder used to add middleware to the pipeline.

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Registers all application services with the DI container. The service collection to configure.


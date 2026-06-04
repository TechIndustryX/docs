---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.Sequences.WebApi`

Source: `src/Sequences/Sequences.WebApi/Startup.cs`

## Summary

ASP.NET Core startup class that configures the Sequences Web API application services and middleware pipeline.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)
```

Initializes a new instance of . The application configuration. The hosting environment information.

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

Gets the hosting environment information.

## Methods

### Configure

_method_

```csharp
void Configure(IApplicationBuilder app)
```

Configures the HTTP request processing middleware pipeline. The application builder used to compose middleware.

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Configures the services required by the Sequences Web API. The service collection to register services into.


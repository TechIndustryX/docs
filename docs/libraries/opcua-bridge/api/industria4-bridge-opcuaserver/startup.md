---
title: "Startup"
---

# Startup

_public class_

Namespace: `Industria4.Bridge.OpcUaServer`

Source: `src/OpcUaServer/Startup.cs`

## Summary

Configures services and the HTTP request pipeline for the OPC UA server host.

## Constructors

### Startup

_constructor_

```csharp
Startup(IConfiguration configuration)
```

Initializes a new instance of with the provided configuration. The application configuration.

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

Configures the HTTP request pipeline, including routing and gRPC endpoint mapping. The application builder. The web hosting environment.

### ConfigureServices

_method_

```csharp
void ConfigureServices(IServiceCollection services)
```

Registers services required by the OPC UA server, including the gRPC plugin service and the dynamic node provider. The service collection to configure.


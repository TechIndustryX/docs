---
title: "WebHostServiceApplication"
---

# WebHostServiceApplication

_public class_

Namespace: `Industria4.Hosting`

Source: `src/Shared/Hosting.Server/WebHostServiceApplication.cs`

## Summary

WebHost which supports console commands in order to execute the app as a console or as a service

## Constructors

### WebHostServiceApplication

_constructor_

```csharp
WebHostServiceApplication(IHostBuilder hostBuilder)
```

Initialises a new instance using the provided host builder. The builder used to create and configure the .

## Methods

### Run

_method_

```csharp
int Run(bool isService)
```


---
title: "Industria4.Web"
---

# Industria4.Web

This namespace contains 9 public API types.

## Types

- [DepdendenciesExtensions](./depdendenciesextensions.md) _class_ - Extension methods for configuring dependency checkers on .
- [DependenciesConfiguration](./dependenciesconfiguration.md) _class_ - Configures and holds instances to run before host start.
- [DependenciesConfigurationExtensions](./dependenciesconfigurationextensions.md) _class_ - Extension methods for that add common service-bus readiness checks.
- [DependenciesHost](./dependencieshost.md) _class_ - IWebHost implementation which wraps another one and checks dependencies before to start the original implementation
- [DictionaryFilterBinder](./dictionaryfilterbinder.md) _class_ - OData filter binder that supports dictionary property access using underscore-separated syntax (e.g. `Property_Key`).
- [DictionaryOrderByBinder](./dictionaryorderbybinder.md) _class_ - OData order-by binder that supports dictionary property access using underscore-separated syntax (e.g. `Property_Key`).
- [HttpProxyMiddleware](./httpproxymiddleware.md) _class_ - ASP.NET Core middleware that forwards requests to a host specified by the `x-proxy-host` header.
- [SqlConnectionCheck](./sqlconnectioncheck.md) _class_ - Chech if connection to a SQL Server is available
- [TcpCheck](./tcpcheck.md) _class_ - Check if a TCP connection to a host works

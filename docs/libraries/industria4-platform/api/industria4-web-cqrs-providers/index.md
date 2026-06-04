---
title: "Industria4.Web.Cqrs.Providers"
---

# Industria4.Web.Cqrs.Providers

This namespace contains 5 public API types.

## Types

- [CqrsDiscovery](./cqrsdiscovery.md) _class_ - Service that discovers all types in the configured CQRS assemblies and maps them to controller/action/path tuples for the gateway.
- [GatewayActionDescriptorProvider](./gatewayactiondescriptorprovider.md) _class_ - MVC that synthesises controller action descriptors for each CQRS command discovered via .
- [GatewayApiDescriptionProvider](./gatewayapidescriptionprovider.md) _class_ - MVC that generates entries for CQRS gateway actions, enabling Swagger/OpenAPI integration.
- [GatewayModelMetadataProvider](./gatewaymodelmetadataprovider.md) _class_ - MVC model-metadata provider that returns type-level metadata for parameters, bypassing the standard parameter lookup.
- [GatewayParameterInfo](./gatewayparameterinfo.md) _class_ - Custom used by the CQRS gateway to represent command parameters with a specific type.

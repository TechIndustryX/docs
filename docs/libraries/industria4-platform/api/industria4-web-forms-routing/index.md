---
title: "Industria4.Web.Forms.Routing"
---

# Industria4.Web.Forms.Routing

This namespace contains 4 public API types.

## Types

- [DynamicPage&lt;TPage, TLayout&gt;](./dynamicpage.md) _class_ - Blazor component that renders `TPage` optionally wrapped in a layout of type `TLayout`, forwarding any route parameters. The page component type to render. The layout component type; use `object` to render without a layout.
- [DynamicRouteBuilder](./dynamicroutebuilder.md) _class_ - Builds and caches a dynamic whose types wrap registered page components with their route and authorize attributes, enabling runtime routing without static Razor page declarations.
- [IDynamicRouteBuilderProvider](./idynamicroutebuilderprovider.md) _interface_ - Provides a set of component types that should have dynamically generated route components.
- [RouteUtility](./routeutility.md) _class_ - Utility methods for reflecting over Blazor routing and authorization attributes.

---
title: "Industria4.Caching.Implementations"
---

# Industria4.Caching.Implementations

This namespace contains 8 public API types.

## Types

- [CacheConfiguration&lt;T&gt;](./cacheconfiguration.md) _class_ - Typed implementation of that holds per-member configurations and creates interceptors on demand. The service type being cached.
- [CacheConfigurationBuilder](./cacheconfigurationbuilder.md) _class_ - Default implementation of that resolves typed builders from DI.
- [CacheConfigurationBuilder&lt;T&gt;](./cacheconfigurationbuilder-2.md) _class_ - Typed implementation of that accumulates per-member configurations and builds an . The service type being configured.
- [CacheConfigurationMemberBuilder](./cacheconfigurationmemberbuilder.md) _class_ - Non-generic base for member-level cache configuration builders.
- [CacheConfigurationMemberBuilder&lt;T&gt;](./cacheconfigurationmemberbuilder-2.md) _class_ - Typed implementation of for service type `T`. The service type whose member is being configured.
- [CacheProxy&lt;T&gt;](./cacheproxy.md) _class_ - Default implementation of that retrieves the cached service on construction. The proxied service type.
- [ComparableArray&lt;T&gt;](./comparablearray.md) _struct_ - An immutable, equality-comparable wrapper around a read-only list, suitable for use as a composite cache key. The element type.
- [ProxyCacheFactory](./proxycachefactory.md) _class_ - Implementation of that builds Castle DynamicProxy-based caching proxies.

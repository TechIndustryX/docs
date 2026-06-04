---
title: "Industria4.Caching"
---

# Industria4.Caching

This namespace contains 16 public API types.

## Types

- [CacheConfigurationBuilderExtensions](./cacheconfigurationbuilderextensions.md) _class_ - Extension methods that add convenience overloads to .
- [CacheFactoryExtensions](./cachefactoryextensions.md) _class_ - Extension methods for that add strongly-typed helpers and a convenient lambda-based key factory.
- [CacheMemberCallContext](./cachemembercallcontext.md) _class_ - Carries the cache entry, member configuration, and invocation data passed to cache-action callbacks.
- [CacheMemberConfiguration](./cachememberconfiguration.md) _class_ - Holds the caching behaviour (expiry, key factories, ignore flag) for a single service member.
- [CacheOptions](./cacheoptions.md) _class_ - Controls the expiry and backing store for a cache region.
- [CqrsCacheConfigurationMemberBuilderExtensions](./cqrscacheconfigurationmemberbuilderextensions.md) _class_ - Extension methods for that wire cache-entry expiration to CQRS entity and message events.
- [ICacheConfiguration](./icacheconfiguration.md) _interface_ - Holds per-member caching configurations and supplies Castle DynamicProxy interceptors for a service type.
- [ICacheConfiguration&lt;T&gt;](./icacheconfiguration-2.md) _interface_ - Strongly-typed variant of scoped to `T`. The service type being cached.
- [ICacheConfigurationBuilder](./icacheconfigurationbuilder.md) _interface_ - Entry point for building type-specific cache configurations.
- [ICacheConfigurationBuilder&lt;T&gt;](./icacheconfigurationbuilder-2.md) _interface_ - Typed builder for configuring member-level caching rules for service type `T`. The service type being configured.
- [ICacheConfigurationMemberBuilder](./icacheconfigurationmemberbuilder.md) _interface_ - Builds a for a single service member.
- [ICacheConfigurationMemberBuilder&lt;T&gt;](./icacheconfigurationmemberbuilder-2.md) _interface_ - Typed builder that configures caching for members on service type `T`. The service type whose member is being configured.
- [ICacheFactory](./icachefactory.md) _interface_ - Creates and returns cached proxy instances for service types.
- [ICacheKeyFactory](./icachekeyfactory.md) _interface_ - Attempts to derive a cache key from a member invocation.
- [ICacheProxy&lt;out T&gt;](./icacheproxy.md) _interface_ - Wraps a cached service instance, providing access to the underlying value. The proxied service type.
- [IMemberInvocation](./imemberinvocation.md) _interface_ - Represents an intercepted member call; provides arguments, generic type arguments, and the invocation target.

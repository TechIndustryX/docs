---
title: "Industria4.Caching.Interceptors"
---

# Industria4.Caching.Interceptors

This namespace contains 5 public API types.

## Types

- [ArgumentsCacheKeyFactory](./argumentscachekeyfactory.md) _class_ - that builds a cache key from the comparable arguments of the invocation.
- [CacheInterceptor](./cacheinterceptor.md) _class_ - Castle DynamicProxy interceptor that intercepts member calls and serves results from an .
- [LeakingThisInterceptor](./leakingthisinterceptor.md) _class_ - Interceptor that replaces a return value equal to the invocation target with the proxy, preventing accidental escape of the unwrapped target.
- [MemberCacheKeyFactory](./membercachekeyfactory.md) _class_ - that builds a cache key from the declaring type and member signature, producing a unique key per method regardless of arguments.
- [QueryCacheKeyFactory](./querycachekeyfactory.md) _class_ - that extracts LINQ expression trees from delegate arguments and uses their string representation as a cache key.

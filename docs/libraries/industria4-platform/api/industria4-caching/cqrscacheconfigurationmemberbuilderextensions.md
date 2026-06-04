---
title: "CqrsCacheConfigurationMemberBuilderExtensions"
---

# CqrsCacheConfigurationMemberBuilderExtensions

_public class_

Namespace: `Industria4.Caching`

Source: `src/Shared/Caching.Cqrs/CqrsCacheConfigurationMemberBuilderExtensions.cs`

## Summary

Extension methods for that wire cache-entry expiration to CQRS entity and message events.

## Methods

### AddExpirationByEntityEvents

_method_

```csharp
ICacheConfigurationMemberBuilder AddExpirationByEntityEvents<TEntityType>(this ICacheConfigurationMemberBuilder builder)
```

Adds an expiration of the cache based on the EntityAddedEvent, EntityRemovedEvent, EntityUpdatedEvent messages This expiration can be applied to methods without any arguments or to methods

### AddExpirationByMessage

_method_

```csharp
ICacheConfigurationMemberBuilder AddExpirationByMessage(this ICacheConfigurationMemberBuilder builder,IEnumerable<Type> messageTypes,Func<IMessage,bool> filter)
```

Adds an expiration of the cache based on message types specified and filtering them

### AddExpirationByMessage

_method_

```csharp
ICacheConfigurationMemberBuilder AddExpirationByMessage(this ICacheConfigurationMemberBuilder builder,IEnumerable<Type> messageTypes)
```

Adds an expiration of the cache based on message types specified and filtering them

### AddExpirationByMessage

_method_

```csharp
ICacheConfigurationMemberBuilder AddExpirationByMessage<TMessage>(this ICacheConfigurationMemberBuilder builder,Func<TMessage,bool> filter)
```

Adds an expiration of the cache based on message type specified and filtering it

### AddExpirationByMessage

_method_

```csharp
ICacheConfigurationMemberBuilder AddExpirationByMessage<TMessage>(this ICacheConfigurationMemberBuilder builder)
```

Adds an expiration of the cache based on message type specified


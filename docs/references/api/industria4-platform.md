---
title: Industria4 Platform
---

# Industria4 Platform API Reference

Source repository: `TechIndustryX/industria4-platform`

## .NET API

Detected 1016 C# types and 3222 members across 264 namespaces.

### `Industria4`

#### `AsyncEventHandlerExtensions`

_public class_

Source: `src/Shared/Core/AsyncEventHandler.cs`

Extension methods for .

Members:

- `Task InvokeAsync&lt;T&gt;(this AsyncEventHandler&lt;T&gt; eventHandler,object sender,T args)` _method_ — Invokes all subscribed handlers sequentially and awaits each one. The event argument type. The delegate multicast to invoke, or `null`. The source of the event. The event data.

#### `AvailableEntityEvents&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/AvailableEntityEvents.cs`

Default implementation of

Members:

- `AvailableEntityEvents(int baseId)` _constructor_ — Initializes a new instance with the given base event ID. The base integer from which entity event IDs are derived.
- `int BaseId` _property_ — Gets the base log-event ID from which entity-specific event offsets are calculated.

#### `BuildVersionAttribute`

_public class_

Source: `src/Shared/Core/BuildVersionAttribute.cs`

Assembly-level attribute that records the build version string injected by the CI pipeline.

Members:

- `BuildVersionAttribute(string version)` _constructor_ — Initializes a new instance of . The build version string.
- `string Get(Assembly assembly = null)` _method_ — Returns the build version recorded in the given assembly, or an empty string if the attribute is absent. The assembly to inspect. Defaults to the entry assembly when `null`. The build version string, or .
- `string Version` _property_ — Gets the build version string.

#### `CqrsEvents`

_public class_

Source: `src/Shared/Cqrs/CqrsEvents.cs`

Base events exposed for Cqrs

Members:

- `CqrsEvents(IAvailableEntityEvents availableEntityEvents)` _constructor_ — Initialises a new instance bound to the given entity events group. The entity events that supply the base ID offset.
- `EventId Added` _property_ — Gets the log-event ID for an entity-added event.
- `EventId Concurrency` _property_ — Gets the log-event ID for a concurrency conflict event.
- `EventId Conflict` _property_ — Gets the log-event ID for a conflict event.
- `EventId Deleted` _property_ — Gets the log-event ID for an entity-deleted event.
- `EventId DeletedConflict` _property_ — Gets the log-event ID for a delete-conflict event.
- `EventId DescriptionConflict` _property_ — Gets the log-event ID for a description-conflict event.
- `EventId NotFound` _property_ — Gets the log-event ID for a not-found event.
- `EventId Removed` _property_ — Gets the log-event ID for an entity-removed event.
- `EventId Updated` _property_ — Gets the log-event ID for an entity-updated event.

#### `CqrsEventsExtensions`

_public class_

Source: `src/Shared/Cqrs/CqrsEvents.cs`

Extends with CQRS events

Members:

- `CqrsEvents Cqrs(this IAvailableEntityEvents availableEvents)` _method_ — Provides all available events for CQRS

#### `EventIds`

_public class_

Source: `src/Shared/Core/EventIds.cs`

Static class which aggregates all event ids available

Members:

- `IAvailableEvents Available` _property_ — Gets an instance which extensions methods can extend to provide available event ids

#### `GlobalizationEvents`

_public class_

Source: `src/Globalization/Globalization.Cqrs.Handlers/GlobalizationEvents.cs`

Provides event-ID registrations for the Globalization domain entities.

Members:

- `IAvailableEntityEvents&lt;UnitType&gt; Unit` _property_ — Gets the available event IDs for entities.
- `IAvailableEntityEvents&lt;UnitSetType&gt; UnitSet` _property_ — Gets the available event IDs for entities.

#### `HookServiceProvider`

_public class_

Source: `src/Shared/Core/HookServiceProvider.cs`

An decorator that allows intercepting resolved services with registered callbacks.

Members:

- `HookServiceProvider(IServiceProvider original)` _constructor_ — Initializes a new instance of wrapping the given provider. The inner service provider to delegate resolution to.
- `void Add&lt;T&gt;(Action&lt;T&gt; callback)` _method_ — Registers a side-effect callback invoked after a service of type `T` is resolved. The service type to intercept. The action to invoke with the resolved instance.
- `void Add&lt;T&gt;(Func&lt;T,T&gt; callback)` _method_ — Registers a transform callback that can replace the resolved instance of type `T`. The service type to intercept. A function that receives the resolved instance and returns the replacement.
- `void Add(Type type,Func&lt;object,object&gt; callback)` _method_ — Registers a callback for a specific service `type`. The service type to intercept. The transform function to apply to the resolved instance.
- `object GetService(Type serviceType)` _method_ — Resolves a service of the given type, running any registered transform callbacks on the result. The type of service to resolve. The (optionally transformed) service instance, or `null` if not registered.
- `void Remove&lt;T&gt;(Func&lt;T,T&gt; callback)` _method_ — Removes a previously registered transform callback for type `T`. The service type whose callback should be removed. The callback to deregister.
- `void Remove(Type type,Delegate callback)` _method_ — Removes a previously registered callback for a specific service `type`. The service type whose callback should be removed. The callback delegate to deregister.

#### `HookServiceProviderFactory&lt;T&gt;`

_public class_

Source: `src/Shared/Core/HookServiceProviderFactory.cs`

A factory that wraps an existing to produce a . The container builder type used by the inner factory.

Members:

- `HookServiceProviderFactory(IServiceProviderFactory&lt;T&gt; original)` _constructor_ — Initializes a new instance of wrapping the given factory. The inner service provider factory.
- `T CreateBuilder(IServiceCollection services)` _method_ — Creates a container builder by delegating to the inner factory. The service collection to configure. The container builder.
- `IServiceProvider CreateServiceProvider(T containerBuilder)` _method_ — Creates a that wraps the provider produced by the inner factory. The container builder. A decorating the resolved service provider.

#### `IAvailableEntityEvents`

_public interface_

Source: `src/Shared/Cqrs/AvailableEntityEvents.cs`

Interface used to group events dedicated to entity

#### `IAvailableEntityEvents&lt;T&gt;`

_public interface_

Source: `src/Shared/Cqrs/AvailableEntityEvents.cs`

Interface used to group events dedicated to entity

#### `IAvailableEvents`

_public interface_

Source: `src/Shared/Core/EventIds.cs`

Interface used by extensions methods for providing available event ids

#### `IdentityEntityEvents`

_public class_

Source: `src/Identity/Identity.Cqrs.Handlers/IdentityEvents.cs`

Provides access to entity-scoped Identity events.

Members:

- `IdentityEntityEvents(IAvailableEntityEvents availableEntityEvents)` _constructor_ — Initializes a new instance of . The underlying entity-events provider.

#### `IdentityEvents`

_public class_

Source: `src/Identity/Identity.Cqrs.Handlers/IdentityEvents.cs`

Provides access to Identity domain events.

Members:

- `IAvailableEntityEvents&lt;UserType&gt; WorkOrder` _property_ — Gets the entity events for .

#### `IDependencyChecker`

_public interface_

Source: `src/Shared/Web/IDependencyChecker.cs`

Represents a dependency that must be ready before the application host starts.

#### `Industria4Environment`

_public class_

Source: `src/Shared/Core/Industria4Environment.cs`

Provides environment-level configuration for the Industria4 platform, such as the data root folder.

Members:

- `string RootFolder` _property_ — Gets the root data folder for Industria4, resolved from the `INDUSTRIA4_ROOT` environment variable or a platform-appropriate default path.

#### `Industria4Exception`

_public class_

Source: `src/Shared/Core/Industria4Exception.cs`

Base exception class for domain and infrastructure errors in the Industria4 platform.

Members:

- `Industria4Exception(string message)` _constructor_ — Initializes a new instance with the given message and no inner exception. The error message.
- `Industria4Exception(string message,Exception innerException)` _constructor_ — Initializes a new instance with the given message and inner exception. The error message. The exception that caused this exception, or `null`.
- `Industria4Exception(EventId eventId,string message,Exception innerException)` _constructor_ — Initializes a new instance with a structured event identifier, message, and inner exception. The log event identifier. The error message. The exception that caused this exception, or `null`.
- `Industria4Exception(SerializationInfo info,StreamingContext context)` _constructor_ — Initializes a new instance from serialized data. The serialization info. The streaming context.
- `EventId EventId` _property_ — Gets the structured log event identifier associated with this exception.

#### `MesEntityEvents`

_public class_

Source: `src/Mes/Mes.Cqrs.Handlers/MesEvents.cs`

MES-domain structured-log event IDs scoped to a specific entity event range.

Members:

- `MesEntityEvents(IAvailableEntityEvents availableEntityEvents)` _constructor_ — Initializes a new from an entity-event base range.
- `EventId AnotherOrderRunning` _property_ — Event ID logged when a transition to `Running` is blocked because another work order is already running.
- `EventId BadState` _property_ — Event ID logged when the work order is in an invalid state for the requested operation.
- `EventId ChangeConflict` _property_ — Event ID logged when a state-transition conflict is detected (e.g. concurrency collision).
- `EventId RequiredQuantity` _property_ — Event ID logged when the done quantity is still below the required quantity and the order cannot be completed.

#### `MesEvents`

_public class_

Source: `src/Mes/Mes.Cqrs.Handlers/MesEvents.cs`

Top-level MES event-ID container that groups event ranges by aggregate type.

Members:

- `IAvailableEntityEvents&lt;WorkOrderType&gt; WorkOrder` _property_ — Gets the structured-log event-ID range for the `WorkOrder` aggregate (base ID 6000).

#### `MesEventsExtensions`

_public class_

Source: `src/Identity/Identity.Cqrs.Handlers/IdentityEvents.cs`

Extension methods for accessing Identity event collections from CQRS event providers.

Members:

- `IdentityEvents Identity(this IAvailableEvents availableEvents)` _method_ — Returns the singleton for available events. The available-events source. The shared instance.
- `IdentityEntityEvents Identity(this IAvailableEntityEvents availableEvents)` _method_ — Returns an wrapper for entity-scoped events. The available entity-events source. A new instance.

#### `MesEventsExtensions`

_public class_

Source: `src/Mes/Mes.Cqrs.Handlers/MesEvents.cs`

Extension methods that expose MES-specific structured-log event-ID groups.

Members:

- `MesEvents Mes(this IAvailableEvents availableEvents)` _method_ — Returns the shared group from the available-events collection.
- `MesEntityEvents Mes(this IAvailableEntityEvents availableEvents)` _method_ — Returns a scoped to the given entity-event base range.

#### `OpcUaEvents`

_public class_

Source: `src/OpcUa/OpcUa.Cqrs.Handlers/OpcUaEvents.cs`

Groups domain events for the OPC-UA bounded context.

Members:

- `IAvailableEntityEvents&lt;ServerType&gt; Server` _property_ — Gets the available entity events for OPC-UA server entities.

#### `ProductionEvents`

_public class_

Source: `src/Production/Production.Cqrs.Handlers/ProductionEvents.cs`

Well-known event IDs for the Production bounded context.

Members:

- `IAvailableEntityEvents&lt;CompositionType&gt; Composition` _property_ — Gets the event-ID group for events.
- `IAvailableEntityEvents&lt;DeploymentType&gt; Deployment` _property_ — Gets the event-ID group for events.

#### `ProductionEventsExtensions`

_public class_

Source: `src/Production/Production.Cqrs.Handlers/ProductionEvents.cs`

Extension methods that expose the group from the available-events catalog.

Members:

- `ProductionEvents Production(this IAvailableEvents availableEvents)` _method_ — Returns the shared group. The available events accessor. The Production event-ID groups.

#### `RecipesEvents`

_public class_

Source: `src/Recipes/Recipes.Cqrs.Handlers/RecipesEvents.cs`

Provides categorised event-ID ranges for Recipes entities.

Members:

- `IAvailableEntityEvents&lt;ModelType&gt; Model` _property_ — Gets the event-ID accessor for model events (base offset 1 000).
- `IAvailableEntityEvents&lt;RecipeType&gt; Recipe` _property_ — Gets the event-ID accessor for recipe events (base offset 2 000).

#### `RecipesEventsExtensions`

_public class_

Source: `src/Globalization/Globalization.Cqrs.Handlers/GlobalizationEvents.cs`

Extension methods for accessing from .

Members:

- `GlobalizationEvents Globalization(this IAvailableEvents availableEvents)` _method_ — Returns the shared instance for the globalization domain. The available-events context. The singleton instance.

#### `RecipesEventsExtensions`

_public class_

Source: `src/OpcUa/OpcUa.Cqrs.Handlers/OpcUaEvents.cs`

Provides the accessor on any instance.

Members:

- `OpcUaEvents OpcUa(this IAvailableEvents availableEvents)` _method_ — Returns the OPC-UA domain-event group.

#### `RecipesEventsExtensions`

_public class_

Source: `src/Recipes/Recipes.Cqrs.Handlers/RecipesEvents.cs`

Extension methods for accessing Recipes-scoped event IDs.

Members:

- `EventId ParameterNodeNotUnique(this IAvailableEntityEvents&lt;ModelType&gt; availableEvents)` _method_ — Returns the event ID indicating that a parameter OPC-UA node ID is not unique across model parameters.
- `RecipesEvents Recipes(this IAvailableEvents availableEvents)` _method_ — Returns the accessor for Recipes-scoped event IDs.

#### `RepositoryEvents`

_public class_

Source: `src/Shared/Repository/RepositoryEvents.cs`

Well-known log event IDs for repository operations.

Members:

- `EventId Concurrency` _property_ — Raised when an optimistic-concurrency violation is detected.
- `EventId Conflict` _property_ — Raised when a unique-key or business-rule conflict is detected.
- `EventId NotFound` _property_ — Raised when a requested entity is not found.

#### `RepositoryEventsExtensions`

_public class_

Source: `src/Shared/Repository/RepositoryEvents.cs`

Extension methods that expose the event-ID group.

Members:

- `RepositoryEvents Repository(this IAvailableEvents availableEvents)` _method_ — Returns the shared group from the available-events collection. The available events accessor. The repository event IDs.

#### `SequencesEntityEvents`

_public class_

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequenceEvents.cs`

Provides entity-level event identifiers scoped to a specific Sequences entity.

Members:

- `SequencesEntityEvents(IAvailableEntityEvents availableEntityEvents)` _constructor_ — Initializes a new instance of . The entity-level events accessor to base identifiers on.
- `EventId AnotherOrderRunning` _property_ — Gets the event identifier raised when another order is already running.
- `EventId BadState` _property_ — Gets the event identifier raised when a sequence is in an invalid state.
- `EventId ChangeConflict` _property_ — Gets the event identifier raised when a sequence change conflicts with another operation.
- `EventId RequiredQuantity` _property_ — Gets the event identifier raised when the required quantity condition is evaluated.

#### `SequencesEvents`

_public class_

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequenceEvents.cs`

Provides access to domain-level Sequences event groups.

Members:

- `IAvailableEntityEvents&lt;SequenceType&gt; Sequence` _property_ — Gets the entity-level events for the aggregate.

#### `SequencesEventsExtensions`

_public class_

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequenceEvents.cs`

Extension methods on and that expose Sequences event groups.

Members:

- `SequencesEvents Sequences(this IAvailableEvents availableEvents)` _method_ — Returns the shared instance for domain-level Sequences events. The available-events accessor. The singleton.
- `SequencesEntityEvents Sequences(this IAvailableEntityEvents availableEvents)` _method_ — Returns a new scoped to the given entity events accessor. The entity-level available-events accessor. A new instance.

### `Industria4.Caching`

#### `CacheConfigurationBuilderExtensions`

_public class_

Source: `src/Shared/Caching/CacheConfigurationBuilderExtensions.cs`

Extension methods that add convenience overloads to .

Members:

- `ICacheConfigurationBuilder&lt;T&gt; ForAllMembers&lt;T&gt;(this ICacheConfigurationBuilder&lt;T&gt; builder)` _method_ — Applies default options to all members
- `ICacheConfigurationBuilder&lt;T&gt; ForGenericMember&lt;T,TValue&gt;(this ICacheConfigurationBuilder&lt;T&gt; builder,Expression&lt;Func&lt;T,TValue&gt;&gt; memberExpression)` _method_ — Applies default options to the generic member
- `ICacheConfigurationBuilder&lt;T&gt; ForMember&lt;T,TValue&gt;(this ICacheConfigurationBuilder&lt;T&gt; builder,Expression&lt;Func&lt;T,TValue&gt;&gt; memberExpression)` _method_ — Applies default options to the specified member

#### `CacheFactoryExtensions`

_public class_

Source: `src/Shared/Caching/CacheFactoryExtensions.cs`

Extension methods for that add strongly-typed helpers and a convenient lambda-based key factory.

Members:

- `ICacheConfigurationMemberBuilder&lt;T&gt; AddKeyFactory&lt;T&gt;(this ICacheConfigurationMemberBuilder&lt;T&gt; builder,Func&lt;IMemberInvocation,object&gt; func)` _method_ — Appends a key factory defined by a lambda that produces a key value from the member invocation. The service type being configured. The member builder to extend. A function that derives a key from , or returns `null` to skip. The same builder for fluent chaining.
- `T Get&lt;T&gt;(this ICacheFactory cacheFactory)` _method_ — Returns a cached proxy for `T` using the registered . The service type to proxy. The cache factory to extend. A cached proxy of type `T`.
- `T Get&lt;T&gt;(this ICacheFactory cacheFactory,ICacheConfiguration&lt;T&gt; configuration)` _method_ — Returns a cached proxy for `T` using the provided `configuration`. The service type to proxy. The cache factory to extend. The cache configuration to apply. A cached proxy of type `T`.

#### `CacheMemberCallContext`

_public class_

Source: `src/Shared/Caching/CacheMemberConfiguration.cs`

Carries the cache entry, member configuration, and invocation data passed to cache-action callbacks.

Members:

- `CacheMemberCallContext(ICacheEntry entry,CacheMemberConfiguration memberConfiguration,IMemberInvocation memberInvocation)` _constructor_ — Initializes a new instance with all required context values. The cache entry. Must not be `null`. The member configuration. Must not be `null`. The invocation. Must not be `null`.
- `ICacheEntry Entry` _property_ — Gets the cache entry being configured.
- `CacheMemberConfiguration MemberConfiguration` _property_ — Gets the member configuration that triggered this context.
- `IMemberInvocation MemberInvocation` _property_ — Gets the intercepted member invocation.

#### `CacheMemberConfiguration`

_public class_

Source: `src/Shared/Caching/CacheMemberConfiguration.cs`

Holds the caching behaviour (expiry, key factories, ignore flag) for a single service member.

Members:

- `CacheMemberConfiguration()` _constructor_ — Initializes a new instance, pre-registering the default key factories.
- `void ApplyActions(CacheMemberCallContext context)` _method_ — Invokes all registered with the given context. The context carrying the current cache entry and invocation details.
- `IList&lt;Action&lt;CacheMemberCallContext&gt;&gt; CacheActions` _property_ — Gets the list of actions applied to the cache entry context when a cache miss occurs.
- `bool Ignore` _property_ — Gets or sets a value indicating that caching is disabled for this member.
- `IList&lt;ICacheKeyFactory&gt; KeyFactories` _property_ — Gets the ordered list of key factories used to build the cache key for this member.

#### `CacheOptions`

_public class_

Source: `src/Shared/Caching/CacheOptions.cs`

Controls the expiry and backing store for a cache region.

Members:

- `TimeSpan? AbsoluteExpiration` _property_ — Gets or sets an absolute expiration relative to now, after which a cached entry is evicted. `null` means no absolute expiry.
- `IMemoryCache Cache` _property_ — Gets or sets an explicit instance to use. When `null` the default instance is used.
- `TimeSpan? SlidingExpiration` _property_ — Gets or sets a sliding expiration; the entry is evicted if not accessed within this window. Defaults to 1 minute.

#### `CqrsCacheConfigurationMemberBuilderExtensions`

_public class_

Source: `src/Shared/Caching.Cqrs/CqrsCacheConfigurationMemberBuilderExtensions.cs`

Extension methods for that wire cache-entry expiration to CQRS entity and message events.

Members:

- `ICacheConfigurationMemberBuilder AddExpirationByEntityEvents&lt;TEntityType&gt;(this ICacheConfigurationMemberBuilder builder)` _method_ — Adds an expiration of the cache based on the EntityAddedEvent, EntityRemovedEvent, EntityUpdatedEvent messages This expiration can be applied to methods without any arguments or to methods
- `ICacheConfigurationMemberBuilder AddExpirationByMessage&lt;TMessage&gt;(this ICacheConfigurationMemberBuilder builder)` _method_ — Adds an expiration of the cache based on message type specified
- `ICacheConfigurationMemberBuilder AddExpirationByMessage&lt;TMessage&gt;(this ICacheConfigurationMemberBuilder builder,Func&lt;TMessage,bool&gt; filter)` _method_ — Adds an expiration of the cache based on message type specified and filtering it
- `ICacheConfigurationMemberBuilder AddExpirationByMessage(this ICacheConfigurationMemberBuilder builder,IEnumerable&lt;Type&gt; messageTypes)` _method_ — Adds an expiration of the cache based on message types specified and filtering them
- `ICacheConfigurationMemberBuilder AddExpirationByMessage(this ICacheConfigurationMemberBuilder builder,IEnumerable&lt;Type&gt; messageTypes,Func&lt;IMessage,bool&gt; filter)` _method_ — Adds an expiration of the cache based on message types specified and filtering them

#### `ICacheConfiguration`

_public interface_

Source: `src/Shared/Caching/ICacheConfigurtion.cs`

Holds per-member caching configurations and supplies Castle DynamicProxy interceptors for a service type.

#### `ICacheConfiguration&lt;T&gt;`

_public interface_

Source: `src/Shared/Caching/ICacheConfigurtion.cs`

Strongly-typed variant of scoped to `T`. The service type being cached.

#### `ICacheConfigurationBuilder`

_public interface_

Source: `src/Shared/Caching/ICacheConfigurationBuilder.cs`

Entry point for building type-specific cache configurations.

#### `ICacheConfigurationBuilder&lt;T&gt;`

_public interface_

Source: `src/Shared/Caching/ICacheConfigurationBuilder.cs`

Typed builder for configuring member-level caching rules for service type `T`. The service type being configured.

#### `ICacheConfigurationMemberBuilder`

_public interface_

Source: `src/Shared/Caching/ICacheConfigurationMemberBuilder.cs`

Builds a for a single service member.

#### `ICacheConfigurationMemberBuilder&lt;T&gt;`

_public interface_

Source: `src/Shared/Caching/ICacheConfigurationMemberBuilder.cs`

Typed builder that configures caching for members on service type `T`. The service type whose member is being configured.

#### `ICacheFactory`

_public interface_

Source: `src/Shared/Caching/ICacheFactory.cs`

Creates and returns cached proxy instances for service types.

#### `ICacheKeyFactory`

_public interface_

Source: `src/Shared/Caching/ICacheKeyFactory.cs`

Attempts to derive a cache key from a member invocation.

#### `ICacheProxy&lt;out T&gt;`

_public interface_

Source: `src/Shared/Caching/ICacheProxy.cs`

Wraps a cached service instance, providing access to the underlying value. The proxied service type.

#### `IMemberInvocation`

_public interface_

Source: `src/Shared/Caching/ICacheKeyFactory.cs`

Represents an intercepted member call; provides arguments, generic type arguments, and the invocation target.

### `Industria4.Caching.Cqrs`

#### `CachingCqrsServiceProviderExtensions`

_public class_

Source: `src/Shared/Caching.Cqrs/CachingCqrsServiceProviderExtensions.cs`

Extension methods for registering CQRS-based cache invalidation services.

#### `MessageChangeToken`

_public class_

Source: `src/Shared/Caching.Cqrs/MessageChangeToken.cs`

An that triggers change callbacks when a matching CQRS message is received on the message bus.

Members:

- `MessageChangeToken(ILogger&lt;MessageChangeToken&gt; logger,IMessagesWaiter messagesWaiter,IEnumerable&lt;Type&gt; types,Func&lt;IMessage,bool&gt; filter)` _constructor_ — Initialises a new instance that listens for the specified message types using the given waiter. Logger used to record errors from background subscriptions. The service that provides message watchers. The message types that trigger cache invalidation. An optional predicate to filter incoming messages; `null` accepts all messages.
- `IDisposable RegisterChangeCallback(Action&lt;object&gt; callback,object state)` _method_
- `bool ActiveChangeCallbacks` _property_
- `bool HasChanged` _property_
- `IEnumerable&lt;Type&gt; Types` _property_ — Gets the message types that will trigger invalidation.

### `Industria4.Caching.Implementations`

#### `CacheConfiguration&lt;T&gt;`

_public class_

Source: `src/Shared/Caching/Implementations/CacheConfiguration.cs`

Typed implementation of that holds per-member configurations and creates interceptors on demand. The service type being cached.

Members:

- `CacheConfiguration(IOptions&lt;CacheOptions&gt; options)` _constructor_ — Initialises a new instance with the given cache options. The cache options providing the backing memory cache.
- `IInterceptor[] GetInterceptors(IInterceptor[] commonInterceptors)` _method_
- `IDictionary&lt;MemberInfo,CacheMemberConfiguration&gt; Members` _property_

#### `CacheConfigurationBuilder`

_public class_

Source: `src/Shared/Caching/Implementations/CacheConfigurationBuilder.cs`

Default implementation of that resolves typed builders from DI.

Members:

- `CacheConfigurationBuilder(IServiceProvider provider)` _constructor_ — Initialises a new instance with the given service provider. The DI service provider used to resolve typed builders.
- `ICacheConfigurationBuilder&lt;T&gt; For&lt;T&gt;()` _method_

#### `CacheConfigurationBuilder&lt;T&gt;`

_public class_

Source: `src/Shared/Caching/Implementations/CacheConfigurationBuilder.cs`

Typed implementation of that accumulates per-member configurations and builds an . The service type being configured.

Members:

- `CacheConfigurationBuilder(IServiceProvider serviceProvider,IOptions&lt;CacheOptions&gt; options)` _constructor_ — Initialises a new instance with the given service provider and cache options. The DI service provider. The cache options.
- `ICacheConfiguration&lt;T&gt; Build()` _method_
- `ICacheConfigurationBuilder&lt;T&gt; ForAllMembers(Action&lt;ICacheConfigurationMemberBuilder&lt;T&gt;&gt; configure)` _method_
- `ICacheConfigurationBuilder&lt;T&gt; ForGenericMember&lt;TValue&gt;(Expression&lt;Func&lt;T,TValue&gt;&gt; memberExpression,Action&lt;ICacheConfigurationMemberBuilder&lt;T&gt;&gt; configure)` _method_
- `ICacheConfigurationBuilder&lt;T&gt; ForMember&lt;TValue&gt;(Expression&lt;Func&lt;T,TValue&gt;&gt; memberExpression,Action&lt;ICacheConfigurationMemberBuilder&lt;T&gt;&gt; configure)` _method_
- `ICacheConfigurationBuilder&lt;T&gt; Ignore&lt;TValue&gt;(Expression&lt;Func&lt;T,TValue&gt;&gt; memberExpression)` _method_

#### `CacheConfigurationMemberBuilder`

_public class_

Source: `src/Shared/Caching/Implementations/CacheConfigurationMemberBuilder.cs`

Non-generic base for member-level cache configuration builders.

Members:

- `CacheMemberConfiguration Build()` _method_ — Builds and returns the finalised .

#### `CacheConfigurationMemberBuilder&lt;T&gt;`

_public class_

Source: `src/Shared/Caching/Implementations/CacheConfigurationMemberBuilder.cs`

Typed implementation of for service type `T`. The service type whose member is being configured.

Members:

- `CacheConfigurationMemberBuilder(IServiceProvider serviceProvider)` _constructor_ — Initialises a new instance with the given service provider. The DI service provider.
- `ICacheConfigurationMemberBuilder&lt;T&gt; AddAction(Action&lt;CacheMemberCallContext&gt; action)` _method_
- `ICacheConfigurationMemberBuilder&lt;T&gt; AddKeyFactory(ICacheKeyFactory keyFactory)` _method_
- `CacheMemberConfiguration Build()` _method_
- `ICacheConfigurationMemberBuilder&lt;T&gt; Ignore()` _method_
- `ICacheConfigurationMemberBuilder&lt;T&gt; SetAbsoluteExpiration(TimeSpan expiration)` _method_
- `ICacheConfigurationMemberBuilder&lt;T&gt; SetSlidingExpiration(TimeSpan expiration)` _method_
- `IList&lt;Action&lt;CacheMemberCallContext&gt;&gt; Actions` _property_
- `bool Ignored` _property_
- `IServiceProvider Services` _property_

#### `CacheProxy&lt;T&gt;`

_public class_

Source: `src/Shared/Caching/Implementations/CacheProxy.cs`

Default implementation of that retrieves the cached service on construction. The proxied service type.

Members:

- `CacheProxy(ICacheFactory cacheFactory)` _constructor_ — Initialises a new instance by obtaining a cached proxy from the given factory. The factory used to build the cached proxy.
- `T Value` _property_

#### `ComparableArray&lt;T&gt;`

_public struct_

Source: `src/Shared/Caching/Implementations/ComparableArray.cs`

An immutable, equality-comparable wrapper around a read-only list, suitable for use as a composite cache key. The element type.

Members:

- `ComparableArray(IReadOnlyList&lt;T&gt; array)` _constructor_ — Initialises a new instance wrapping the given list and pre-computing the hash code. The list of values to wrap.
- `bool Equals(ComparableArray&lt;T&gt; other)` _method_ — Determines whether this array is element-wise equal to another . The array to compare against. `true` if both arrays contain the same elements in the same order; otherwise, `false`.
- `bool Equals(object obj)` _method_
- `int GetHashCode()` _method_

#### `ProxyCacheFactory`

_public class_

Source: `src/Shared/Caching/Implementations/ProxyCacheFactory.cs`

Implementation of that builds Castle DynamicProxy-based caching proxies.

Members:

- `ProxyCacheFactory(IServiceProvider serviceProvider,ILogger&lt;ProxyCacheFactory&gt; logger,IMemoryCache cache,IOptions&lt;CacheOptions&gt; options)` _constructor_ — Initialises a new instance, wiring up the common interceptors and verifying required dependencies. The DI service provider used to resolve target services. Logger for diagnostics. The in-memory cache backing the proxies. The cache options.
- `object Get(Type type,ICacheConfiguration configuration)` _method_
- `IServiceProvider ServiceProvider` _property_

### `Industria4.Caching.Interceptors`

#### `ArgumentsCacheKeyFactory`

_public class_

Source: `src/Shared/Caching/Interceptors/ArgumentsCacheKeyFactory.cs`

that builds a cache key from the comparable arguments of the invocation.

Members:

- `bool TryGetKey(IMemberInvocation invocation,out object key)` _method_

#### `CacheInterceptor`

_public class_

Source: `src/Shared/Caching/Interceptors/CacheInterceptor.cs`

Castle DynamicProxy interceptor that intercepts member calls and serves results from an .

Members:

- `CacheInterceptor(IMemoryCache memoryCache,ICacheConfiguration cacheConfiguration)` _constructor_ — Initialises a new instance with the given memory cache and cache configuration. The memory cache to read from and write to. The per-member configuration that governs caching behaviour.
- `void Intercept(IInvocation invocation)` _method_

#### `LeakingThisInterceptor`

_public class_

Source: `src/Shared/Caching/Interceptors/LeakingThisInterceptor.cs`

Interceptor that replaces a return value equal to the invocation target with the proxy, preventing accidental escape of the unwrapped target.

Members:

- `void Intercept(IInvocation invocation)` _method_

#### `MemberCacheKeyFactory`

_public class_

Source: `src/Shared/Caching/Interceptors/MemberCacheKeyFactory.cs`

that builds a cache key from the declaring type and member signature, producing a unique key per method regardless of arguments.

Members:

- `bool TryGetKey(IMemberInvocation invocation,out object key)` _method_

#### `QueryCacheKeyFactory`

_public class_

Source: `src/Shared/Caching/Interceptors/QueryCacheKeyFactory.cs`

that extracts LINQ expression trees from delegate arguments and uses their string representation as a cache key.

Members:

- `bool TryGetKey(IMemberInvocation invocation,out object key)` _method_

### `Industria4.Cqrs`

#### `AuditLogType`

_public class_

Source: `src/Identity/Identity.Cqrs/IdentityTypes.cs`

CQRS entity type marker for `AuditLog` entities.

#### `CqrsAuthorizeAttribute`

_public class_

Source: `src/Shared/Cqrs/CqrsAuthorizeAttribute.cs`

Requires that the caller satisfies the specified authorization policy before a CQRS command or query is dispatched.

Members:

- `string Policy` _property_ — Gets the authorization policy name that must be satisfied.

#### `CqrsConfigurer`

_internal class_

Source: `src/Shared/Cqrs.Rebus/CqrsConfigurer.cs`

Members:

- `CqrsConfigurer(IServiceCollection services)` _constructor_ — Initializes a new instance of .
- `ICqrsConfigurer AddCommandsRouteFromAssemblyOfType&lt;T&gt;(string queueName)` _method_ — add commands route from assembly of type.
- `ICqrsConfigurer AddHandlersFromAssemblyOfType&lt;T&gt;()` _method_ — add handlers from assembly of type.
- `void ApplyActions(StandardConfigurer&lt;IRouter&gt; routerConfigurer)` _method_ — apply actions.
- `void ApplyActions(StandardConfigurer&lt;ITimeoutManager&gt; timeoutConfigurer)` _method_ — apply actions.
- `void ApplyActions(StandardConfigurer&lt;ISagaStorage&gt; sagaConfigurer)` _method_ — apply actions.
- `void ApplyActions(StandardConfigurer&lt;ISubscriptionStorage&gt; subscriptiConfigurer)` _method_ — apply actions.
- `void ApplyActions(StandardConfigurer&lt;ITransport&gt; transportConfigurer)` _method_ — apply actions.
- `Task ApplySubscriptionsAsync(IBus bus)` _method_ — apply subscriptions async.
- `void PreActions()` _method_ — pre actions.
- `ICqrsConfigurer Subscribe&lt;T&gt;()` _method_ — subscribe.
- `ICqrsConfigurer UseInMemoryQueue(string queueName)` _method_ — use in memory queue.
- `ICqrsConfigurer UseQueue(string queueName)` _method_ — use queue.
- `ICqrsConfigurer UseRabbitQueueAndFileSystem(string queueName)` _method_ — use rabbit queue and file system.
- `ICqrsConfigurer UseRabbitQueueAndSqlServer(string queueName)` _method_ — use rabbit queue and sql server.
- `CqrsOptions Options` _property_ — Gets options.
- `IServiceProvider ServiceProvider` _property_ — Gets or sets service provider.
- `IServiceCollection Services` _property_ — Gets or sets services.

#### `CqrsExtensions`

_public class_

Source: `src/Gateway/Gateway.WebApi/Cqrs/CqrsExtensions.cs`

Extension methods for wiring Gateway CQRS queues.

Members:

- `ICqrsConfigurer UseGatewayInMemoryQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use an in-memory queue for Gateway commands.
- `ICqrsConfigurer UseGatewayQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use the standard queue for Gateway commands.
- `ICqrsConfigurer UseGatewayRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use a RabbitMQ + file-system queue for Gateway commands.
- `ICqrsConfigurer UseGatewayRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for Gateway commands.

#### `CqrsExtensions`

_public class_

Source: `src/Globalization/Globalization.Cqrs.Handlers/CqrsExtensions.cs`

Extension methods for registering Globalization CQRS handlers.

Members:

- `ICqrsConfigurer AddGlobalizationHandlers(this ICqrsConfigurer configurer)` _method_ — Registers all Globalization command/event handlers from the handlers assembly. The CQRS configurer to extend. The same `configurer` for fluent chaining.

#### `CqrsExtensions`

_public class_

Source: `src/Globalization/Globalization.Cqrs/CqrsExtensions.cs`

Extension methods for wiring Globalization CQRS queues and command routes.

Members:

- `ICqrsConfigurer AddGlobalizationCommandsRoute(this ICqrsConfigurer configurer)` _method_ — Registers all Globalization command types on the default Globalization queue route.
- `ICqrsConfigurer UseGlobalizationInMemoryQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use an in-memory queue for Globalization commands.
- `ICqrsConfigurer UseGlobalizationQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use the standard queue for Globalization commands.
- `ICqrsConfigurer UseGlobalizationRabbitQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for Globalization commands.

#### `CqrsExtensions`

_public class_

Source: `src/Identity/Identity.Cqrs.Handlers/CqrsExtensions.cs`

Extension methods for registering Identity handlers with the CQRS configurer.

Members:

- `ICqrsConfigurer AddIdentityHandlers(this ICqrsConfigurer configurer)` _method_ — Registers all Identity command and event handlers from the handlers assembly. The CQRS configurer instance. The same `configurer` for fluent chaining.

#### `CqrsExtensions`

_public class_

Source: `src/Identity/Identity.Cqrs/CqrsExtensions.cs`

Extension methods that register Identity CQRS infrastructure on .

Members:

- `ICqrsConfigurer AddIdentityCommandsRoute(this ICqrsConfigurer configurer)` _method_ — Registers routing for all Identity command types discovered from the assembly containing .
- `ICqrsConfigurer UseIdentityInMemoryQueue(this ICqrsConfigurer configurer)` _method_ — Configures an in-memory queue for Identity commands (useful in tests and single-process deployments).
- `ICqrsConfigurer UseIdentityQueue(this ICqrsConfigurer configurer)` _method_ — Configures the default queue transport for Identity commands.
- `ICqrsConfigurer UseIdentityRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)` _method_ — Configures RabbitMQ as the transport and the file system as the outbox store for Identity commands.
- `ICqrsConfigurer UseIdentityRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)` _method_ — Configures RabbitMQ as the transport and SQL Server as the outbox store for Identity commands.

#### `CqrsExtensions`

_public class_

Source: `src/Mes/Mes.Cqrs.Handlers/CqrsExtensions.cs`

Extension methods for registering MES CQRS command handlers.

Members:

- `ICqrsConfigurer AddMesHandlers(this ICqrsConfigurer configurer)` _method_ — Registers all MES command handlers found in the assembly.

#### `CqrsExtensions`

_public class_

Source: `src/Mes/Mes.Cqrs/CqrsExtensions.cs`

Extension methods for wiring MES CQRS queues and command routes.

Members:

- `ICqrsConfigurer AddMesCommandsRoute(this ICqrsConfigurer configurer)` _method_ — Registers all MES command types on the default MES queue route.
- `ICqrsConfigurer UseMesInMemoryQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use an in-memory queue for MES commands.
- `ICqrsConfigurer UseMesQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use the standard queue for MES commands.
- `ICqrsConfigurer UseMesRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use a RabbitMQ + file-system queue for MES commands.
- `ICqrsConfigurer UseMesRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for MES commands.

#### `CqrsExtensions`

_public class_

Source: `src/OpcUa/OpcUa.Cqrs.Handlers/CqrsExtensions.cs`

Extension methods for registering OPC-UA command handlers with an .

Members:

- `ICqrsConfigurer AddOpcUaHandlers(this ICqrsConfigurer configurer)` _method_ — Registers all OPC-UA command handlers from the handlers assembly.

#### `CqrsExtensions`

_public class_

Source: `src/OpcUa/OpcUa.Cqrs/CqrsExtensions.cs`

Extension methods for configuring OPC-UA queues and command routes on an .

Members:

- `ICqrsConfigurer AddOpcUaCommandsRoute(this ICqrsConfigurer configurer)` _method_ — Registers all OPC-UA commands as routed to the OPC-UA default queue.
- `ICqrsConfigurer UseOpcUaInMemoryQueue(this ICqrsConfigurer configurer)` _method_ — Configures the OPC-UA default queue as an in-memory queue.
- `ICqrsConfigurer UseOpcUaQueue(this ICqrsConfigurer configurer)` _method_ — Configures the OPC-UA default queue as a durable queue.
- `ICqrsConfigurer UseOpcUaRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)` _method_ — Configures the OPC-UA default queue using RabbitMQ transport with file-system storage.
- `ICqrsConfigurer UseOpcUaRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)` _method_ — Configures the OPC-UA default queue using RabbitMQ transport with SQL Server storage.

#### `CqrsExtensions`

_public class_

Source: `src/Production/Production.Cqrs.Handlers/CqrsExtensions.cs`

Extension methods for registering Production CQRS message handlers.

Members:

- `ICqrsConfigurer AddProductionHandlers(this ICqrsConfigurer configurer)` _method_ — Registers all Production CQRS command handlers from the handlers assembly.

#### `CqrsExtensions`

_public class_

Source: `src/Production/Production.Cqrs/CqrsExtensions.cs`

Extension methods for wiring Production CQRS queues and command routes.

Members:

- `ICqrsConfigurer AddProductionCommandsRoute(this ICqrsConfigurer configurer)` _method_ — Registers all Production command types on the default Production queue route.
- `ICqrsConfigurer UseProductionInMemoryQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use an in-memory queue for Production commands.
- `ICqrsConfigurer UseProductionQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use the standard queue for Production commands.
- `ICqrsConfigurer UseProductionRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use a RabbitMQ + file-system queue for Production commands.
- `ICqrsConfigurer UseProductionRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for Production commands.

#### `CqrsExtensions`

_public class_

Source: `src/Recipes/Recipes.Cqrs.Handlers/CqrsExtensions.cs`

Extension methods that register Recipes CQRS handlers with an .

Members:

- `ICqrsConfigurer AddRecipesHandlers(this ICqrsConfigurer configurer)` _method_ — Registers all command and event handlers defined in the Recipes.Cqrs.Handlers assembly. The CQRS configurer to register handlers with. The same `configurer` for chaining.

#### `CqrsExtensions`

_public class_

Source: `src/Recipes/Recipes.Cqrs/CqrsExtensions.cs`

Extension methods that register Recipes CQRS infrastructure on .

Members:

- `ICqrsConfigurer AddRecipesCommandsRoute(this ICqrsConfigurer configurer)` _method_ — Registers routing for all Recipes command types discovered from the assembly containing .
- `ICqrsConfigurer UseRecipesInMemoryQueue(this ICqrsConfigurer configurer)` _method_ — Configures an in-memory queue for Recipes commands.
- `ICqrsConfigurer UseRecipesQueue(this ICqrsConfigurer configurer)` _method_ — Configures the default queue transport for Recipes commands.
- `ICqrsConfigurer UseRecipesRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)` _method_ — Configures RabbitMQ as the transport and the file system as the outbox store for Recipes commands.
- `ICqrsConfigurer UseRecipesRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)` _method_ — Configures RabbitMQ as the transport and SQL Server as the outbox store for Recipes commands.

#### `CqrsExtensions`

_public class_

Source: `src/Sequences/Sequences.Cqrs.Handlers/CqrsExtensions.cs`

Extension methods for that register Sequences CQRS handlers and event subscriptions.

Members:

- `ICqrsConfigurer AddSequencesHandlers(this ICqrsConfigurer configurer)` _method_ — Registers all Sequences CQRS handlers and subscribes to `SequenceStateChangedEvent`. The CQRS configurer instance. The same `configurer` instance for chaining.

#### `CqrsExtensions`

_public class_

Source: `src/Sequences/Sequences.Cqrs/CqrsExtensions.cs`

Extension methods for wiring Sequences CQRS queues and command routes.

Members:

- `ICqrsConfigurer AddSequencesCommandsRoute(this ICqrsConfigurer configurer)` _method_ — Registers all Sequences command types on the default Sequences queue route.
- `ICqrsConfigurer UseSequencesInMemoryQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use an in-memory queue for Sequences commands.
- `ICqrsConfigurer UseSequencesQueue(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use the standard queue for Sequences commands.
- `ICqrsConfigurer UseSequencesRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use a RabbitMQ + file-system queue for Sequences commands.
- `ICqrsConfigurer UseSequencesRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)` _method_ — Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for Sequences commands.

#### `CqrsOptions`

_public class_

Source: `src/Shared/Cqrs.Rebus/CqrsOptions.cs`

Options containing connection strings and service bus settings

Members:

- `List&lt;Assembly&gt; AssembliesToSimplify` _property_ — Gets assemblies whose message type names are simplified to short names in topic convention.
- `string RabbitMqConnectionString` _property_ — Gets or sets the RabbitMQ connection string.
- `int ServiceBusWorkers` _property_ — Gets or sets the number of Rebus service bus worker threads. Defaults to 10.
- `string SqlServerConnectionString` _property_ — Gets or sets the SQL Server connection string used for transport or saga storage.
- `string StoragePath` _property_ — Gets or sets the file-system path used by the file-system transport/storage.
- `string StoreConnectionString` _property_ — Gets or sets a generic store connection string for other storage backends.

#### `GatewayQueues`

_public class_

Source: `src/Gateway/Gateway.WebApi/Cqrs/GatewayQueues.cs`

Well-known queue names for the Gateway bounded context.

Members:

- `string Default` _property_ — Gets the name of the main Gateway command queue.
- `string Events` _property_ — Gets the name of the Gateway domain-events queue.

#### `GlobalizationQueues`

_public class_

Source: `src/Globalization/Globalization.Cqrs/GlobalizationQueues.cs`

Defines the queue names used by the Globalization bounded context.

Members:

- `string Default` _property_ — Gets the name of the default command queue.
- `string Events` _property_ — Gets the name of the domain-events queue.

#### `GlobalizationQueuesExtensions`

_public class_

Source: `src/Globalization/Globalization.Cqrs/GlobalizationQueues.cs`

Extension methods for obtaining the instance from the available queues registry.

Members:

- `GlobalizationQueues Globalization(this IAvailableQueues availableQueues)` _method_ — Returns the accessor.

#### `IAvailableQueues`

_public interface_

Source: `src/Shared/Cqrs/Queues.cs`

Interface used by extensions methods for providing available queues

#### `ICqrsConfigurer`

_public interface_

Source: `src/Shared/Cqrs/ICqrsConfigurer.cs`

Interfaces used for configuring service bus

#### `IdentityQueues`

_public class_

Source: `src/Identity/Identity.Cqrs/IdentityQueues.cs`

Well-known queue names for the Identity bounded context.

Members:

- `string Default` _property_ — Gets the name of the main Identity command queue.
- `string Events` _property_ — Gets the name of the Identity domain-events queue.

#### `IdentityQueuesExtensions`

_public class_

Source: `src/Identity/Identity.Cqrs/IdentityQueues.cs`

Extension methods that expose the queue-name group.

Members:

- `IdentityQueues Identity(this IAvailableQueues availableQueues)` _method_ — Returns the shared group from the available-queues collection. The available queues accessor. The Identity queue names.

#### `IEntityType`

_public interface_

Source: `src/Shared/Cqrs/IEntityType.cs`

Marker interface that identifies a CQRS entity type, used for generic constraints and service discovery.

#### `MesQueues`

_public class_

Source: `src/Mes/Mes.Cqrs/MesQueues.cs`

Well-known queue names for the MES bounded context.

Members:

- `string Default` _property_ — Gets the name of the main MES command queue.
- `string Events` _property_ — Gets the name of the MES domain-events queue.

#### `MesQueuesExtensions`

_public class_

Source: `src/Mes/Mes.Cqrs/MesQueues.cs`

Extension methods that expose the queue-name group.

Members:

- `MesQueues Mes(this IAvailableQueues availableQueues)` _method_ — Returns the shared group from the available-queues collection. The available queues accessor. The MES queue names.

#### `OpcUaQueues`

_public class_

Source: `src/OpcUa/OpcUa.Cqrs/OpcUaQueues.cs`

Well-known queue names for the OPC-UA bounded context.

Members:

- `string Default` _property_ — Gets the name of the main OPC-UA command queue.
- `string Events` _property_ — Gets the name of the OPC-UA domain-events queue.

#### `OpcUaQueuesExtensions`

_public class_

Source: `src/Gateway/Gateway.WebApi/Cqrs/GatewayQueues.cs`

Extension methods that expose the queue-name group.

Members:

- `GatewayQueues Gateway(this IAvailableQueues availableQueues)` _method_ — Returns the shared group from the available-queues collection.

#### `OpcUaQueuesExtensions`

_public class_

Source: `src/OpcUa/OpcUa.Cqrs/OpcUaQueues.cs`

Extension methods that expose the queue-name group.

Members:

- `OpcUaQueues OpcUa(this IAvailableQueues availableQueues)` _method_ — Returns the shared group from the available-queues collection. The available queues accessor. The OPC-UA queue names.

#### `ProductionQueues`

_public class_

Source: `src/Production/Production.Cqrs/ProductionQueues.cs`

Well-known queue names for the Production bounded context.

Members:

- `string Default` _property_ — Gets the name of the main Production command queue.
- `string Events` _property_ — Gets the name of the Production domain-events queue.

#### `ProductionQueuesExtensions`

_public class_

Source: `src/Production/Production.Cqrs/ProductionQueues.cs`

Extension methods that expose the queue-name group.

Members:

- `ProductionQueues Production(this IAvailableQueues availableQueues)` _method_ — Returns the shared group from the available-queues collection. The available queues accessor. The Production queue names.

#### `Queues`

_public class_

Source: `src/Shared/Cqrs/Queues.cs`

Static class which aggregates all queues available

Members:

- `IAvailableQueues Available` _property_ — Gets an instance which extensions methods can extend to provide available queues

#### `RecipesQueues`

_public class_

Source: `src/Recipes/Recipes.Cqrs/RecipesQueues.cs`

Well-known queue names for the Recipes bounded context.

Members:

- `string Default` _property_ — Gets the name of the main Recipes command queue.
- `string Events` _property_ — Gets the name of the Recipes domain-events queue.

#### `RecipesQueuesExtensions`

_public class_

Source: `src/Recipes/Recipes.Cqrs/RecipesQueues.cs`

Extension methods that expose the queue-name group.

Members:

- `RecipesQueues Recipes(this IAvailableQueues availableQueues)` _method_ — Returns the shared group from the available-queues collection.

#### `RoleType`

_public class_

Source: `src/Identity/Identity.Cqrs/IdentityTypes.cs`

CQRS entity type marker for `Role` entities.

#### `SequencesQueues`

_public class_

Source: `src/Sequences/Sequences.Cqrs/SequencesQueues.cs`

Well-known queue names for the Sequences bounded context.

Members:

- `string Default` _property_ — Gets the name of the main Sequences command queue.
- `string Events` _property_ — Gets the name of the Sequences domain-events queue.

#### `SequencesQueuesExtensions`

_public class_

Source: `src/Sequences/Sequences.Cqrs/SequencesQueues.cs`

Extension methods that expose the queue-name group.

Members:

- `SequencesQueues Sequences(this IAvailableQueues availableQueues)` _method_ — Returns the shared group from the available-queues collection.

#### `UserType`

_public class_

Source: `src/Identity/Identity.Cqrs/IdentityTypes.cs`

CQRS entity type marker for `User` entities.

### `Industria4.Cqrs.Json`

#### `ExceptionJsonConverter`

_internal class_

Source: `src/Shared/Cqrs/Json/ExceptionJsonConverter.cs`

Members:

- `bool CanConvert(Type objectType)` _method_ — can convert.
- `object ReadJson(JsonReader reader,Type objectType,object existingValue,JsonSerializer serializer)` _method_ — read json.
- `void WriteJson(JsonWriter writer,object value,JsonSerializer serializer)` _method_ — write json.

#### `IpAddressJsonConverter`

_public class_

Source: `src/Shared/Cqrs/Json/IpAddressJsonConverter.cs`

JSON converter for using Newtonsoft.Json.

Members:

- `bool CanConvert(Type objectType)` _method_ — Returns `true` when the type is . The type to check. `true` if this converter handles the type; otherwise `false`.
- `object ReadJson(JsonReader reader,Type objectType,object existingValue,JsonSerializer serializer)` _method_ — Reads an IP address from a JSON string token. The JSON reader. The target object type. The existing value. The calling serializer. The parsed .
- `void WriteJson(JsonWriter writer,object value,JsonSerializer serializer)` _method_ — Writes an IP address as a JSON string token. The JSON writer. The value to write. The calling serializer.

#### `MessageContractResolver`

_public class_

Source: `src/Shared/Cqrs/Json/MessageContractResolver.cs`

Custom contract resolver for IMessage

Members:

- `List&lt;MemberInfo&gt; GetSerializableMembers(Type objectType)` _method_

### `Industria4.Cqrs.Messaging`

#### `IMessage`

_public interface_

Source: `src/Shared/Cqrs/Messaging/IMessage.cs`

Represents a bus message

#### `IMessagesCatcher`

_public interface_

Source: `src/Shared/Cqrs/Messaging/IMessagesCatcher.cs`

Accumulates dispatched messages in memory, typically used in tests to assert that specific messages were sent.

#### `IMessagesWaiter`

_public interface_

Source: `src/Shared/Cqrs/Messaging/IMessagesWaiter.cs`

Creates awaitable message waiter handles for one or more message types.

#### `IMessageWaiter`

_public interface_

Source: `src/Shared/Cqrs/Messaging/IMessageWaiter.cs`

Represents a handle that waits asynchronously for a single dispatched message, then releases the registration.

#### `MessageBase`

_public class_

Source: `src/Shared/Cqrs/Messaging/MessageBase.cs`

Base class for all CQRS messages, providing a stable unique identifier per instance.

#### `MessagesCatcher`

_public class_

Source: `src/Shared/Cqrs.Rebus/Messaging/MessagesCatcher.cs`

Rebus-based implementation of that accumulates dispatched messages for test inspection.

Members:

- `MessagesCatcher(IBus bus)` _constructor_ — Initialises a new instance bound to the given Rebus bus. The Rebus bus instance.
- `void Add(IMessage message)` _method_
- `IEnumerable&lt;IMessage&gt; Messages` _property_
- `Action&lt;IMessage&gt; OnNewMessage` _property_

#### `MessagesWaiter`

_internal class_

Source: `src/Shared/Cqrs.Rebus/Messaging/MessagesWaiter.cs`

Members:

- `MessagesWaiter(IBus bus)` _constructor_ — Initializes a new instance of .
- `Task&lt;IMessageWaiter&gt; GetAsync(IEnumerable&lt;Type&gt; messageTypes,Func&lt;IMessage,bool&gt; filter)` _method_ — get async.

#### `MessagesWaiterBase`

_public class_

Source: `src/Shared/Cqrs/Messaging/MessagesWaiterBase.cs`

Base class for implementations that manages in-memory waiter registrations keyed by message type.

Members:

- `Task&lt;IMessageWaiter&gt; GetAsync(IEnumerable&lt;Type&gt; messageTypes,Func&lt;IMessage,bool&gt; filter)` _method_
- `IEnumerable&lt;IDisposable&gt; GetPending(Type type)` _method_ — Returns the collection of pending waiter disposables registered for the given message type. The message type to look up. The registered waiter disposables, or an empty sequence if none are registered.
- `void Handle(IMessage message)` _method_ — Dispatches the received message to all registered waiters subscribed to its type. The message to dispatch.
- `void Release(IEnumerable&lt;Type&gt; messageTypes,IMessageWaiter messageWaiter)` _method_ — Removes all waiter registrations for the specified message types and waiter instance. The message types whose registrations should be removed. The waiter instance to unregister.
- `IEnumerable&lt;Type&gt; PendingTypes` _property_ — Gets the message types that currently have at least one pending waiter registered.

### `Industria4.Cqrs.Messaging.Commands`

#### `AddEntityCommand&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Commands/AddEntityCommand.cs`

Represents a base implementation of a command which adds an entity

Members:

- `AddEntityCommand(string id)` _constructor_ — Initialises a new instance with the specified entity identifier. The unique identifier of the entity to add.

#### `AddOrUpdateEntityCommand&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Commands/AddOrUpdateEntityCommand.cs`

Represents a base implementation of a command which adds or updates an entity

Members:

- `AddOrUpdateEntityCommand(string id)` _constructor_ — Initialises a new instance with the specified entity identifier. The unique identifier of the entity to add or update.

#### `CommandBase`

_public class_

Source: `src/Shared/Cqrs/Messaging/Commands/CommandBase.cs`

Base implementation of a CQRS command

#### `EntityCommand&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Commands/EntityCommand.cs`

Represents a base implementation of a command which works with an entity

Members:

- `EntityCommand(string id)` _constructor_ — Initialises the command with the given entity ID, generating a new one if `id` is `null`. The entity identifier, or `null` to generate a new ID.
- `string Id` _property_ — Gets the entity id

#### `Extensions`

_public class_

Source: `src/Shared/Cqrs.Rebus/Messaging/Commands/Extensions.cs`

Extensions dedicated to the commands

Members:

- `void DisableAutoCompleteEvent(this ICommand command)` _method_ — Disables the raising of an CommandCompletedEvent for the specified command in current context
- `bool GetIsAutoCompleteEventDisabled(this ITransactionContext context)` _method_ — Gets if the raising of an CommandCompletedEvent for the specified command in current context is disabled

#### `Extensions`

_public class_

Source: `src/Shared/Cqrs/Messaging/Commands/Extensions.cs`

Extensions dedicated to the commands

Members:

- `Task WhenFinished&lt;T&gt;(this T command,IMessagesWaiter messagesWaiter)` _method_ — Awaits completion of the command using a default 15-second timeout. The command type. The command to wait for. The messages waiter used to subscribe to completion events.
- `Task WhenFinished&lt;T&gt;(this T command,IMessagesWaiter messagesWaiter,TimeSpan timeout)` _method_ — Awaits completion of the command within the given timeout, throwing on error or validation failure. The command type. The command to wait for. The messages waiter used to subscribe to completion events. Maximum time to wait for the command to complete.

#### `ICommand`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Commands/ICommand.cs`

Represents a CQRS command

#### `IEntityCommand`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Commands/IEntityCommand.cs`

Represents a command dedicated to an entity

#### `RemoveEntityCommand&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Commands/RemoveEntityCommand.cs`

Represents a base implementation of a command which removes an entity

Members:

- `RemoveEntityCommand(string id)` _constructor_ — Initialises a new instance with the specified entity identifier. The unique identifier of the entity to remove.

#### `UpdateEntityCommand&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Commands/UpdateEntityCommand.cs`

Represents a base implementation of a command which updates an entity

Members:

- `UpdateEntityCommand(string id)` _constructor_ — Initialises a new instance with the specified entity identifier. The unique identifier of the entity to update.

### `Industria4.Cqrs.Messaging.Events`

#### `CommandCompletedEvent&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/CommandCompletedEvent.cs`

Represents an completed event for a specific command

Members:

- `CommandCompletedEvent(string commandId,object state)` _constructor_ — Initialises a new instance with the given command ID and state. The identifier of the completed command. Optional state object associated with the command.

#### `CommandErrorEvent&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/CommandErrorEvent.cs`

Represents an error event for a specific command

Members:

- `CommandErrorEvent(string commandId,object state,Exception[] exceptions)` _constructor_ — Initialises a new instance with the given command ID, state, and exceptions. The identifier of the failed command. Optional state object associated with the command. The exceptions raised during command execution.
- `Exception[] Exceptions` _property_ — Gets the exceptions raised by the command

#### `CommandEvent&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/CommandEvent.cs`

Represents an event for a specific command

Members:

- `CommandEvent(string commandId,object state)` _constructor_ — Initialises a new instance with the originating command identifier and state. The identifier of the command that raised this event. Optional state information associated with the event.
- `string CommandId` _property_ — The original command id which has raised the event
- `object State` _property_ — Gets a generic state information

#### `CommandValidationEvent&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/CommandValidationEvent.cs`

Represents a validation event for a specific command

Members:

- `CommandValidationEvent(string commandId,object state,IEnumerable&lt;ValidationResult&gt; results)` _constructor_ — Initialises a new instance with the given command ID, state, and validation results. The identifier of the command that failed validation. The state associated with the command. The collection of validation results describing the failures.
- `IEnumerable&lt;ValidationResult&gt; Results` _property_ — Gets the results

#### `EntityAddedEvent&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/EntityAddedEvent.cs`

Represents an added event for a specific command related to an entity

Members:

- `EntityAddedEvent(string id)` _constructor_ — Initialises a new instance for the entity with the given ID. The identifier of the added entity.

#### `EntityCompletedEvent&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/EntityCompletedEvent.cs`

Represents a completetion event for a specific command related to an entity

Members:

- `EntityCompletedEvent(string id)` _constructor_ — Initialises a new instance with the specified entity identifier. The unique identifier of the completed entity.
- `string Id` _property_ — Gets the entity id

#### `EntityRemovedEvent&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/EntityRemovedEvent.cs`

Represents a removed event for a specific command

Members:

- `EntityRemovedEvent(string id)` _constructor_ — Initialises a new instance for the entity with the given ID. The identifier of the removed entity.

#### `EntityUpdatedEvent&lt;T&gt;`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/EntityUpdatedEvent.cs`

Represents an updated event for a specific command related to an entity

Members:

- `EntityUpdatedEvent(string id)` _constructor_ — Initialises a new instance for the entity with the given ID. The identifier of the updated entity.

#### `EventBase`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/EventBase.cs`

Base implementation of event

#### `Extensions`

_public class_

Source: `src/Shared/Cqrs/Messaging/Events/Extensions.cs`

Extensions methods for creating events

Members:

- `EntityAddedEvent&lt;T&gt; CreateAddedEvent&lt;T&gt;(this EntityCommand&lt;T&gt; command)` _method_ — Creates a for a command
- `CommandCompletedEvent&lt;T&gt; CreateCompletedEvent&lt;T&gt;(this T command)` _method_ — Creates a for a command
- `EntityRemovedEvent&lt;T&gt; CreateRemovedEvent&lt;T&gt;(this EntityCommand&lt;T&gt; command)` _method_ — Creates a for a command
- `EntityUpdatedEvent&lt;T&gt; CreateUpdatedEvent&lt;T&gt;(this EntityCommand&lt;T&gt; command)` _method_ — Creates a for a command
- `CommandValidationEvent&lt;T&gt; CreateValidationEvent&lt;T&gt;(this T command,object state,params ValidationResult[] validationResults)` _method_ — Creates a for a command
- `CommandValidationEvent&lt;T&gt; CreateValidationEvent&lt;T&gt;(this T command,params ValidationResult[] validationResults)` _method_ — Creates a for a command

#### `ICommandErrorEvent`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Events/CommandErrorEvent.cs`

Represents an error event for a specific command

#### `ICommandEvent`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Events/ICommandEvent.cs`

Represents a CQRS event related to a command

#### `ICommandValidationEvent`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Events/CommandValidationEvent.cs`

Represents an error event for a specific command

#### `IEntityAddedEvent`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Events/EntityAddedEvent.cs`

Represents an added event related to an entity

#### `IEntityCompletedEvent`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Events/EntityCompletedEvent.cs`

Represents an completetion event related to an entity

#### `IEntityEvent`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Events/IEntityEvent.cs`

Represents a CQRS event dedicated to an

#### `IEntityRemovedEvent`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Events/EntityRemovedEvent.cs`

Represents a removed event for a specific command

#### `IEntityUpdatedEvent`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Events/EntityUpdatedEvent.cs`

Represents an updated event related to an entity

#### `IEvent`

_public interface_

Source: `src/Shared/Cqrs/Messaging/Events/IEvent.cs`

Represents a CQRS event

### `Industria4.Cqrs.Rebus`

#### `AutoSetMessageIdStep`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/AutoSetMessageIdStep.cs`

Automatically set message id and correlation headers

Members:

- `Task Process(OutgoingStepContext context,Func&lt;Task&gt; next)` _method_
- `Task Process(IncomingStepContext context,Func&lt;Task&gt; next)` _method_

#### `CatchMessagesSentStep`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/CatchMessagesSentStep.cs`

Rebus outgoing step that captures each outgoing in the scoped , enabling assertions in tests.

Members:

- `Task Process(OutgoingStepContext context,Func&lt;Task&gt; next)` _method_

#### `CommandsErrorHandler`

_internal class_

Source: `src/Shared/Cqrs.Rebus/Rebus/CommandsErrorHandler.cs`

Members:

- `CommandsErrorHandler(IServiceProvider serviceProvider,ISerializer serializer,SimpleRetryStrategySettings simpleRetryStrategySettings,ITransport transport,IRebusLoggerFactory rebusLoggerFactory)` _constructor_
- `Task HandlePoisonMessage(TransportMessage transportMessage,ITransactionContext transactionContext,Exception exception)` _method_
- `void Initialize()` _method_

#### `CompleteCommandEventStep`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/CompleteCommandEventStep.cs`

Rebus incoming step that automatically publishes a for successfully processed commands that have not disabled auto-completion.

Members:

- `CompleteCommandEventStep(IErrorTracker errorTracker,IServiceProvider serviceProvider)` _constructor_ — Initialises a new instance with the given error tracker and service provider. Tracks failed delivery attempts. Resolves the bus needed to publish completion events.
- `Task Process(IncomingStepContext context,Func&lt;Task&gt; next)` _method_

#### `LogMessageStep`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/LogMessageStep.cs`

Rebus pipeline step that logs outgoing and incoming message bodies at `Debug` level.

Members:

- `LogMessageStep(ILogger&lt;LogMessageStep&gt; logger)` _constructor_ — Initialises a new instance with the given logger. Logger used for message diagnostics.
- `Task Process(OutgoingStepContext context,Func&lt;Task&gt; next)` _method_
- `Task Process(IncomingStepContext context,Func&lt;Task&gt; next)` _method_

#### `ServiceProviderStep`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/ServiceProviderStep.cs`

Rebus pipeline step that propagates an scope across both incoming and outgoing steps, creating a fresh DI scope when none is active.

Members:

- `ServiceProviderStep(IServiceProvider serviceProvider)` _constructor_ — Initialises a new instance with the root service provider. The root DI service provider.
- `Task Process(IncomingStepContext context,Func&lt;Task&gt; next)` _method_
- `Task Process(OutgoingStepContext context,Func&lt;Task&gt; next)` _method_

#### `SimpleTopicNameConvention`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/SimpleTopicNameConvention.cs`

Rebus that produces short, human-readable topic names for assemblies listed in .

Members:

- `SimpleTopicNameConvention(IOptions&lt;CqrsOptions&gt; cqrsOptions)` _constructor_ — Initialises a new instance with the given CQRS options. Options providing the set of assemblies to simplify.
- `string GetTopic(Type eventType)` _method_

### `Industria4.Cqrs.Web`

#### `SignalrHostedService`

_public class_

Source: `src/Shared/Cqrs.Web/SignalrHostedService.cs`

Hosted service and implementation that subscribes to a SignalR hub and dispatches received messages to waiting listeners.

Members:

- `SignalrHostedService(ILogger&lt;SignalrHostedService&gt; logger,IOptionsMonitor&lt;SignalrMessagesWaiterOptions&gt; options)` _constructor_ — Initialises a new instance with the given logger and options. Logger for diagnostics. Options monitor supplying the current .
- `Task&lt;IMessageWaiter&gt; GetAsync(IEnumerable&lt;Type&gt; messageTypes,Func&lt;IMessage,bool&gt; filter)` _method_
- `void Release(IEnumerable&lt;Type&gt; messageTypes,IMessageWaiter messageWaiter)` _method_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `SignalrMessagesWaiterOptions`

_public class_

Source: `src/Shared/Cqrs.Web/SignalrMessagesWaiterOptions.cs`

Configuration options for the SignalR-based implementation.

Members:

- `Action&lt;HttpConnectionOptions&gt; HttpConnectionOptions` _property_ — Gets or sets an optional callback for configuring the underlying HTTP connection options.
- `TimeSpan ReconnectionDelay` _property_ — Gets or sets the delay between reconnection attempts when the SignalR connection is lost. Defaults to 3 seconds.
- `Uri Uri` _property_ — Gets or sets the SignalR hub URI to connect to.

### `Industria4.DataAccessObject`

#### `Extensions`

_public class_

Source: `src/Shared/DataAccessObject/Extensions.cs`

Extension methods for that expose soft-deleted entity queries.

Members:

- `IQueryable&lt;T&gt; GetAll&lt;T&gt;(this IDataAccessObject&lt;T&gt; dao)` _method_ — Returns the list of all entities, deleted and not
- `IQueryable&lt;T&gt; GetDeleted&lt;T&gt;(this IDataAccessObject&lt;T&gt; dao)` _method_ — Returns the list of entities that have been deleted

#### `IDataAccessObject`

_public interface_

Source: `src/Shared/DataAccessObject/IDataAccessObject.cs`

Represents an object for querying model

#### `IDataAccessObject&lt;out T&gt;`

_public interface_

Source: `src/Shared/DataAccessObject/IDataAccessObject.cs`

Represents an object for querying model

#### `IDeletedAccessor&lt;out T&gt;`

_public interface_

Source: `src/Shared/DataAccessObject/IDeletedAccessor.cs`

Accessor to access deleted query

#### `ITagsAccessObject&lt;T&gt;`

_public interface_

Source: `src/Shared/DataAccessObject/ITagsAccessObject.cs`

Exposes a queryable collection of tag keys for entities of type `T`. The entity type exposed by this accessor.

### `Industria4.DataLogger.OpcUa`

#### `DataLoggerModule`

_public class_

Source: `src/DataLogger/DataLogger.OpcUa/DataLoggerModule.cs`

Hosting module that registers the OPC UA data-logger within the plugin system.

Members:

- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `string Name` _property_

#### `DataLoggerOptions`

_public class_

Source: `src/DataLogger/DataLogger.OpcUa/DataLoggerOptions.cs`

Top-level configuration options for the OPC UA data-logger.

Members:

- `Dictionary&lt;string,DataLoggerTagOptions&gt; Nodes` _property_ — Gets the dictionary of OPC UA node logging configurations keyed by logical node name (case-insensitive).
- `bool SkipSubscriptionTrigger` _property_ — Gets or sets a value indicating whether the initial subscription-trigger event is skipped. Defaults to .
- `Dictionary&lt;string,DataLoggerTargetOptions&gt; Targets` _property_ — Gets the dictionary of InfluxDB target configurations keyed by target name (case-insensitive).

#### `DataLoggerService`

_public class_

Source: `src/DataLogger/DataLogger.OpcUa/DataLoggerService.cs`

Background service that reads OPC UA nodes and writes measurement data to InfluxDB.

Members:

- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `DataLoggerTagOptions`

_public class_

Source: `src/DataLogger/DataLogger.OpcUa/DataLoggerOptions.cs`

Configuration options for a single OPC UA tag to be logged.

Members:

- `Dictionary&lt;string,string&gt; CollectNodeIds` _property_ — Gets the dictionary mapping InfluxDB field names to OPC UA node identifiers to collect (case-insensitive).
- `object RestoreSubscribeNodeValue` _property_ — Gets or sets the value written back to the subscription node after a trigger is processed.
- `int? ScanInterval` _property_ — Gets or sets the polling interval in milliseconds. When set, a timer reads the node at this interval.
- `string SourceServerId` _property_ — Gets or sets the identifier of the source OPC UA server to read from.
- `string SubscribeNodeId` _property_ — Gets or sets the OPC UA node identifier used for subscription-based triggering.
- `string Target` _property_ — Gets or sets the name of the InfluxDB target to write the collected data to.

#### `DataLoggerTargetOptions`

_public class_

Source: `src/DataLogger/DataLogger.OpcUa/DataLoggerOptions.cs`

Configuration options for a single InfluxDB write target.

Members:

- `Uri Uri` _property_ — Gets or sets the URI of the InfluxDB instance to write data to.

#### `StartupService`

_public class_

Source: `src/DataLogger/DataLogger.OpcUa/StartupService.cs`

Startup service that registers OPC UA data-logger dependencies and configuration.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

### `Industria4.DataLogger.WebApp`

#### `DataLoggerInfluxDbOptions`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/DataLoggerOptions.cs`

Connection options for a single InfluxDB instance.

Members:

- `Uri Uri` _property_ — Gets or sets the URI of the InfluxDB instance.

#### `DataLoggerLanguageOptions`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/DataLoggerOptions.cs`

Dictionary of field-name to display-label overrides for a single culture (case-insensitive).

Members:

- `DataLoggerLanguageOptions()` _constructor_ — Initializes a new with a case-insensitive comparer.

#### `DataLoggerLanguagesOptions`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/DataLoggerOptions.cs`

Dictionary of per-culture field-label options, keyed by culture name (case-insensitive).

Members:

- `DataLoggerLanguagesOptions()` _constructor_ — Initializes a new with a case-insensitive comparer.

#### `DataLoggerMeasurementOptions`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/DataLoggerOptions.cs`

Display and routing options for a single InfluxDB measurement.

Members:

- `string InfluxDb` _property_ — Gets or sets the name of the InfluxDB database that contains this measurement.
- `DataLoggerLanguagesOptions Languages` _property_ — Gets the per-culture field-label overrides.
- `DataLoggerStylesOptions Styles` _property_ — Gets the per-field style overrides.

#### `DataLoggerOptions`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/DataLoggerOptions.cs`

Top-level configuration options for the DataLogger web application.

Members:

- `Dictionary&lt;string,DataLoggerInfluxDbOptions&gt; InfluxDbs` _property_ — Gets the dictionary of InfluxDB connection options keyed by database name (case-insensitive).
- `Dictionary&lt;string,DataLoggerMeasurementOptions&gt; Measurements` _property_ — Gets the dictionary of measurement display options keyed by measurement name (case-insensitive).

#### `DataLoggerStyleOptions`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/DataLoggerOptions.cs`

Visual style overrides for a matched field value.

Members:

- `string Icon` _property_ — Gets or sets the icon CSS class to display.
- `string Style` _property_ — Gets or sets the CSS class or style string to apply.

#### `DataLoggerStylesOptions`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/DataLoggerOptions.cs`

Dictionary of style options keyed by field match expression.

#### `MatchKey`

_public struct_

Source: `src/DataLogger/DataLogger.WebApp/MatchKey.cs`

A parsed field-matching key that optionally includes a comparison operator and value.

Members:

- `MatchKey(string key,Func&lt;object,bool&gt; @operator)` _constructor_ — Initializes a new . The field name to match against. The optional comparison delegate.
- `bool Match(string key)` _method_ — Returns `true` when this key matches the field name with no value comparison.
- `bool Match(string key,object value)` _method_ — Returns `true` when this key matches the field name and the value satisfies the comparison operator.
- `bool TryParse(string key,out MatchKey value)` _method_ — Attempts to parse a match-key expression such as `field`, `field=value`, or `field&amp;gt;10`. The expression string to parse. The parsed when the method returns `true`. `true` if parsing succeeded; otherwise `false`.

#### `MatchKeyExtensions`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/MatchKey.cs`

Extension methods for searching collections keyed by using wildcard/value matching.

Members:

- `bool TryMatch&lt;T&gt;(this IEnumerable&lt;KeyValuePair&lt;MatchKey,T&gt;&gt; source,string key,out T found)` _method_ — Tries to find the first entry in `source` whose matches the given field `key`. The value type stored in the collection. The sequence of key-value pairs to search. The field name to match against. When this method returns `true`, contains the matched value; otherwise the default value. `true` if a matching key was found; otherwise `false`.
- `bool TryMatch&lt;T&gt;(this IEnumerable&lt;KeyValuePair&lt;MatchKey,T&gt;&gt; source,string key,object value,out T found)` _method_ — Tries to find the first entry in `source` whose matches both the field `key` and the associated `value`. The value type stored in the collection. The sequence of key-value pairs to search. The field name to match against. The field value to match against. When this method returns `true`, contains the matched value; otherwise the default value. `true` if a matching entry was found; otherwise `false`.

#### `StartupService`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/StartupService.cs`

Startup service that registers DataLogger web-application dependencies and configuration.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

### `Industria4.DataLogger.WebApp.Modules`

#### `DataLoggerModule`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Modules/DataLoggerModule.cs`

Client module that registers the DataLogger navigation menu entries when the user is authorized.

Members:

- `DataLoggerModule(IMenuService menuService,IOptions&lt;DataLoggerOptions&gt; options,IStringLocalizer&lt;Localization&gt; localizer,ILanguageContext languageContext,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)` _constructor_ — Initializes a new .
- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `bool Loaded` _property_
- `string Name` _property_

### `Industria4.DataLogger.WebApp.Routing`

#### `DynamicRouteBuilderProvider`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Routing/DynamicRouteBuilderProvider.cs`

Dynamic route builder provider that registers the DataLogger Blazor view when the module is loaded.

Members:

- `DynamicRouteBuilderProvider(DataLoggerModule module)` _constructor_ — Initializes a new . The DataLogger module used to check whether routes should be registered.
- `IEnumerable&lt;Type&gt; GetTypes()` _method_

### `Industria4.DataLogger.WebApp.ViewModels`

#### `DataLoggerViewModel`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/ViewModels/DataLoggerViewModel.cs`

View model that drives the DataLogger Blazor page, querying InfluxDB and presenting paginated measurement data.

Members:

- `DataLoggerViewModel(IOptions&lt;DataLoggerOptions&gt; options,ILoadingService loadingService,NavigationManager navigationManager,ILanguageContext languageContext)` _constructor_ — Initializes a new .
- `Task ChangeSortingAsync(string field)` _method_ — Changes the sort field and reloads the data, toggling sort direction if the same field is selected again.
- `void Dispose()` _method_
- `Task GoToNextPageAsync()` _method_ — Navigates to the next page and reloads the data.
- `Task GoToPageAsync(int page)` _method_ — Navigates to the specified page index and reloads the data.
- `Task GoToPreviousPageAsync()` _method_ — Navigates to the previous page and reloads the data.
- `Task LoadAsync(string measurement)` _method_ — Loads the measurement with the given name, navigating to the first available measurement if `measurement` is `null`.
- `int CurrentPage` _property_ — Gets the zero-based index of the currently displayed page.
- `List&lt;Field&gt; Fields` _property_ — Gets the list of queryable fields available for the current measurement.
- `string Measurement` _property_ — Gets or sets the name of the active InfluxDB measurement.
- `int Pages` _property_ — Gets the total number of pages for the current query result.

#### `Field`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/ViewModels/DataLoggerViewModel.cs`

Represents a queryable field from an InfluxDB measurement.

Members:

- `Field(string key,string title)` _constructor_ — Initializes a new .
- `string Key` _property_ — Gets the raw field key as stored in InfluxDB.
- `string Title` _property_ — Gets the localized display title for this field.

#### `FieldResult`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/ViewModels/DataLoggerViewModel.cs`

A single result set from an InfluxDB query response.

Members:

- `Series[] Series` _property_ — Gets or sets the array of series returned by the statement.
- `int Statement_id` _property_ — Gets or sets the zero-based statement index.

#### `FieldsResults`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/ViewModels/DataLoggerViewModel.cs`

Container for the raw InfluxDB query response envelope.

Members:

- `FieldResult[] Results` _property_ — Gets or sets the array of result sets.

#### `MeasurementItem`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/ViewModels/DataLoggerViewModel.cs`

Represents a single row from an InfluxDB measurement with optional localization and style overrides applied.

Members:

- `string TryGetIcon(string key)` _method_ — Returns the configured icon CSS class for `key`, or `null` if no icon is defined.
- `string TryGetStyle(string key)` _method_ — Returns the configured CSS style string for `key`, or `null` if no style is defined.
- `object TryGetValue(string key)` _method_ — Returns the (optionally localized) value for `key`, or `null` if the key is absent.
- `DateTime Time` _property_ — Gets the UTC-to-local-time timestamp of this record.

#### `Series`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/ViewModels/DataLoggerViewModel.cs`

A single InfluxDB measurement series within a query result.

Members:

- `string[] Columns` _property_ — Gets or sets the column name array.
- `string Name` _property_ — Gets or sets the measurement name.
- `string[][] Values` _property_ — Gets or sets the data rows as a jagged string array.

### `Industria4.DomainModel`

#### `DataArrayValue`

_public struct_

Source: `src/Shared/DomainModel/DataArrayValue.cs`

An immutable value type that encapsulates a typed array of values as a raw byte array.

Members:

- `DataArrayValue ConvertType(DataType targetType)` _method_ — Converts all elements to a different . The desired target type. A new with all values converted to the target type.
- `DataArrayValue Create(DataType type,object[] values)` _method_ — Creates a of the specified `type` from an object array. The target data type. The values to encode. A new encoded in the requested type.
- `DataArrayValue FromBytes(byte[] value)` _method_ — Creates a from a raw byte array previously produced by . The raw byte array. Must not be `null`. A backed by the provided bytes.
- `DataTypeConverter Converter` _property_ — Gets the that handles encoding/decoding for this value's type.
- `byte[] RawValue` _property_ — Gets the raw byte representation of the values, including the type discriminator byte.
- `DataType Type` _property_ — Gets the of this array value.

#### `DataType`

_public enum_

Source: `src/Shared/DomainModel/DataType.cs`

Type of data supported by the system

#### `DataTypeConverter`

_public class_

Source: `src/Shared/DomainModel/DataTypeConverter.cs`

Utility which converts data types or parses runtime types

Members:

- `object ConvertFromBytes(byte[] value)` _method_ — Converts the binary value to the runtime value
- `int ConvertFromBytes(DataType type,byte[] value,int offset,out object result)` _method_ — Converts the binary value to the runtime value
- `object[] ConvertFromBytesToArray(byte[] value)` _method_ — Converts the binary value to the runtime value
- `byte[] ConvertToBytes(object[] value)` _method_ — Converts the runtime value to binary
- `byte[] ConvertToBytes(object value)` _method_ — Converts the runtime value to binary
- `object ConvertValue(object rawValue)` _method_ — Converts a runtime value to the correct runtime value for current
- `object ConvertValue(object rawValue,object defaultValue)` _method_ — Converts a runtime value to the correct runtime value for current Default value to use if raw value is null
- `DataTypeConverter Get(DataType dataType)` _method_ — Gets a converter for the specified
- `object TryConvertValue(object rawValue,object defaultValue)` _method_ — Converts a runtime value to the correct runtime value for current and return default value if cannot be converted
- `DataType DataType` _property_ — Gets the which the current instance can handle
- `object DefaultValue` _property_ — Gets the default value for current
- `Type RuntimeType` _property_ — Gets the which the current instance can handle

#### `DataValue`

_public struct_

Source: `src/Shared/DomainModel/DataValue.cs`

An immutable value type that encapsulates a typed scalar value as a raw byte array.

Members:

- `DataValue ConvertType(DataType targetType)` _method_ — Converts this value to a different , using the registered converter. The desired target type. A new encoded in the target type.
- `DataValue Create(DataType type,object value)` _method_ — Creates a of the specified `type` from an arbitrary `value`. The target data type. The value to encode. A of the requested type.
- `DataValue Create(object value)` _method_ — Creates a by inferring the from the runtime type of `value`. The value to encode. Returns when `null`. A whose type matches the CLR type of the value.
- `implicit operator DataValue(byte value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(short value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(int value)` _method_ — Implicitly creates a from an value. The value to wrap.
- `implicit operator DataValue(uint value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(ushort value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(decimal value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(float value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(double value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(long value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(ulong value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(string value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(DateTime value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `implicit operator DataValue(bool value)` _method_ — Implicitly creates a from a value. The value to wrap.
- `bool Equals(DataValue other)` _method_
- `bool Equals(object obj)` _method_
- `DataValue FromBytes(byte[] value)` _method_ — Creates a from a raw byte array previously produced by . The raw byte array. Must not be `null`. A backed by the provided bytes.
- `DataValue GetDefault(DataType type)` _method_ — Returns a default for the given `type`. The data type whose default value is requested.
- `int GetHashCode()` _method_
- `DataArrayValue ToArray()` _method_ — Wraps this scalar value in a single-element . A containing this value as its only element.
- `DataTypeConverter Converter` _property_ — Gets the that handles encoding/decoding for this value's type.
- `byte[] RawValue` _property_ — Gets the raw byte representation of the value, including the type discriminator byte.
- `DataType Type` _property_ — Gets the of this value.
- `object Value` _property_ — Gets the decoded CLR value.

#### `DataValueJsonConverter`

_public class_

Source: `src/Shared/DomainModel/DataValueJsonConverter.cs`

JSON converter that handles serialisation and deserialisation of and .

Members:

- `bool CanConvert(Type objectType)` _method_
- `object ReadJson(JsonReader reader,Type objectType,object existingValue,JsonSerializer serializer)` _method_
- `void WriteJson(JsonWriter writer,object value,JsonSerializer serializer)` _method_

#### `IdGenerator`

_public class_

Source: `src/Shared/DomainModel/IdGenerator.cs`

Generator for unique and ordered codes

Members:

- `string New()` _method_ — Returns a new ID

#### `IEntity`

_public interface_

Source: `src/Shared/DomainModel/IEntity.cs`

Represents an entity

#### `LanguageDictionary`

_public class_

Source: `src/Shared/DomainModel/LanguageDictionary.cs`

Provides static helpers for resolving culture-based language lookups and the application default language.

Members:

- `IEnumerable&lt;CultureInfo&gt; GetTryCultures()` _method_ — Returns an ordered sequence of cultures to try based on the current UI culture. An enumerable of cultures in fallback order.
- `IEnumerable&lt;CultureInfo&gt; GetTryCultures(CultureInfo cultureInfo,bool includeSiblings)` _method_ — Returns an ordered sequence of cultures to try when looking up a localized value, walking up to the default language. The starting culture. When `true`, sibling cultures of the resolved parent are also included. An enumerable of cultures in fallback order.

#### `LanguageDictionary&lt;T&gt;`

_public class_

Source: `src/Shared/DomainModel/LanguageDictionary.cs`

Defines contents per language

Members:

- `LanguageDictionary()` _constructor_ — Initializes a new empty dictionary for the default language.
- `LanguageDictionary(IEnumerable&lt;KeyValuePair&lt;CultureInfo,T&gt;&gt; source)` _constructor_ — Initializes a new instance from a sequence of culture/value pairs. The pairs to copy into this dictionary.
- `LanguageDictionary(params KeyValuePair&lt;CultureInfo,T&gt;[] source)` _constructor_ — Initializes a new instance from one or more culture/value pairs. The pairs to copy into this dictionary.
- `void AddRange(IEnumerable&lt;KeyValuePair&lt;CultureInfo,T&gt;&gt; items)` _method_ — Adds all items to the dictionary
- `bool Equals(LanguageDictionary&lt;T&gt; other)` _method_ — Determines whether this dictionary is equal to another by comparing all keys and values in sequence. The other dictionary to compare with. `true` if both dictionaries contain the same key-value pairs in the same order; otherwise, `false`.
- `bool Equals(object obj)` _method_
- `T Get(CultureInfo cultureInfo)` _method_ — Returns the content based on the culture If not found it try to use the parent culture or .
- `T GetCurrentOrDefault(T defaultValue)` _method_ — Returns the content based on the current culture If not found it try to use the parent culture or .
- `int GetHashCode()` _method_
- `T GetOrDefault(CultureInfo cultureInfo,T defaultValue)` _method_ — Returns the content based on the culture If not found it try to use the parent culture or .
- `void NormalizeLanguage()` _method_ — Check if contains , if not autofill it with the first value available
- `void SetOne(CultureInfo culture,T value)` _method_ — Adds one default value and clear all other cultures
- `bool TryAddOne(T value)` _method_ — Adds one default value if the dictionary is empty

#### `MetadataDictionary`

_public class_

Source: `src/Shared/DomainModel/MetadataDictionary.cs`

Defines meta information using a key and a value

Members:

- `MetadataDictionary()` _constructor_ — Initializes a new empty instance with case-insensitive key comparison.
- `MetadataDictionary(IDictionary&lt;string,object&gt; dictionary)` _constructor_ — Initializes a new instance pre-populated from the given dictionary, with case-insensitive key comparison. Key/value pairs to copy into this instance.
- `void AddRange(IEnumerable&lt;KeyValuePair&lt;string,object&gt;&gt; items)` _method_ — Adds all key/value pairs from the sequence. The items to add.

#### `TagsDictionary`

_public class_

Source: `src/Shared/DomainModel/TagsDictionary.cs`

Defines tags using a key and a value

Members:

- `TagsDictionary()` _constructor_ — Initializes a new empty .
- `TagsDictionary(IDictionary&lt;string,string&gt; dictionary)` _constructor_ — Initializes a new instance pre-populated from the given dictionary. Key/value pairs to copy into this instance.
- `void Add(KeyValuePair&lt;string,string&gt; item)` _method_
- `void Add(string key,string value)` _method_
- `void AddRange(IEnumerable&lt;KeyValuePair&lt;string,string&gt;&gt; items)` _method_ — Adds all key/value pairs from the sequence, sanitizing each key. The items to add.
- `void Clear()` _method_
- `bool Contains(KeyValuePair&lt;string,string&gt; item)` _method_
- `bool ContainsKey(string key)` _method_
- `void CopyTo(KeyValuePair&lt;string,string&gt;[] array,int arrayIndex)` _method_
- `bool Remove(KeyValuePair&lt;string,string&gt; item)` _method_
- `bool Remove(string key)` _method_
- `bool TryGetValue(string key,out string value)` _method_
- `int Count` _property_
- `bool IsReadOnly` _property_
- `ICollection&lt;string&gt; Keys` _property_
- `ICollection&lt;string&gt; Values` _property_

#### `ValidableDictionary&lt;TKey, TValue&gt;`

_public class_

Source: `src/Shared/DomainModel/ValidableDictionary.cs`

Dictionary that allows to validate keys and values

Members:

- `ValidableDictionary()` _constructor_ — Initialises a new empty dictionary with no validation callbacks.
- `ValidableDictionary(Action&lt;TKey&gt; validateKey)` _constructor_ — Initialises a new dictionary that validates each key using the provided callback. Action invoked for each key before insertion. Throw to reject the key.
- `ValidableDictionary(Action&lt;TKey&gt; validateKey,Action&lt;TValue&gt; validateValue)` _constructor_ — Initialises a new dictionary that validates keys and values using the provided callbacks. Action invoked for each key before insertion. Optional action invoked for each value before insertion.
- `void Add(KeyValuePair&lt;TKey,TValue&gt; item)` _method_
- `void Add(TKey key,TValue value)` _method_
- `void Clear()` _method_
- `bool Contains(KeyValuePair&lt;TKey,TValue&gt; item)` _method_
- `bool ContainsKey(TKey key)` _method_
- `void CopyTo(KeyValuePair&lt;TKey,TValue&gt;[] array,int arrayIndex)` _method_
- `bool Remove(KeyValuePair&lt;TKey,TValue&gt; item)` _method_
- `bool Remove(TKey key)` _method_
- `bool TryGetValue(TKey key,out TValue value)` _method_
- `int Count` _property_
- `bool IsReadOnly` _property_
- `ICollection&lt;TKey&gt; Keys` _property_
- `ICollection&lt;TValue&gt; Values` _property_

#### `ValidableList&lt;T&gt;`

_public class_

Source: `src/Shared/DomainModel/ValidableList.cs`

Validable list

Members:

- `ValidableList()` _constructor_ — Initialises a new empty list with no validation callback.
- `ValidableList(Action&lt;T&gt; validate)` _constructor_ — Initialises a new list that validates each item using the provided callback. Action invoked before each insertion. Throw to reject the item.
- `void Add(T item)` _method_
- `void AddRange(IEnumerable&lt;T&gt; items)` _method_ — Validates and appends all items from the sequence to the end of the list. The items to add.
- `void Clear()` _method_
- `bool Contains(T item)` _method_
- `void CopyTo(T[] array,int arrayIndex)` _method_
- `IEnumerator&lt;T&gt; GetEnumerator()` _method_
- `int IndexOf(T item)` _method_
- `void Insert(int index,T item)` _method_
- `bool Remove(T item)` _method_
- `void RemoveAt(int index)` _method_
- `int Count` _property_
- `T this[int index] &#123; get` _property_
- `bool IsReadOnly` _property_

#### `ValidationResult`

_public class_

Source: `src/Shared/DomainModel/ValidationResult.cs`

Represents the result of a validation

Members:

- `ValidationResult(int errorCode,string errorMessage)` _constructor_ — Initialises a new validation result with an error code and message. A numeric code identifying the validation error. A human-readable description of the error.
- `int ErrorCode` _property_ — Gets the code for the validation result
- `string ErrorMessage` _property_ — Gets the message for the validation result

### `Industria4.DomainModel.DataAnnotations`

#### `ArrayRequired`

_public class_

Source: `src/Shared/DomainModel/DataAnnotations/ArrayRequired.cs`

Attribute to validate array

Members:

- `bool IsValid(object value)` _method_ — Returns `true` when the value is a non-null, non-empty array.

#### `ComplexValidationAttribute`

_public class_

Source: `src/Shared/DomainModel/DataAnnotations/ComplexValidation.cs`

Recursively validates the object graph, running on every reachable non-framework object.

Members:

- `System.ComponentModel.DataAnnotations.ValidationResult IsValid(object value,ValidationContext context)` _method_

#### `DictionaryDescription`

_public class_

Source: `src/Shared/DomainModel/DataAnnotations/DictionaryDescription.cs`

Attribute to validate dictionary in order to check if key is valid culture info

Members:

- `bool IsValid(object value)` _method_ — Returns `true` when the value is `null` or every key is a recognised (LCID ≠ 4096).

#### `DictionaryMaxLength`

_public class_

Source: `src/Shared/DomainModel/DataAnnotations/DictionaryMaxLength.cs`

Attribute to validate dictionary in order to check if key or value are not length more than x characters

Members:

- `DictionaryMaxLength(int keyMaxLength,int valueMaxLength,bool nullAccepted = false)` _constructor_ — Initialises the attribute with the maximum allowed lengths. Maximum number of characters allowed for dictionary keys. Maximum number of characters allowed for dictionary values. When `true`, a `null` value passes validation.
- `string FormatErrorMessage(string name)` _method_ — Returns a formatted error message that includes the value max-length limit.
- `bool IsValid(object value)` _method_ — Returns `true` when all keys and string values satisfy the configured length limits.

#### `DictionaryRequired`

_public class_

Source: `src/Shared/DomainModel/DataAnnotations/DictionaryRequired.cs`

Attribute to validate dictionary in order to check if key or value are empty

Members:

- `DictionaryRequired(bool nullValueAccepted = false)` _constructor_ — Initialises the attribute. When `true`, `null` and empty string values are allowed.
- `bool IsValid(object value)` _method_ — Returns `true` when neither keys nor (unless `nullValueAccepted`) values are `null` or whitespace.

#### `ListMaxLength`

_public class_

Source: `src/Shared/DomainModel/DataAnnotations/ListMaxLength.cs`

Attribute to validate a list of keys in order to check if the length is more than x characters

Members:

- `ListMaxLength(int keyMaxLength)` _constructor_ — Initialises the attribute with the maximum key length. Maximum number of characters allowed for each string entry in the list.
- `bool IsValid(object value)` _method_ — Returns `true` when every string entry in the list is within the configured length limit.

### `Industria4.DomainModel.Json`

#### `SubTypesContractResolver`

_public class_

Source: `src/Shared/DomainModel/Json/SubTypesContractResolver.cs`

A contract resolver that applies sub-type converters to polymorphic types while delegating to an inner resolver.

Members:

- `SubTypesContractResolver(IContractResolver contractResolver,params Type[] excludeTypes)` _constructor_ — Initialises a new instance wrapping the given contract resolver and excluding the specified types from sub-type conversion. The inner resolver used to create contracts. Types that should not receive sub-type converters.
- `JsonContract CreateContract(Type objectType)` _method_

### `Industria4.EntityFramework`

#### `Backup&lt;T&gt;`

_public class_

Source: `src/Shared/EntityFramework/Backup.cs`

Manages scheduled SQLite database backups for a given type. The type to back up.

Members:

- `Backup(IServiceProvider serviceProvider,ILogger&lt;Backup&lt;T&gt;&gt; logger)` _constructor_ — Initialises a new instance using the provided service provider and logger. The service provider used to resolve scoped `T` instances. The logger for backup operations.
- `void Dispose()` _method_
- `void ScheduleBackup(TimeSpan interval,int maxRollingFile = 7)` _method_ — Schedules a recurring backup starting from today at the given interval. The time between backups; must be at least one minute. The maximum number of rolling backup files to retain.
- `void ScheduleBackup(DateTime startDate,TimeSpan interval,int maxRollingFile = 7)` _method_ — Schedules a recurring backup starting from the specified date at the given interval. The earliest date at which the first backup should occur. The time between backups; must be at least one minute. The maximum number of rolling backup files to retain.

#### `DataArrayValueConverter`

_internal class_

Source: `src/Shared/EntityFramework/DataArrayValueConverter.cs`

Members:

- `DataArrayValueConverter()` _constructor_ — Initializes a new instance of .

#### `DataValueConverter`

_internal class_

Source: `src/Shared/EntityFramework/DataValueConverter.cs`

Members:

- `DataValueConverter()` _constructor_ — Initializes a new instance of .

#### `Serializer`

_public class_

Source: `src/Shared/EntityFramework/Serializer.cs`

Provides JSON-based serialisation and deserialisation helpers for Entity Framework persistence, with special handling for -keyed dictionaries.

Members:

- `T ToDomainModel&lt;T&gt;(string json)` _method_ — Deserialises a JSON string back to a domain model instance of type `T`. The target type to deserialise into. The JSON string, or `null` to return the default instance. The deserialised instance, or a default instance when `json` is `null`.
- `string ToJson(this object entity)` _method_ — Serialises `entity` to a JSON string, including type information. The object to serialise. A JSON string representation of `entity`.

#### `SqlLiteFunctions`

_public class_

Source: `src/Shared/EntityFramework/SqliteFunctions.cs`

Exposes SQLite functions which can be used with Entity Framework via database function mapping.

Members:

- `string JsonExtract(string expression,string path)` _method_ — Returns the string value at the specified JSON path within the expression. The JSON text to query. The JSON path (e.g. `$.key`). The string value found at the path, or `null` when not found.

#### `SqlServerFunctions`

_public class_

Source: `src/Shared/EntityFramework/SqlServerFunctions.cs`

Exposes Sql Server functions which can be used with Entity Framework

Members:

- `string JsonValue(string expression,string path)` _method_ — Returns the string value for the specificed json path Call to is required in order to use the function

### `Industria4.EntityFramework.DataAccessObject`

#### `AutoMapperDataAccessObject&lt;TDataModel, TReadModel, TDbContext&gt;`

_public class_

Source: `src/Shared/EntityFramework/DataAccessObject/AutoMapperDataAccessObject.cs`

Base object for querying model using . The implementation support a data model and uses AutoMapper for mapping data

Members:

- `AutoMapperDataAccessObject(TDbContext context,IMapper mapper)` _constructor_ — Initialises a new instance with the given context and AutoMapper instance. The `TDbContext` to use for queries. The AutoMapper mapper used to project `TDataModel` to `TReadModel`.
- `IMapper Mapper` _property_ — Gets the AutoMapper instance used for projecting data models to read models.
- `IQueryable&lt;TReadModel&gt; Query` _property_

#### `DataAccessObject&lt;TReadModel, TDbContext&gt;`

_public class_

Source: `src/Shared/EntityFramework/DataAccessObject/DataAccessObject.cs`

Base object for querying model using

Members:

- `DataAccessObject(TDbContext context)` _constructor_ — Initialises a new instance with the given database context. The `TDbContext` to use for queries.
- `IEnumerator&lt;TReadModel&gt; GetEnumerator()` _method_
- `TDbContext Context` _property_ — Gets the current
- `IQueryable&lt;TReadModel&gt; Query` _property_ — Gets a instance for current model

### `Industria4.EntityFramework.Repository`

#### `DbMapRepository&lt;TEntity, TDataModel, TDbContext&gt;`

_public class_

Source: `src/Shared/EntityFramework/Repository/DbMapRepository.cs`

Base repository based on which map entity to a data model

Members:

- `DbMapRepository(TDbContext context)` _constructor_ — Initialises a new instance with the given database context. The `TDbContext` to use for persistence operations.
- `byte[] HashValue(string value)` _method_
- `ValueTask&lt;TDataModel&gt; LoadDataModelAsync(string id)` _method_
- `Task OnAddAsync(TEntity entity)` _method_
- `Task&lt;bool&gt; OnExistAsync(string id)` _method_
- `Task&lt;TEntity&gt; OnGetAsync(string id)` _method_
- `Task OnRemoveAsync(string id)` _method_
- `Task OnUpdateAsync(TEntity entity)` _method_
- `void RecursiveDelete(object value)` _method_ — Recursively removes a data-model value and all its owned EF-tracked children from the change tracker. The root object to delete.
- `void RecursiveDelete(object value,HashSet&lt;object&gt; processed)` _method_
- `void ToDataModel(TEntity entity,TDataModel dataModel)` _method_ — Populates the data model using entity info This method is called while adding or updating an entity
- `TEntity ToDomainModel(TDataModel dataModel)` _method_ — Converts the data model to a new entity instance This method is called while reading a new entity
- `TDbContext Context` _property_ — Gets the current
- `DbSet&lt;TDataModel&gt; DbSet` _property_ — Gets the for the type

#### `DbMultiMapRepository&lt;TEntity, TDataModel, TDbContext&gt;`

_public class_

Source: `src/Shared/EntityFramework/Repository/DbMultiMapRepository.cs`

Base repository based on which map entity to a data model

Members:

- `DbMultiMapRepository(TDbContext context)` _constructor_ — Initialises a new instance with the given database context. The `TDbContext` to use for persistence operations.
- `Task&lt;IRepositoryTransaction&gt; BeginTransactionAsync(CancellationToken token = default)` _method_
- `byte[] HashValue(string value)` _method_
- `Task OnAddAsync(IEnumerable&lt;TEntity&gt; entities)` _method_
- `Task OnRemoveAsync(IEnumerable&lt;string&gt; ids)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;TEntity&gt; entities)` _method_
- `void RecursiveDelete(object value)` _method_
- `void RecursiveDelete(object value,HashSet&lt;object&gt; processed)` _method_
- `bool ShouldRecursiveDelete(object value)` _method_
- `void ToDataModel(TEntity entity,TDataModel dataModel)` _method_ — Populates the data model using entity info This method is called while adding or updating an entity
- `TEntity ToDomainModel(TDataModel dataModel)` _method_ — Converts the data model to a new entity instance This method is called while reading a new entity
- `TDbContext Context` _property_ — Gets the current
- `DbSet&lt;TDataModel&gt; DbSet` _property_ — Gets the for the type

#### `DbMultiRepository&lt;T, TDbContext&gt;`

_public class_

Source: `src/Shared/EntityFramework/Repository/DbMultiRepository.cs`

Base repository implementation based on dedicated to a specific type

Members:

- `DbMultiRepository(TDbContext context)` _constructor_ — Initialises a new instance with the given database context. The `TDbContext` to use for persistence operations.
- `Task&lt;IRepositoryTransaction&gt; BeginTransactionAsync(CancellationToken token = default)` _method_
- `Task OnAddAsync(IEnumerable&lt;T&gt; entities)` _method_
- `Task OnRemoveAsync(IEnumerable&lt;string&gt; ids)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;T&gt; entities)` _method_
- `TDbContext Context` _property_ — Gets the current
- `DbSet&lt;T&gt; DbSet` _property_ — Gets the for the type

#### `DbRepository&lt;T, TDbContext&gt;`

_public class_

Source: `src/Shared/EntityFramework/Repository/DbRepository.cs`

Base repository implementation based on dedicated to a specific type

Members:

- `DbRepository(TDbContext context)` _constructor_ — Initialises a new instance with the given database context. The `TDbContext` to use for persistence operations.
- `Task&lt;IRepositoryTransaction&gt; BeginTransactionAsync(CancellationToken token = default)` _method_
- `Task OnAddAsync(T entity)` _method_
- `Task&lt;bool&gt; OnExistAsync(string id)` _method_
- `Task&lt;T&gt; OnGetAsync(string id)` _method_
- `Task OnRemoveAsync(string id)` _method_
- `Task OnUpdateAsync(T entity)` _method_
- `TDbContext Context` _property_ — Gets the current
- `DbSet&lt;T&gt; DbSet` _property_ — Gets the for the type

#### `RepositoryTransaction`

_internal class_

Source: `src/Shared/EntityFramework/Repository/RepositoryTransaction.cs`

Members:

- `RepositoryTransaction(IDbContextTransaction context)` _constructor_ — Initializes a new instance of .
- `Task CommitAsync(CancellationToken token = default)` _method_ — commit async.
- `void Dispose()` _method_ — dispose.
- `Task RollbackAsync(CancellationToken token = default)` _method_ — rollback async.

### `Industria4.Gateway.WebApi`

#### `Program`

_public class_

Source: `src/Gateway/Gateway.WebApi/Program.cs`

Entry point for the Industria4 Gateway Web API host.

Members:

- `IHostBuilder CreateBuilder(params string[] args)` _method_ — Creates and configures the default with Serilog logging and the class.
- `void Main(string[] args)` _method_ — Builds and runs the host, performing dependency health checks before accepting requests.

#### `Startup`

_public class_

Source: `src/Gateway/Gateway.WebApi/Startup.cs`

ASP.NET Core startup class that configures the Gateway Web API service container and HTTP pipeline.

Members:

- `Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)` _constructor_ — Initializes a new with application configuration and hosting environment.
- `void Configure(IApplicationBuilder app,IWebHostEnvironment env)` _method_ — Configures the HTTP request pipeline (CORS, localization, routing, OpenAPI, controllers).
- `void ConfigureServices(IServiceCollection services)` _method_ — Registers all services required by the Gateway (service bus, CQRS gateway, OData, OpenAPI).
- `IConfiguration Configuration` _property_ — Gets the application configuration provided by the host.
- `IHostEnvironment HostingEnvironment` _property_ — Gets the hosting environment (Development, Testing, Production, etc.).

### `Industria4.Globalization`

#### `GlobalizationOptions`

_public class_

Source: `src/Shared/Globalization/GlobalizationOptions.cs`

Configuration options for multi-language and culture support.

Members:

- `CultureInfo[] Cultures` _property_ — Gets the array derived from , falling back to the platform defaults.

#### `ILanguageContext`

_public interface_

Source: `src/Shared/Globalization/ILanguageContext.cs`

Provides access to the current culture selection and the list of supported cultures for the application.

#### `IResourcesProvider`

_public interface_

Source: `src/Shared/Globalization/IResourcesProvider.cs`

Provides access to one or more instances used by the globalization infrastructure.

#### `IUnit`

_public interface_

Source: `src/Shared/Globalization/IUnitContext.cs`

Represents a single unit of measure with its conversion properties.

#### `IUnitContext`

_public interface_

Source: `src/Shared/Globalization/IUnitContext.cs`

Provides unit-of-measure conversion and formatting capabilities, with support for multiple named unit sets.

#### `LanguageContext`

_internal class_

Source: `src/Shared/Globalization/LanguageContext.cs`

Default implementation of that reads cultures from .

Members:

- `LanguageContext(IOptions&lt;GlobalizationOptions&gt; options)` _constructor_ — Initialises the context with the provided options. The globalization options containing the list of enabled cultures.
- `event PropertyChangedEventHandler PropertyChanged` _event_
- `Task LoadAsync()` _method_
- `Task SetCurrentCultureAsync(CultureInfo culture)` _method_
- `IReadOnlyList&lt;CultureInfo&gt; Cultures` _property_
- `CultureInfo CurrentCulture` _property_

#### `ResxResourceProvider`

_public class_

Source: `src/Shared/Globalization/ResxResourceProvider.cs`

An backed by one or more instances.

Members:

- `ResxResourceProvider(params ResourceManager[] resourceManagers)` _constructor_ — Initialises a new instance with the supplied resource managers. One or more sources.
- `IEnumerable&lt;ResourceManager&gt; GetResources()` _method_

### `Industria4.Globalization.Cqrs`

#### `UnitSetType`

_public class_

Source: `src/Globalization/Globalization.Cqrs/GlobalizationTypes.cs`

Marker type for the UnitSet entity, used to parameterise generic CQRS commands.

#### `UnitType`

_public class_

Source: `src/Globalization/Globalization.Cqrs/GlobalizationTypes.cs`

Marker type for the Unit entity, used to parameterise generic CQRS commands.

### `Industria4.Globalization.Cqrs.Commands.UnitSets`

#### `AddOrUpdateUnitSetCommand`

_public class_

Source: `src/Globalization/Globalization.Cqrs/Commands/UnitSets/AddOrUpdateUnitSetCommand.cs`

Command to create or update a unit-set (a collection of unit mappings).

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this unit-set.
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `Dictionary&lt;string,string&gt; UnitsMapping` _property_ — Gets the mapping of source unit keys to target unit keys.

#### `DeleteUnitSetCommand`

_public class_

Source: `src/Globalization/Globalization.Cqrs/Commands/UnitSets/DeleteUnitSetCommand.cs`

Command to delete a unit-set by identifier.

Members:

- `DeleteUnitSetCommand(string id)` _constructor_ — Initializes a new . The identifier of the unit-set to delete.

### `Industria4.Globalization.Cqrs.Commands.Units`

#### `AddOrUpdateUnitCommand`

_public class_

Source: `src/Globalization/Globalization.Cqrs/Commands/Units/AddOrUpdateUnitCommand.cs`

Command to create or update a unit of measure.

Members:

- `float Coefficient` _property_ — Gets the conversion coefficient relative to the base unit.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this unit.
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `string Format` _property_ — Gets the optional display format string.

#### `DeleteUnitCommand`

_public class_

Source: `src/Globalization/Globalization.Cqrs/Commands/Units/DeleteUnitCommand.cs`

Command to delete a unit of measure by identifier.

Members:

- `DeleteUnitCommand(string id)` _constructor_ — Initializes a new . The identifier of the unit to delete.

### `Industria4.Globalization.Cqrs.Handlers`

#### `GlobalizationHandler`

_internal class_

Source: `src/Globalization/Globalization.Cqrs.Handlers/GlobalizationHandler.cs`

Members:

- `Task Handle(AddOrUpdateUnitCommand command)` _method_
- `Task Handle(AddOrUpdateUnitSetCommand command)` _method_
- `Task Handle(DeleteUnitCommand command)` _method_
- `Task Handle(DeleteUnitSetCommand command)` _method_

### `Industria4.Globalization.DomainModel`

#### `Validation`

_public class_

Source: `src/Globalization/Globalization.DomainModel/Validation.cs`

Centralises maximum-length constraints for Globalization domain-model properties.

### `Industria4.Globalization.DomainModel.Units`

#### `Unit`

_public class_

Source: `src/Globalization/Globalization.DomainModel/Units/Unit.cs`

Represents a measurement unit with a conversion coefficient and display format.

Members:

- `Unit(string id)` _constructor_ — Initializes a new unit with only an ID. The unique identifier.
- `Unit(string id,string description)` _constructor_ — Initializes a new unit with an ID, a default description, coefficient 1, and format "0". The unique identifier. The default (single-language) description for this unit.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this unit, keyed by language.
- `string Id` _property_

#### `UnitSet`

_public class_

Source: `src/Globalization/Globalization.DomainModel/Units/UnitSet.cs`

A named set of units with a mapping from external unit identifiers to internal unit IDs.

Members:

- `UnitSet(string id)` _constructor_ — Initializes a new unit set with the given identifier. The unique identifier.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this unit set, keyed by language.
- `string Id` _property_
- `Dictionary&lt;string,string&gt; UnitsMapping` _property_ — Gets the mapping of external unit identifiers (case-insensitive) to internal unit IDs.

### `Industria4.Globalization.EntityFramework`

#### `EntitiesHostedServices`

_internal class_

Source: `src/Globalization/Globalization.EntityFramework/EntitiesHostedServices.cs`

Members:

- `EntitiesHostedServices(ILogger&lt;EntitiesHostedServices&gt; logger,Backup&lt;GlobalizationContext&gt; backup,IServiceProvider serviceProvider)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `GlobalizationMapper`

_public class_

Source: `src/Globalization/Globalization.EntityFramework/GlobalizationMapper.cs`

Provides AutoMapper configurations for mapping Globalization EF data models to read models.

Members:

- `GlobalizationMapper()` _constructor_ — Initialises a new instance of and builds the AutoMapper configuration.
- `IMapper Mapper` _property_ — Gets the configured AutoMapper instance used to map EF entities to read models.

### `Industria4.Globalization.EntityFramework.DataAccessObject`

#### `GlobalizationDataAccessObject&lt;TDataModel, TReadModel&gt;`

_internal class_

Source: `src/Globalization/Globalization.EntityFramework/DataAccessObject/GlobalizationDataAccessObject.cs`

Members:

- `GlobalizationDataAccessObject(Globalization.EntityFramework.DataModel.GlobalizationContext context,GlobalizationMapper mapperAccessor)` _constructor_
- `IQueryable&lt;TReadModel&gt; Query` _property_

### `Industria4.Globalization.EntityFramework.DataModel`

#### `GlobalizationContext`

_internal class_

Source: `src/Globalization/Globalization.EntityFramework/DataModel/GlobalizationContext.cs`

Members:

- `GlobalizationContext(DbContextOptions&lt;GlobalizationContext&gt; options)` _constructor_
- `void OnModelCreating(ModelBuilder modelBuilder)` _method_
- `DbSet&lt;Units.Unit&gt; Units` _property_
- `DbSet&lt;Units.UnitSet&gt; UnitSets` _property_

#### `GlobalizationContextFactory`

_internal class_

Source: `src/Globalization/Globalization.EntityFramework/DataModel/GlobalizationContextFactory.cs`

Members:

- `GlobalizationContext CreateDbContext(string[] args)` _method_

### `Industria4.Globalization.EntityFramework.DataModel.Units`

#### `Unit`

_internal class_

Source: `src/Globalization/Globalization.EntityFramework/DataModel/Units/Unit.cs`

Members:

- `float Coefficient` _property_
- `string DefaultDescription` _property_
- `string Descriptions` _property_
- `byte[] EntityVersion` _property_
- `string Format` _property_
- `string Id` _property_
- `bool IsDeleted` _property_

#### `UnitSet`

_internal class_

Source: `src/Globalization/Globalization.EntityFramework/DataModel/Units/UnitSet.cs`

Members:

- `string DefaultDescription` _property_
- `string Descriptions` _property_
- `byte[] EntityVersion` _property_
- `string Id` _property_
- `bool IsDeleted` _property_
- `List&lt;UnitSetMapping&gt; UnitSetMappings` _property_

#### `UnitSetMapping`

_internal class_

Source: `src/Globalization/Globalization.EntityFramework/DataModel/Units/UnitSetMapping.cs`

Members:

- `Unit FromUnit` _property_
- `string FromUnitId` _property_
- `Unit ToUnit` _property_
- `string ToUnitId` _property_
- `UnitSet UnitSet` _property_
- `string UnitSetId` _property_

### `Industria4.Globalization.EntityFramework.Repositories`

#### `UnitRepository`

_internal class_

Source: `src/Globalization/Globalization.EntityFramework/Repositories/UnitRepository.cs`

Members:

- `UnitRepository(DataModel.GlobalizationContext context,ILogger&lt;UnitRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;Industria4.Globalization.DomainModel.Units.Unit&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;Industria4.Globalization.DomainModel.Units.Unit&gt; entities)` _method_
- `void ToDataModel(Industria4.Globalization.DomainModel.Units.Unit entity,DataModel.Units.Unit dataModel)` _method_
- `Industria4.Globalization.DomainModel.Units.Unit ToDomainModel(DataModel.Units.Unit dataModel)` _method_

#### `UnitSetRepository`

_internal class_

Source: `src/Globalization/Globalization.EntityFramework/Repositories/UnitSetRepository.cs`

Members:

- `UnitSetRepository(DataModel.GlobalizationContext context,ILogger&lt;UnitSetRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;Industria4.Globalization.DomainModel.Units.UnitSet&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;Industria4.Globalization.DomainModel.Units.UnitSet&gt; entities)` _method_
- `void ToDataModel(Industria4.Globalization.DomainModel.Units.UnitSet entity,DataModel.Units.UnitSet dataModel)` _method_
- `Industria4.Globalization.DomainModel.Units.UnitSet ToDomainModel(DataModel.Units.UnitSet dataModel)` _method_

### `Industria4.Globalization.Http`

#### `HttpGlobalizationOptions`

_public class_

Source: `src/Globalization/Globalization.Http/HttpGlobalizationOptions.cs`

Configuration options for the HTTP Globalization client.

Members:

- `Uri Globalization` _property_ — Gets or sets the base URI of the Globalization service. Defaults to `http://localhost:8003`.

#### `UnitClient`

_public class_

Source: `src/Globalization/Globalization.Http/UnitClient.cs`

HTTP client for querying units of measure via the Globalization REST API.

Members:

- `UnitClient(RestClient restClient,IOptions&lt;HttpGlobalizationOptions&gt; options)` _constructor_ — Initializes a new . The underlying REST client. Options containing the service base URI.
- `Task&lt;Unit&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Retrieves the full domain unit for the given identifier.

#### `UnitsetClient`

_public class_

Source: `src/Globalization/Globalization.Http/UnitsetClient.cs`

HTTP client for querying unit-sets via the Globalization REST API.

Members:

- `UnitsetClient(RestClient restClient,IOptions&lt;HttpGlobalizationOptions&gt; options)` _constructor_ — Initializes a new . The underlying REST client. Options containing the service base URI.
- `Task&lt;UnitSet&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Retrieves the full domain unit-set for the given identifier.

### `Industria4.Globalization.ReadModel`

#### `UnitRead`

_public class_

Source: `src/Globalization/Globalization.ReadModel/UnitRead.cs`

Read model representing a unit of measure as returned by the Globalization query stack.

Members:

- `float Coefficient` _property_ — Gets or sets the conversion coefficient relative to the base unit.
- `string Description` _property_ — Gets or sets the default-language description of this unit.
- `string Format` _property_ — Gets or sets the display format string.
- `string Id` _property_ — Gets or sets the unique unit identifier.
- `bool IsDeleted` _property_ — Gets or sets a value indicating whether this unit has been soft-deleted.

#### `UnitSetRead`

_public class_

Source: `src/Globalization/Globalization.ReadModel/UnitSetRead.cs`

Read model representing a unit-set as returned by the Globalization query stack.

Members:

- `string Description` _property_ — Gets or sets the default-language description of this unit-set.
- `string Id` _property_ — Gets or sets the unique unit-set identifier.
- `bool IsDeleted` _property_ — Gets or sets a value indicating whether this unit-set has been soft-deleted.

### `Industria4.Globalization.WebApi`

#### `AutoSetupHostedServices`

_internal class_

Source: `src/Globalization/Globalization.WebApi/AutoSetupHostedServices.cs`

Members:

- `AutoSetupHostedServices(ILogger&lt;AutoSetupHostedServices&gt; logger,IServiceProvider serviceProvider)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `GlobalizationOptions`

_public class_

Source: `src/Globalization/Globalization.WebApi/GlobalizationOptions.cs`

Root configuration options for the Globalization Web API module.

Members:

- `UnitSetsOptions UnitSets` _property_ — Gets the map of unit-set configurations keyed by unit-set identifier.

#### `Program`

_public class_

Source: `src/Globalization/Globalization.WebApi/Program.cs`

Entry point for the Globalization Web API host.

Members:

- `IHostBuilder CreateBuilder(params string[] args)` _method_ — Creates and configures the for the Globalization Web API. Command-line arguments passed to the host builder. A configured ready to build the host.
- `void Main(string[] args)` _method_ — Builds and runs the Globalization Web API host. Command-line arguments.

#### `Startup`

_public class_

Source: `src/Globalization/Globalization.WebApi/Startup.cs`

ASP.NET Core startup class that configures services and the HTTP pipeline for the Globalization API.

Members:

- `Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)` _constructor_ — Initialises a new instance of with the given configuration and hosting environment. The application configuration. The hosting environment.
- `void Configure(IApplicationBuilder app)` _method_ — Configures the HTTP request pipeline including CORS, routing, authentication, OpenAPI, and endpoint mapping. The application builder.
- `void ConfigureServices(IServiceCollection services)` _method_ — Registers all services required by the Globalization API, including EF Core, service bus, CQRS, OpenAPI, and security. The service collection to populate.
- `IConfiguration Configuration` _property_ — Gets the application configuration.
- `IHostEnvironment HostingEnvironment` _property_ — Gets the hosting environment.

#### `UnitOptions`

_public class_

Source: `src/Globalization/Globalization.WebApi/GlobalizationOptions.cs`

Conversion options for a single unit within a unit set.

Members:

- `string Base` _property_ — Gets or sets the identifier of the base unit from which the coefficient is measured.
- `float Coefficient` _property_ — Gets or sets the multiplication factor applied when converting from the base unit. Defaults to `1`.
- `string Format` _property_ — Gets or sets the .NET numeric format string used when rendering values of this unit. Defaults to `"0"`.

#### `UnitSetOptions`

_public class_

Source: `src/Globalization/Globalization.WebApi/GlobalizationOptions.cs`

Dictionary mapping unit identifiers to their within a unit set.

#### `UnitSetsOptions`

_public class_

Source: `src/Globalization/Globalization.WebApi/GlobalizationOptions.cs`

Dictionary mapping unit-set identifiers to their .

### `Industria4.Globalization.WebApi.Controllers`

#### `UnitController`

_public class_

Source: `src/Globalization/Globalization.WebApi/Controllers/UnitController.cs`

API controller that exposes read operations for resources.

#### `UnitsetController`

_public class_

Source: `src/Globalization/Globalization.WebApi/Controllers/UnitSetController.cs`

API controller that exposes read operations for resources.

### `Industria4.Globalization.WebApi.Hosting`

#### `StartupService`

_public class_

Source: `src/Globalization/Globalization.WebApi.Hosting/StartupService.cs`

Startup service that registers the Globalization Web API module into the host service collection.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_ — Configures services required by the Globalization Web API module. The application configuration. The service collection to configure.

#### `WebApiModule`

_public class_

Source: `src/Globalization/Globalization.WebApi.Hosting/WebApiModule.cs`

Process module that manages the Globalization Web API out-of-process host.

Members:

- `WebApiModule(ILogger&lt;WebApiModule&gt; logger,IConfiguration configuration)` _constructor_ — Initialises a new instance of with the specified logger and configuration. Logger for the module. Application configuration used to resolve environment variables.
- `IDictionary&lt;string,string&gt; Environment` _property_
- `string Name` _property_
- `string ProcessNameExe` _property_
- `string WorkingDir` _property_

### `Industria4.Globalization.WebApp`

#### `GlobalizationSectionsProvider`

_internal class_

Source: `src/Globalization/Globalization.WebApp/GlobalizationSectionsProvider.cs`

Members:

- `IEnumerable&lt;SectionItem&gt; GetItems()` _method_

#### `StartupService`

_public class_

Source: `src/Globalization/Globalization.WebApp/StartupService.cs`

Startup service that registers Globalization WebAssembly UI services and modules into the host.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_ — Configures services required by the Globalization WebApp, including HTTP clients, view-models, scoped contexts, and modules. The application configuration. The service collection to configure.

### `Industria4.Globalization.WebApp.Modules`

#### `LanguageModule`

_public class_

Source: `src/Globalization/Globalization.WebApp/Modules/LanguageModule.cs`

Blazor client module responsible for initialising UI language/culture support.

Members:

- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `string Name` _property_ — Gets the unique name that identifies this module.

#### `UnitsModule`

_public class_

Source: `src/Globalization/Globalization.WebApp/Modules/UnitsModule.cs`

Blazor client module responsible for initialising unit-of-measure conversion support.

Members:

- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `string Name` _property_ — Gets the unique name that identifies this module.

### `Industria4.Globalization.WebApp.ViewModels`

#### `LanguageContext`

_internal class_

Source: `src/Globalization/Globalization.WebApp/ViewModels/LanguageContext.cs`

Members:

- `LanguageContext(IOptions&lt;GlobalizationOptions&gt; globalizationOptions)` _constructor_
- `Task LoadAsync()` _method_
- `Task SetCurrentCultureAsync(CultureInfo culture)` _method_

#### `LanguageSelectionViewModel`

_public class_

Source: `src/Globalization/Globalization.WebApp/ViewModels/LanguageSelectionViewModel.cs`

View-model that exposes available cultures and the currently selected culture, navigating the page on culture change.

Members:

- `LanguageSelectionViewModel(ILanguageContext languageContext,IJSRuntime jsRuntime,NavigationManager navigationManager)` _constructor_ — Initialises a new instance of . The language context providing available cultures and culture switching. JavaScript runtime used to read and write the culture cookie. Navigation manager used to reload the page after a culture change.
- `void Dispose()` _method_ — Releases the observable tracker subscription.
- `Task LoadAsync()` _method_ — Loads available cultures from the language context and restores the selected culture from the query string or ASP.NET Core culture cookie. A task that completes when cultures are loaded and the initial culture is resolved.
- `Task SetCurrentCultureAsync(CultureInfo value)` _method_ — Applies `value` as the current UI culture and persists it in the ASP.NET Core culture cookie. The culture to apply. A task that completes when the culture is applied and the cookie is written.
- `CultureInfo[] Cultures` _property_ — Gets the array of cultures available for selection.

#### `UnitContext`

_internal class_

Source: `src/Globalization/Globalization.WebApp/ViewModels/UnitContext.cs`

Members:

- `UnitContext(UnitsetClient unitsetClient,UnitClient unitClient)` _constructor_
- `object Convert(string fromUnitId,string toUnitId,object value)` _method_
- `string ConvertToString(string fromUnitId,string toUnitId,object value)` _method_
- `string GetMappedDescription(string unitId)` _method_
- `string GetMappedUnitId(string unitId)` _method_
- `Task LoadAsync()` _method_
- `Task SetCurrentUnitSetIdAsync(string unitSetId)` _method_
- `string CurrentUnitSetId` _property_

#### `UnitSelectionViewModel`

_public class_

Source: `src/Globalization/Globalization.WebApp/ViewModels/UnitSelectionViewModel.cs`

View-model that exposes available unit sets and the currently selected unit set, persisting the selection to local storage.

Members:

- `UnitSelectionViewModel(IUnitContext unitContext,ILocalStorageService localStorageService,ILoadingService loadingService)` _constructor_ — Initialises a new instance of . The unit context providing available and current unit-set data. Service used to persist the selected unit set across sessions. Service that manages loading-state indicators.
- `void Dispose()` _method_ — Releases the observable tracker subscription.
- `Task LoadAsync()` _method_ — Loads the available unit sets from the unit context and restores the previously selected unit set from local storage. A task that completes when the unit sets are loaded and the selection is restored.
- `UnitSetRead[] UnitSets` _property_ — Gets the list of available unit sets.

### `Industria4.Hosting`

#### `ChildProcessTracker`

_public class_

Source: `src/Shared/Hosting.Server/ChildProcessTracker.cs`

Allows processes to be automatically killed if this parent process unexpectedly quits. This feature requires Windows 8 or greater. On Windows 7, nothing is done. References: http://stackoverflow.com/a/4657392/386091 http://stackoverflow.com/a/9164742/386091

Members:

- `void AddProcess(Process process)` _method_ — Add the process to be tracked. If our current process is killed, the child processes that we are tracking will be automatically killed, too. If the child process terminates first, that's fine, too.

#### `DevServer`

_public class_

Source: `src/Shared/Hosting.Server/DevServer.cs`

Launches the Industria4 platform server process from within a development environment and waits until the console is cancelled.

Members:

- `DevServer(string executablePath)` _constructor_ — Initialises a new instance that will launch the executable at the given path. Full path to the server executable.
- `DevServer()` _constructor_ — Initialises a new instance using the path specified by the `INDUSTRIA4_BIN` environment variable.
- `void Run()` _method_ — Starts the server process and blocks until Ctrl+C is pressed.
- `List&lt;string&gt; AdditionalPackages` _property_ — Gets the list of additional package paths to pass to the server process on startup.
- `string RootFolder` _property_ — Root folder of the whole installation

#### `HostExtensions`

_public class_

Source: `src/Shared/Hosting.Server/HostExtensions.cs`

Extension methods for that add Windows Service hosting support.

Members:

- `void RunAsService(this IHost host)` _method_ — Starts a host as Windows service

#### `HostService`

_public class_

Source: `src/Shared/Hosting.Server/HostService.cs`

Windows service which runs an instance of

Members:

- `HostService(IHost host)` _constructor_ — Initialises a new instance wrapping the provided host. The to run as a Windows service.
- `void OnStart(string[] args)` _method_
- `void OnStarted()` _method_ — Called after the host has successfully started.
- `void OnStarting(string[] args)` _method_ — Called before the host is started; override to perform pre-start work. Start arguments passed by the service control manager.
- `void OnStop()` _method_
- `void OnStopped()` _method_ — Called after the host has fully stopped.
- `void OnStopping()` _method_ — Called before the host is stopped.

#### `HostServiceApplication`

_public class_

Source: `src/Shared/Hosting.Server/HostServiceApplication.cs`

Host which supports console commands in order to execute the app as a console or as a service

Members:

- `HostServiceApplication(IHostBuilder hostBuilder)` _constructor_ — Initialises a new instance using the provided host builder. The builder used to create and configure the .
- `int Run(bool isService)` _method_

#### `IO_COUNTERS`

_public struct_

Source: `src/Shared/Hosting.Server/ChildProcessTracker.cs`

Maps to the native `IO_COUNTERS` structure that holds I/O accounting information for a process or job object.

#### `IStartupService`

_public interface_

Source: `src/Shared/Hosting/IStartupService.cs`

Interface used to configured custom services dynamically through .

#### `IThemeContext`

_public interface_

Source: `src/Shared/Hosting/IThemeContext.cs`

Provides access to the current UI theme and allows changing it at runtime.

#### `JOBOBJECT_BASIC_LIMIT_INFORMATION`

_public struct_

Source: `src/Shared/Hosting.Server/ChildProcessTracker.cs`

Maps to the native `JOBOBJECT_BASIC_LIMIT_INFORMATION` structure used with Windows job objects.

#### `JOBOBJECT_EXTENDED_LIMIT_INFORMATION`

_public struct_

Source: `src/Shared/Hosting.Server/ChildProcessTracker.cs`

Maps to the native `JOBOBJECT_EXTENDED_LIMIT_INFORMATION` structure used when querying or setting extended limits on a Windows job object.

#### `JobObjectInfoType`

_public enum_

Source: `src/Shared/Hosting.Server/ChildProcessTracker.cs`

Specifies the type of information to query or set on a Windows job object.

#### `LimitFlags`

_public enum_

Source: `src/Shared/Hosting.Server/ChildProcessTracker.cs`

Flags that specify limits applied to processes belonging to a Windows job object.

#### `PluginsDiscover`

_public class_

Source: `src/Shared/Hosting/PluginsDiscover.cs`

Utility class for discovering and instantiating plug-in implementations found in external assemblies on disk.

Members:

- `IEnumerable&lt;T&gt; FindPlugins&lt;T&gt;(string path,string searchPattern)` _method_ — Loads assemblies matching `searchPattern` from `path` and returns all instantiated implementations of `T`. The interface or base class to search for. The directory to search. A file-name pattern such as `*.dll`. An enumerable of `T` instances found in the matching assemblies.
- `IEnumerable FindPlugins(Type type,string path,string searchPattern)` _method_ — Loads assemblies matching `searchPattern` from `path` and returns all instantiated classes assignable to `type`. The base type or interface to filter by. The directory to search. A file-name pattern such as `*.dll`. An enumerable of object instances assignable to `type`.

#### `ProcessExtensions`

_public class_

Source: `src/Shared/Hosting.Server/ProcessExtensions.cs`

Provides utilities for launching processes in the context of the currently active Windows desktop session.

#### `ServiceApplication`

_public class_

Source: `src/Shared/Hosting.Server/ServiceApplication.cs`

Base class for applications that can run either as a Windows service or as a console application, with sub-commands to install/uninstall the service.

Members:

- `ServiceApplication()` _constructor_ — Initialises the application and registers the `console` and `service` sub-commands.
- `string[] ApplyDebugArguments(IEnumerable&lt;string&gt; args,params string[] afterArguments)` _method_ — Applies debug-mode overrides to the argument list, forcing console mode when a debugger is attached or the process is hosted in IIS. The original command-line arguments. Optional arguments that should appear before the console switch when it is injected. The adjusted argument array.
- `string[] ForceConsole(IEnumerable&lt;string&gt; args,params string[] afterArguments)` _method_ — Ensures the console-mode command-line switch is present in the returned argument array, inserting it after the specified `afterArguments` if supplied. The original command-line arguments. Optional arguments that should appear before the console switch in the result. A new argument array that always contains the console switch.
- `bool IsIis()` _method_ — Returns `true` when the current process is hosted inside IIS (detected by the process name). `true` if running inside IIS; otherwise, `false`.
- `bool IsService(IEnumerable&lt;string&gt; args)` _method_ — Returns `true` when the process should run as a Windows Service (i.e. the console command-line switch is absent). The command-line arguments passed to the application. `true` if the application should behave as a Windows Service; `false` if it should run as a console application.
- `int Run(bool isService)` _method_ — Executes the application in either service or console mode. When `true` run as a Windows service; when `false` run as a console application. The process exit code.
- `bool ValidateArgument(CommandLineApplication app,CommandArgument argument,params string[] allowedValues)` _method_ — Validates that the provided argument value is one of the allowed values. The current command application, used to display help on failure. The argument whose value is checked. The set of accepted values (case-insensitive). `true` if the value is allowed; otherwise `false`.
- `bool ValidateArguments(CommandLineApplication app,params CommandArgument[] arguments)` _method_ — Validates that the provided arguments are non-empty, writing a help message to the console for each invalid argument. The current command application, used to display help on failure. The arguments to validate. `true` when all arguments have values; otherwise `false`.

#### `WebHostServiceApplication`

_public class_

Source: `src/Shared/Hosting.Server/WebHostServiceApplication.cs`

WebHost which supports console commands in order to execute the app as a console or as a service

Members:

- `WebHostServiceApplication(IHostBuilder hostBuilder)` _constructor_ — Initialises a new instance using the provided host builder. The builder used to create and configure the .
- `int Run(bool isService)` _method_

### `Industria4.Hosting.Catalogs`

#### `AssemblyCatalog`

_public class_

Source: `src/Shared/Hosting/Catalogs/AssemblyCatalog.cs`

Catalog that exposes a single and its PDB symbols, if present.

Members:

- `AssemblyCatalog(Assembly assembly)` _constructor_ — Initializes a new instance for the given assembly. The assembly to expose.

#### `AssemblyCatalogItem`

_public class_

Source: `src/Shared/Hosting/Catalogs/ICatalog.cs`

Catalog item that wraps a lazily-loaded and its optional satellite assemblies.

Members:

- `AssemblyCatalogItem(Func&lt;Assembly&gt; assembly,string location)` _constructor_ — Initializes a new item for the given assembly factory and location. A factory function that loads the assembly on demand. The file-system location of the assembly.
- `void AddSatellite(CultureInfo culture,AssemblyCatalogItem item)` _method_ — Registers a satellite assembly for a specific culture. The culture the satellite assembly targets. The satellite catalog item to attach.
- `Assembly GetAssembly()` _method_ — Loads and returns the assembly, also loading any registered satellite assemblies. The loaded .
- `IEnumerable&lt;string&gt; SatelliteLocations` _property_ — Gets the locations of all satellite assemblies attached to this item.

#### `AssemblySymbolCatalogItem`

_public class_

Source: `src/Shared/Hosting/Catalogs/ICatalog.cs`

Catalog item that represents a PDB symbol file paired with an assembly.

Members:

- `AssemblySymbolCatalogItem(string location)` _constructor_ — Initializes a new instance for the symbol file at `location`. The path to the PDB file.

#### `CatalogContext`

_public class_

Source: `src/Shared/Hosting/Catalogs/ICatalogContextAccessor.cs`

Carries contextual information about the catalog being loaded, primarily its location.

Members:

- `CatalogContext(string location)` _constructor_ — Initializes a new catalog context for the given location. The location of the catalog. Must not be `null`.
- `string Location` _property_ — Gets the catalog location (file-system path or virtual identifier).

#### `CatalogItem`

_public class_

Source: `src/Shared/Hosting/Catalogs/ICatalog.cs`

Base class for all items discovered by an .

Members:

- `CatalogItem(string location)` _constructor_ — Initializes a new catalog item at the given location. The path or identifier of this item.
- `string Location` _property_ — Gets the file-system or virtual location of this item.

#### `ContextCatalog`

_public class_

Source: `src/Shared/Hosting/Catalogs/ContextCatalog.cs`

Abstract base catalog that loads assemblies into an and resolves satellite assemblies.

Members:

- `ContextCatalog(bool create)` _constructor_ — Initialises a new context catalog, optionally creating an isolated . Reserved; must be `false`. Passing `true` throws .
- `void Dispose()` _method_
- `IEnumerable&lt;ContextCatalogItem&gt; GetStreams()` _method_

#### `ContextCatalogItem`

_public class_

Source: `src/Shared/Hosting/Catalogs/ContextCatalog.cs`

Lightweight item that wraps a stream factory and its source location, used internally by before being promoted to a strongly-typed .

Members:

- `ContextCatalogItem(Func&lt;Stream&gt; getStream,string location)` _constructor_ — Initialises a new instance with the given stream factory and location. Factory that opens a readable stream for the item. The file-system location of the item.
- `Stream GetStream()` _method_ — Opens and returns a stream for this item.
- `CatalogItem ToCatalogItem(AssemblyLoadContext context)` _method_ — Converts this item to a strongly-typed loaded into the given . The load context used for assembly loading. A typed catalog item, or `null` if the file cannot be loaded.
- `string Location` _property_ — Gets the file-system location of this item.

#### `DirectoryCatalog`

_public class_

Source: `src/Shared/Hosting/Catalogs/DirectoryCatalog.cs`

Catalog that discovers assemblies and files in a file-system directory, with optional include/exclude glob patterns.

Members:

- `DirectoryCatalog(string path,string[] includes = null,string[] excludes = null)` _constructor_ — Initializes a new instance that scans `path`. The directory to scan. Optional glob patterns limiting which files are included. Optional glob patterns for files to exclude.
- `string Path` _property_ — Gets the root directory path scanned by this catalog.

#### `FileCatalogItem`

_public class_

Source: `src/Shared/Hosting/Catalogs/ICatalog.cs`

Catalog item that represents a raw file stream accessible to the catalog loader.

Members:

- `FileCatalogItem(Func&lt;Stream&gt; getStream,string location)` _constructor_ — Initializes a new instance for the file at `location`. Factory that opens a readable stream for the file. The file-system location of the item.
- `Stream GetStream()` _method_ — Opens and returns a stream for the file.

#### `ICatalog`

_public interface_

Source: `src/Shared/Hosting/Catalogs/ICatalog.cs`

Provides an enumerable list of catalog items that can be loaded into the application.

#### `ICatalogContextAccessor`

_public interface_

Source: `src/Shared/Hosting/Catalogs/ICatalogContextAccessor.cs`

Provides access to the current for the active catalog scope.

#### `MultiCatalog`

_public class_

Source: `src/Shared/Hosting/Catalogs/MultiCatalog.cs`

Aggregates multiple instances and exposes their items as a single enumerable.

Members:

- `MultiCatalog(params ICatalog[] catalogs)` _constructor_ — Initializes a new instance that delegates to the given catalogs. The catalogs to aggregate.

#### `TypesLoader`

_public class_

Source: `src/Shared/Hosting/Catalogs/TypesLoader.cs`

Loads types from one or more sources and filters them by a target interface or base class.

Members:

- `TypesLoader(IEnumerable&lt;ICatalog&gt; catalogs)` _constructor_ — Initializes a new instance with the given catalogs and no logger. The catalogs to search.
- `TypesLoader(ILogger logger,IEnumerable&lt;ICatalog&gt; catalogs)` _constructor_ — Initializes a new instance with a logger and the given catalogs. Logger for diagnostics, or `null`. The catalogs to search.
- `void Dispose()` _method_
- `Func&lt;AssemblyCatalogItem,bool&gt; Filter` _property_ — Gets or sets a predicate that controls which assembly catalog items are considered during loading.

#### `ZipCatalog`

_public class_

Source: `src/Shared/Hosting/Catalogs/ZipCatalog.cs`

Catalog that extracts and loads assemblies from a ZIP archive, caching the extraction by content hash.

Members:

- `ZipCatalog(ILogger logger,string zipPath)` _constructor_ — Initialises a new instance that reads from the ZIP file at `zipPath`. Logger for diagnostics, or `null`. The full path to the ZIP archive.
- `ZipCatalog(ILogger logger,Stream zipStream)` _constructor_ — Initialises a new instance that reads from the provided `zipStream`. Logger for diagnostics, or `null`. A readable stream positioned at the beginning of the ZIP archive.
- `string BaseZipDir` _property_ — Gets the local file-system directory where ZIP archives are extracted.

### `Industria4.Hosting.DomainModel`

#### `Validation`

_public class_

Source: `src/Hosting/Hosting.DomainModel/Validation.cs`

Defines maximum-length constants used for domain-model field validation.

### `Industria4.Hosting.DomainModel.Module`

#### `MetaPackage`

_public class_

Source: `src/Hosting/Hosting.DomainModel/Module/MetaPackage.cs`

Describes the metadata of a package as read from a `package.json` manifest.

Members:

- `JToken DefaultConfiguration` _property_ — Gets or sets the default JSON configuration for this package.
- `string EntryPoint` _property_ — Gets or sets the assembly entry-point name (without extension) that represents the main module of this package.
- `string Name` _property_ — Gets or sets the package display name.
- `string[] TargetProcessNames` _property_ — Gets or sets the names of the host processes that may load this package.
- `MetaPackageType Type` _property_ — Gets or sets whether this package targets the server or the client host.
- `string Version` _property_ — Gets or sets the package version string.

#### `MetaPackageType`

_public enum_

Source: `src/Hosting/Hosting.DomainModel/Module/MetaPackage.cs`

Specifies whether a package targets the server host or the client (browser) host.

#### `Package`

_public class_

Source: `src/Hosting/Hosting.DomainModel/Module/Package.cs`

Represents a deployable package that can be loaded by the Industria 4 host.

Members:

- `Package(string id,string path)` _constructor_ — Initializes a new instance of with the specified identifier and manifest path. The unique identifier for the package. The file-system path to the package manifest.
- `bool GetCanUsePackage()` _method_ — Determines whether this package can be used by the current process based on its . if the current process is allowed to load this package; otherwise .
- `Task LoadMetaPackageAsync(Stream stream)` _method_ — Loads package metadata from the provided stream containing a `package.json` manifest. A readable stream of the JSON manifest.
- `IList&lt;string&gt; DisabledModules` _property_ — Gets the list of module names that have been explicitly disabled for this package.
- `string Id` _property_ — Gets the unique identifier of this package.
- `bool IsChildProcess` _property_ — Gets a value indicating whether the current process is running as a child (module) process.
- `bool IsClient` _property_ — Gets or sets a value indicating whether this package targets the client (browser) host.
- `string Path` _property_ — Gets the file-system path to the package manifest.
- `IList&lt;string&gt; TargetProcessNames` _property_ — Gets the list of host-process names that may load this package.
- `Version Version` _property_ — Gets or sets the package version.

### `Industria4.Hosting.EntityFramework`

#### `EntitiesHostedServices`

_internal class_

Source: `src/Hosting/Hosting.EntityFramework/EntitiesHostedServices.cs`

Members:

- `EntitiesHostedServices(ILogger&lt;EntitiesHostedServices&gt; logger,Backup&lt;HostingContext&gt; backup,IServiceProvider serviceProvider)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `HostingMapper`

_public class_

Source: `src/Hosting/Hosting.EntityFramework/HostingMapper.cs`

Provides the AutoMapper configuration for mapping between hosting data models and read models.

Members:

- `HostingMapper()` _constructor_ — Initializes a new instance of and configures entity-to-read-model mappings.
- `IMapper Mapper` _property_ — Gets the configured AutoMapper instance.

### `Industria4.Hosting.EntityFramework.DataAccessObject`

#### `HostingDataAccessObject&lt;TDataModel, TReadModel&gt;`

_internal class_

Source: `src/Hosting/Hosting.EntityFramework/DataAccessObject/HostingDataAccessObject.cs`

Members:

- `HostingDataAccessObject(HostingContext context,HostingMapper mapperAccessor)` _constructor_
- `IQueryable&lt;TReadModel&gt; Query` _property_

### `Industria4.Hosting.EntityFramework.DataModel`

#### `HostingContext`

_internal class_

Source: `src/Hosting/Hosting.EntityFramework/DataModel/HostingContext.cs`

Members:

- `HostingContext(DbContextOptions options)` _constructor_
- `void OnModelCreating(ModelBuilder modelBuilder)` _method_
- `DbSet&lt;Package&gt; Packages` _property_

#### `HostingContextFactory`

_internal class_

Source: `src/Hosting/Hosting.EntityFramework/DataModel/HostingContextFactory.cs`

Members:

- `HostingContext CreateDbContext(string[] args)` _method_

### `Industria4.Hosting.EntityFramework.DataModel.Module`

#### `Package`

_internal class_

Source: `src/Hosting/Hosting.EntityFramework/DataModel/Module/Package.cs`

Members:

- `string Configuration` _property_
- `string DisabledModules` _property_
- `string EntryPoint` _property_
- `string Id` _property_
- `bool IsClient` _property_
- `string Name` _property_
- `string Path` _property_
- `string TargetProcessNames` _property_
- `string Version` _property_

### `Industria4.Hosting.EntityFramework.Repositories`

#### `PackageRepository`

_internal class_

Source: `src/Hosting/Hosting.EntityFramework/Repositories/PackageRepository.cs`

Members:

- `PackageRepository(DataModel.HostingContext context,ILogger&lt;PackageRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;Package&gt; entities)` _method_
- `Task OnRemoveAsync(IEnumerable&lt;string&gt; ids)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;Package&gt; entities)` _method_
- `void ToDataModel(Package entity,DataModel.Module.Package dataModel)` _method_
- `Package ToDomainModel(DataModel.Module.Package dataModel)` _method_

### `Industria4.Hosting.Http`

#### `LicenseClient`

_public class_

Source: `src/Hosting/Hosting.Http/LicenseClient.cs`

HTTP client for interacting with the license API endpoint.

Members:

- `LicenseClient(RestClient restClient)` _constructor_ — Initializes a new instance of with the provided REST client. The REST client used to send HTTP requests.
- `Task&lt;bool&gt; ActivateAsync(string key,CancellationToken token = default)` _method_ — Activates the license using the provided license key. The license key to activate. An optional cancellation token. if activation succeeded; otherwise .
- `Task CancelAsync(CancellationToken token = default)` _method_ — Cancels the current license on the server. An optional cancellation token.
- `Task&lt;LicenseModel&gt; GetAsync(CancellationToken token = default)` _method_ — Gets the current license information from the server. An optional cancellation token.

#### `MessagingClient`

_public class_

Source: `src/Hosting/Hosting.Http/MessagingClient.cs`

HTTP client for publishing messages to the messaging API endpoint.

Members:

- `MessagingClient(RestClient restClient)` _constructor_ — Initializes a new instance of with the provided REST client. The REST client used to send HTTP requests.
- `Task SendAsync(string topic,IDictionary&lt;string,object&gt; data,CancellationToken token = default)` _method_ — Sends a message on the specified topic with the provided data dictionary. The topic to publish on. A dictionary of additional data to include in the message. An optional cancellation token.
- `Task SendAsync(MessageModel model,CancellationToken token = default)` _method_ — Sends a pre-built to the messaging endpoint. The message to send. An optional cancellation token.

#### `ModuleClient`

_public class_

Source: `src/Hosting/Hosting.Http/ModuleClient.cs`

HTTP client for managing packages via the module API endpoint.

Members:

- `ModuleClient(RestClient restClient)` _constructor_ — Initializes a new instance of with the provided REST client. The REST client used to send HTTP requests.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the package with the specified identifier from the server. The unique identifier of the package to delete. An optional cancellation token.
- `Task&lt;bool&gt; GetAreReadyAsync(CancellationToken token = default)` _method_ — Gets a value indicating whether all modules have finished loading. An optional cancellation token.
- `Task&lt;Package&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Gets detailed information about the package with the specified identifier. The unique identifier of the package to retrieve. An optional cancellation token.
- `Task&lt;JToken&gt; GetConfigurationsAsync(CancellationToken token = default)` _method_ — Gets the merged JSON configuration for all installed packages. An optional cancellation token.
- `Task RestartAsync(CancellationToken token = default)` _method_ — Requests the server to restart the hosting application. An optional cancellation token.
- `Task SetConfigurationAsync(string id,JToken configuration,CancellationToken token = default)` _method_ — Updates the JSON configuration for the package with the specified identifier. The unique identifier of the package to configure. The new JSON configuration to apply. An optional cancellation token.

### `Industria4.Hosting.Http.License`

#### `ActivateModel`

_public class_

Source: `src/Hosting/Hosting.Http/License/ActivateModel.cs`

Request model for activating a license with a provided key.

Members:

- `string Key` _property_ — Gets or sets the license key to activate.

#### `LicenseModel`

_public class_

Source: `src/Hosting/Hosting.Http/License/LicenseModel.cs`

Response model representing the current license state returned by the license API.

Members:

- `IReadOnlyList&lt;string&gt; ActivatedPackages` _property_ — Gets or sets the list of package names that are activated by the current license.
- `string ActiveLicenseKey` _property_ — Gets or sets the currently active license key, or if no key is set.
- `DateTimeOffset? Expiration` _property_ — Gets or sets the license expiration date, or if the license does not expire.
- `bool IsTrial` _property_ — Gets or sets a value indicating whether the current license is a trial license.
- `bool IsValid` _property_ — Gets or sets a value indicating whether the current license is valid.
- `string MachineCode` _property_ — Gets or sets the hardware-derived machine code used to generate license requests.
- `string RequestCode` _property_ — Gets or sets the encoded request code that must be submitted to obtain a license.

### `Industria4.Hosting.Http.Messaging`

#### `MessageModel`

_public class_

Source: `src/Hosting/Hosting.Http/Messaging/MessageModel.cs`

Model for sending or receiving a messaging topic payload.

Members:

- `IDictionary&lt;string,object&gt; AdditionalData` _property_ — Gets or sets the topic name of the message. Gets or sets the additional data associated with the message, captured from extra JSON properties.

### `Industria4.Hosting.Messaging`

#### `IMessagingBroker`

_public interface_

Source: `src/Hosting/Hosting.Messaging/IMessagingBroker.cs`

Defines the contract for subscribing to in-process messaging topics.

### `Industria4.Hosting.Modules`

#### `IClientModule`

_public interface_

Source: `src/Shared/Hosting/Modules/IModule.cs`

Marker interface for modules that run in the client (browser/desktop) context.

#### `IModule`

_public interface_

Source: `src/Shared/Hosting/Modules/IModule.cs`

Represents a loadable application module with a defined lifecycle.

#### `ModulesLoader`

_public class_

Source: `src/Shared/Hosting/Modules/ModulesLoader.cs`

Loads registered implementations from the DI container and calls their methods in sequence.

Members:

- `ModulesLoader(ILogger&lt;ModulesLoader&gt; logger,IServiceProvider serviceProvider)` _constructor_ — Initialises a new instance with the given logger and service provider. Logger for diagnostics. The DI container used to resolve modules.
- `Task LoadAsync(CancellationToken token)` _method_ — Loads all registered services. A cancellation token.
- `Task LoadAsync(Type moduleType,CancellationToken token)` _method_ — Loads all services registered for `moduleType`. The module interface or base class to resolve from the container. A cancellation token.

#### `ProcessModule`

_public class_

Source: `src/Shared/Hosting.Server/Modules/ProcessModule.cs`

Base class for modules that are hosted as external child processes, providing lifecycle management (start/stop/restart) and health-check pinging.

Members:

- `ProcessModule(ILogger logger,IConfiguration configuration)` _constructor_ — Initialises a new instance with the given logger and configuration. The logger instance used to record process events. The application configuration.
- `void Dispose()` _method_
- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `IConfiguration Configuration` _property_ — Gets the configuration for this module.
- `IDictionary&lt;string,string&gt; Environment` _property_ — Gets additional environment variables that are injected into the child process.
- `ILogger Logger` _property_ — Gets the logger used by this module.
- `string Name` _property_ — Gets the display name of this module.
- `string ProcessNameExe` _property_ — Gets the executable file name (including extension) for the child process.
- `string ProcessPath` _property_ — Gets the full path to the child process executable.
- `string WorkingDir` _property_ — Gets the working directory used when starting the child process.

### `Industria4.Hosting.ReadModel`

#### `PackageRead`

_public class_

Source: `src/Hosting/Hosting.ReadModel/PackageRead.cs`

Read model representing summary information about an installed package.

Members:

- `string Id` _property_ — Gets or sets the unique identifier of the package.
- `bool IsClient` _property_ — Gets or sets a value indicating whether this package targets the client (browser) host.
- `string Name` _property_ — Gets or sets the display name of the package.
- `string Version` _property_ — Gets or sets the version string of the package.

### `Industria4.Hosting.Startup`

#### `CatalogsFileProvider`

_public class_

Source: `src/Hosting/Hosting.Startup/CatalogsFileProvider.cs`

An that serves static files from the catalog entries of all registered instances.

Members:

- `CatalogsFileProvider(CatalogsFiles catalogsFiles)` _constructor_ — Initializes a new instance of with the given catalog file aggregator. The instance that aggregates catalog file entries.
- `IDirectoryContents GetDirectoryContents(string subpath)` _method_
- `IFileInfo GetFileInfo(string subpath)` _method_
- `IChangeToken Watch(string filter)` _method_

#### `CatalogsFiles`

_public class_

Source: `src/Hosting/Hosting.Startup/CatalogsFiles.cs`

Aggregates static file and assembly entries from all registered instances for use by file providers.

Members:

- `CatalogsFiles(IEnumerable&lt;ICatalog&gt; catalogs)` _constructor_ — Initializes a new instance of with the provided catalog instances. The catalogs whose file entries will be aggregated.
- `Task&lt;IFileInfo&gt; GetFileInfoAsync(string subpath)` _method_ — Returns the for the specified virtual path, or a not-found descriptor if absent. The virtual path to look up.

#### `DatabasePackageCatalog`

_public class_

Source: `src/Hosting/Hosting.Startup/DatabasePackageCatalog.cs`

An that discovers and loads packages registered in the database.

Members:

- `DatabasePackageCatalog(ILogger&lt;DatabasePackageCatalog&gt; logger,IDataAccessObject&lt;PackageRead&gt; packageDataAccessObject,IRepository&lt;Package&gt; packageRepository)` _constructor_ — Initializes a new instance of with the required dependencies.
- `void Dispose()` _method_ — Disposes all child catalogs (e.g. instances) created during the last load.

#### `DatabasePackagesProvider`

_public class_

Source: `src/Hosting/Hosting.Startup/DatabasePackagesProvider.cs`

An that retrieves packages and their catalogs from the database.

#### `EnvironmentPackagesProvider`

_public class_

Source: `src/Hosting/Hosting.Startup/EnvironmentPackagesProvider.cs`

An that discovers packages from paths listed in the `INDUSTRIA4_ADDITIONALPACKAGES` environment variable.

Members:

- `EnvironmentPackagesProvider()` _constructor_ — Initializes a new instance of .

#### `ExternalResourcesFileProvider`

_public class_

Source: `src/Hosting/Hosting.Startup/ExternalResourcesFileProvider.cs`

An that serves externally compiled resource assembly files.

Members:

- `ExternalResourcesFileProvider(ExternalResourcesFiles externalResourcesFiles)` _constructor_ — Initializes a new instance of with the given file aggregator. The instance that discovers resource files.
- `IDirectoryContents GetDirectoryContents(string subpath)` _method_
- `IFileInfo GetFileInfo(string subpath)` _method_
- `IChangeToken Watch(string filter)` _method_

#### `ExternalResourcesFiles`

_public class_

Source: `src/Hosting/Hosting.Startup/ExternalResourcesFiles.cs`

Discovers and serves externally compiled satellite resource assemblies from the `resources` folder.

Members:

- `ExternalResourcesFiles()` _constructor_ — Initializes a new instance of .
- `Task&lt;IFileInfo&gt; GetFileInfoAsync(string subpath)` _method_ — Returns the for the specified virtual path, or a not-found descriptor if absent. The virtual path to look up.
- `Task InitAsync()` _method_ — Triggers initialization of the resource file discovery.
- `Assembly ResolveAssembly(AssemblyLoadContext context,AssemblyName assemblyName)` _method_ — Attempts to resolve and load an assembly by name from the discovered resource files. The assembly load context to use for loading. The name of the assembly to resolve. The loaded , or if not found.

#### `ExternalResourcesService`

_internal class_

Source: `src/Hosting/Hosting.Startup/ExternalResourcesService.cs`

Members:

- `ExternalResourcesService(ExternalResourcesFiles externalResourcesFiles)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `FolderPackagesProvider`

_public class_

Source: `src/Hosting/Hosting.Startup/FolderPackagesProvider.cs`

An that discovers packages from subdirectories inside the `AdditionalPackages` folder.

Members:

- `FolderPackagesProvider()` _constructor_ — Initializes a new instance of .

#### `GzFileInfo`

_public class_

Source: `src/Hosting/Hosting.Startup/GzFileInfo.cs`

An decorator that wraps an existing file and streams its content as gzip-compressed data.

Members:

- `GzFileInfo(IFileInfo innerFile)` _constructor_ — Initializes a new instance of that wraps the given file and appends a `.gz` suffix to its name. The original file to compress.
- `Stream CreateReadStream()` _method_ — Creates and returns a that compresses the inner file content on the fly.
- `bool Exists` _property_
- `bool IsDirectory` _property_
- `DateTimeOffset LastModified` _property_
- `string Name` _property_ — Gets the file name (including extension) of the original file.

#### `IPackageCatalogContext`

_public interface_

Source: `src/Hosting/Hosting.Startup/IPackageCatalogContext.cs`

Provides contextual information about the current catalog entry point and host type.

#### `IPackagesProvider`

_public interface_

Source: `src/Hosting/Hosting.Startup/IPackagesProvider.cs`

Defines the contract for providing installed packages and their associated catalogs.

#### `License`

_public class_

Source: `src/Hosting/Hosting.Startup/LicenseGenerator.cs`

Represents a signed license record that ties a machine code to a set of package names and an optional expiration date.

Members:

- `DateTimeOffset? Expiration` _property_ — Gets or sets the optional expiration date of the license. means the license never expires.
- `string Hash` _property_ — Gets or sets the cryptographic signature hash used to verify the license has not been tampered with.
- `string MachineCode` _property_ — Gets or sets the hardware-derived machine code that this license is locked to.
- `string[] Packages` _property_ — Gets or sets the array of package names covered by this license.

#### `LicenseGenerator`

_public class_

Source: `src/Hosting/Hosting.Startup/LicenseGenerator.cs`

Generates and validates Industria4 license keys using asymmetric cryptography.

Members:

- `bool CheckLicense(string machineCode,string key,out License item)` _method_ — Verifies the provided license key against the given machine code. The hardware-derived machine code to check against. The license key to verify. When this method returns , contains the decoded ; otherwise . if the key is valid for the machine code; otherwise .
- `string GenerateLicense(string requestCode,DateTimeOffset? expiration)` _method_ — Generates a signed license key from the request code and optional expiration date. The hex-encoded request code containing machine code and package list. An optional expiration date; pass for a perpetual license. The hex-encoded license key, or if generation fails.
- `string GetMachineCode(string source)` _method_ — Computes a deterministic machine code hash from the provided source string. A source string, typically derived from hardware identifiers.
- `string GetMachineCodeFromRequestCode(string requestCode)` _method_ — Decodes the machine code embedded in the provided request code. The hex-encoded request code to decode.
- `IReadOnlyList&lt;string&gt; GetPackagesFromRequestCode(string requestCode)` _method_ — Decodes the list of package names embedded in the provided request code. The hex-encoded request code to decode.
- `string GetRequestCode(string machineCode,IEnumerable&lt;string&gt; installedPackages)` _method_ — Encodes the machine code and list of installed packages into a license request code. The hardware-derived machine code. The package names that should be covered by the license.
- `string Hash&lt;T&gt;(T obj)` _method_ — Computes a SHA-256 hex hash of the JSON-serialized form of the given object. The type of the object to hash. The object to serialize and hash.
- `string PrivateKey` _property_ — Gets or sets the path to the PFX file containing the private signing key. Defaults to `License.pfx` in the current directory.
- `string PublicKey` _property_ — Gets or sets the path to the CER file containing the public verification key. Defaults to `License.cer` in the current directory.

#### `LicenseManager`

_public class_

Source: `src/Hosting/Hosting.Startup/LicenseManager.cs`

Manages the loading, validation, and lifecycle of the Industria4 runtime license.

Members:

- `LicenseManager(ILogger&lt;LicenseManager&gt; logger,IDataProtectionProvider dataProtectorProvider,IServiceProvider serviceProvider)` _constructor_ — Initializes a new instance of and computes the machine code.
- `event EventHandler ValidChanged` _event_ — Raised when the license validity changes.
- `Task CancelLicenseAsync()` _method_ — Cancels the current license and reverts to a new trial period.
- `Task EnsureLoadedAsync()` _method_ — Ensures the license state is loaded; subsequent calls are no-ops until is called.
- `bool GetIsValid()` _method_ — Returns if the current license has not expired.
- `Task LoadAsync()` _method_ — Reloads the license state from persistent storage.
- `Task&lt;bool&gt; SetLicenseAsync(string key)` _method_ — Activates a new license key after verifying it against the current machine code. The license key to activate. if the key is valid and was saved; otherwise .
- `IReadOnlyList&lt;string&gt; ActivatedPackages` _property_ — Gets the list of package names activated by the current license.
- `string ActiveLicenseKey` _property_ — Gets the currently active license key, or if no key has been set.
- `DateTimeOffset? Expiration` _property_ — Gets the license expiration date, or if the license does not expire.
- `bool IsTrial` _property_ — Gets a value indicating whether the current license is a trial license.
- `string MachineCode` _property_ — Gets the hardware-derived machine code for this host.
- `string RequestCode` _property_ — Gets the request code that must be submitted to obtain a production license key.

#### `ModulesLoaderHostedService`

_public class_

Source: `src/Hosting/Hosting.Startup/ModulesLoaderHostedService.cs`

A hosted service that triggers module loading when the application starts and license is valid.

Members:

- `ModulesLoaderHostedService(IServiceProvider serviceProvider,ILogger&lt;ModulesLoaderHostedService&gt; logger,LicenseManager licenseManager)` _constructor_ — Initializes a new instance of with the required dependencies.
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_
- `Task ModulesLoaderTask` _property_ — Gets the background task that represents the ongoing module loading operation, or if not started.

#### `PackageAssemblyCatalog`

_public class_

Source: `src/Hosting/Hosting.Startup/PackageAssemblyCatalog.cs`

An that wraps a single assembly and exposes its catalog items tagged with package metadata.

Members:

- `PackageAssemblyCatalog(Assembly assembly,string packageName,in bool isClient)` _constructor_ — Initializes a new instance of for the given assembly and package. The assembly to wrap. The name of the owning package. Whether this catalog is for client-side use.
- `Assembly Assembly` _property_ — Gets the wrapped assembly.
- `AssemblyCatalog Catalog` _property_ — Gets the underlying for the wrapped assembly.
- `bool IsClient` _property_ — Gets a value indicating whether this catalog targets the client (browser) host.
- `string PackageName` _property_ — Gets the name of the package that owns this assembly.

#### `PackageAssemblyCatalogItem`

_internal class_

Source: `src/Hosting/Hosting.Startup/DatabasePackageCatalog.cs`

Members:

- `PackageAssemblyCatalogItem(string packageName,bool isEntryPoint,bool isClient,AssemblyCatalogItem item)` _constructor_
- `bool IsClient` _property_
- `bool IsEntryPoint` _property_
- `string PackageName` _property_

#### `PackageAssemblySymbolCatalogItem`

_internal class_

Source: `src/Hosting/Hosting.Startup/DatabasePackageCatalog.cs`

Members:

- `PackageAssemblySymbolCatalogItem(string packageName,bool isClient,AssemblySymbolCatalogItem item)` _constructor_
- `bool IsClient` _property_
- `bool IsEntryPoint` _property_
- `string PackageName` _property_

#### `PackageCatalogContextExtensions`

_internal class_

Source: `src/Hosting/Hosting.Startup/DatabasePackageCatalog.cs`

Members:

- `T WrapPackage&lt;T&gt;(this T source,string packageName,bool isEntryPoint,bool isClient)` _method_

#### `PackageConfigurationSourceBase`

_public class_

Source: `src/Hosting/Hosting.Startup/PackageConfigurationSourceBase.cs`

Base class for configuration sources that serialize package configurations into a JSON configuration stream.

Members:

- `PackageConfigurationSourceBase()` _constructor_ — Initializes a new instance of with defaults for optional JSON source.
- `IEnumerable&lt;Package&gt; GetPackages()` _method_ — Returns the packages whose configurations should be serialized into the configuration stream.

#### `PackageDirectoryCatalog`

_public class_

Source: `src/Hosting/Hosting.Startup/PackageDirectoryCatalog.cs`

A that tags all discovered items with package metadata.

Members:

- `PackageDirectoryCatalog(string packageName,string path,bool isClient,string[] includes = null,string[] excludes = null,string entrypoint = null)` _constructor_ — Initializes a new instance of for the specified directory and package. The name of the owning package. The directory path to scan for catalog items. Whether this catalog targets the client (browser) host. Optional glob patterns for files to include. Optional glob patterns for files to exclude. Optional assembly name (without extension) that is the entry point for this package.

#### `PackageEnvironment`

_public class_

Source: `src/Hosting/Hosting.Startup/PackageEnvironment.cs`

Encapsulates an isolated used to discover and initialize packages before the main application host starts.

Members:

- `Task&lt;PackageEnvironment&gt; CreateAsync(IEnumerable&lt;IPackagesProvider&gt; additionalPackageProviders)` _method_ — Creates and starts a new with the given additional package providers. Extra instances to register in the inner host.
- `void Dispose()` _method_
- `IHost Host` _property_ — Gets the inner host that provides package-discovery services.

#### `PackageFileCatalogItem`

_internal class_

Source: `src/Hosting/Hosting.Startup/DatabasePackageCatalog.cs`

Members:

- `PackageFileCatalogItem(string packageName,bool isClient,FileCatalogItem item)` _constructor_
- `bool IsClient` _property_
- `bool IsEntryPoint` _property_
- `string PackageName` _property_

#### `PackagesConfigurationSource`

_public class_

Source: `src/Hosting/Hosting.Startup/PackagesConfigurationSource.cs`

A that loads packages from all registered instances.

Members:

- `PackagesConfigurationSource(IEnumerable&lt;IPackagesProvider&gt; packagesProviders)` _constructor_ — Initializes a new instance of with the registered providers. The collection of package providers to query for packages.
- `IEnumerable&lt;Package&gt; GetPackages()` _method_

#### `PackageZipCatalog`

_public class_

Source: `src/Hosting/Hosting.Startup/PackageZipCatalog.cs`

A that tags all discovered items with package metadata.

Members:

- `PackageZipCatalog(ILogger logger,string packageName,string zipPath,bool isClient)` _constructor_ — Initializes a new instance of from a zip file path. Logger for diagnostic output. The name of the owning package. The path to the zip archive. Whether this catalog targets the client (browser) host.
- `PackageZipCatalog(ILogger logger,string packageName,Stream zipStream,bool isClient)` _constructor_ — Initializes a new instance of from a zip stream. Logger for diagnostic output. The name of the owning package. A readable stream containing the zip archive. Whether this catalog targets the client (browser) host.
- `string PackageName` _property_ — Gets the name of the owning package.

#### `RequestItem`

_internal class_

Source: `src/Hosting/Hosting.Startup/LicenseGenerator.cs`

Members:

- `string MachineCode` _property_
- `string[] Packages` _property_

### `Industria4.Hosting.WebApp`

#### `App`

_public class_

Source: `src/Hosting/Hosting.WebApp/App.razor.cs`

Root Blazor component for the Hosting WebApp client, responsible for bootstrapping modules and routing.

Members:

- `Task OnAfterRenderAsync(bool firstRender)` _method_
- `Task OnInitializedAsync()` _method_

#### `HostingOptions`

_public class_

Source: `src/Hosting/Hosting.WebApp/HostingOptions.cs`

Configuration options for the Industria4 hosting web application.

Members:

- `bool CollapsedMenu` _property_ — Gets or sets a value indicating whether the navigation menu should start collapsed.
- `Dictionary&lt;string,int&gt; MenuOrder` _property_ — Gets or sets a dictionary of menu item names to their display order.
- `string StartProcess` _property_ — Gets or sets the name of an external process to launch on startup.
- `string StartProcessArguments` _property_ — Gets or sets the command-line arguments passed to the startup process.
- `TimeSpan? StartProcessDelay` _property_ — Gets or sets how long to wait before launching the startup process.
- `Uri StartUri` _property_ — Gets or sets the URI to navigate to on startup, or to use the default route.
- `bool VirtualKeyboard` _property_ — Gets or sets a value indicating whether a virtual keyboard should be displayed. Defaults to .

#### `MessagingService`

_internal class_

Source: `src/Hosting/Hosting.WebApp/MessagingService.cs`

Members:

- `MessagingService(ILogger&lt;MessagingService&gt; logger,NavigationManager navigationManager)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `Program`

_public class_

Source: `src/Hosting/Hosting.WebApp/Program.cs`

Blazor WebAssembly entry point for the Hosting WebApp client, responsible for loading the license, configuring services, and starting the host.

Members:

- `Task Main(string[] args)` _method_ — Application entry point: loads the license, registers services and Blazor modules, then runs the WebAssembly host.

### `Industria4.Hosting.WebApp.IFrame`

#### `FrameLink`

_public class_

Source: `src/Hosting/Hosting.WebApp.IFrame/FrameOptions.cs`

Defines a single external link displayed as an IFrame panel in the hosting web app.

Members:

- `bool Bottom` _property_ — Gets or sets a value indicating whether the link should appear at the bottom of the menu.
- `IDictionary&lt;string,string&gt; Data` _property_ — Gets additional data key-value pairs passed to the IFrame view.
- `string Icon` _property_ — Gets or sets the icon name or CSS class for the navigation entry.
- `int Order` _property_ — Gets or sets the display order of this link in the navigation menu.
- `bool Scrolling` _property_ — Gets or sets a value indicating whether the IFrame should have scroll bars. Defaults to .
- `string Uri` _property_ — Gets or sets the URI of the page to embed in the IFrame.

#### `FrameOptions`

_public class_

Source: `src/Hosting/Hosting.WebApp.IFrame/FrameOptions.cs`

A named dictionary of entries that configure IFrame navigation links.

#### `StartupService`

_public class_

Source: `src/Hosting/Hosting.WebApp.IFrame/StartupService.cs`

Registers the IFrame module services (menu entries, routing, policies) when running in a client context.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

### `Industria4.Hosting.WebApp.IFrame.Modules`

#### `FrameModule`

_public class_

Source: `src/Hosting/Hosting.WebApp.IFrame/Modules/FrameModule.cs`

An that registers IFrame navigation menu entries based on .

Members:

- `FrameModule(IMenuService menuService,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService,IOptions&lt;FrameOptions&gt; frameOptions)` _constructor_ — Initializes a new instance of with the required services.
- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `string Name` _property_ — Gets the unique name that identifies this module.

### `Industria4.Hosting.WebApp.IFrame.Routing`

#### `DynamicRouteBuilderProvider`

_public class_

Source: `src/Hosting/Hosting.WebApp.IFrame/Routing/DynamicRouteBuilderProvider.cs`

Provides the component type as the sole routable page in the IFrame module.

Members:

- `IEnumerable&lt;Type&gt; GetTypes()` _method_

### `Industria4.Hosting.WebApp.Routing`

#### `DynamicRouteBuilderProvider`

_public class_

Source: `src/Hosting/Hosting.WebApp/Routing/DynamicRouteBuilderProvider.cs`

Provides all Razor component types in this assembly that declare at least one route template.

Members:

- `IEnumerable&lt;Type&gt; GetTypes()` _method_

### `Industria4.Hosting.WebApp.Server`

#### `AutoStartProcessService`

_public class_

Source: `src/Hosting/Hosting.WebApp.Server/AutoStartProcessService.cs`

An that launches an external process defined in when the application starts.

Members:

- `AutoStartProcessService(IHostApplicationLifetime lifetime,IOptions&lt;HostingOptions&gt; options,ILogger&lt;AutoStartProcessService&gt; logger)` _constructor_ — Initializes a new instance of with the required services.
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `ExternalProcessService`

_public class_

Source: `src/Hosting/Hosting.WebApp.Server/ExternalProcessService.cs`

A Windows wrapper that hosts and supervises the main application process, restarting it on unexpected exit.

Members:

- `ExternalProcessService(string[] args,string[] specialArguments)` _constructor_ — Initializes a new instance of with the forwarded command-line arguments.
- `void ManualRun()` _method_ — Starts the external process without running as a Windows service (for console/debug mode).
- `void OnStart(string[] args)` _method_
- `void OnStop()` _method_

#### `Program`

_public class_

Source: `src/Hosting/Hosting.WebApp.Server/Program.cs`

Entry point for the Industria4 Hosting Web API server, supporting both direct console mode and Windows Service mode.

Members:

- `Program(string[] args)` _constructor_ — Initializes a new instance and configures the command-line interface options (safe-mode, SSL, service install/uninstall).
- `IHostBuilder CreateHostBuilder(string[] args)` _method_ — Creates and configures the with Serilog, external resources, and the package catalog (skipped in safe mode).
- `void Main(string[] args)` _method_ — Application entry point: parses arguments (including safe-mode flag), then delegates to .
- `void MainInternal(bool isService,string[] args)` _method_ — Runs the host either as a Windows Service or as a console application, depending on `isService`. When , runs as a Windows Service; otherwise runs as a console application.
- `int Run(bool isService)` _method_

#### `Startup`

_public class_

Source: `src/Hosting/Hosting.WebApp.Server/Startup.cs`

Configures services and the HTTP request pipeline for the Industria4 hosting web application.

Members:

- `Startup(IConfiguration configuration)` _constructor_ — Initializes a new instance of with the given configuration.
- `void Configure(IApplicationBuilder app,IWebHostEnvironment env)` _method_ — Configures the HTTP request pipeline.
- `void ConfigureServices(IServiceCollection services)` _method_ — Registers application services with the DI container.
- `IConfiguration Configuration` _property_ — Gets the application configuration.

### `Industria4.Hosting.WebApp.Server.Controllers`

#### `LicenseController`

_public class_

Source: `src/Hosting/Hosting.WebApp.Server/Controllers/LicenseController.cs`

API controller that exposes license management endpoints (get, activate, cancel).

Members:

- `LicenseController(LicenseManager licenseManager,IHostApplicationLifetime hostApplicationLifetime)` _constructor_ — Initializes a new instance of with the required services.
- `Task&lt;IActionResult&gt; Cancel()` _method_ — Cancels the active license and restarts the application.
- `Task&lt;LicenseModel&gt; Get()` _method_ — Returns the current license information.

#### `MessagingController`

_public class_

Source: `src/Hosting/Hosting.WebApp.Server/Controllers/MessagingController.cs`

API controller that forwards messages to all connected SignalR clients via .

Members:

- `MessagingController(IHubContext&lt;MessagingHub&gt; hubContext)` _constructor_ — Initializes a new instance of with the hub context.
- `Task&lt;IActionResult&gt; Send(MessageModel model)` _method_ — Broadcasts a message to all connected SignalR clients.

#### `ModuleController`

_public class_

Source: `src/Hosting/Hosting.WebApp.Server/Controllers/ModuleController.cs`

API controller that exposes package (module) management endpoints, including query, upload, configuration, and restart.

Members:

- `IActionResult GetAreReady()` _method_ — Returns whether all modules have finished loading. Returns `true` also in safe mode where the loader is not registered.
- `IActionResult Restart([FromServices] IHostApplicationLifetime hostApplicationLifetime)` _method_ — Initiates a graceful application restart after a short delay (500 ms).

### `Industria4.Hosting.WebApp.Server.Endpoints`

#### `UploadPackageEndpoint`

_public class_

Source: `src/Hosting/Hosting.WebApp.Server/Endpoints/UploadPackageEndpoint.cs`

Registers the HTTP endpoint that accepts package ZIP uploads.

Members:

- `IEndpointRouteBuilder MapUploadPackage(this IEndpointRouteBuilder builder)` _method_ — Maps the `POST /package` endpoint on the given route builder. The endpoint route builder to register on. The same `builder` for chaining.

### `Industria4.Hosting.WebApp.Server.Hubs`

#### `MessagingHub`

_public class_

Source: `src/Hosting/Hosting.WebApp.Server/Hubs/MessagingHub.cs`

SignalR hub used to push real-time messages to connected Blazor WASM clients.

### `Industria4.Hosting.WebApp.Startup`

#### `AssemblyDependencyResolver`

_public class_

Source: `src/Hosting/Hosting.WebApp/Startup/AssemblyDependencyResolver.cs`

Resolves and recursively downloads all assembly dependencies for a given assembly name.

#### `AssemblyNameComparer`

_internal class_

Source: `src/Hosting/Hosting.WebApp/Startup/AssemblyDependencyResolver.cs`

Members:

- `bool Equals(string x,string y)` _method_
- `int GetHashCode(string obj)` _method_

#### `AssemblyProviderBase`

_public class_

Source: `src/Hosting/Hosting.WebApp/Startup/AssemblyProviderBase.cs`

Base class that provides assembly bytes (DLL and optional PDB) from a remote source via JS interop.

Members:

- `AssemblyProviderBase(IJSRuntime jsRuntime)` _constructor_ — Initializes a new instance of .
- `Task&lt;(IJSStreamReference DllBytes,IJSStreamReference PdbBytes)&gt; GetAssemblyAsync(string assemblyName)` _method_ — Returns the DLL and optional PDB byte streams for the specified assembly name. The simple name of the assembly to retrieve.
- `Task&lt;IJSStreamReference&gt; TryDownloadFileBytes(string uri,string hash)` _method_ — Attempts to download file bytes from the given URI, returning on failure. The relative or absolute URI of the file. An integrity hash passed to the browser for cache validation.

#### `DefaultAssemblyDownloader`

_public class_

Source: `src/Hosting/Hosting.WebApp/Startup/AssemblyProviderBase.cs`

Downloads assemblies from the `/_framework/_bin/` endpoint exposed by the Hosting server.

Members:

- `DefaultAssemblyDownloader(HttpClient httpClient,IJSRuntime jsRuntime)` _constructor_ — Initializes a new instance of with the provided HTTP client and JS runtime.
- `Task&lt;(IJSStreamReference DllBytes,IJSStreamReference PdbBytes)&gt; GetAssemblyAsync(string assemblyName)` _method_

#### `PackageConfigurationSource`

_public class_

Source: `src/Hosting/Hosting.WebApp/Startup/PackageConfigurationSource.cs`

A JSON configuration source that fetches package configurations from the server via .

Members:

- `PackageConfigurationSource(ModuleClient moduleClient)` _constructor_ — Initializes a new instance of with the provided module client.
- `Task InitAsync()` _method_ — Downloads and caches the package configurations from the server.

#### `RemoteCatalog`

_public class_

Source: `src/Hosting/Hosting.WebApp/Startup/RemoteCatalog.cs`

An that fetches catalog entries and downloads their assemblies from the hosting server.

Members:

- `RemoteCatalog(AssemblyDependencyResolver assemblyDependencyResolver,HttpClient httpClient)` _constructor_ — Initializes a new instance of with the required services.

### `Industria4.Hosting.WebApp.ViewModels`

#### `LicenseViewModel`

_public class_

Source: `src/Hosting/Hosting.WebApp/ViewModels/LicenseViewModel.cs`

View model for the license management page, handling load, activation, and cancellation of licenses.

Members:

- `LicenseViewModel(ILoadingService loadingService,LicenseClient licenseClient,IToaster toaster)` _constructor_ — Initializes a new instance of with the required services.
- `Task Activate()` _method_ — Activates a new license using and shows a toast notification with the result.
- `Task Cancel()` _method_ — Cancels the active license and reverts to trial mode.
- `Task LoadAsync()` _method_ — Loads the current license information from the server.
- `LicenseModel License` _property_ — Gets or sets the current license information retrieved from the server.
- `string LicenseKey` _property_ — Gets or sets the license key entered by the user for activation.

#### `ModulesViewModel`

_public class_

Source: `src/Hosting/Hosting.WebApp/ViewModels/ModulesViewModel.cs`

Members:

- `Task AddPackagesAsync(string[] ids)` _method_
- `Task DeleteAsync()` _method_
- `Task LoadAsync()` _method_
- `Task PackageUploadFailedAsync(string error)` _method_
- `Task PackageUploadStartedAsync()` _method_
- `Task Restart()` _method_
- `Task SetSelectedPackageAsync(PackageViewModel package)` _method_
- `IEnumerable&lt;PackageViewModel&gt; Packages` _property_
- `PackageViewModel SelectedPackage` _property_

#### `PackageModuleViewModel`

_public class_

Source: `src/Hosting/Hosting.WebApp/ViewModels/PackageViewModel.cs`

Members:

- `bool Enabled` _property_
- `string Name` _property_

#### `PackageViewModel`

_public class_

Source: `src/Hosting/Hosting.WebApp/ViewModels/PackageViewModel.cs`

Members:

- `PackageViewModel(PackageRead packageRead,IServiceProvider serviceProvider)` _constructor_
- `Task LoadAsync()` _method_
- `Task SaveAsync()` _method_
- `string Configuration` _property_
- `string Id` _property_
- `IEnumerable&lt;PackageModuleViewModel&gt; Modules` _property_
- `string Name` _property_
- `Version Version` _property_

#### `ThemeContext`

_public class_

Source: `src/Hosting/Hosting.WebApp/ViewModels/ThemeContext.cs`

Tracks the active UI theme and synchronizes it with the browser via JS interop.

Members:

- `ThemeContext(IJSRuntime jsRuntime)` _constructor_ — Initializes a new instance of .
- `void Dispose()` _method_
- `Task LoadAsync()` _method_ — Initializes the theme from browser storage and registers the JS change callback.
- `Task SetCurrentThemeAsync(string name)` _method_ — Updates the current theme and raises a property-changed notification. The theme name to apply.
- `Task ThemeChanged(string name)` _method_ — Called by JavaScript when the user changes the theme. The new theme name.
- `string CurrentTheme` _property_ — Gets the name of the currently active theme.

### `Industria4.Http`

#### `CommandResult`

_public class_

Source: `src/Shared/Http/CommandResult.cs`

Represents the result returned by the server after dispatching a command, including validation results.

Members:

- `Guid CommandId` _property_ — Gets or sets the unique identifier assigned to the dispatched command.
- `string CommandType` _property_ — Gets or sets the fully qualified type name of the command that was dispatched.
- `ValidationResult[] Results` _property_ — Gets or sets the array of validation results returned by the server.

#### `CountResult&lt;T&gt;`

_public class_

Source: `src/Shared/Http/CountResult.cs`

Carries a paged result set together with the total item count before paging. The element type.

Members:

- `CountResult(IReadOnlyList&lt;T&gt; items,int count)` _constructor_ — Initializes a new instance with the given items and total count. The page of items. The total number of matching items before paging.
- `int Count` _property_ — Gets the total count of matching items (before paging).
- `CountResult&lt;T&gt; Empty` _property_ — Gets an empty result with zero items and a count of zero.
- `IReadOnlyList&lt;T&gt; Items` _property_ — Gets the current page of items.

#### `GetRequest&lt;T, TResult&gt;`

_public class_

Source: `src/Shared/Http/GetRequest.cs`

Encapsulates a GET query, pairing a projection factory with an optional total-count request. The source entity type. The projected result type.

Members:

- `Func&lt;IQueryable&lt;T&gt;,IQueryable&lt;TResult&gt;&gt; QueryFactory` _property_ — Gets or sets the function that applies filtering, ordering, and projection to the source queryable.
- `bool WithCount` _property_ — Gets or sets a value indicating whether the total item count should be returned alongside the results.

#### `GetRequest&lt;T&gt;`

_public class_

Source: `src/Shared/Http/GetRequest.cs`

Convenience variant of where the source and result types are the same. The entity type.

Members:

- `GetRequest()` _constructor_ — Initializes a new instance with an identity query factory.

#### `HttpValidationException`

_public class_

Source: `src/Shared/Http/HttpValidationException.cs`

Exception thrown when an HTTP command fails validation, carrying the full .

Members:

- `HttpValidationException(CommandResult result)` _constructor_ — Initializes a new instance from the given `result` with no inner exception. The failed command result.
- `HttpValidationException(CommandResult result,Exception innerException)` _constructor_ — Initializes a new instance from the given `result` and inner exception. The failed command result. The exception that caused this failure, or `null`.
- `CommandResult Result` _property_ — Gets the command result that triggered validation failure.

#### `JsonContent`

_public class_

Source: `src/Shared/Http/RestClient.cs`

Provides an implementation that serialises an object to JSON using the supplied .

Members:

- `JsonContent(object obj,JsonSerializerSettings settings)` _constructor_ — Initialises a new instance by serialising `obj` to JSON. The object to serialise. The JSON serialiser settings to apply.

#### `ODataUriFactory`

_public class_

Source: `src/Shared/Http/ODataUriFactory.cs`

Builds OData query URI strings from LINQ expressions so that queries can be sent to an OData-compliant HTTP endpoint.

Members:

- `string GetRelativeUriForQuery&lt;TEntity,TResult&gt;(Func&lt;IQueryable&lt;TEntity&gt;,IQueryable&lt;TResult&gt;&gt; queryFactory)` _method_ — Returns the relative OData URI for the given LINQ query against `TEntity` returning `TResult` items. The source entity type registered in the OData service. The projected result type. A function that applies LINQ operators to produce the desired OData query. A relative URI string with OData query options.
- `string GetRelativeUriForQuery&lt;TEntity,TResult&gt;(string path,Func&lt;IQueryable&lt;TEntity&gt;,IQueryable&lt;TResult&gt;&gt; queryFactory)` _method_ — Returns the relative OData URI for the given LINQ query, prepending the optional `path` prefix. The source entity type registered in the OData service. The projected result type. An optional URI path prefix to prepend. A function that applies LINQ operators to produce the desired OData query. A relative URI string with OData query options.

#### `RestClient`

_public class_

Source: `src/Shared/Http/RestClient.cs`

HTTP client wrapper that builds OData query strings from LINQ expressions and performs CRUD operations against a REST API.

Members:

- `RestClient(HttpClient client)` _constructor_ — Initialises a new instance wrapping the given . The underlying HTTP client used to send requests.
- `Task DeleteAsync(Uri uri,CancellationToken token = default)` _method_ — Execute a Delete call to REST WS CancellationToken
- `Task DeleteAsync&lt;T&gt;(Uri uri,T entity,CancellationToken token = default)` _method_ — Execute a Delete call to REST WS by Entity as parameter Entity to delete CancellationToken
- `Task&lt;TList&gt; GetAsync&lt;T,TList,TResult&gt;(Uri uri,GetRequest&lt;T,TResult&gt; request,CancellationToken token = default)` _method_ — Get a IReadOnlyList of entity domain class quering by razor component Es. await XXAgent.GetAsync(uri, q =&gt; q.Take(5).Select(r =&gt; new &#123; r.Id &#125;), CancellationToken.None); CancellationToken IReadOnlyList
- `Task&lt;T&gt; GetAsync&lt;T&gt;(Uri uri,CancellationToken token = default)` _method_ — Execute a GET call to REST WS
- `Task&lt;T&gt; PostAsync&lt;T&gt;(Uri uri,T entity,CancellationToken token = default)` _method_ — Execute a Post call to REST WS (Add) CancellationToken
- `Task&lt;TResult&gt; PostAsync&lt;T,TResult&gt;(Uri uri,T entity,CancellationToken token = default)` _method_ — Execute a Post call to REST WS (Add) CancellationToken
- `Task&lt;T&gt; PutAsync&lt;T&gt;(Uri uri,T entity,CancellationToken token = default)` _method_ — Execute a Put call to REST WS (Update) CancellationToken
- `Task&lt;TResult&gt; PutAsync&lt;T,TResult&gt;(Uri uri,T entity,CancellationToken token = default)` _method_ — Execute a Put call to REST WS (Update) CancellationToken
- `HttpClient InnerClient` _property_ — Gets the underlying used to send HTTP requests.
- `JsonSerializerSettings JsonSerializerSettings` _property_ — Gets the JSON serialiser settings used when deserialising response bodies.

### `Industria4.Identity.Cqrs.Commands.AuditLogs`

#### `AddAuditLogCommand`

_public class_

Source: `src/Identity/Identity.Cqrs/Commands/AuditLogs/AddAuditLogCommand.cs`

Command to record a new audit log entry for a user action.

Members:

- `AddAuditLogCommand(string id,string operation,string userId,IPAddress ipAddress,IPAddress serverIpAddress,DateTimeOffset date,MetadataDictionary metadata)` _constructor_ — Initializes a new audit-log command with all required fields. The unique identifier for this audit log entry. The name of the audited operation. The identifier of the acting user. The client IP address. The server IP address. The timestamp of the operation. Optional additional metadata.
- `DateTimeOffset Date` _property_ — Gets the timestamp of the audited operation.
- `IPAddress IpAddress` _property_ — Gets the IP address of the client that initiated the request.
- `MetadataDictionary Metadata` _property_ — Gets optional additional metadata associated with the audited operation.
- `string Operation` _property_ — Gets the name of the operation that was audited (e.g. "User.Login").
- `IPAddress ServerIpAddress` _property_ — Gets the IP address of the server that handled the request.
- `string UserId` _property_ — Gets the identifier of the user who performed the operation.

### `Industria4.Identity.Cqrs.Commands.Roles`

#### `AddOrUpdateRoleCommand`

_public class_

Source: `src/Identity/Identity.Cqrs/Commands/Roles/AddOrUpdateRoleCommand.cs`

Command to create a new role or update an existing one.

Members:

- `AddOrUpdateRoleCommand(string id,string name)` _constructor_ — Initializes a new command for creating or updating a role. The role identifier (new GUID-string for creation, existing ID for updates). The display name of the role.
- `string Name` _property_ — Gets the display name of the role.

#### `DeleteRoleCommand`

_public class_

Source: `src/Identity/Identity.Cqrs/Commands/Roles/DeleteRoleCommand.cs`

Command to permanently delete a role.

Members:

- `DeleteRoleCommand(string id)` _constructor_ — Initializes a new command targeting the role with the given `id`. The identifier of the role to delete.

### `Industria4.Identity.Cqrs.Commands.Users`

#### `AddOrUpdateUserCommand`

_public class_

Source: `src/Identity/Identity.Cqrs/Commands/Users/AddOrUpdateUserCommand.cs`

Command to create a new user account or update an existing one, including roles and claims.

Members:

- `AddOrUpdateUserCommand(string id,string userName,string password,bool hashedPassword,string[] roles,UserClaim[] claims)` _constructor_ — Initializes a new command with the full user data. The user identifier (new GUID-string for creation, existing ID for updates). The login username. The plain-text or hashed password. When `true`, `password` is already hashed. The roles to assign. The claims to assign.
- `UserClaim[] Claims` _property_ — Gets the claims to assign to the user.
- `bool HashedPassword` _property_ — Gets a value indicating whether is already hashed.
- `string Password` _property_ — Gets the plain-text or hashed password. See to distinguish.
- `string[] Roles` _property_ — Gets the role names to assign to the user.
- `string UserName` _property_ — Gets the login username.

#### `DeleteUserCommand`

_public class_

Source: `src/Identity/Identity.Cqrs/Commands/Users/DeleteUserCommand.cs`

Command to permanently delete a user account.

Members:

- `DeleteUserCommand(string id)` _constructor_ — Initializes a new command targeting the user with the given `id`. The identifier of the user to delete.

#### `UserClaim`

_public record_

Source: `src/Identity/Identity.Cqrs/Commands/Users/AddOrUpdateUserCommand.cs`

Represents a single user claim with its type and value.

Members:

- `string Type` _property_ — Record parameter on UserClaim.
- `string Value` _property_ — Record parameter on UserClaim.

### `Industria4.Identity.Cqrs.Handlers`

#### `IdentityHandler`

_internal class_

Source: `src/Identity/Identity.Cqrs.Handlers/IdentityHandler.cs`

Members:

- `Task Handle(AddOrUpdateUserCommand command)` _method_
- `Task Handle(DeleteUserCommand command)` _method_
- `Task Handle(AddAuditLogCommand command)` _method_
- `Task Handle(AddOrUpdateRoleCommand command)` _method_
- `Task Handle(DeleteRoleCommand command)` _method_

### `Industria4.Identity.DomainModel`

#### `AuditLog`

_public class_

Source: `src/Identity/Identity.DomainModel/AuditLog.cs`

Represents a single audit-log entry recording who performed an operation and from where.

Members:

- `AuditLog(string id,DateTimeOffset date,IPAddress ipAddress,IPAddress serverIpAddress,string? userId,string operation)` _constructor_ — Initializes a new audit-log entry with all required tracking data. The unique identifier of this log entry. The point in time the operation occurred. The IP address of the client that performed the operation. The IP address of the server that processed the operation. The identifier of the user who performed the operation, or `null` for anonymous operations. A short label describing the operation performed.
- `DateTimeOffset Date` _property_ — Gets the timestamp at which the operation occurred.
- `string Id` _property_
- `IPAddress IpAddress` _property_ — Gets the IP address of the client.
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary key/value metadata attached to this log entry (lazily initialised).
- `string Operation` _property_ — Gets the short label identifying what operation was performed.
- `IPAddress ServerIpAddress` _property_ — Gets the IP address of the server.
- `string? UserId` _property_ — Gets the identifier of the user who performed the operation, or `null` for anonymous access.

#### `Validation`

_public class_

Source: `src/Identity/Identity.DomainModel/Validation.cs`

Centralises maximum-length constraints for Identity domain-model properties.

### `Industria4.Identity.DomainModel.Events`

#### `BaseUserEvent`

_public class_

Source: `src/Identity/Identity.DomainModel/Events/BaseUserEvent.cs`

Abstract base for all user-related Identity audit events.

Members:

- `BaseUserEvent(string userId,string userName,string name,EventTypes type,int id)` _constructor_ — Initializes a new base user event. The identifier of the affected user. The username of the affected user. The event name. The event type (success / failure / information / error). The numeric event identifier.
- `string UserId` _property_ — Gets the identifier of the affected user.
- `string UserName` _property_ — Gets the username of the affected user.

#### `ChangedRoleEvent`

_public class_

Source: `src/Identity/Identity.DomainModel/Events/ChangedRoleEvent.cs`

Event raised when a role is created or updated.

Members:

- `ChangedRoleEvent(string roleId,string roleName,string userId,string userName)` _constructor_ — Initializes a new changed-role event. The identifier of the role that changed. The name of the role that changed. The identifier of the admin who made the change. The username of the admin who made the change.
- `string RoleId` _property_ — Gets the identifier of the affected role.
- `string RoleName` _property_ — Gets the display name of the affected role.

#### `ChangedUserEvent`

_public class_

Source: `src/Identity/Identity.DomainModel/Events/ChangedUserEvent.cs`

Event raised when a user account is created or updated.

Members:

- `ChangedUserEvent(string userId,string userName,string byUserId)` _constructor_ — Initializes a new changed-user event. The identifier of the affected user. The username of the affected user. The identifier of the admin who made the change.
- `string ByUserId` _property_ — Gets the identifier of the administrator who performed the change.
- `Claim[] Claims` _property_ — Gets or sets the claims currently assigned to the user.
- `string[] Roles` _property_ — Gets or sets the roles currently assigned to the user.

#### `DeletedRoleEvent`

_public class_

Source: `src/Identity/Identity.DomainModel/Events/DeletedRoleEvent.cs`

Event raised when a role is deleted.

Members:

- `DeletedRoleEvent(string roleId,string roleName,string userId,string userName)` _constructor_ — Initializes a new deleted-role event. The identifier of the deleted role. The name of the deleted role. The identifier of the admin who performed the deletion. The username of the admin who performed the deletion.
- `string RoleId` _property_ — Gets the identifier of the deleted role.
- `string RoleName` _property_ — Gets the name of the deleted role.

#### `DeletedUserEvent`

_public class_

Source: `src/Identity/Identity.DomainModel/Events/DeletedUserEvent.cs`

Event raised when a user account is deleted.

Members:

- `DeletedUserEvent(string userId,string userName,string byUserId)` _constructor_ — Initializes a new deleted-user event. The identifier of the deleted user. The username of the deleted user. The identifier of the admin who performed the deletion.
- `string ByUserId` _property_ — Gets the identifier of the administrator who performed the deletion.

#### `UnauthorizedEvent`

_public class_

Source: `src/Identity/Identity.DomainModel/Events/UnauthorizedEvent.cs`

Event raised when an unauthorized access attempt is detected.

Members:

- `UnauthorizedEvent(string userId,string userName)` _constructor_ — Initializes a new unauthorized-access event for the given user. The identifier of the user who attempted unauthorized access. The username of the user who attempted unauthorized access.

### `Industria4.Identity.EntityFramework`

#### `EntitiesHostedServices`

_internal class_

Source: `src/Identity/Identity.EntityFramework/EntitiesHostedServices.cs`

Members:

- `EntitiesHostedServices(ILogger&lt;EntitiesHostedServices&gt; logger,Backup&lt;IdentityContext&gt; backup,IServiceProvider serviceProvider)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `IdentityMapper`

_public class_

Source: `src/Identity/Identity.EntityFramework/IdentityMapper.cs`

Configures and exposes the AutoMapper instance for Identity entity-to-read-model mappings.

Members:

- `IdentityMapper()` _constructor_ — Initializes a new instance of and builds the mapping configuration.
- `IMapper Mapper` _property_ — Gets the configured instance.

#### `ProfileService`

_public class_

Source: `src/Identity/Identity.EntityFramework/ProfileService.cs`

IdentityServer4 profile service that enriches tokens with user roles and claims.

Members:

- `ProfileService(UserManager&lt;User&gt; userManager)` _constructor_ — Initializes a new instance of . The user manager used to retrieve user data.
- `Task GetProfileDataAsync(ProfileDataRequestContext context)` _method_ — Populates the token with the user's claims and roles. The profile data request context.
- `Task IsActiveAsync(IsActiveContext context)` _method_ — Checks whether the subject's user account is active. The is-active context.

### `Industria4.Identity.EntityFramework.DataAccessObject`

#### `IdentityDataAccessObject&lt;TDataModel, TReadModel&gt;`

_internal class_

Source: `src/Identity/Identity.EntityFramework/DataAccessObject/IdentityDataAccessObject.cs`

Members:

- `IdentityDataAccessObject(IdentityContext context,IdentityMapper mapperAccessor)` _constructor_
- `IQueryable&lt;TReadModel&gt; Query` _property_

### `Industria4.Identity.EntityFramework.DataModel`

#### `AuditLog`

_internal class_

Source: `src/Identity/Identity.EntityFramework/DataModel/AuditLog.cs`

Members:

- `DateTimeOffset Date` _property_
- `string Id` _property_
- `IPAddress IpAddress` _property_
- `string Metadata` _property_
- `string Operation` _property_
- `IPAddress ServerIpAddress` _property_
- `string UserId` _property_

#### `IdentityContext`

_internal class_

Source: `src/Identity/Identity.EntityFramework/DataModel/IdentityContext.cs`

Members:

- `IdentityContext(DbContextOptions&lt;IdentityContext&gt; options)` _constructor_
- `void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)` _method_
- `void OnModelCreating(ModelBuilder builder)` _method_
- `DbSet&lt;AuditLog&gt; AuditLogs` _property_

#### `IdentityContextFactory`

_internal class_

Source: `src/Identity/Identity.EntityFramework/DataModel/IdentityContextFactory.cs`

Members:

- `IdentityContext CreateDbContext(string[] args)` _method_

#### `IPAddressConverter`

_public class_

Source: `src/Identity/Identity.EntityFramework/DataModel/IPAddressConverter.cs`

EF Core value converter that persists values as strings.

Members:

- `IPAddressConverter()` _constructor_ — Initializes a new instance of .

#### `Role`

_public class_

Source: `src/Identity/Identity.EntityFramework/DataModel/Role.cs`

Application-level role entity that extends .

#### `User`

_public class_

Source: `src/Identity/Identity.EntityFramework/DataModel/User.cs`

Application-level user entity that extends .

Members:

- `List&lt;IdentityUserClaim&lt;string&gt;&gt; Claims` _property_
- `List&lt;UserRole&gt; Roles` _property_

#### `UserRole`

_internal class_

Source: `src/Identity/Identity.EntityFramework/DataModel/UserRole.cs`

Members:

- `Role Role` _property_

### `Industria4.Identity.EntityFramework.Repositories`

#### `AuditLogRepository`

_internal class_

Source: `src/Identity/Identity.EntityFramework/Repositories/AuditLogRepository.cs`

Members:

- `AuditLogRepository(DataModel.IdentityContext context,ILogger&lt;AuditLogRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;AuditLog&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;AuditLog&gt; entities)` _method_
- `void ToDataModel(AuditLog entity,DataModel.AuditLog dataModel)` _method_
- `AuditLog ToDomainModel(DataModel.AuditLog dataModel)` _method_

### `Industria4.Identity.Http`

#### `HttpIdentityOptions`

_public class_

Source: `src/Identity/Identity.Http/HttpIdentityOptions.cs`

Configuration options for the HTTP Identity client.

Members:

- `Uri Identity` _property_ — Gets or sets the base URI of the Identity service. Defaults to `http://localhost:8004`.

#### `RoleClient`

_public class_

Source: `src/Identity/Identity.Http/RoleClient.cs`

HTTP client for querying and managing roles via the Identity REST API.

Members:

- `RoleClient(RestClient restClient,IOptions&lt;HttpIdentityOptions&gt; options)` _constructor_ — Initializes a new using the provided REST client and configuration. The underlying REST client. The HTTP Identity options containing the service base URI.
- `Task AddOrUpdateAsync(AddOrUpdateRoleCommand command,CancellationToken token = default)` _method_ — Creates or updates a role using the provided command. The command carrying the role data. Cancellation token.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the role with the specified identifier. The role identifier. Cancellation token.

#### `UserClient`

_public class_

Source: `src/Identity/Identity.Http/UserClient.cs`

HTTP client for querying and managing users via the Identity REST API.

Members:

- `UserClient(RestClient restClient,IOptions&lt;HttpIdentityOptions&gt; options)` _constructor_ — Initializes a new using the provided REST client and configuration. The underlying REST client. The HTTP Identity options containing the service base URI.
- `Task AddOrUpdateAsync(AddOrUpdateUserCommand command,CancellationToken token = default)` _method_ — Creates or updates a user using the provided command. The command carrying the user data. Cancellation token.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the user with the specified identifier. The user identifier. Cancellation token.
- `Task&lt;FullUserRead&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Retrieves the full details (including roles and claims) for a single user. The user identifier. Cancellation token. A or `null` if not found.

### `Industria4.Identity.ReadModel`

#### `AuditLogRead`

_public class_

Source: `src/Identity/Identity.ReadModel/AuditLogRead.cs`

Read model representing an audit-log entry as returned by the Identity query stack.

Members:

- `DateTimeOffset Date` _property_ — Gets or sets the timestamp of the operation.
- `string Id` _property_ — Gets or sets the unique audit-log entry identifier.
- `IPAddress IpAddress` _property_ — Gets or sets the client IP address.
- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets the deserialized metadata dictionary.
- `string MetadataJson` _property_ — Gets or sets the raw JSON string of the metadata (not serialized to API responses).
- `string Operation` _property_ — Gets or sets the label identifying the operation that was performed.
- `IPAddress ServerIpAddress` _property_ — Gets or sets the server IP address that handled the request.
- `string UserId` _property_ — Gets or sets the identifier of the user who performed the operation.

#### `FullUserRead`

_public class_

Source: `src/Identity/Identity.ReadModel/FullUserRead.cs`

Extended user read model that includes the user's roles and claims.

Members:

- `KeyValuePair&lt;string,string&gt;[] Claims` _property_ — Gets or sets the claims assigned to this user as type/value pairs.
- `string[] Roles` _property_ — Gets or sets the names of the roles assigned to this user.

#### `RoleRead`

_public class_

Source: `src/Identity/Identity.ReadModel/RoleRead.cs`

Read model representing an authorization role.

Members:

- `string Id` _property_ — Gets or sets the unique role identifier.
- `string Name` _property_ — Gets or sets the display name of the role.

#### `UserRead`

_public class_

Source: `src/Identity/Identity.ReadModel/UserRead.cs`

Read model representing a user account as returned by the Identity query stack.

Members:

- `int AccessFailedCount` _property_ — Gets or sets the number of consecutive failed access attempts.
- `string Email` _property_ — Gets or sets the user's email address.
- `bool EmailConfirmed` _property_ — Gets or sets a value indicating whether the email address has been confirmed.
- `string Id` _property_ — Gets or sets the unique user identifier.
- `bool LockoutEnabled` _property_ — Gets or sets a value indicating whether account lockout is enabled for this user.
- `DateTimeOffset? LockoutEnd` _property_ — Gets or sets the date and time when the lockout ends, or `null` if the account is not locked.
- `string PasswordHash` _property_ — Gets or sets the hashed password. `null` for external login-only accounts.
- `string PhoneNumber` _property_ — Gets or sets the user's phone number.
- `bool PhoneNumberConfirmed` _property_ — Gets or sets a value indicating whether the phone number has been confirmed.
- `bool TwoFactorEnabled` _property_ — Gets or sets a value indicating whether two-factor authentication is enabled for the user.
- `string UserName` _property_ — Gets or sets the login username.

### `Industria4.Identity.WebApi`

#### `ApiIdentityClientOptions`

_public class_

Source: `src/Identity/Identity.WebApi/ApiIdentityOptions.cs`

Configuration options for a machine-to-machine (client credentials) client.

Members:

- `string ClientId` _property_ — Gets or sets the client identifier.
- `string ClientSecret` _property_ — Gets or sets the client secret.
- `string[] Roles` _property_ — Gets or sets the roles assigned to this client's access token.
- `string[] Scopes` _property_ — Gets or sets the allowed API scopes for this client.

#### `ApiIdentityOptions`

_public class_

Source: `src/Identity/Identity.WebApi/ApiIdentityOptions.cs`

Configuration options for the Identity Web API, including virtual keyboard, users, clients, and origin settings.

Members:

- `string DefaultUser` _property_ — Gets or sets the username of the default (auto-login) user.
- `string PublicOrigin` _property_ — Gets or sets the public origin URL used by IdentityServer4 for link generation.
- `bool VirtualKeyboard` _property_ — Gets or sets a value indicating whether the virtual keyboard is displayed on the login page.

#### `ApiUserOptions`

_public class_

Source: `src/Identity/Identity.WebApi/ApiIdentityOptions.cs`

Configuration options for a pre-seeded application user.

Members:

- `string Password` _property_ — Gets or sets the user's password.
- `string Username` _property_ — Gets or sets the username.

#### `Config`

_public class_

Source: `src/Identity/Identity.WebApi/Config.cs`

Static configuration factory for IdentityServer4 resources and clients.

Members:

- `IEnumerable&lt;Client&gt; GetClients(IConfiguration configuration,ApiIdentityOptions options)` _method_ — Builds the list of IdentityServer4 clients from configuration and options. The application configuration. The identity API options containing additional client definitions. An enumerable of configured instances.
- `IEnumerable&lt;ApiResource&gt; Apis` _property_ — Gets the registered API resources.
- `IEnumerable&lt;IdentityResource&gt; Ids` _property_ — Gets the supported identity resources (OpenID and profile).

#### `Program`

_public class_

Source: `src/Identity/Identity.WebApi/Program.cs`

Application entry point and host builder for the Identity Web API.

Members:

- `IHostBuilder CreateBuilder(params string[] args)` _method_ — Creates and configures the generic host builder. Command-line arguments. The configured .
- `void Main(string[] args)` _method_ — Starts the application. Command-line arguments.

#### `Startup`

_public class_

Source: `src/Identity/Identity.WebApi/Startup.cs`

Configures services and the HTTP request pipeline for the Identity Web API.

Members:

- `Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)` _constructor_ — Initializes a new instance of . The application configuration. The hosting environment.
- `void Configure(IApplicationBuilder app)` _method_ — Configures the HTTP request pipeline. The application builder.
- `void ConfigureServices(IServiceCollection services)` _method_ — Registers application services with the dependency injection container. The service collection.
- `IConfiguration Configuration` _property_ — Gets the application configuration.
- `IHostEnvironment HostingEnvironment` _property_ — Gets the hosting environment.

#### `WebApiMapperAccessor`

_public class_

Source: `src/Identity/Identity.WebApi/WebApiMapperAccessor.cs`

Provides access to the AutoMapper instance configured for the Identity Web API.

Members:

- `WebApiMapperAccessor()` _constructor_ — Initializes a new instance of .
- `IMapper Mapper` _property_ — Gets the AutoMapper instance.

### `Industria4.Identity.WebApi.Components`

#### `ApiIdentityHostedService`

_public class_

Source: `src/Identity/Identity.WebApi/Components/ApiIdentityHostedService.cs`

Hosted service that seeds identity roles and users from configuration on application startup.

Members:

- `ApiIdentityHostedService(IServiceProvider serviceProvider)` _constructor_ — Initializes a new instance of . The application service provider used to resolve scoped services.
- `Task StartAsync(CancellationToken cancellationToken)` _method_ — Seeds configured roles and users into the identity store. A token to observe for cancellation.
- `Task StopAsync(CancellationToken cancellationToken)` _method_ — No-op; this service performs all work during startup. A token to observe for cancellation. A completed task.

#### `AuditLogEventSink`

_public class_

Source: `src/Identity/Identity.WebApi/Components/AuditLogEventSink.cs`

IdentityServer4 event sink that persists authentication events as audit log entries.

Members:

- `AuditLogEventSink(IRepository&lt;AuditLog&gt; repository)` _constructor_ — Initializes a new instance of . The audit log repository used to persist events.
- `Task PersistAsync(Event evt)` _method_ — Persists an IdentityServer4 event as an audit log entry. The IdentityServer4 event to record.

#### `SecurityHeadersAttribute`

_public class_

Source: `src/Identity/Identity.WebApi/Components/SecurityHeadersAttribute.cs`

Action filter that adds security-related HTTP response headers to MVC view results.

Members:

- `void OnResultExecuting(ResultExecutingContext context)` _method_ — Adds security headers (CSP, X-Frame-Options, etc.) before the action result is executed. The result-executing context.

#### `UserPasswordHasher`

_public class_

Source: `src/Identity/Identity.WebApi/Components/UserPasswordHasher.cs`

Custom password hasher that salts the password with the user identifier before hashing.

Members:

- `string HashPassword(User user,string password)` _method_ — Hashes the password salted with the user's identifier. The user whose identifier is used as a salt. The plain-text password to hash. The hashed password string.
- `PasswordVerificationResult VerifyHashedPassword(User user,string hashedPassword,string providedPassword)` _method_ — Verifies a provided password against the stored hash, using the user identifier as a salt. The user whose identifier is used as a salt. The stored hashed password. The plain-text password to verify. A indicating the outcome.

### `Industria4.Identity.WebApi.Controllers`

#### `AccountController`

_public class_

Source: `src/Identity/Identity.WebApi/Controllers/AccountController.cs`

MVC controller that handles account login and logout flows for IdentityServer4.

Members:

- `IActionResult AccessDenied()` _method_ — Displays the access-denied page. The access-denied view.
- `Task&lt;IActionResult&gt; Login(string returnUrl)` _method_ — Entry point into the login workflow
- `Task&lt;IActionResult&gt; Login(LoginInputModel model,string button)` _method_ — Handle postback from username/password login
- `Task&lt;IActionResult&gt; Logout(string logoutId)` _method_ — Show logout page
- `Task&lt;IActionResult&gt; Logout(LogoutInputModel model)` _method_ — Handle logout page postback

#### `AuditlogController`

_public class_

Source: `src/Identity/Identity.WebApi/Controllers/AuditlogController.cs`

API controller exposing read-only OData-queryable audit log entries.

#### `HomeController`

_public class_

Source: `src/Identity/Identity.WebApi/Controllers/HomeController.cs`

Default MVC controller handling the home page and error display.

Members:

- `HomeController(IIdentityServerInteractionService interaction,IWebHostEnvironment environment,ILogger&lt;HomeController&gt; logger)` _constructor_ — Initializes a new instance of . The IdentityServer4 interaction service. The web hosting environment. The logger instance.
- `Task&lt;IActionResult&gt; Error(string errorId)` _method_ — Displays the error page with details from IdentityServer4. The IdentityServer4 error identifier. The error view model.
- `IActionResult Index()` _method_ — Displays the home page. The default view.

#### `RoleController`

_public class_

Source: `src/Identity/Identity.WebApi/Controllers/RoleController.cs`

API controller exposing read-only OData-queryable roles.

#### `UserController`

_public class_

Source: `src/Identity/Identity.WebApi/Controllers/UserController.cs`

API controller exposing read-only OData-queryable users and single-user lookup.

### `Industria4.Identity.WebApi.Hosting`

#### `StartupService`

_public class_

Source: `src/Identity/Identity.WebApi.Hosting/StartupService.cs`

Startup service that registers the Identity Web API module with the hosting catalog.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_ — Registers the with the DI container. The application configuration. The service collection.

#### `WebApiModule`

_public class_

Source: `src/Identity/Identity.WebApi.Hosting/WebApiModule.cs`

Process module that manages the Identity Web API executable as a hosted sub-process.

Members:

- `WebApiModule(ILogger&lt;WebApiModule&gt; logger,IConfiguration configuration)` _constructor_ — Initializes a new instance of . The logger instance. The application configuration.
- `IDictionary&lt;string,string&gt; Environment` _property_
- `string Name` _property_
- `string ProcessNameExe` _property_
- `string WorkingDir` _property_

### `Industria4.Identity.WebApi.Models.Account`

#### `AccountOptions`

_public class_

Source: `src/Identity/Identity.WebApi/Models/Account/AccountOptions.cs`

Static configuration options governing the login and logout behaviour of the account controller.

#### `LoggedOutViewModel`

_public class_

Source: `src/Identity/Identity.WebApi/Models/Account/LoggedOutViewModel.cs`

View model for the logged-out page.

Members:

- `bool AutomaticRedirectAfterSignOut` _property_ — Gets or sets a value indicating whether to redirect automatically after sign-out.
- `string ClientName` _property_ — Gets or sets the display name of the client application.
- `string ExternalAuthenticationScheme` _property_ — Gets or sets the external authentication scheme to sign out of, if applicable.
- `string LogoutId` _property_ — Gets or sets the logout session identifier.
- `string PostLogoutRedirectUri` _property_ — Gets or sets the URI the client wishes to redirect to after logout.
- `string SignOutIframeUrl` _property_ — Gets or sets the URL of the sign-out iframe used for front-channel logout.
- `bool TriggerExternalSignout` _property_ — Gets a value indicating whether an external sign-out should be triggered.

#### `LoginInputModel`

_public class_

Source: `src/Identity/Identity.WebApi/Models/Account/LoginInputModel.cs`

Input model for the login form.

Members:

- `string Password` _property_ — Gets or sets the password.
- `bool RememberLogin` _property_ — Gets or sets a value indicating whether a persistent cookie should be issued.
- `string ReturnUrl` _property_ — Gets or sets the URL to redirect to after a successful login.
- `string Username` _property_ — Gets or sets the username.

#### `LoginViewModel`

_public class_

Source: `src/Identity/Identity.WebApi/Models/Account/LoginViewModel.cs`

View model for the login page, extending the input model with display options.

Members:

- `bool AllowRememberLogin` _property_ — Gets or sets a value indicating whether the "remember me" option is displayed.
- `string DefaultUsername` _property_ — Gets or sets the pre-filled default username shown on the login page.
- `bool EnableLocalLogin` _property_ — Gets or sets a value indicating whether the local login form is displayed.

#### `LogoutInputModel`

_public class_

Source: `src/Identity/Identity.WebApi/Models/Account/LogoutInputModel.cs`

Input model for the logout request.

Members:

- `string LogoutId` _property_ — Gets or sets the logout session identifier issued by IdentityServer4.

#### `LogoutViewModel`

_public class_

Source: `src/Identity/Identity.WebApi/Models/Account/LogoutViewModel.cs`

View model for the logout confirmation page.

Members:

- `bool ShowLogoutPrompt` _property_ — Gets or sets a value indicating whether the logout confirmation prompt should be shown.

### `Industria4.Identity.WebApi.Models.Home`

#### `ErrorViewModel`

_public class_

Source: `src/Identity/Identity.WebApi/Models/Home/ErrorViewModel.cs`

View model for the error page.

Members:

- `ErrorViewModel()` _constructor_ — Initializes a new instance of .
- `ErrorViewModel(string error)` _constructor_ — Initializes a new instance of with a plain error string. The error message.
- `ErrorMessage Error` _property_ — Gets or sets the IdentityServer4 error message details.

### `Industria4.Identity.WebApp`

#### `ArrayAccountClaimsPrincipalFactory`

_internal class_

Source: `src/Identity/Identity.WebApp/ArrayAccountClaimsPrincipalFactory.cs`

Members:

- `ArrayAccountClaimsPrincipalFactory(IAccessTokenProviderAccessor accessor)` _constructor_
- `ValueTask&lt;ClaimsPrincipal&gt; CreateUserAsync(RemoteUserAccount account,RemoteAuthenticationUserOptions options)` _method_

#### `IdentityAuthorizationMessageHandler`

_public class_

Source: `src/Identity/Identity.WebApp/IdentityAuthorizationMessageHandler.cs`

Delegating HTTP handler that attaches a bearer access token to outgoing requests.

Members:

- `Task&lt;HttpResponseMessage&gt; SendAsync(HttpRequestMessage request,CancellationToken cancellationToken)` _method_ — Attaches the bearer token to the request before forwarding it to the inner handler. The outgoing HTTP request message. A token to observe for cancellation. The HTTP response message from the inner handler.

#### `ILogoutHandler`

_public interface_

Source: `src/Identity/Identity.WebApp/ILogoutHandler.cs`

Defines a handler that evaluates whether a logout action should proceed.

#### `StartupService`

_public class_

Source: `src/Identity/Identity.WebApp/StartupService.cs`

Startup service that configures Identity authentication and registers WebApp services for the Blazor client.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_ — Registers Identity WebApp services with the dependency injection container. The application configuration. The service collection.

#### `WebIdentityOptions`

_public class_

Source: `src/Identity/Identity.WebApp/WebIdentityOptions.cs`

Configuration options for the Identity Blazor WebApp, such as the OIDC provider URI and scopes.

Members:

- `string ClientId` _property_ — Gets or sets the OIDC client identifier. Defaults to `"hosting"`.
- `PolicyOptions Policies` _property_ — Gets the policy options for authorization.
- `List&lt;string&gt; Scopes` _property_ — Gets or sets the OIDC scopes to request.
- `string Uri` _property_ — Gets or sets the authority URI of the Identity Web API (IdentityServer4 endpoint).

### `Industria4.Identity.WebApp.Modules`

#### `IdentityModule`

_public class_

Source: `src/Identity/Identity.WebApp/Modules/IdentityModule.cs`

Client module that populates the navigation menu with Identity-related entries based on the current user's authorization.

Members:

- `Task LoadAsync(CancellationToken cancellationToken)` _method_ — Loads the module by populating the navigation menu according to the user's current authorization state. A token to observe for cancellation.
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_ — Unloads the module. No cleanup is required. A token to observe for cancellation.
- `string Name` _property_ — Gets the display name of this module.

### `Industria4.Identity.WebApp.Routing`

#### `IdentityDynamicRouteBuilderProvider`

_public class_

Source: `src/Identity/Identity.WebApp/Routing/IdentityDynamicRouteBuilderProvider.cs`

Provides the set of Blazor component types that should be registered as dynamic routes for the Identity module.

Members:

- `IEnumerable&lt;Type&gt; GetTypes()` _method_ — Returns the Identity view component types to register as dynamic routes. A collection of instances for each route component.

#### `IdentitySectionsProvider`

_internal class_

Source: `src/Identity/Identity.WebApp/Routing/IdentitySectionsProvider.cs`

Members:

- `IEnumerable&lt;SectionItem&gt; GetItems()` _method_

### `Industria4.Identity.WebApp.ViewModels.Roles`

#### `RolesLoadingDataEventArgs`

_public class_

Source: `src/Identity/Identity.WebApp/ViewModels/Roles/RolesViewModel.cs`

Event arguments raised by , allowing callers to further refine the role query.

Members:

- `RolesLoadingDataEventArgs(IQueryable&lt;RoleRead&gt; query)` _constructor_ — Initializes a new instance of . The initial role query.
- `IQueryable&lt;RoleRead&gt; Query` _property_ — Gets or sets the queryable role data source that can be further filtered or sorted.

#### `RolesViewModel`

_public class_

Source: `src/Identity/Identity.WebApp/ViewModels/Roles/RolesViewModel.cs`

View model for the roles list view, providing grid data, search, and role management operations.

Members:

- `event EventHandler&lt;RolesLoadingDataEventArgs&gt; Loading` _event_ — Raised before role data is loaded, allowing callers to modify the query.
- `Task DeleteRoleAsync(RoleRead role)` _method_ — Deletes the specified role after prompting for confirmation. The role to delete.
- `Task NewRoleAsync(string name)` _method_ — Creates a new role with the given name and refreshes the grid. The name of the new role.
- `Task RefreshAsync()` _method_ — Triggers a grid refresh by invoking .
- `Func&lt;Task&gt; RefreshImplementation` _property_

### `Industria4.Identity.WebApp.ViewModels.Users`

#### `RoleViewModel`

_public class_

Source: `src/Identity/Identity.WebApp/ViewModels/Users/UserViewModel.cs`

Represents a single role assignment row in the user edit form.

Members:

- `string Name` _property_ — Gets or sets the role name.

#### `UsersLoadingDataEventArgs`

_public class_

Source: `src/Identity/Identity.WebApp/ViewModels/Users/UsersViewModel.cs`

Event arguments raised by , allowing callers to further refine the user query.

Members:

- `UsersLoadingDataEventArgs(IQueryable&lt;UserRead&gt; query)` _constructor_ — Initializes a new instance of . The initial user query.
- `IQueryable&lt;UserRead&gt; Query` _property_ — Gets or sets the queryable user data source that can be further filtered or sorted.

#### `UsersViewModel`

_public class_

Source: `src/Identity/Identity.WebApp/ViewModels/Users/UsersViewModel.cs`

View model for the users list view, providing grid data, search, and navigation operations.

Members:

- `event EventHandler&lt;UsersLoadingDataEventArgs&gt; Loading` _event_ — Raised before user data is loaded, allowing callers to modify the query.
- `Task NewUserAsync()` _method_ — Navigates to the new-user creation page.
- `Task RefreshAsync()` _method_ — Triggers a grid refresh by invoking .
- `void SelectUser(UserRead user)` _method_ — Selects a user and navigates to edit view
- `Func&lt;Task&gt; RefreshImplementation` _property_

#### `UserViewModel`

_public class_

Source: `src/Identity/Identity.WebApp/ViewModels/Users/UserViewModel.cs`

View model for the user create/edit form, managing user data, roles, and persistence operations.

Members:

- `UserViewModel(IServiceProvider serviceProvider)` _constructor_ — Initializes a new instance of . The DI service provider used to resolve dependencies on demand.
- `void AddRole()` _method_ — Adds a new, empty role assignment slot to the user's role list.
- `Task DeleteAsync()` _method_ — Prompts for confirmation and then deletes the current user.
- `Task LoadAsync(string id)` _method_ — Loads user data and available roles for the given user identifier. The user identifier, or / empty to initialise a new user.
- `void RaisePropertyChanged(string propertyName = null)` _method_ — Marks the view model as dirty whenever any bindable property changes, so the UI can reflect unsaved state.
- `void RemoveRole(RoleViewModel role)` _method_ — Removes the specified role from the user's role list. The role view model to remove.
- `Task SaveAsync()` _method_ — Persists the user to the server, then navigates or reloads accordingly.
- `ObservableCollection&lt;string&gt; AvailableRoles` _property_ — Gets the collection of all available role names that can be assigned to this user.
- `bool HasChanges` _property_ — Gets or sets a value indicating whether any property of the view model has changed since the last save.
- `bool IsNew` _property_ — Gets or sets a value indicating whether this is a new (unsaved) user.
- `ObservableCollection&lt;RoleViewModel&gt; Roles` _property_ — Gets the collection of role assignments for this user.

### `Industria4.Identity.WebApp.Views.Roles`

#### `Roles`

_public class_

Source: `src/Identity/Identity.WebApp/Views/Roles/Roles.razor.cs`

Code-behind for the Roles management page, binding the grid and new-role dialog to .

Members:

- `void OnInitialized()` _method_
- `RolesViewModel PublicViewModel` _property_ — Gets the typed view model for this component, exposed so parent components can access it without casting.

### `Industria4.Identity.WebApp.Views.Users`

#### `Users`

_public class_

Source: `src/Identity/Identity.WebApp/Views/Users/Users.razor.cs`

Code-behind for the Users management page, binding the grid and search controls to .

Members:

- `void OnInitialized()` _method_
- `UsersViewModel PublicViewModel` _property_ — Gets the typed view model for this component, exposed so parent components can access it without casting.

### `Industria4.Linq`

#### `QueryableExtensions`

_public class_

Source: `src/Shared/Linq/Languages/QueryableExtensions.cs`

Extension methods for that scope query evaluation to a specific .

Members:

- `IQueryable&lt;T&gt; WithDefaultLanguage&lt;T&gt;(this IQueryable&lt;T&gt; queryable)` _method_ — Filters the query applying the default language to the language translator
- `IQueryable&lt;T&gt; WithLanguage&lt;T&gt;(this IQueryable&lt;T&gt; queryable,CultureInfo culture)` _method_ — Filters the query applying the specified language to the language translator

#### `TranslatorExtensions`

_public class_

Source: `src/Shared/Linq/Translators/TranslatorExtensions.cs`

Extension methods for attaching expression translators to sources.

Members:

- `IQueryable&lt;T&gt; AddTranslators&lt;T&gt;(this IQueryable&lt;T&gt; source,IExpressionTranslatorProvider expressionTranslatorProvider)` _method_ — Add a provider that can transform part of an expression before it is evaluated
- `IQueryable&lt;T&gt; AddTranslators&lt;T&gt;(this IQueryable&lt;T&gt; source,Action&lt;DefaultExpressionTranslatorProvider&lt;T&gt;&gt; providers)` _method_ — Add a provider that can transform part of an expression before it is evaluated Action for configuring multiple translators
- `IQueryable&lt;T&gt; CastQueryable&lt;T&gt;(this IQueryable&lt;T&gt; source)` _method_ — Allows casting query expressions to a base type and, during evaluation, replaces base-type references with the original type.

### `Industria4.Linq.EntityFramework`

#### `ContainsTranslator`

_public class_

Source: `src/Shared/Linq.EntityFramework/ContainsTranslator.cs`

Translates a LINQ `string.Contains` call into an EF Core `LIKE '%value%'` expression for database execution.

Members:

- `bool SupportExpression(Expression expression)` _method_
- `void TranslateExpression(TranslationContext context)` _method_

#### `DictionaryExpressionTranslator`

_internal class_

Source: `src/Shared/Linq.EntityFramework/DictionaryExpressionTranslator.cs`

Members:

- `DictionaryExpressionTranslator(MethodInfo jsonValueMethod,Type entityType,MemberInfo memberInfo,LambdaExpression realLambdaLambda)` _constructor_ — Initializes a new instance of .
- `DictionaryExpressionTranslator(MethodInfo jsonValueMethod,LambdaExpression fakeLambda,LambdaExpression realLambdaLambda)` _constructor_ — Initializes a new instance of .
- `bool SupportExpression(Expression expression)` _method_ — support expression.
- `void TranslateExpression(TranslationContext context)` _method_ — translate expression.
- `Type EntityType` _property_ — Gets entity type.
- `MethodInfo JsonValueMethod` _property_ — Gets json value method.
- `MemberInfo MemberInfo` _property_ — Gets member info.
- `LambdaExpression RealLambdaExpression` _property_ — Gets real lambda expression.

#### `JsonFunctions`

_public class_

Source: `src/Shared/Linq.EntityFramework/JsonFunctions.cs`

Holds references to database-provider JSON value functions used by expression translators.

#### `LanguageDictionaryExpressionTranslator`

_internal class_

Source: `src/Shared/Linq.EntityFramework/LanguageDictionaryExpressionTranslator.cs`

Members:

- `LanguageDictionaryExpressionTranslator(MethodInfo jsonValueMethod)` _constructor_ — Initializes a new instance of .
- `bool SupportExpression(Expression expression)` _method_ — support expression.
- `void TranslateExpression(TranslationContext context)` _method_ — translate expression.

#### `LanguageFunctions`

_public class_

Source: `src/Shared/Linq.EntityFramework/LanguageFunctions.cs`

Functions for query language

Members:

- `string Current(string jsonValue,string defaultValue)` _method_ — Gets the current language from the json value It looks for CurrentUICulture, falls back to generic CurrentUICulture and tries with default culture

### `Industria4.Linq.Languages`

#### `LanguageQueryable&lt;T&gt;`

_internal class_

Source: `src/Shared/Linq/Languages/LanguageQueryable.cs`

Members:

- `LanguageQueryable(Expression expression,IQueryProvider originalQueryProvider,CultureInfo culture)` _constructor_
- `IQueryable CreateQuery(Expression expression)` _method_
- `IQueryable&lt;TElement&gt; CreateQuery&lt;TElement&gt;(Expression expression)` _method_
- `object Execute(Expression expression)` _method_
- `TResult Execute&lt;TResult&gt;(Expression expression)` _method_
- `TResult ExecuteAsync&lt;TResult&gt;(Expression expression,CancellationToken cancellationToken)` _method_
- `IEnumerator&lt;T&gt; GetEnumerator()` _method_
- `Type ElementType` _property_
- `Expression Expression` _property_
- `IQueryProvider Provider` _property_

### `Industria4.Linq.Translators`

#### `CastTranslator`

_internal class_

Source: `src/Shared/Linq/Translators/CastTranslator.cs`

Members:

- `CastTranslator(Type originalType,Type newType)` _constructor_
- `bool SupportExpression(Expression expression)` _method_
- `void TranslateExpression(TranslationContext context)` _method_
- `Type NewType` _property_
- `Type OriginalType` _property_

#### `DefaultExpressionTranslatorProvider`

_public class_

Source: `src/Shared/Linq/Translators/DefaultExpressionTranslatorProvider.cs`

A default backed by a mutable list of translators.

Members:

- `IEnumerable&lt;IExpressionTranslator&gt; GetExpressionTranslators()` _method_
- `List&lt;IExpressionTranslator&gt; Translators` _property_ — Gets the list of registered expression translators.

#### `DefaultExpressionTranslatorProvider&lt;T&gt;`

_public class_

Source: `src/Shared/Linq/Translators/DefaultExpressionTranslatorProvider.cs`

A typed variant of for a specific element type `T`. The element type whose query expressions are translated.

Members:

- `DefaultExpressionTranslatorProvider()` _constructor_ — Initialises a new empty provider.
- `DefaultExpressionTranslatorProvider(DefaultExpressionTranslatorProvider translatorProvider)` _constructor_ — Initialises a new provider sharing the translator list of an existing provider. The provider whose translator list is reused.

#### `IExpressionTranslator`

_public interface_

Source: `src/Shared/Linq/Translators/IExpressionTranslator.cs`

Defines a translator that can rewrite a specific kind of expression before it is evaluated.

#### `IExpressionTranslatorProvider`

_public interface_

Source: `src/Shared/Linq/Translators/IExpressionTranslatorProvider.cs`

Provides a collection of instances used to rewrite query expressions.

#### `ITranslatorQueryable`

_internal interface_

Source: `src/Shared/Linq/Translators/TranslatorQueryable.cs`

#### `TranslationContext`

_public class_

Source: `src/Shared/Linq/Translators/TranslationContext.cs`

Carries the state for a single expression translation step, including the root expression, the current sub-expression being translated, and a callback to recursively apply translators.

Members:

- `TranslationContext(Expression rootExpression,Expression expression,IExpressionTranslatorProvider provider,Func&lt;Expression,Expression&gt; applyFunc)` _constructor_
- `Expression Apply&lt;T&gt;(T expression)` _method_ — Recursively applies all registered translators to `expression` and returns the rewritten result. The concrete expression type. The expression to rewrite. The rewritten expression.
- `Expression Expression` _property_ — Gets or sets the current expression being translated; translators set this to the rewritten result.
- `IExpressionTranslatorProvider Provider` _property_ — Gets the provider that owns the registered translators.
- `Expression RootExpression` _property_ — Gets the root expression of the translation tree.

#### `TranslatorQueryable&lt;T&gt;`

_internal class_

Source: `src/Shared/Linq/Translators/TranslatorQueryable.cs`

Members:

- `TranslatorQueryable(Expression expression,IExpressionTranslatorProvider translatorProvider,IQueryProvider originalQueryProvider)` _constructor_
- `TranslatorQueryable(Expression expression,IExpressionTranslatorProvider translatorProvider,TranslatorQueryable&lt;T&gt; original)` _constructor_
- `IQueryable CreateQuery(Expression expression)` _method_
- `IQueryable&lt;TElement&gt; CreateQuery&lt;TElement&gt;(Expression expression)` _method_
- `object Execute(Expression expression)` _method_
- `TResult Execute&lt;TResult&gt;(Expression expression)` _method_
- `TResult ExecuteAsync&lt;TResult&gt;(Expression expression,CancellationToken cancellationToken)` _method_
- `IEnumerator&lt;T&gt; GetEnumerator()` _method_
- `Type ElementType` _property_
- `Expression Expression` _property_
- `IQueryProvider Provider` _property_
- `IExpressionTranslatorProvider TranslatorProvider` _property_

#### `TranslatorsExtensions`

_public class_

Source: `src/Shared/Linq.EntityFramework/TranslatorsExtensions.cs`

Extensions to

Members:

- `DefaultExpressionTranslatorProvider&lt;T&gt; AddContainsToLike&lt;T&gt;(this DefaultExpressionTranslatorProvider&lt;T&gt; provider)` _method_ — Convert Contains calls to like
- `DefaultExpressionTranslatorProvider&lt;T&gt; AddJsonDictionary&lt;T&gt;(this DefaultExpressionTranslatorProvider&lt;T&gt; provider,MethodInfo jsonValueMethod)` _method_ — Adds support for filtering properties of type Dictionary but serialized as json
- `DefaultExpressionTranslatorProvider&lt;T&gt; AddJsonDictionary&lt;T&gt;(this DefaultExpressionTranslatorProvider&lt;T&gt; provider,MethodInfo jsonValueMethod,Expression&lt;Func&lt;T,IDictionary&lt;string,object&gt;&gt;&gt; fromMember,Expression&lt;Func&lt;T,string&gt;&gt; toMember)` _method_ — Adds support for filtering properties of type Dictionary but serialized as json
- `DefaultExpressionTranslatorProvider&lt;T&gt; AddLanguageDictionary&lt;T&gt;(this DefaultExpressionTranslatorProvider&lt;T&gt; provider,MethodInfo jsonValueMethod)` _method_ — Adds support to LanguageFunctions in order to enrich query before its evaluation

### `Industria4.LiteDB.DataAccessObject`

#### `DataAccessObject&lt;TReadModel, TDatabase&gt;`

_public class_

Source: `src/Shared/LiteDB/DataAccessObject/DataAccessObject.cs`

Base object for querying model using

Members:

- `DataAccessObject(TDatabase context)` _constructor_ — Initialises a new instance with the given LiteDB database. The `TDatabase` to use for queries.
- `IEnumerator&lt;TReadModel&gt; GetEnumerator()` _method_
- `LiteCollection&lt;TReadModel&gt; Collection` _property_ — Gets the collection
- `TDatabase Database` _property_ — Gets the current
- `IQueryable&lt;TReadModel&gt; Query` _property_ — Gets a instance for current model

### `Industria4.LiteDB.Repository`

#### `DbMultiAutoMapperRepository&lt;TEntity, TDataModel, TDatabase&gt;`

_public class_

Source: `src/Shared/LiteDB/Repository/DbMultiAutoMapperRepository.cs`

Base repository implementation based on dedicated to a specific type

Members:

- `DbMultiAutoMapperRepository(TDatabase database,IMapper mapper)` _constructor_ — Initialises a new instance with the given LiteDB database and AutoMapper instance. The `TDatabase` to use for persistence operations. The AutoMapper instance that maps between `TEntity` and `TDataModel`.
- `TDataModel ToDataModel(TEntity entity)` _method_
- `TEntity ToDomainModel(TDataModel dataModel)` _method_
- `IMapper Mapper` _property_ — Gets the AutoMapper instance used to convert between entity and data-model types.

#### `DbMultiMapRepository&lt;TEntity, TDataModel, TDatabase&gt;`

_public class_

Source: `src/Shared/LiteDB/Repository/DbMultiMapRepository.cs`

Base repository implementation based on dedicated to a specific type

Members:

- `DbMultiMapRepository(TDatabase database)` _constructor_ — Initialises a new instance with the given LiteDB database. The `TDatabase` to use for persistence operations.
- `Task OnAddAsync(IEnumerable&lt;TEntity&gt; entities)` _method_
- `Task OnRemoveAsync(IEnumerable&lt;string&gt; ids)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;TEntity&gt; entities)` _method_
- `TDataModel ToDataModel(TEntity entity)` _method_ — Populates the data model using entity info This method is called while adding or updating an entity
- `TEntity ToDomainModel(TDataModel dataModel)` _method_ — Converts the data model to a new entity instance This method is called while reading a new entity
- `LiteCollection&lt;TDataModel&gt; Collection` _property_ — Gets the for the type
- `TDatabase Database` _property_ — Gets the current

#### `DbMultiRepository&lt;T, TDatabase&gt;`

_public class_

Source: `src/Shared/LiteDB/Repository/DbMultiRepository.cs`

Base repository implementation based on dedicated to a specific type

Members:

- `DbMultiRepository(TDatabase database)` _constructor_ — Initialises a new instance with the given LiteDB database. The `TDatabase` to use for persistence operations.
- `Task OnAddAsync(IEnumerable&lt;T&gt; entities)` _method_
- `Task OnRemoveAsync(IEnumerable&lt;string&gt; ids)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;T&gt; entities)` _method_
- `LiteCollection&lt;T&gt; Collection` _property_ — Gets the for the type
- `TDatabase Database` _property_ — Gets the current

#### `DbRepository&lt;T, TDatabase&gt;`

_public class_

Source: `src/Shared/LiteDB/Repository/DbRepository.cs`

Base repository implementation based on dedicated to a specific type

Members:

- `DbRepository(TDatabase context)` _constructor_ — Initialises a new instance with the given LiteDB database. The `TDatabase` to use for persistence operations.
- `Task OnAddAsync(T entity)` _method_
- `Task&lt;bool&gt; OnExistAsync(string id)` _method_
- `Task&lt;T&gt; OnGetAsync(string id)` _method_
- `Task OnRemoveAsync(string id)` _method_
- `Task OnUpdateAsync(T entity)` _method_
- `LiteCollection&lt;T&gt; Collection` _property_ — Gets the for the type
- `TDatabase Database` _property_ — Gets the current

### `Industria4.Logging`

#### `Constants`

_public class_

Source: `src/Shared/Logging/Constants.cs`

Shared constant strings used across the logging infrastructure.

### `Industria4.Logging.Correlation`

#### `AsyncCorrelation`

_public class_

Source: `src/Shared/Logging/Correlation/AsyncCorrelation.cs`

implementation that stores the correlation ID in an , scoping it to each async call chain.

Members:

- `string SetNew()` _method_

#### `CorrelationIdEnricher&lt;T&gt;`

_public class_

Source: `src/Shared/Logging/Correlation/CorrelationIdEnricher.cs`

Serilog log-event enricher that adds the current correlation ID as a `CorrelationId` property. The implementation to read the ID from.

Members:

- `CorrelationIdEnricher()` _constructor_ — Initializes a new instance using a default-constructed `T`.
- `void Enrich(LogEvent logEvent,ILogEventPropertyFactory propertyFactory)` _method_

#### `ICorrelation`

_public interface_

Source: `src/Shared/Logging/Correlation/ICorrelation.cs`

Interface which represents the current correlation for each logging events

### `Industria4.Mes.Cqrs`

#### `WorkOrderType`

_public class_

Source: `src/Mes/Mes.Cqrs/MesTypes.cs`

CQRS entity type marker for `WorkOrder` entities.

### `Industria4.Mes.Cqrs.Commands.WorkOrder`

#### `AddQuantityWorkOrderCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/AddQuantityWorkOrderCommand.cs`

Command to add a produced (or waste) quantity to a work order.

Members:

- `AddQuantityWorkOrderCommand(string id,double? quantity,bool? waste,bool? userChange,MetadataDictionary metadata,byte[] entityVersion)` _constructor_ — Initializes a new .
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to this quantity update.
- `double? Quantity` _property_ — Gets the quantity being reported (may be `null` for a change-only record).
- `bool? UserChange` _property_ — Gets a value indicating whether this change was triggered by a user.
- `bool Waste` _property_ — Gets a value indicating whether the quantity represents waste.

#### `AddWorkOrderChangeCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/AddWorkOrderChangeCommand.cs`

Command to record a change (state or quantity event) on a work order without altering quantities.

Members:

- `AddWorkOrderChangeCommand(string id,MetadataDictionary metadata,byte[] entityVersion)` _constructor_ — Initializes a new .
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to this change record.

#### `AddWorkOrderCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/AddWorkOrderCommand.cs`

Command to create a new work order.

Members:

- `string Customer` _property_ — Gets the customer name for this work order.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for the new work order (language-keyed dictionary).
- `DateTimeOffset? DueDate` _property_ — Gets the optional deadline by which the work order must be completed.
- `string Group` _property_ — Gets the optional production group/line assignment.
- `MetadataDictionary Metadata` _property_ — Gets the additional metadata key-value pairs for the new work order.
- `string OrderNumber` _property_ — Gets the external order reference number.
- `int Priority` _property_ — Gets or sets the scheduling priority.
- `DateTimeOffset? ReleaseDate` _property_ — Gets the optional date/time when the work order is scheduled to be released.
- `double RequiredQuantity` _property_ — Gets the total quantity to be produced.
- `double? StartingQuantity` _property_ — Gets the optional quantity at which production starts.

#### `ChangeWorkOrderPriority`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/ChangeWorkOrderPriorityCommand.cs`

Represents a single work-order priority change item within a .

Members:

- `ChangeWorkOrderPriority(string id,int priority,byte[] entityVersion)` _constructor_ — Initializes a new priority change item. The work-order identifier. The new priority value. The concurrency token for optimistic locking.
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `string Id` _property_ — Gets the work-order identifier.
- `int Priority` _property_ — Gets the new priority value.

#### `ChangeWorkOrderPriorityCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/ChangeWorkOrderPriorityCommand.cs`

Command to change the scheduling priorities of one or more work orders in a single operation.

Members:

- `ChangeWorkOrderPriorityCommand(ChangeWorkOrderPriority[] priorities)` _constructor_ — Initializes a new . The array of priority update items.
- `ChangeWorkOrderPriority[] Priorities` _property_ — Gets the list of work-order priority updates.

#### `ChangeWorkOrderStateCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/ChangeWorkOrderStateCommand.cs`

Command to transition a work order to a new lifecycle state.

Members:

- `ChangeWorkOrderStateCommand(string id,WorkOrderState state,bool? userChange,MetadataDictionary metadata,byte[] entityVersion)` _constructor_ — Initializes a new .
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to this state change.
- `WorkOrderState State` _property_ — Gets the new lifecycle state for the work order.
- `bool? UserChange` _property_ — Gets a value indicating whether the state change was triggered by a user.

#### `DeleteWorkOrderCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/DeleteWorkOrderCommand.cs`

Command to delete a work order by identifier.

Members:

- `DeleteWorkOrderCommand(string id)` _constructor_ — Initializes a new . The identifier of the work order to delete.

#### `ExpireWorkOrdersCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/ExpireWorkOrdersCommand.cs`

Command that triggers expiry processing for all work orders whose due date has passed.

#### `PromoteWorkOrdersCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/PromoteWorkOrdersCommand.cs`

Command that triggers promotion (auto-advance) of eligible work orders to the next lifecycle state.

#### `SetQuantityWorkOrderCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/SetQuantityWorkOrderCommand.cs`

Command to set (overwrite) the produced or waste quantity of a work order.

Members:

- `SetQuantityWorkOrderCommand(string id,double quantity,bool waste,bool? userChange,MetadataDictionary metadata,byte[] entityVersion)` _constructor_ — Initializes a new .
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to this quantity update.
- `double Quantity` _property_ — Gets the absolute quantity to set.
- `bool? UserChange` _property_ — Gets a value indicating whether the change was triggered by a user.
- `bool Waste` _property_ — Gets a value indicating whether the quantity represents waste.

#### `UpdateWorkOrderCommand`

_public class_

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/UpdateWorkOrderCommand.cs`

Command to update the details of an existing work order.

Members:

- `string Customer` _property_ — Gets the customer name for this work order.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this work order.
- `DateTimeOffset? DueDate` _property_ — Gets the optional deadline by which the work order must be completed.
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `string Group` _property_ — Gets the optional production group/line assignment.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to this update.
- `int Priority` _property_ — Gets or sets the scheduling priority.
- `DateTimeOffset? ReleaseDate` _property_ — Gets the optional date/time when the work order is scheduled to be released.
- `double RequiredQuantity` _property_ — Gets the total quantity to be produced.
- `double? StartingQuantity` _property_ — Gets the optional quantity at which production starts.

### `Industria4.Mes.Cqrs.Events.WorkOrder`

#### `WorkOrderChangedEvent`

_public class_

Source: `src/Mes/Mes.Cqrs/Events/WorkOrder/WorkOrderChangedEvent.cs`

Domain event raised when a work order is updated (state or data change).

Members:

- `WorkOrderChangedEvent(string id,MetadataDictionary metadata)` _constructor_ — Initializes a new . The work-order identifier. Metadata associated with the change.
- `MetadataDictionary Metadata` _property_ — Gets the metadata associated with this event.

#### `WorkOrderQuantityAddedEvent`

_public class_

Source: `src/Mes/Mes.Cqrs/Events/WorkOrder/WorkOrderQuantityAddedEvent.cs`

Domain event raised when a quantity (good or waste) is added to a work order.

Members:

- `WorkOrderQuantityAddedEvent(string id,double quantity,bool waste,bool? userChange,MetadataDictionary metadata)` _constructor_ — Initializes a new .
- `MetadataDictionary Metadata` _property_ — Gets the metadata associated with this event.
- `double? Quantity` _property_ — Gets the quantity that was added.
- `bool? UserChange` _property_ — Gets a value indicating whether a user triggered the addition.
- `bool Waste` _property_ — Gets a value indicating whether the quantity is waste.

#### `WorkOrderStateChangedEvent`

_public class_

Source: `src/Mes/Mes.Cqrs/Events/WorkOrder/WorkOrderStateChangedEvent.cs`

Domain event raised when the lifecycle state of a work order changes.

Members:

- `WorkOrderStateChangedEvent(string id,WorkOrderState state,MetadataDictionary metadata)` _constructor_ — Initializes a new .
- `MetadataDictionary Metadata` _property_ — Gets the metadata associated with this event.
- `WorkOrderState State` _property_ — Gets the new lifecycle state of the work order.

### `Industria4.Mes.Cqrs.Handlers`

#### `ActiveWorkOrderMode`

_public enum_

Source: `src/Mes/Mes.Cqrs.Handlers/MesOptions.cs`

Controls how many work orders may be in `Running` state at the same time.

#### `MesHandler`

_internal class_

Source: `src/Mes/Mes.Cqrs.Handlers/MesHandler.cs`

Members:

- `Task Handle(AddQuantityWorkOrderCommand command)` _method_
- `Task Handle(AddWorkOrderChangeCommand command)` _method_
- `Task Handle(AddWorkOrderCommand command)` _method_
- `Task Handle(ChangeWorkOrderPriorityCommand command)` _method_
- `Task Handle(ChangeWorkOrderStateCommand command)` _method_
- `Task Handle(DeleteWorkOrderCommand command)` _method_
- `Task Handle(ExpireWorkOrdersCommand message)` _method_
- `Task Handle(PromoteWorkOrdersCommand message)` _method_
- `Task Handle(SetQuantityWorkOrderCommand command)` _method_
- `Task Handle(UpdateWorkOrderCommand command)` _method_

#### `MesOptions`

_public class_

Source: `src/Mes/Mes.Cqrs.Handlers/MesOptions.cs`

Runtime configuration options for the MES command handler and scheduler.

Members:

- `ActiveWorkOrderMode ActiveWorkOrderMode` _property_ — Gets or sets the concurrency policy that controls how many work orders can be in `Running` state simultaneously.
- `TimeSpan? AutoExpireWorkOrdersInterval` _property_ — Gets or sets the interval at which overdue work orders are automatically transitioned to `Expired`. When `null` auto-expiry is disabled.
- `TimeSpan? AutoPromoteWorkOrdersInterval` _property_ — Gets or sets the interval at which `New` work orders whose release date has passed are automatically promoted to `Ready`. When `null` auto-promotion is disabled.
- `bool CanAlwaysCompleteOrder` _property_ — Gets or sets a value indicating whether a work order can always be completed even if is still less than .
- `string OrderNumberFormat` _property_ — Gets or sets the format string used to auto-generate order numbers (positional argument `&#123;0&#125;` is the sequential count). Defaults to `"&#123;0:0000000&#125;"`.
- `WorkOrderPriorityMode WorkOrderPriority` _property_ — Gets or sets the sort direction applied to work-order priority when selecting the next work order to run. Defaults to (highest number first).

#### `SchedulerHostedService`

_public class_

Source: `src/Mes/Mes.Cqrs.Handlers/SchedulerHostedService.cs`

Background service that dispatches scheduled and messages at configurable intervals.

Members:

- `SchedulerHostedService(IServiceProvider serviceProvider,IOptions&lt;MesOptions&gt; mesSchedulerOptions,ILogger&lt;SchedulerHostedService&gt; logger)` _constructor_ — Initializes a new .
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `WorkOrderPriorityMode`

_public enum_

Source: `src/Mes/Mes.Cqrs.Handlers/MesOptions.cs`

Determines the sort direction used when ordering work orders by priority.

### `Industria4.Mes.DomainModel`

#### `Validation`

_public class_

Source: `src/Mes/Mes.DomainModel/Validation.cs`

Centralises maximum-length constraints for MES domain-model properties.

### `Industria4.Mes.DomainModel.WorkOrder`

#### `WorkOrder`

_public class_

Source: `src/Mes/Mes.DomainModel/WorkOrder/WorkOrder.cs`

Aggregate root representing a manufacturing work order.

Members:

- `WorkOrder(string id,string orderNumber,double requiredQuantity)` _constructor_ — Initializes a new work order with a unique ID, order number, and required quantity. The unique identifier (max 36 chars). The external order reference number. The total quantity to be produced.
- `bool EvaluateCanChange(WorkOrderState state)` _method_ — Determines whether the work order may transition to the specified `state`. The target state to evaluate. `true` if the transition is permitted; otherwise `false`.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this work order, keyed by language.
- `string Id` _property_
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this work order (lazily initialised).
- `string OrderNumber` _property_ — Gets the order number (external reference).
- `int Priority` _property_ — Gets or sets the scheduling priority.
- `WorkOrderState State` _property_ — Gets or sets the current lifecycle state.

#### `WorkOrderChange`

_public class_

Source: `src/Mes/Mes.DomainModel/WorkOrder/WorkOrderChange.cs`

Records a single state-change or quantity update applied to a .

Members:

- `WorkOrderChange(string id,string workOrderId,DateTimeOffset date,WorkOrderState state,double? quantity,bool? waste,bool? userChange)` _constructor_ — Initializes a new work-order change record. Unique identifier for this change record. The identifier of the associated work order. The timestamp of the change. The new state of the work order at the time of the change. The quantity reported by the change, or `null` if not applicable. Whether the reported quantity represents waste, or `null` if not applicable. Whether the change was initiated by a user action, or `null` if not applicable.
- `DateTimeOffset Date` _property_ — Gets the timestamp when this change was recorded.
- `string Id` _property_
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary key/value metadata for this change (lazily initialised).
- `double? Quantity` _property_ — Gets or sets the reported quantity for this change, or `null` if not applicable.
- `WorkOrderState State` _property_ — Gets the work-order state at the time of this change.
- `bool? UserChange` _property_ — Gets a value indicating whether this change was triggered by a user.
- `bool? Waste` _property_ — Gets a value indicating whether the quantity represents waste.
- `string WorkOrderId` _property_ — Gets the identifier of the work order this change belongs to.

#### `WorkOrderState`

_public enum_

Source: `src/Mes/Mes.DomainModel/WorkOrder/WorkOrderState.cs`

Represents the lifecycle state of a work order.

### `Industria4.Mes.EntityFramework`

#### `EntitiesHostedServices`

_internal class_

Source: `src/Mes/Mes.EntityFramework/EntitiesHostedServices.cs`

Members:

- `EntitiesHostedServices(ILogger&lt;EntitiesHostedServices&gt; logger,Backup&lt;MesContext&gt; backup,IServiceProvider serviceProvider)` _constructor_ — Initialises the service with the logger, backup helper, and service-scope factory.
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `MesMapper`

_public class_

Source: `src/Mes/Mes.EntityFramework/MesMapper.cs`

Configures AutoMapper profiles for mapping MES EF entity types to domain and read models.

Members:

- `MesMapper()` _constructor_ — Initialises a new and builds the AutoMapper configuration.
- `IMapper Mapper` _property_ — Gets the configured instance used to project entities to read models.

### `Industria4.Mes.EntityFramework.DataAccessObject`

#### `MesDataAccessObject&lt;TDataModel, TReadModel&gt;`

_internal class_

Source: `src/Mes/Mes.EntityFramework/DataAccessObject/MesDataAccessObject.cs`

Members:

- `MesDataAccessObject(MesContext context,MesMapper mapperAccessor)` _constructor_ — Initialises a new data-access object with the EF context and mapper accessor.
- `IQueryable&lt;TReadModel&gt; Query` _property_

### `Industria4.Mes.EntityFramework.DataModel`

#### `MesContext`

_internal class_

Source: `src/Mes/Mes.EntityFramework/DataModel/MesContext.cs`

Members:

- `MesContext(DbContextOptions&lt;MesContext&gt; options)` _constructor_
- `void OnModelCreating(ModelBuilder modelBuilder)` _method_
- `DbSet&lt;WorkOrder.WorkOrderChange&gt; WorkOrderChanges` _property_
- `DbSet&lt;WorkOrder.WorkOrder&gt; WorkOrders` _property_

#### `MesContextFactory`

_internal class_

Source: `src/Mes/Mes.EntityFramework/DataModel/MesContextFactory.cs`

Members:

- `MesContext CreateDbContext(string[] args)` _method_ — Creates a new for EF design-time tooling (migrations, scaffolding).

### `Industria4.Mes.EntityFramework.DataModel.WorkOrder`

#### `WorkOrder`

_internal class_

Source: `src/Mes/Mes.EntityFramework/DataModel/WorkOrder/WorkOrder.cs`

Members:

- `string Customer` _property_
- `string Descriptions` _property_
- `double DoneQuantity` _property_
- `DateTimeOffset? DueDate` _property_
- `byte[] EntityVersion` _property_
- `string Group` _property_
- `string Id` _property_
- `string Metadata` _property_
- `string OrderNumber` _property_
- `int Priority` _property_
- `DateTimeOffset? ReleaseDate` _property_
- `double RequiredQuantity` _property_
- `double? StartingQuantity` _property_
- `WorkOrderState State` _property_
- `double WasteQuantity` _property_

#### `WorkOrderChange`

_internal class_

Source: `src/Mes/Mes.EntityFramework/DataModel/WorkOrder/WorkOrderChange.cs`

Members:

- `DateTimeOffset Date` _property_
- `string Id` _property_
- `string Metadata` _property_
- `double? Quantity` _property_
- `WorkOrderState State` _property_
- `bool? UserChange` _property_
- `bool? Waste` _property_
- `WorkOrder WorkOrder` _property_
- `string WorkOrderId` _property_

### `Industria4.Mes.EntityFramework.Repositories`

#### `WorkOrderChangeRepository`

_internal class_

Source: `src/Mes/Mes.EntityFramework/Repositories/WorkOrderChangeRepository.cs`

Members:

- `WorkOrderChangeRepository(MesContext context,ILogger&lt;WorkOrderChangeRepository&gt; logger)` _constructor_ — Initialises a new repository instance bound to the provided `context`.
- `void ToDataModel(WorkOrderChange entity,DataModel.WorkOrder.WorkOrderChange dataModel)` _method_
- `WorkOrderChange ToDomainModel(DataModel.WorkOrder.WorkOrderChange dataModel)` _method_

#### `WorkOrderRepository`

_internal class_

Source: `src/Mes/Mes.EntityFramework/Repositories/WorkOrderRepository.cs`

Members:

- `WorkOrderRepository(MesContext context,ILogger&lt;WorkOrderRepository&gt; logger)` _constructor_ — Initialises a new repository instance bound to the provided `context`.
- `Task OnAddAsync(IEnumerable&lt;WorkOrder&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;WorkOrder&gt; entities)` _method_
- `void ToDataModel(WorkOrder entity,DataModel.WorkOrder.WorkOrder dataModel)` _method_
- `WorkOrder ToDomainModel(DataModel.WorkOrder.WorkOrder dataModel)` _method_

### `Industria4.Mes.Http`

#### `HttpMesOptions`

_public class_

Source: `src/Mes/Mes.Http/HttpMesOptions.cs`

Configuration options for the HTTP MES client.

Members:

- `Uri Mes` _property_ — Gets or sets the base URI of the MES service. Defaults to `http://localhost:8005`.

#### `WorkOrderClient`

_public class_

Source: `src/Mes/Mes.Http/WorkOrderClient.cs`

HTTP client for querying and managing work orders via the MES REST API.

Members:

- `WorkOrderClient(RestClient restClient,IOptions&lt;HttpMesOptions&gt; options)` _constructor_ — Initializes a new . The underlying REST client. Options containing the service base URI.
- `Task AddAsync(AddWorkOrderCommand command,CancellationToken token = default)` _method_ — Creates a new work order.
- `Task AddQuantityAsync(AddQuantityWorkOrderCommand command,CancellationToken token = default)` _method_ — Adds a produced or waste quantity increment to a work order.
- `Task ChangePriorityAsync(ChangeWorkOrderPriorityCommand command,CancellationToken token = default)` _method_ — Changes the scheduling priorities of one or more work orders.
- `Task ChangeStateAsync(ChangeWorkOrderStateCommand command,CancellationToken token = default)` _method_ — Transitions a work order to a new lifecycle state.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the work order with the specified identifier.
- `Task&lt;DomainModel.WorkOrder.WorkOrder&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Retrieves the full domain work order for the given identifier.
- `Task&lt;DomainModel.WorkOrder.WorkOrder&gt; GetNextAsync(CancellationToken token = default)` _method_ — Returns the next scheduled work order, or `null` if none is available.
- `Task SetQuantityAsync(SetQuantityWorkOrderCommand command,CancellationToken token = default)` _method_ — Overwrites the produced or waste quantity of a work order.
- `Task UpdateAsync(UpdateWorkOrderCommand command,CancellationToken token = default)` _method_ — Updates an existing work order.

### `Industria4.Mes.ReadModel`

#### `WorkOrderChangeRead`

_public class_

Source: `src/Mes/Mes.ReadModel/WorkOrderChangeRead.cs`

Read model representing a work-order change record as returned by the MES query stack.

Members:

- `DateTimeOffset Date` _property_ — Gets or sets the timestamp when this change was recorded.
- `string Id` _property_ — Gets or sets the unique identifier for this change record.
- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets the deserialized metadata dictionary.
- `string MetadataJson` _property_ — Gets or sets the raw JSON metadata string (not serialized to API responses).
- `string OrderNumber` _property_ — Gets or sets the external order reference number at the time of the change.
- `double? Quantity` _property_ — Gets or sets the quantity reported by this change, or `null` if not applicable.
- `WorkOrderState State` _property_ — Gets or sets the work-order state at the time of this change.
- `bool? UserChange` _property_ — Gets or sets a value indicating whether the change was triggered by a user.
- `string WorkOrderId` _property_ — Gets or sets the identifier of the associated work order.

#### `WorkOrderRead`

_public class_

Source: `src/Mes/Mes.ReadModel/WorkOrderRead.cs`

Read model representing a work order as returned by the MES query stack.

Members:

- `string Customer` _property_ — Gets or sets the customer name associated with this work order.
- `string Description` _property_ — Gets or sets the default-language description of the work order.
- `double DoneQuantity` _property_ — Gets or sets the quantity that has been produced so far.
- `DateTimeOffset? DueDate` _property_ — Gets or sets the deadline by which the work order must be completed.
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `string Group` _property_ — Gets or sets the production group/line assignment.
- `string Id` _property_ — Gets or sets the unique work-order identifier.
- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets the deserialized metadata dictionary.
- `string MetadataJson` _property_ — Gets or sets the raw JSON metadata string (not serialized to API responses).
- `string OrderNumber` _property_ — Gets or sets the external order reference number.
- `int Priority` _property_ — Gets or sets the scheduling priority.
- `DateTimeOffset? ReleaseDate` _property_ — Gets or sets the date/time when the work order is scheduled to be released.
- `double RequiredQuantity` _property_ — Gets or sets the total quantity to be produced.
- `double? StartingQuantity` _property_ — Gets or sets the optional quantity at which production started.
- `WorkOrderState State` _property_ — Gets or sets the current lifecycle state.
- `double WasteQuantity` _property_ — Gets or sets the waste quantity reported so far.

### `Industria4.Mes.WebApi`

#### `Program`

_public class_

Source: `src/Mes/Mes.WebApi/Program.cs`

Entry point for the MES Web API host.

Members:

- `IHostBuilder CreateBuilder(params string[] args)` _method_ — Creates and configures the with Serilog, package configuration, and the Kestrel web host.
- `void Main(string[] args)` _method_ — Builds and starts the host, running all dependency health checks before accepting requests.

#### `Startup`

_public class_

Source: `src/Mes/Mes.WebApi/Startup.cs`

ASP.NET Core startup class for the MES Web API host.

Members:

- `Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)` _constructor_ — Initialises a new with the application configuration and hosting environment.
- `void Configure(IApplicationBuilder app)` _method_ — Configures the HTTP request pipeline: CORS, localisation, routing, authentication, OpenAPI, and OData endpoints.
- `void ConfigureServices(IServiceCollection services)` _method_ — Registers all required services: EF, service-bus, CQRS handlers, OData controllers, OpenAPI, and security policies.
- `IConfiguration Configuration` _property_ — Gets the application configuration.
- `IHostEnvironment HostingEnvironment` _property_ — Gets the current hosting environment (Development, Staging, Production…).

### `Industria4.Mes.WebApi.Controllers`

#### `WorkorderController`

_public class_

Source: `src/Mes/Mes.WebApi/Controllers/WorkOrderController.cs`

OData-enabled REST controller exposing work-order and work-order-change read endpoints for the MES bounded context.

### `Industria4.Mes.WebApi.Hosting`

#### `StartupService`

_public class_

Source: `src/Mes/Mes.WebApi.Hosting/StartupService.cs`

Startup service that registers the MES Web API module in the hosting catalog.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

#### `WebApiModule`

_public class_

Source: `src/Mes/Mes.WebApi.Hosting/WebApiModule.cs`

Process module that manages the lifecycle of the MES Web API process.

Members:

- `WebApiModule(ILogger&lt;WebApiModule&gt; logger,IConfiguration configuration)` _constructor_ — Initializes a new .
- `IDictionary&lt;string,string&gt; Environment` _property_
- `string Name` _property_
- `string ProcessNameExe` _property_
- `string WorkingDir` _property_

### `Industria4.Mes.WebApp`

#### `MesGridAdditionalColumnOptions`

_public class_

Source: `src/Mes/Mes.WebApp/MesOptions.cs`

Represents the localised label map for a single additional grid column (maps culture code to display label).

#### `MesGridDefaultSortColumnDirection`

_public enum_

Source: `src/Mes/Mes.WebApp/MesOptions.cs`

Specifies the sort direction for the work-order grid default sort.

#### `MesGridDefaultSortColumnOptions`

_public class_

Source: `src/Mes/Mes.WebApp/MesOptions.cs`

Specifies the default sort column name and direction for the work-order grid.

Members:

- `string Column` _property_ — Gets or sets the name of the column to sort by initially. Defaults to an empty string (no default sort).
- `MesGridDefaultSortColumnDirection Direction` _property_ — Gets or sets the initial sort direction.

#### `MesGridOptions`

_public class_

Source: `src/Mes/Mes.WebApp/MesOptions.cs`

Configuration for the work-order grid columns and sort order.

Members:

- `Dictionary&lt;string,MesGridAdditionalColumnOptions&gt; AdditionalColumns` _property_ — Gets or sets the map of extra column definitions (key = field name). Each entry contains a culture→label dictionary.
- `Dictionary&lt;string,LanguageDictionary&lt;string&gt;&gt; AdditionalColumnsTyped` _property_ — Gets a lazily computed version of with camelCase keys and strongly-typed values.
- `string[] Columns` _property_ — Gets or sets the ordered list of column names to show. When `null`, a built-in default set is used.
- `string[] ColumnsOrDefaults` _property_
- `MesGridDefaultSortColumnOptions DefaultSortColumn` _property_ — Gets or sets the default sort column and direction applied on first load.

#### `MesOptions`

_public class_

Source: `src/Mes/Mes.WebApp/MesOptions.cs`

Runtime configuration options for the MES WebApp UI module.

Members:

- `bool ChangeQuantityDefaultDelta` _property_ — Gets or sets a value indicating whether the quantity input defaults to a delta (additive) mode rather than an absolute value. Defaults to `true`.
- `bool DisableCanChangeOrderQuantity` _property_ — Gets or sets a value indicating whether the UI controls for changing work-order quantity are disabled.
- `bool DisableCanChangeOrderState` _property_ — Gets or sets a value indicating whether the UI controls for changing work-order state are disabled.
- `MesGridOptions Grid` _property_ — Gets or sets the grid display configuration.

#### `StartupService`

_public class_

Source: `src/Mes/Mes.WebApp/StartupService.cs`

Startup service that registers MES WebApp view models, HTTP client, and the MES Blazor module. Only runs in client (Blazor WebAssembly) contexts.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

#### `WorkOrderPriorityMode`

_public enum_

Source: `src/Mes/Mes.WebApp/MesOptions.cs`

Specifies how work orders are sorted by priority in the MES WebApp grid.

### `Industria4.Mes.WebApp.Modules`

#### `MesModule`

_public class_

Source: `src/Mes/Mes.WebApp/Modules/MesModule.cs`

Blazor client module that registers the MES work-orders menu entry, respecting the `Mes.WorkOrders` authorization policy.

Members:

- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `string Name` _property_

### `Industria4.Mes.WebApp.Recipes`

#### `MesRecipesModule`

_public class_

Source: `src/Mes/Mes.WebApp.Recipes/MesRecipesModule.cs`

Blazor client module that hooks the MES Recipes feature into the client application lifecycle.

Members:

- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `string Name` _property_

#### `MesRecipesOptions`

_public class_

Source: `src/Mes/Mes.WebApp.Recipes/MesRecipesOptions.cs`

Configuration options for the MES Recipes WebApp integration (recipe requirement, download button, select button).

Members:

- `bool RequiresRecipe` _property_ — Gets or sets a value indicating whether a recipe must be assigned before a work order can start. Defaults to `false`.
- `bool ShowDownloadButton` _property_ — Gets or sets a value indicating whether a download button is shown for assigned recipes. Defaults to `false`.
- `bool ShowSelectButton` _property_ — Gets or sets a value indicating whether a select-recipe button is shown on the work-order form. Defaults to `true`.

#### `Recipe`

_public class_

Source: `src/Mes/Mes.WebApp.Recipes/Recipe.razor.cs`

Partial Blazor component that embeds a recipe selector into the work-order form, allowing the operator to assign or change the linked recipe.

Members:

- `void Dispose(bool disposing)` _method_
- `Task OnInitializedAsync()` _method_

#### `SectionsProvider`

_internal class_

Source: `src/Mes/Mes.WebApp.Recipes/SectionsProvider.cs`

Members:

- `IEnumerable&lt;SectionItem&gt; GetItems()` _method_

#### `StartupService`

_public class_

Source: `src/Mes/Mes.WebApp.Recipes/StartupService.cs`

Startup service that registers the MES Recipes module (client-side only).

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

### `Industria4.Mes.WebApp.Routing`

#### `DynamicRouteBuilderProvider`

_public class_

Source: `src/Mes/Mes.WebApp/Routing/DynamicRouteBuilderProvider.cs`

Provides the set of Blazor component types that are registered as dynamic routes in the MES WebApp module.

Members:

- `IEnumerable&lt;Type&gt; GetTypes()` _method_

### `Industria4.Mes.WebApp.ViewModels.WorkOrder`

#### `ChangeQuantityEventArgs`

_public class_

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrderViewModel.cs`

Event arguments for a work-order quantity-change request. Set to `true` to abort or populate to attach extra data.

Members:

- `ChangeQuantityEventArgs(bool delta,bool waste,double value)` _constructor_ — Initialises a new instance with the specified parameters.
- `bool Cancel` _property_ — Gets or sets a value indicating whether the quantity change should be cancelled. Defaults to `false`.
- `bool Delta` _property_ — Gets a value indicating whether the change is additive (delta) or absolute (set).
- `MetadataDictionary Metadata` _property_ — Gets a metadata dictionary that subscribers can populate before the command is sent.
- `double Value` _property_ — Gets the quantity value to apply.
- `bool Waste` _property_ — Gets a value indicating whether the quantity is waste/scrap.

#### `ChangeStateEventArgs`

_public class_

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrderViewModel.cs`

Event arguments for a work-order state-change request. Set to `true` to abort the transition.

Members:

- `ChangeStateEventArgs(WorkOrderState state)` _constructor_ — Initialises a new instance with the target `state`.
- `bool Cancel` _property_ — Gets or sets a value indicating whether the state change should be cancelled. Defaults to `false`.
- `WorkOrderState State` _property_ — Gets the target state being requested.

#### `ChangesViewModel`

_public class_

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/ChangesViewModel.cs`

View model for the work-order change-history page. Loads the list of state and quantity changes for a given work order.

Members:

- `void Load(string id)` _method_ — Sets the active work-order identifier and initialises the navigation menu. The unique identifier of the work order whose changes to display.

#### `LoadingDataEventArgs`

_public class_

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrdersViewModel.cs`

Event arguments passed to the event. Subscribers may replace or extend to add extra filter predicates.

Members:

- `LoadingDataEventArgs(IQueryable&lt;WorkOrderRead&gt; query)` _constructor_ — Initialises a new instance with the initial `query`.
- `IQueryable&lt;WorkOrderRead&gt; Query` _property_ — Gets or sets the OData queryable that will be sent to the server. Subscribers can wrap this with additional `.Where()` clauses.

#### `SortOrder`

_public enum_

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrdersViewModel.cs`

Specifies the sort direction for work-order grid columns.

Members:

- `Task ChangePriorityAsync(IEnumerable&lt;string&gt; ids)` _method_ — Reassigns priority values for the supplied work-order identifiers to match the given visual order, then persists the changes via a batch command. Ordered sequence of work-order identifiers reflecting the desired priority order.

#### `WorkOrdersViewModel`

_public class_

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrdersViewModel.cs`

View model for the work-orders list page. Handles search, filtering, grid data loading, and priority re-ordering.

Members:

- `event EventHandler&lt;LoadingDataEventArgs&gt; Loading` _event_ — Raised when the grid data provider builds the OData query, allowing external consumers to add extra filter predicates.
- `Task NewWorkOrderAsync()` _method_ — Navigates to the new work-order creation page.
- `Task RefreshAsync()` _method_ — Re-executes the grid data provider to reload the list from the server.
- `void SelectWorkOrder(WorkOrderRead workOrder)` _method_ — Selects a work order and navigates to edit view
- `Func&lt;Task&gt; RefreshImplementation` _property_

#### `WorkOrderViewModel`

_public class_

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrderViewModel.cs`

View model for the work-order edit form. Tracks field changes, coordinates state transitions, and handles save/load round-trips via the MES HTTP client.

Members:

- `WorkOrderViewModel(IServiceProvider serviceProvider)` _constructor_ — Initialises a new resolving required services from `serviceProvider`.
- `event AsyncEventHandler&lt;ChangeQuantityEventArgs&gt; ChangingQuantityAsync` _event_ — Raised asynchronously before a quantity change is applied, allowing subscribers to cancel or inject metadata via .
- `event EventHandler&lt;ChangeStateEventArgs&gt; ChangingState` _event_ — Raised synchronously before a state change is applied, allowing subscribers to cancel the operation via .
- `event AsyncEventHandler&lt;ChangeStateEventArgs&gt; ChangingStateAsync` _event_ — Raised asynchronously before a state change is applied, allowing subscribers to cancel the operation via .
- `Task ChangeQuantityAsync(bool delta,bool waste,double value)` _method_ — Applies a quantity change (additive delta or absolute set) after raising the event. `true` to add `value` to the current quantity; `false` to replace it. `true` to record the quantity as waste/scrap. The quantity value to apply.
- `bool EvaluateCanChange(WorkOrderState state)` _method_ — Returns `true` if transitioning to `state` is currently allowed by the domain model rules.
- `Task LoadAsync(string id)` _method_ — Loads the work order identified by `id` from the server and populates all fields; creates a blank new-record state when `id` is empty.
- `void RaisePropertyChanged(string propertyName = null)` _method_ — Overrides base change notification to also set the internal `_hasChanges` flag, ensuring reflects UI edits.
- `Task SaveAsync()` _method_ — Persists the current field values by sending an add or update command, then reloads the view model. Navigates to the edit URL after a successful add.
- `Task SetStateAsync(WorkOrderState state)` _method_ — Prompts the user (and any registered event subscribers) before changing the work-order state; persists unsaved changes on request. The target state to transition to.
- `bool HasChanges` _property_ — Gets a value indicating whether any field has been modified since the last load or save.
- `bool IsNew` _property_ — Gets or sets a value indicating whether this view model represents a not-yet-persisted (new) work order. Defaults to `true`.
- `double TotalQuantity` _property_ — Gets the combined (done + waste) quantity; recomputed whenever either component changes.

#### `WorkOrderViewModelBase`

_public class_

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrderViewModelBase.cs`

Abstract base view model shared by the work-order edit and changes views. Manages the navigation menu scope and exposes common services.

Members:

- `WorkOrderViewModelBase(IServiceProvider serviceProvider)` _constructor_
- `void Dispose()` _method_ — Releases the active navigation-menu scope, removing any menu items registered by this view model.
- `void InitMenu(bool showChanges)` _method_
- `ILanguageContext LanguageContext` _property_ — Gets the language/culture context for localised display.
- `IServiceProvider ServiceProvider` _property_ — Gets the DI service provider scoped to this view model.

### `Industria4.Mes.WebApp.Views.WorkOrder`

#### `WorkOrders`

_public class_

Source: `src/Mes/Mes.WebApp/Views/WorkOrder/WorkOrders.razor.cs`

Blazor page component for the work-orders list view.

Members:

- `void Dispose(bool disposing)` _method_
- `Task OnAfterRenderAsync(bool firstRender)` _method_
- `void OnInitialized()` _method_
- `Task SetSort(string[] ids)` _method_ — Updates the priority order of the specified work orders when the user drags and drops rows in the grid.
- `WorkOrdersViewModel PublicViewModel` _property_ — Gets the public view model exposed to child components via cascading values.

### `Industria4.OpcUa.Comunication`

#### `IOpcUaClient`

_public interface_

Source: `src/OpcUa/OpcUa.Comunication/IOpcUaClient.cs`

Defines a client that communicates with an OPC-UA server.

#### `OpcUaClient`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/OpcUaClient.cs`

Direct OPC-UA client that manages a single session with one server.

Members:

- `OpcUaClient(ILogger&lt;OpcUaClient&gt; logger,string uri,bool useSecurity,UserIdentity userIdentity)` _constructor_ — Initialises a new with the supplied endpoint and credentials.
- `void Dispose()` _method_ — Disposes the session and any active reconnect handler.
- `Task StartAsync()` _method_
- `Task&lt;IDisposable&gt; SubscribeNodeAsync(NodeId nodeId,Action&lt;object&gt; callback)` _method_
- `Task WriteNodesAsync(IDictionary&lt;NodeId,object&gt; nodeValues,IDictionary&lt;string,object&gt; metadata)` _method_
- `string Uri` _property_ — Gets the OPC-UA endpoint URI this client connects to.
- `UserIdentity UserIdentity` _property_ — Gets the user identity used to authenticate with the server.
- `bool UseSecurity` _property_ — Gets a value indicating whether transport-level security is enabled.

#### `OpcUaClientsFactory`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/OpcUaClientsFactory.cs`

Creates and caches instances, wrapping them with registered middleware.

Members:

- `OpcUaClientsFactory(ILogger&lt;OpcUaClient&gt; clientLogger,ILogger&lt;OpcUaClientsFactory&gt; logger,IServiceProvider serviceProvider)` _constructor_ — Initialises a new .
- `Task&lt;IOpcUaClient&gt; GetAsync(Uri uri,bool useSecurity,UserIdentity identity,params object[] args)` _method_ — Returns a connected (and cached) for the given URI.
- `Task&lt;IOpcUaClient&gt; GetWithMiddlewaresAsync(Uri uri,bool useSecurity,UserIdentity identity,params object[] args)` _method_ — Returns a client for the given URI, wrapped with all registered instances.

### `Industria4.OpcUa.Comunication.Core`

#### `ArrayItemOptions`

_public class_

Source: `src/OpcUa/OpcUa.Comunication.Core/CoreOptions.cs`

Configures the array-item rewriting rules applied to write operations.

Members:

- `string LastNode` _property_ — Gets or sets the OPC-UA node that holds the last valid array index.
- `DataType LastNodeType` _property_ — Gets or sets the data type of the last-index node value.
- `string Node` _property_ — Gets or sets the generic node identifier pattern (may contain `[*]` wildcard).
- `string QuantityNode` _property_ — Gets or sets the OPC-UA node that holds the array-element quantity.
- `DataType QuantityNodeType` _property_ — Gets or sets the data type of the quantity node value.
- `int? Shift` _property_ — Gets or sets the index offset applied to array indices during rewriting.

#### `CoreModule`

_public class_

Source: `src/OpcUa/OpcUa.Comunication.Core/CoreModule.cs`

Hosting module that represents the OPC-UA core middleware component.

Members:

- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `string Name` _property_

#### `CoreOpcUaMiddleware`

_public class_

Source: `src/OpcUa/OpcUa.Comunication.Core/CoreOpcUaMiddleware.cs`

Middleware that pre-processes write operations: applies array-item transforms and injects metadata node values.

Members:

- `CoreOpcUaMiddleware(ILogger&lt;CoreOpcUaMiddleware&gt; logger,IOptions&lt;CoreOptions&gt; options)` _constructor_ — Initialises a new with the given options.
- `Task WriteNodesAsync(MiddlewareContext&lt;IDictionary&lt;NodeId,object&gt;,IDictionary&lt;string,object&gt;,bool&gt; context,Func&lt;Task&gt; next)` _method_

#### `CoreOptions`

_public class_

Source: `src/OpcUa/OpcUa.Comunication.Core/CoreOptions.cs`

Configuration options for the OPC-UA core middleware.

Members:

- `List&lt;ArrayItemOptions&gt; Array` _property_ — Gets the list of array-item transform rules.
- `Dictionary&lt;string,MetadataNodeId&gt; Metadata` _property_ — Gets the map of metadata key to target OPC-UA node identifiers.

#### `MetadataNodeId`

_public class_

Source: `src/OpcUa/OpcUa.Comunication.Core/CoreOptions.cs`

Maps a metadata key to an OPC-UA node and its expected data type.

Members:

- `string Node` _property_ — Gets or sets the OPC-UA node identifier.
- `DataType NodeType` _property_ — Gets or sets the data type used to convert the metadata value before writing.

#### `Startup`

_public class_

Source: `src/OpcUa/OpcUa.Comunication.Core/Startup.cs`

Startup service that registers the core OPC-UA middleware and binds from configuration.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

### `Industria4.OpcUa.Comunication.Core.Test`

#### `MiddlewareTest`

_public class_

Source: `test/OpcUa/OpcUa.Comunication.Core.Test/MiddlewareTest.cs`

Members:

- `Task Test1()` _method_
- `Task Test2()` _method_

### `Industria4.OpcUa.Comunication.Middleware`

#### `IOpcUaMiddleware`

_public interface_

Source: `src/OpcUa/OpcUa.Comunication/Middleware/IOpcUaMiddleware.cs`

Defines a middleware component in the OPC-UA client pipeline.

#### `MiddlewareContext`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/Middleware/MiddlewareContext.cs`

Base context object passed through the OPC-UA middleware pipeline.

Members:

- `MiddlewareContext Create()` _method_ — Creates an empty context.
- `MiddlewareContext&lt;TResult&gt; Create&lt;TResult&gt;(TResult result = default)` _method_ — Creates a result-only context.
- `MiddlewareContext&lt;TParameter,TResult&gt; Create&lt;TParameter,TResult&gt;(TParameter parameter,TResult result = default)` _method_ — Creates a single-parameter context.
- `MiddlewareContext&lt;TParameter1,TParameter2,TResult&gt; Create&lt;TParameter1,TParameter2,TResult&gt;(TParameter1 parameter1,TParameter2 parameter2,TResult result = default)` _method_ — Creates a two-parameter context.

#### `MiddlewareContext&lt;TParameter1, TParameter2, TResult&gt;`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/Middleware/MiddlewareContext.cs`

Middleware context carrying two typed input parameters and a typed result.

Members:

- `MiddlewareContext(TParameter1 parameter1,TParameter2 parameter2)` _constructor_ — Initialises the context with the two input parameters.
- `TParameter2 Parameter2` _property_ — Gets the second input parameter.

#### `MiddlewareContext&lt;TParameter1, TResult&gt;`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/Middleware/MiddlewareContext.cs`

Middleware context carrying one typed input parameter and a typed result.

Members:

- `MiddlewareContext(TParameter1 parameter1)` _constructor_ — Initialises the context with the input parameter.
- `TParameter1 Parameter1` _property_ — Gets the first input parameter.

#### `MiddlewareContext&lt;TResult&gt;`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/Middleware/MiddlewareContext.cs`

Middleware context that holds a typed result value.

Members:

- `TResult Result` _property_ — Gets or sets the result produced by the pipeline.

#### `OpcUaClientMiddleware`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/Middleware/OpcUaClientMiddleware.cs`

Terminal middleware that delegates all pipeline calls directly to an .

Members:

- `OpcUaClientMiddleware(IOpcUaClient client)` _constructor_ — Initialises a new wrapping the given client.
- `Task ReadNodesAsync(MiddlewareContext&lt;IEnumerable&lt;NodeId&gt;,IDictionary&lt;string,object&gt;,IReadOnlyList&lt;KeyValuePair&lt;NodeId,object&gt;&gt;&gt; context,Func&lt;Task&gt; next)` _method_
- `Task StartAsync(MiddlewareContext context,Func&lt;Task&gt; next)` _method_
- `Task SubscribeNodeAsync(MiddlewareContext&lt;NodeId,Action&lt;object&gt;,IDisposable&gt; context,Func&lt;Task&gt; next)` _method_
- `Task WriteNodesAsync(MiddlewareContext&lt;IDictionary&lt;NodeId,object&gt;,IDictionary&lt;string,object&gt;,bool&gt; context,Func&lt;Task&gt; next)` _method_

#### `OpcUaClientMiddlewareWrapper`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/Middleware/OpcUaClientMiddlewareWrapper.cs`

An wrapper that routes every call through the registered middleware pipeline.

Members:

- `OpcUaClientMiddlewareWrapper(IEnumerable&lt;IOpcUaMiddleware&gt; middlewares,ILogger&lt;OpcUaClientMiddlewareWrapper&gt; logger)` _constructor_ — Initialises a new with the ordered middleware chain.
- `Task StartAsync()` _method_
- `Task&lt;IDisposable&gt; SubscribeNodeAsync(NodeId nodeId,Action&lt;object&gt; callback)` _method_
- `Task WriteNodesAsync(IDictionary&lt;NodeId,object&gt; nodeValues,IDictionary&lt;string,object&gt; metadata)` _method_

#### `PassThroughMiddleware`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/Middleware/PassThroughMiddleware.cs`

Base no-op middleware that forwards every call to the next handler. Override individual methods to intercept specific operations.

Members:

- `Task ReadNodesAsync(MiddlewareContext&lt;IEnumerable&lt;NodeId&gt;,IDictionary&lt;string,object&gt;,IReadOnlyList&lt;KeyValuePair&lt;NodeId,object&gt;&gt;&gt; context,Func&lt;Task&gt; next)` _method_
- `Task StartAsync(MiddlewareContext context,Func&lt;Task&gt; next)` _method_
- `Task SubscribeNodeAsync(MiddlewareContext&lt;NodeId,Action&lt;object&gt;,IDisposable&gt; context,Func&lt;Task&gt; next)` _method_
- `Task WriteNodesAsync(MiddlewareContext&lt;IDictionary&lt;NodeId,object&gt;,IDictionary&lt;string,object&gt;,bool&gt; context,Func&lt;Task&gt; next)` _method_

### `Industria4.OpcUa.Cqrs`

#### `ServerType`

_public class_

Source: `src/OpcUa/OpcUa.Cqrs/OpcUaTypes.cs`

CQRS entity type marker for `Server` (OPC-UA server) entities.

### `Industria4.OpcUa.Cqrs.Commands.Server`

#### `AddOrUpdateServerCommand`

_public class_

Source: `src/OpcUa/OpcUa.Cqrs/Commands/Server/AddOrUpdateServerCommand.cs`

CQRS command that creates or updates an OPC-UA server entry.

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised display name(s) of the server.
- `byte[] EntityVersion` _property_ — Gets the concurrency token of the entity being updated.
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata associated with the server.
- `string Password` _property_ — Gets the authentication password.
- `Uri Uri` _property_ — Gets the OPC-UA endpoint URI.
- `string UserName` _property_ — Gets the authentication user name.
- `bool UseSecurity` _property_ — Gets a value indicating whether transport-level security is required.

#### `DeleteServerCommand`

_public class_

Source: `src/OpcUa/OpcUa.Cqrs/Commands/Server/DeleteServerCommand.cs`

CQRS command that deletes an OPC-UA server entry.

Members:

- `DeleteServerCommand(string id)` _constructor_ — Initialises a new for the server with the given `id`.

### `Industria4.OpcUa.Cqrs.Handlers`

#### `OpcUaHandler`

_internal class_

Source: `src/OpcUa/OpcUa.Cqrs.Handlers/OpcUaHandler.cs`

Members:

- `Task Handle(AddOrUpdateServerCommand command)` _method_
- `Task Handle(DeleteServerCommand command)` _method_

### `Industria4.OpcUa.DomainModel`

#### `Validation`

_public class_

Source: `src/OpcUa/OpcUa.DomainModel/Validation.cs`

Centralises maximum-length constraints for OPC-UA domain-model properties.

### `Industria4.OpcUa.DomainModel.Server`

#### `Server`

_public class_

Source: `src/OpcUa/OpcUa.DomainModel/Server/Server.cs`

Represents an OPC-UA server connection entry, including its endpoint URI and optional credentials.

Members:

- `Server(string id)` _constructor_ — Initializes a new server with a default OPC-TCP endpoint URI. The unique identifier of this server entry.
- `Server(string id,Uri uri)` _constructor_ — Initializes a new server with the specified endpoint URI. The unique identifier of this server entry. The OPC-UA endpoint URI.
- `NetworkCredential GetCredential()` _method_ — Returns the extracted from the current . The network credential for this server's endpoint.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this server, keyed by language.
- `bool HasCredential` _property_ — Gets a value indicating whether this server has a non-empty username credential configured.
- `string Id` _property_
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this server (lazily initialised).
- `bool UseSecurity` _property_ — Gets or sets a value indicating whether security (e.g., encrypted transport) is enabled.

### `Industria4.OpcUa.EntityFramework`

#### `EntitiesHostedServices`

_internal class_

Source: `src/OpcUa/OpcUa.EntityFramework/EntitiesHostedServices.cs`

Members:

- `EntitiesHostedServices(ILogger&lt;EntitiesHostedServices&gt; logger,Backup&lt;OpcUaContext&gt; backup,IServiceProvider serviceProvider)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `OpcUaMapper`

_public class_

Source: `src/OpcUa/OpcUa.EntityFramework/OpcUaMapper.cs`

Configures AutoMapper projections from OPC-UA EF data models to read models.

Members:

- `OpcUaMapper()` _constructor_ — Initialises a new and builds the mapping configuration.
- `IMapper Mapper` _property_ — Gets the configured instance.

### `Industria4.OpcUa.EntityFramework.DataAccessObject`

#### `OpcUaDataAccessObject&lt;TDataModel, TReadModel&gt;`

_internal class_

Source: `src/OpcUa/OpcUa.EntityFramework/DataAccessObject/OpcUaDataAccessObject.cs`

Members:

- `OpcUaDataAccessObject(OpcUa.EntityFramework.DataModel.OpcUaContext context,OpcUaMapper mapperAccessor)` _constructor_
- `IQueryable&lt;TReadModel&gt; Query` _property_

### `Industria4.OpcUa.EntityFramework.DataModel`

#### `OpcUaContext`

_internal class_

Source: `src/OpcUa/OpcUa.EntityFramework/DataModel/OpcUaContext.cs`

Members:

- `OpcUaContext(DbContextOptions&lt;OpcUaContext&gt; options)` _constructor_
- `void OnModelCreating(ModelBuilder modelBuilder)` _method_
- `DbSet&lt;Server.Server&gt; Servers` _property_

### `Industria4.OpcUa.EntityFramework.DataModel.Server`

#### `Server`

_internal class_

Source: `src/OpcUa/OpcUa.EntityFramework/DataModel/Server/Server.cs`

Members:

- `string DefaultDescription` _property_
- `string Descriptions` _property_
- `byte[] EntityVersion` _property_
- `string Id` _property_
- `bool IsDeleted` _property_
- `string Metadata` _property_
- `string Password` _property_
- `string Uri` _property_
- `string UserName` _property_
- `bool UseSecurity` _property_

### `Industria4.OpcUa.EntityFramework.Repositories`

#### `ServerRepository`

_internal class_

Source: `src/OpcUa/OpcUa.EntityFramework/Repositories/ServerRepository.cs`

Members:

- `ServerRepository(DataModel.OpcUaContext context,ILogger&lt;ServerRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;Industria4.OpcUa.DomainModel.Server.Server&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;Industria4.OpcUa.DomainModel.Server.Server&gt; entities)` _method_
- `void ToDataModel(Industria4.OpcUa.DomainModel.Server.Server entity,DataModel.Server.Server dataModel)` _method_
- `Industria4.OpcUa.DomainModel.Server.Server ToDomainModel(DataModel.Server.Server dataModel)` _method_

### `Industria4.OpcUa.Http`

#### `HttpOpcUaOptions`

_public class_

Source: `src/OpcUa/OpcUa.Http/HttpGlobalizationOptions.cs`

HTTP client configuration options for the OPC-UA HTTP service.

Members:

- `Uri OpcUa` _property_ — Gets or sets the base URI of the OPC-UA HTTP service. Defaults to `http://localhost:8002`.

#### `NodeClient`

_public class_

Source: `src/OpcUa/OpcUa.Http/NodeClient.cs`

HTTP client for OPC-UA node read and write operations.

Members:

- `NodeClient(RestClient restClient,IOptions&lt;HttpOpcUaOptions&gt; options)` _constructor_ — Initialises a new using the configured OPC-UA service options.
- `Task WriteAsync(WriteModel model,CancellationToken token = default)` _method_ — Writes node values to the OPC-UA service.

#### `ServerClient`

_public class_

Source: `src/OpcUa/OpcUa.Http/ServerClient.cs`

HTTP client for OPC-UA server CRUD operations.

Members:

- `ServerClient(RestClient restClient,IOptions&lt;HttpOpcUaOptions&gt; options)` _constructor_ — Initialises a new using the configured OPC-UA service options.
- `Task AddAsync(AddOrUpdateServerCommand command,CancellationToken token = default)` _method_ — Creates or updates the server described by the given command.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the server with the given identifier.
- `Task&lt;DomainModel.Server.Server&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Returns the full domain model for the server with the given identifier.

### `Industria4.OpcUa.Http.Client`

#### `BaseModel&lt;TNodes&gt;`

_public class_

Source: `src/OpcUa/OpcUa.Http/Client/BaseModel.cs`

Base HTTP request model for OPC-UA node operations.

Members:

- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets arbitrary metadata passed alongside the request.
- `TNodes Nodes` _property_ — Gets the collection of nodes included in the request.
- `string ServerId` _property_ — Gets or sets the identifier of the target OPC-UA server.

#### `ReadModel`

_public class_

Source: `src/OpcUa/OpcUa.Http/Client/ReadModel.cs`

HTTP request model for reading OPC-UA node values by node-ID string.

#### `ReadResponseModel`

_public class_

Source: `src/OpcUa/OpcUa.Http/Client/ReadResponseModel.cs`

HTTP response model containing the read values for OPC-UA nodes.

Members:

- `Dictionary&lt;string,object&gt; Values` _property_ — Gets or sets a dictionary of node-ID string to its current value.

#### `WriteModel`

_public class_

Source: `src/OpcUa/OpcUa.Http/Client/WriteModel.cs`

HTTP request model for writing typed values to OPC-UA nodes.

### `Industria4.OpcUa.ReadModel`

#### `ServerRead`

_public class_

Source: `src/OpcUa/OpcUa.ReadModel/ServerRead.cs`

Read model (DTO) representing an OPC-UA server entry.

Members:

- `string Description` _property_ — Gets or sets the display description of the server.
- `string Id` _property_ — Gets or sets the unique identifier of the server.
- `bool IsDeleted` _property_ — Gets or sets a value indicating whether the server has been soft-deleted.
- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets the deserialised metadata dictionary (excluded from serialisation).
- `string MetadataJson` _property_ — Gets or sets the raw JSON metadata string (excluded from serialisation).
- `string Uri` _property_ — Gets or sets the OPC-UA endpoint URI.

### `Industria4.OpcUa.WebApi`

#### `Program`

_public class_

Source: `src/OpcUa/OpcUa.WebApi/Program.cs`

Entry point for the OpcUa Web API host, responsible for wiring up the .NET Generic Host with package catalog and Serilog.

Members:

- `IHostBuilder CreateBuilder(params string[] args)` _method_ — Creates and configures the with Serilog, culture defaults, and the package catalog.
- `void Main(string[] args)` _method_ — Application entry point: builds and runs the host, checking dependencies before starting.

#### `Startup`

_public class_

Source: `src/OpcUa/OpcUa.WebApi/Startup.cs`

ASP.NET Core startup configuration for the OPC-UA WebApi service.

Members:

- `Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)` _constructor_ — Initialises a new with configuration and hosting environment.
- `void Configure(IApplicationBuilder app)` _method_ — Configures the HTTP request pipeline.
- `void ConfigureServices(IServiceCollection services)` _method_ — Configures the dependency-injection container.
- `IConfiguration Configuration` _property_ — Gets the application configuration.
- `IHostEnvironment HostingEnvironment` _property_ — Gets the current hosting environment.

### `Industria4.OpcUa.WebApi.Controllers`

#### `ClientController`

_public class_

Source: `src/OpcUa/OpcUa.WebApi/Controllers/ClientController.cs`

REST controller for OPC-UA client read and write operations.

#### `ServerController`

_public class_

Source: `src/OpcUa/OpcUa.WebApi/Controllers/ServerController.cs`

REST controller for OPC-UA server management.

### `Industria4.OpcUa.WebApi.Hosting`

#### `StartupService`

_public class_

Source: `src/OpcUa/OpcUa.WebApi.Hosting/StartupService.cs`

Startup service that registers the OPC-UA WebApi process module.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

#### `WebApiModule`

_public class_

Source: `src/OpcUa/OpcUa.WebApi.Hosting/WebApiModule.cs`

Process module representing the OPC-UA WebApi host process.

Members:

- `WebApiModule(ILogger&lt;WebApiModule&gt; logger,IConfiguration configuration)` _constructor_ — Initialises a new with a logger and configuration.
- `IDictionary&lt;string,string&gt; Environment` _property_
- `string Name` _property_
- `string ProcessNameExe` _property_
- `string WorkingDir` _property_

### `Industria4.Production.Cqrs`

#### `CompositionType`

_public class_

Source: `src/Production/Production.Cqrs/ProductionTypes.cs`

CQRS entity type marker for `Composition` entities.

#### `DeploymentType`

_public class_

Source: `src/Production/Production.Cqrs/ProductionTypes.cs`

CQRS entity type marker for `Deployment` entities.

### `Industria4.Production.Cqrs.Commands.Composition`

#### `AddOrUpdateCompositionCommand`

_public class_

Source: `src/Production/Production.Cqrs/Commands/Composition/AddOrUpdateCompositionCommand.cs`

Command to create or update a composition.

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for the composition.
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `CompositionItem[] Items` _property_ — Gets the ordered list of composition items (model+recipe pairs).
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to the composition.
- `TagsDictionary Tags` _property_ — Gets the tag dictionary for filtering and classification.

#### `CompositionItem`

_public class_

Source: `src/Production/Production.Cqrs/Commands/Composition/CompositionItem.cs`

Represents a single model+recipe pair in a .

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this item.
- `string Key` _property_ — Gets the short key uniquely identifying this item within the composition.
- `MetadataDictionary Metadata` _property_ — Gets the metadata for this item.
- `string ModelId` _property_ — Gets the identifier of the associated production model.
- `string RecipeId` _property_ — Gets the identifier of the associated recipe.

#### `DeleteCompositionCommand`

_public class_

Source: `src/Production/Production.Cqrs/Commands/Composition/DeleteCompositionCommand.cs`

Command to delete a composition by identifier.

Members:

- `DeleteCompositionCommand(string id)` _constructor_ — Initializes a new . The identifier of the composition to delete.

### `Industria4.Production.Cqrs.Commands.Deployment`

#### `AddDeploymentCommand`

_public class_

Source: `src/Production/Production.Cqrs/Commands/Deployment/AddDeploymentCommand.cs`

Command to create a new deployment of a composition to production servers.

Members:

- `string CompositionId` _property_ — Gets the identifier of the composition being deployed.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for the deployment.
- `DeploymentItem[] Items` _property_ — Gets the ordered list of deployment items mapping composition item keys to servers.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to the deployment.
- `TagsDictionary Tags` _property_ — Gets the tag dictionary for filtering and classification.

#### `DeleteDeploymentCommand`

_public class_

Source: `src/Production/Production.Cqrs/Commands/Deployment/DeleteDeploymentCommand.cs`

Command to delete a deployment by identifier.

Members:

- `DeleteDeploymentCommand(string id)` _constructor_ — Initializes a new . The identifier of the deployment to delete.

#### `DeploymentItem`

_public class_

Source: `src/Production/Production.Cqrs/Commands/Deployment/DeploymentItem.cs`

Represents a single deployment item mapping a composition item key to an optional target server.

Members:

- `string CompositionItemKey` _property_ — Gets the composition item key this deployment item is associated with.
- `MetadataDictionary Metadata` _property_ — Gets the metadata for this deployment item.
- `string? ServerId` _property_ — Gets the optional identifier of the target server.

#### `UpdateDeploymentCommand`

_public class_

Source: `src/Production/Production.Cqrs/Commands/Deployment/UpdateDeploymentCommand.cs`

Command to update the details of an existing deployment.

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for the deployment.
- `DeploymentItem[] Items` _property_ — Gets the ordered list of updated deployment items.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to the deployment.
- `TagsDictionary Tags` _property_ — Gets the tag dictionary for filtering and classification.

### `Industria4.Production.Cqrs.Handlers`

#### `CompositionHandler`

_internal class_

Source: `src/Production/Production.Cqrs.Handlers/CompositionHandler.cs`

Members:

- `Task Handle(AddOrUpdateCompositionCommand command)` _method_
- `Task Handle(DeleteCompositionCommand command)` _method_

#### `DeploymentHandler`

_internal class_

Source: `src/Production/Production.Cqrs.Handlers/DeploymentHandler.cs`

Members:

- `Task Handle(AddDeploymentCommand command)` _method_
- `Task Handle(UpdateDeploymentCommand command)` _method_
- `Task Handle(DeleteDeploymentCommand command)` _method_

### `Industria4.Production.DomainModel`

#### `Validation`

_public class_

Source: `src/Production/Production.DomainModel/Validation.cs`

Centralises maximum-length constraints for Production domain-model properties.

### `Industria4.Production.DomainModel.Composition`

#### `Composition`

_public class_

Source: `src/Production/Production.DomainModel/Composition/Composition.cs`

Aggregate root describing how one or more production models and recipes are composed into a single production unit.

Members:

- `Composition(string id)` _constructor_ — Initializes a new composition with the given identifier. The unique identifier (max 36 chars).
- `bool Equals(Composition other)` _method_ — Determines whether this composition is equal to the specified composition by comparing identifiers. The composition to compare with. if both compositions share the same ; otherwise, .
- `bool Equals(object obj)` _method_
- `int GetHashCode()` _method_
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions keyed by language.
- `string Id` _property_
- `ValidableList&lt;CompositionItem&gt; Items` _property_ — Gets the ordered list of composition items (model+recipe pairs).
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this composition (lazily initialised).
- `TagsDictionary Tags` _property_ — Gets the tag dictionary for filtering and classification.

#### `CompositionItem`

_public class_

Source: `src/Production/Production.DomainModel/Composition/CompositionItem.cs`

An item within a that pairs a production model with a recipe.

Members:

- `CompositionItem(string key,string modelId,string recipeId)` _constructor_ — Initializes a new composition item. The short unique key identifying this item within the composition. The identifier of the production model. The identifier of the recipe to apply.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this item, keyed by language.
- `string Key` _property_ — Gets the short key uniquely identifying this item within the composition.
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this item (lazily initialised).
- `string ModelId` _property_ — Gets the identifier of the associated production model.
- `string RecipeId` _property_ — Gets the identifier of the associated recipe.

### `Industria4.Production.DomainModel.Deployment`

#### `Deployment`

_public class_

Source: `src/Production/Production.DomainModel/Deployment/Deployment.cs`

Aggregate root representing a specific deployment of a to production servers.

Members:

- `Deployment(string id,string compositionId)` _constructor_ — Initializes a new deployment linked to the specified composition. The unique deployment identifier. The identifier of the composition being deployed.
- `bool Equals(Deployment other)` _method_ — Determines whether this deployment is equal to the specified deployment by comparing identifiers. The deployment to compare with. if both deployments share the same ; otherwise, .
- `bool Equals(object obj)` _method_
- `int GetHashCode()` _method_
- `string CompositionId` _property_ — Gets the identifier of the composition this deployment is based on.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this deployment, keyed by language.
- `string Id` _property_
- `ValidableList&lt;DeploymentItem&gt; Items` _property_ — Gets the ordered list of deployment items.
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this deployment (lazily initialised).
- `TagsDictionary Tags` _property_ — Gets the tag dictionary for filtering and classification.

#### `DeploymentItem`

_public class_

Source: `src/Production/Production.DomainModel/Deployment/DeploymentItem.cs`

A single item in a that maps a composition item key to an optional target server.

Members:

- `DeploymentItem(string compositionItemKey)` _constructor_ — Initializes a new deployment item for the given composition item key. The key of the composition item being deployed.
- `string CompositionItemKey` _property_ — Gets the composition item key this deployment item is associated with.
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this deployment item (lazily initialised).

### `Industria4.Production.EntityFramework`

#### `EntitiesHostedServices`

_internal class_

Source: `src/Production/Production.EntityFramework/EntitiesHostedServices.cs`

Members:

- `EntitiesHostedServices(ILogger&lt;EntitiesHostedServices&gt; logger,Backup&lt;ProductionContext&gt; backup,IServiceProvider serviceProvider)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `ProductionMapper`

_public class_

Source: `src/Production/Production.EntityFramework/ProductionMapper.cs`

AutoMapper configuration for mapping EF data model entities to Production read-model projections.

Members:

- `ProductionMapper()` _constructor_ — Initializes the mapper with → and → profiles.
- `IMapper Mapper` _property_ — Gets the configured instance used to project EF entities to read models.

### `Industria4.Production.EntityFramework.DataAccessObject`

#### `ProductionDataAccessObject&lt;TDataModel, TReadModel&gt;`

_internal class_

Source: `src/Production/Production.EntityFramework/DataAccessObject/ProductionDataAccessObject.cs`

Members:

- `ProductionDataAccessObject(DataModel.ProductionContext context,ProductionMapper mapperAccessor)` _constructor_
- `IQueryable&lt;TReadModel&gt; Query` _property_

### `Industria4.Production.EntityFramework.DataModel`

#### `ProductionContext`

_internal class_

Source: `src/Production/Production.EntityFramework/DataModel/ProductionContext.cs`

Members:

- `ProductionContext(DbContextOptions&lt;ProductionContext&gt; options)` _constructor_
- `void OnModelCreating(ModelBuilder modelBuilder)` _method_
- `DbSet&lt;Composition.CompositionItem&gt; CompositionItems` _property_
- `DbSet&lt;Composition.Composition&gt; Compositions` _property_
- `DbSet&lt;Deployment.Deployment&gt; Deployments` _property_

#### `ProductionContextFactory`

_internal class_

Source: `src/Production/Production.EntityFramework/DataModel/ProductionContextFactory.cs`

Members:

- `ProductionContext CreateDbContext(string[] args)` _method_

### `Industria4.Production.EntityFramework.DataModel.Composition`

#### `Composition`

_internal class_

Source: `src/Production/Production.EntityFramework/DataModel/Composition/Composition.cs`

Members:

- `string DefaultDescription` _property_
- `string Descriptions` _property_
- `byte[] EntityVersion` _property_
- `string Id` _property_
- `bool IsDeleted` _property_
- `List&lt;CompositionItem&gt; Items` _property_
- `string? Metadata` _property_
- `string? Tags` _property_

#### `CompositionItem`

_internal class_

Source: `src/Production/Production.EntityFramework/DataModel/Composition/CompositionItem.cs`

Members:

- `Composition Composition` _property_
- `string CompositionId` _property_
- `string Descriptions` _property_
- `int Id` _property_
- `string Key` _property_
- `string? Metadata` _property_
- `string ModelId` _property_
- `string RecipeIdId` _property_

### `Industria4.Production.EntityFramework.DataModel.Deployment`

#### `Deployment`

_internal class_

Source: `src/Production/Production.EntityFramework/DataModel/Deployment/Deployment.cs`

Members:

- `Composition.Composition Composition` _property_
- `string CompositionId` _property_
- `string DefaultDescription` _property_
- `string Descriptions` _property_
- `byte[] EntityVersion` _property_
- `string Id` _property_
- `bool IsDeleted` _property_
- `List&lt;DeploymentItem&gt; Items` _property_
- `string? Metadata` _property_
- `string? Tags` _property_
- `int VersionMajor` _property_
- `int VersionMinor` _property_
- `string VersionString` _property_

#### `DeploymentItem`

_internal class_

Source: `src/Production/Production.EntityFramework/DataModel/Deployment/DeploymentItem.cs`

Members:

- `Composition.CompositionItem CompositionItem` _property_
- `int CompositionItemId` _property_
- `Deployment Deployment` _property_
- `string DeploymentId` _property_
- `int Id` _property_
- `string? Metadata` _property_
- `string? ServerId` _property_

### `Industria4.Production.EntityFramework.Repositories`

#### `CompositionRepository`

_internal class_

Source: `src/Production/Production.EntityFramework/Repositories/CompositionRepository.cs`

Members:

- `CompositionRepository(DataModel.ProductionContext context,ILogger&lt;CompositionRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;Composition&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;Composition&gt; entities)` _method_
- `Composition ToDomainModel(DataModel.Composition.Composition dataModel)` _method_

#### `DeploymentRepository`

_internal class_

Source: `src/Production/Production.EntityFramework/Repositories/DeploymentRepository.cs`

Members:

- `DeploymentRepository(DataModel.ProductionContext context,ILogger&lt;DeploymentRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;Deployment&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;Deployment&gt; entities)` _method_
- `void RecursiveDelete(object value,HashSet&lt;object&gt; processed)` _method_
- `bool ShouldRecursiveDelete(object value)` _method_
- `void ToDataModel(Deployment entity,DataModel.Deployment.Deployment dataModel)` _method_
- `Deployment ToDomainModel(DataModel.Deployment.Deployment dataModel)` _method_

### `Industria4.Production.Http`

#### `CompositionClient`

_public class_

Source: `src/Production/Production.Http/CompositionClient.cs`

HTTP client for querying and managing compositions via the Production REST API.

Members:

- `CompositionClient(RestClient restClient,IOptions&lt;HttpProductionOptions&gt; options)` _constructor_ — Initializes a new . The underlying REST client. Options containing the service base URI.
- `Task AddOrUpdateAsync(AddOrUpdateCompositionCommand command,CancellationToken token = default)` _method_ — Creates or updates a composition using the provided command.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the composition with the specified identifier.
- `Task&lt;Composition&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Retrieves the full domain composition for the given identifier.

#### `DeploymentClient`

_public class_

Source: `src/Production/Production.Http/DeploymentClient.cs`

HTTP client for querying and managing deployments via the Production REST API.

Members:

- `DeploymentClient(RestClient restClient,IOptions&lt;HttpProductionOptions&gt; options)` _constructor_ — Initializes a new . The underlying REST client. Options containing the service base URI.
- `Task AddAsync(AddDeploymentCommand command,CancellationToken token = default)` _method_ — Creates a new deployment.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the deployment with the specified identifier.
- `Task&lt;DomainModel.Deployment.Deployment&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Retrieves the full domain deployment for the given identifier.
- `Task UpdateAsync(UpdateDeploymentCommand command,CancellationToken token = default)` _method_ — Updates an existing deployment.
- `Uri Uri` _property_ — Gets or sets the base URI for deployment endpoints.

#### `HttpProductionOptions`

_public class_

Source: `src/Production/Production.Http/HttpProductionOptions.cs`

Configuration options for the HTTP Production client.

Members:

- `Uri Production` _property_ — Gets or sets the base URI of the Production service. Defaults to `http://localhost:8007`.

### `Industria4.Production.ReadModel`

#### `CompositionRead`

_public class_

Source: `src/Production/Production.ReadModel/CompositionRead.cs`

Read model representing a composition as returned by the Production query stack.

Members:

- `string Description` _property_ — Gets or sets the default-language description of this composition.
- `string Id` _property_ — Gets or sets the unique composition identifier.
- `bool IsDeleted` _property_ — Gets or sets a value indicating whether this composition has been soft-deleted.
- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets the deserialized metadata dictionary.
- `string MetadataJson` _property_ — Gets or sets the raw JSON metadata string (not serialized to API responses).
- `Dictionary&lt;string,string&gt; Tags` _property_ — Gets or sets the tag dictionary for filtering and classification.
- `string TagsJson` _property_ — Gets or sets the raw JSON tags string (not serialized to API responses).

#### `DeploymentRead`

_public class_

Source: `src/Production/Production.ReadModel/DeploymentRead.cs`

Read model representing a deployment as returned by the Production query stack.

Members:

- `string CompositionDescription` _property_ — Gets or sets the default-language description of the associated composition.
- `string CompositionId` _property_ — Gets or sets the identifier of the composition this deployment is based on.
- `string Description` _property_ — Gets or sets the default-language description of this deployment.
- `string Id` _property_ — Gets or sets the unique deployment identifier.
- `bool IsDeleted` _property_ — Gets or sets a value indicating whether this deployment has been soft-deleted.
- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets the deserialized metadata dictionary.
- `string MetadataJson` _property_ — Gets or sets the raw JSON metadata string (not serialized to API responses).
- `Dictionary&lt;string,string&gt; Tags` _property_ — Gets or sets the tag dictionary for filtering and classification.
- `string TagsJson` _property_ — Gets or sets the raw JSON tags string (not serialized to API responses).
- `string Version` _property_ — Gets or sets the deployment version string.

### `Industria4.Production.WebApi`

#### `Program`

_public class_

Source: `src/Production/Production.WebApi/Program.cs`

Entry point for the Production Web API host.

Members:

- `IHostBuilder CreateBuilder(params string[] args)` _method_ — Creates the with default configuration and the Production web startup. Command-line arguments passed to the host builder.
- `void Main(string[] args)` _method_ — Application entry point. Builds and runs the host.

#### `Startup`

_public class_

Source: `src/Production/Production.WebApi/Startup.cs`

Configures services and the HTTP request pipeline for the Production Web API.

Members:

- `Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)` _constructor_ — Initializes a new with the supplied configuration and host environment. Application configuration. The hosting environment.
- `void Configure(IApplicationBuilder app)` _method_ — Configures the HTTP request pipeline, routing, authentication, and OpenAPI middleware.
- `void ConfigureServices(IServiceCollection services)` _method_ — Registers application services, EF, CQRS, OpenAPI, and authorization with the DI container.
- `IConfiguration Configuration` _property_ — Gets the application configuration.
- `IHostEnvironment HostingEnvironment` _property_ — Gets the hosting environment.

### `Industria4.Production.WebApi.Controllers`

#### `CompositionController`

_public class_

Source: `src/Production/Production.WebApi/Controllers/CompositionController.cs`

#### `DeploymentController`

_public class_

Source: `src/Production/Production.WebApi/Controllers/DeploymentController.cs`

### `Industria4.Production.WebApi.Hosting`

#### `StartupService`

_public class_

Source: `src/Production/Production.WebApi.Hosting/StartupService.cs`

Startup service that registers the Production WebApi process module for hosting.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

#### `WebApiModule`

_public class_

Source: `src/Production/Production.WebApi.Hosting/WebApiModule.cs`

Process module that manages the Production WebApi executable as an out-of-process host.

Members:

- `WebApiModule(ILogger&lt;WebApiModule&gt; logger,IConfiguration configuration)` _constructor_ — Initializes a new . Logger for this module. Application configuration.
- `IDictionary&lt;string,string&gt; Environment` _property_
- `string Name` _property_
- `string ProcessNameExe` _property_
- `string WorkingDir` _property_

### `Industria4.Production.WebApp`

#### `ProductionOptions`

_public class_

Source: `src/Production/Production.WebApp/ProductionOptions.cs`

Runtime configuration options for the Production WebApp module (additional display fields, OpcUa support flag).

Members:

- `Dictionary&lt;string,Dictionary&lt;string,string&gt;&gt; AdditionalFields` _property_ — Gets the raw dictionary of additional display fields keyed by field name, with a nested culture→label map. Populated directly from configuration.
- `Dictionary&lt;string,LanguageDictionary&lt;string&gt;&gt; AdditionalFieldsTyped` _property_ — Gets a lazily-materialised version of with camelCase keys and properly-typed values.
- `bool SupportOpcUa` _property_ — Gets or sets a value indicating whether OpcUa integration features are enabled in the UI. Defaults to `true`.

#### `StartupService`

_public class_

Source: `src/Production/Production.WebApp/StartupService.cs`

Startup service that registers Production WebApp view models, HTTP clients, and Blazor modules. Only runs in client (browser-side Blazor) contexts.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_

### `Industria4.Production.WebApp.Modules`

#### `CompositionModule`

_public class_

Source: `src/Production/Production.WebApp/Modules/CompositionModule.cs`

Members:

- `CompositionModule(IMenuService menuService,IStringLocalizer&lt;Localization&gt; localizer,ILanguageContext languageContext,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)` _constructor_
- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `bool Loaded` _property_
- `string Name` _property_

#### `DeploymentModule`

_public class_

Source: `src/Production/Production.WebApp/Modules/DeploymentModule.cs`

Members:

- `DeploymentModule(IMenuService menuService,ILanguageContext languageContext,IStringLocalizer&lt;Localization&gt; localizer,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)` _constructor_
- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `bool Loaded` _property_
- `string Name` _property_

### `Industria4.Production.WebApp.Routing`

#### `ProductionDynamicRouteBuilderProvider`

_public class_

Source: `src/Production/Production.WebApp/Routing/DynamicRouteBuilderProvider.cs`

Provides the Blazor route types for Production views based on which modules are currently loaded.

Members:

- `ProductionDynamicRouteBuilderProvider(DeploymentModule deploymentModule,CompositionModule compositionModule)` _constructor_ — Initializes a new . The deployment module used to check if deployment routes should be registered. The composition module used to check if composition routes should be registered.
- `IEnumerable&lt;Type&gt; GetTypes()` _method_

### `Industria4.Production.WebApp.ViewModels`

#### `AdditionalFieldViewModel`

_public class_

Source: `src/Production/Production.WebApp/ViewModels/AdditionalFieldViewModel.cs`

View-model representing a single user-defined additional metadata field.

Members:

- `AdditionalFieldViewModel(string key,string value)` _constructor_ — Initialises a new instance with the specified key and value. The field key identifier. The initial field value.
- `string Key` _property_ — Gets the field key identifier.

### `Industria4.Production.WebApp.ViewModels.Composition`

#### `CompositionItemViewModel`

_public class_

Source: `src/Production/Production.WebApp/ViewModels/Composition/CompositionItemViewModel.cs`

View-model representing a single item within a . The parent composition view-model that owns this item.

Members:

- `Task SelectRecipe()` _method_ — Prompts the user to select a recipe for the currently selected model. A representing the asynchronous operation.
- `CompositionItem ToCommand()` _method_ — Converts this view-model into a command object. A populated from the current view-model state.
- `bool CanSelectRecipe` _property_ — Gets a value indicating whether a recipe can be selected (requires a model to be selected first).
- `CompositionViewModel Parent` _property_ — Gets the parent composition view-model that owns this item.

#### `CompositionsViewModel`

_public class_

Source: `src/Production/Production.WebApp/ViewModels/Composition/CompositionsViewModel.cs`

View-model for the compositions list page, providing grid data, navigation, and tag-filtering support.

Members:

- `Task NewCompositionAsync()` _method_ — Navigates to the new-composition form. A completed .

#### `CompositionViewModel`

_public class_

Source: `src/Production/Production.WebApp/ViewModels/Composition/CompositionViewModel.cs`

View-model for the composition create/edit page, encapsulating load, save, and delete operations.

Members:

- `CompositionViewModel(IServiceProvider serviceProvider)` _constructor_ — Initialises a new instance of . The application service provider used to resolve dependencies.
- `void AddItem()` _method_ — Adds a new empty item view-model to the composition items collection.
- `Task DeleteAsync()` _method_ — Prompts the user to confirm deletion, then deletes the composition and navigates back to the list. A representing the asynchronous operation.
- `void DeleteItem(CompositionItemViewModel item)` _method_ — Removes the specified item from the composition items collection. The item view-model to remove.
- `void Dispose()` _method_ — Releases menu-scope resources.
- `Task LoadAsync(string compositionId)` _method_ — Loads composition data and available models/recipes for the given composition identifier. The composition identifier to load, or / empty for a new composition. A representing the asynchronous load operation.
- `Task SaveAsync()` _method_ — Persists the composition (create or update) and shows a confirmation toast. A representing the asynchronous save operation.
- `string CompositionId` _property_ — Gets the identifier of the composition currently being edited, or for a new composition.
- `bool IsNew` _property_ — Gets or sets a value indicating whether this is a new (unsaved) composition.
- `ObservableCollectionEx&lt;CompositionItemViewModel&gt; Items` _property_ — Gets the collection of composition item view-models belonging to this composition.
- `ILanguageContext LanguageContext` _property_ — Gets the active language context used for localisation.
- `ModelRead[] Models` _property_ — Gets the available product models that can be selected for items.
- `Func&lt;string,Task&lt;RecipeRead?&gt;&gt;? SelectRecipeAsync` _property_ — Gets or sets the callback used to prompt the user to pick a recipe for a given model identifier.
- `IServiceProvider ServiceProvider` _property_ — Gets the application service provider.

#### `CompositionViewModelBase`

_public class_

Source: `src/Production/Production.WebApp/ViewModels/Composition/CompositionViewModelBase.cs`

Abstract base view-model shared by composition list and edit screens, providing tag-lookup helpers.

Members:

- `CompositionViewModelBase(IServiceProvider serviceProvider)` _constructor_ — Initialises a new instance of . The application service provider used to resolve dependencies.
- `Task GetTagsKeyAsync(TagsSelectionKeysEventArgs arg)` _method_ — Populates the available tag keys for the tag-selection component. The event arguments containing the current filter text and the list to populate. A representing the asynchronous operation.
- `Task GetTagValuesAsync(TagsSelectionValuesEventArgs arg)` _method_ — Populates the available tag values for a given tag key in the tag-selection component. The event arguments containing the key, the current filter text, and the list to populate. A representing the asynchronous operation.
- `ILanguageContext LanguageContext` _property_ — Gets the active language context used for localisation.
- `IServiceProvider ServiceProvider` _property_ — Gets the application service provider.

### `Industria4.Production.WebApp.ViewModels.Deployment`

#### `DeploymentItemViewModel`

_public class_

Source: `src/Production/Production.WebApp/ViewModels/Deployment/DeploymentItemViewModel.cs`

View model for a single item within a deployment, associating an OPC UA server with a composition item.

Members:

- `DeploymentItem ToCommand()` _method_ — Creates a command payload from the current view-model state. A representing this item for the deployment command.
- `CompositionItem CompositionItem` _property_ — Gets the composition item that this deployment item is based on.
- `ModelRead Model` _property_ — Gets the OPC UA model associated with this deployment item.
- `DeploymentViewModel Parent` _property_ — Gets the parent that owns this item.
- `RecipeRead Recipe` _property_ — Gets the recipe associated with this deployment item.

#### `DeploymentsViewModel`

_public class_

Source: `src/Production/Production.WebApp/ViewModels/Deployment/DeploymentsViewModel.cs`

View-model for the deployments list page, providing grid data, search, navigation, and tag-filtering support.

Members:

- `Task NewDeploymentAsync(string modelId)` _method_ — Navigates to the new-deployment form for the given composition identifier. The composition identifier to pre-select for the new deployment. A completed .

#### `DeploymentViewModel`

_public class_

Source: `src/Production/Production.WebApp/ViewModels/Deployment/DeploymentViewModel.cs`

View-model for the deployment create/edit page, encapsulating load, save, delete, and download operations.

Members:

- `DeploymentViewModel(IServiceProvider serviceProvider)` _constructor_ — Initialises a new instance of . The application service provider used to resolve dependencies.
- `Task DeleteAsync()` _method_ — Prompts the user to confirm deletion, then deletes the deployment and navigates back to the list. A representing the asynchronous operation.
- `void Dispose()` _method_ — Releases menu-scope resources.
- `Task DownloadAsync()` _method_ — Downloads the deployment configuration, prompting to save first if required. A representing the asynchronous operation.
- `Task LoadAsync(string compositionId,string deploymentId)` _method_ — Loads deployment data, composition items, and related lookup data for the given identifiers. The parent composition identifier. The deployment identifier to load, or / empty for a new deployment. A representing the asynchronous load operation.
- `Task&lt;bool&gt; SaveAsync()` _method_ — Persists the deployment (create or update) and shows a confirmation toast. if the save succeeded; otherwise .
- `string CompositionId` _property_ — Gets the identifier of the parent composition for this deployment.
- `string DeploymentId` _property_ — Gets the identifier of the deployment currently being edited, or for a new deployment.
- `LanguageDictionary&lt;string&gt; Description` _property_ — Gets or sets the multilingual description of the deployment.
- `bool IsNew` _property_ — Gets or sets a value indicating whether this is a new (unsaved) deployment.
- `ObservableCollectionEx&lt;DeploymentItemViewModel&gt; Items` _property_ — Gets the collection of deployment item view-models belonging to this deployment.
- `ILanguageContext LanguageContext` _property_ — Gets the active language context used for localisation.
- `ModelRead[] Models` _property_ — Gets the available product models that can be selected for items.
- `RecipeRead[] Recipes` _property_ — Gets the available recipes that can be selected for items.
- `ServerRead[] Servers` _property_ — Gets the available OPC UA servers that can be assigned to deployment items.
- `IServiceProvider ServiceProvider` _property_ — Gets the application service provider.

#### `DeploymentViewModelBase`

_public class_

Source: `src/Production/Production.WebApp/ViewModels/Deployment/DeploymentViewModelBase.cs`

Base view model for deployment create/edit operations, providing shared tag-lookup helpers.

Members:

- `DeploymentViewModelBase(IServiceProvider serviceProvider)` _constructor_ — Initializes a new . The DI service provider used to resolve dependencies.
- `Task GetTagsKeyAsync(TagsSelectionKeysEventArgs arg)` _method_ — Populates the available tag keys matching the given filter string. Event arguments carrying the filter text and receiving the matching keys.
- `Task GetTagValuesAsync(TagsSelectionValuesEventArgs arg)` _method_ — Populates the available tag values for the given key and filter string. Event arguments carrying the tag key, filter text, and receiving the matching values.
- `ILanguageContext LanguageContext` _property_ — Gets the current UI language context.
- `IServiceProvider ServiceProvider` _property_ — Gets the DI service provider.

### `Industria4.ReadModel`

#### `IDelete`

_public interface_

Source: `src/Shared/ReadModel/IDelete.cs`

Interface implemented by object which supports deletion

### `Industria4.Recipes.Cqrs`

#### `ModelType`

_public class_

Source: `src/Recipes/Recipes.Cqrs/RecipesTypes.cs`

CQRS entity type marker for `Model` entities.

#### `RecipeType`

_public class_

Source: `src/Recipes/Recipes.Cqrs/RecipesTypes.cs`

CQRS entity type marker for `Recipe` entities.

### `Industria4.Recipes.Cqrs.Commands.Model`

#### `AddOrUpdateModelCommand`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/AddOrUpdateModelCommand.cs`

Command to create a new recipe model or update an existing one.

Members:

- `string BaseModelId` _property_ — Gets the optional identifier of the parent/base model this model derives from.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this model.
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic concurrency control.
- `MetadataDictionary Metadata` _property_ — Gets optional additional metadata.
- `ParameterGroup[] ParameterGroups` _property_ — Gets the parameter groups that define the model structure.
- `bool RecipeSupported` _property_ — Gets a value indicating whether recipes can be created from this model.
- `int SortIndex` _property_ — Gets the display sort order index.

#### `DeleteModelCommand`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/DeleteModelCommand.cs`

Command to permanently delete a recipe model.

Members:

- `DeleteModelCommand(string id)` _constructor_ — Initializes a new command targeting the model with the given `id`. The identifier of the model to delete.

#### `LookupValueItem`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

A single selectable item in a definition.

Members:

- `LookupValueItem(LanguageDictionary&lt;string&gt; descriptions,DataValue value)` _constructor_ — Initializes a new lookup value item. Localised labels shown to the user for this item. The stored data value for this item.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised labels for this item.
- `DataValue Value` _property_ — Gets the stored data value for this item.

#### `LookupValueParameter`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

A value parameter definition whose allowed values are constrained to a predefined lookup list.

Members:

- `LookupValueParameter(LanguageDictionary&lt;string&gt; descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,DataType type,string unit,string format,IEnumerable&lt;LookupValueItem&gt; values,string readNodeId,string writeNodeId,DataValue defaultValue)` _constructor_ — Initializes a new instance of .
- `LookupValueItem[] Values` _property_ — Gets the list of allowed values and their localised labels.

#### `ModelLinkParameter`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

A model parameter definition that links to an existing recipe (model-link pattern).

Members:

- `ModelLinkParameter(LanguageDictionary&lt;string&gt; descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,string modelId,string defaultRecipeId)` _constructor_ — Initializes a new model-link parameter definition.
- `string DefaultRecipeId` _property_ — Gets the identifier of the default linked recipe.

#### `ModelParameter`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

A model parameter definition that references another nested model.

Members:

- `ModelParameter(LanguageDictionary&lt;string&gt; descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,string modelId)` _constructor_ — Initializes a new model-parameter definition referencing the specified model.
- `string ModelId` _property_ — Gets the identifier of the nested model.

#### `ParameterBase`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

Abstract base for all model parameter definition command DTOs.

Members:

- `int ArraySize` _property_ — Gets the array dimension (0 for a scalar parameter).
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this parameter.
- `MetadataDictionary Metadata` _property_ — Gets optional additional metadata.
- `int SortIndex` _property_ — Gets the display sort order index.

#### `ParameterGroup`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/ParameterGroup.cs`

A group of parameter definitions within a recipe model, identified by a unique key.

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this group.
- `string Key` _property_ — Gets or sets the unique key identifying this group.
- `Dictionary&lt;string,ParameterBase&gt; Parameters` _property_ — Gets the parameter definitions in this group, keyed by parameter ID.
- `int SortIndex` _property_ — Gets the display sort order index.

#### `ValueParameter`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

A numeric value parameter definition with optional minimum and maximum bounds.

Members:

- `ValueParameter(LanguageDictionary&lt;string&gt; descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,DataType type,string unit,string format,DataValue minimum,DataValue maximum,string readNodeId,string writeNodeId,DataValue defaultValue)` _constructor_ — Initializes a new instance of .
- `DataValue Maximum` _property_ — Gets the maximum allowed value, or if unconstrained.
- `DataValue Minimum` _property_ — Gets the minimum allowed value, or if unconstrained.

#### `ValueParameterBase`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

Abstract base for value-type model parameter definitions with OPC-UA node IDs and a data type.

Members:

- `ValueParameterBase(LanguageDictionary&lt;string&gt; descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,DataType type,string unit,string format,string readNodeId,string writeNodeId,DataValue defaultValue)` _constructor_ — Initializes a new value-parameter base with all fields.
- `DataValue DefaultValue` _property_ — Gets the default value for this parameter.
- `string Format` _property_ — Gets the display format string.
- `string ReadNodeId` _property_ — Gets the OPC-UA node ID used to read the parameter value.
- `DataType Type` _property_ — Gets the data type of this parameter.
- `string Unit` _property_ — Gets the measurement unit label.
- `string WriteNodeId` _property_ — Gets the OPC-UA node ID used to write the parameter value.

### `Industria4.Recipes.Cqrs.Commands.Recipe`

#### `AddRecipeCommand`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/AddRecipeCommand.cs`

Command to create a new recipe.

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this recipe.
- `MetadataDictionary Metadata` _property_ — Gets optional additional metadata.
- `string ModelId` _property_ — Gets the identifier of the model this recipe is based on.
- `ParameterGroup[] ParametersGroups` _property_ — Gets the parameter-value groups for this recipe.
- `Dictionary&lt;Uri,string&gt; RemoteRecipes` _property_ — Gets the map of remote service URIs to the remote recipe identifiers used for distributed recipe execution.

#### `CloneRecipeCommand`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/CloneRecipeCommand.cs`

Command to clone an existing recipe into a new recipe with the given descriptions.

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for the new cloned recipe.
- `string SourceId` _property_ — Gets the identifier of the recipe to clone.

#### `DeleteRecipeCommand`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/DeleteRecipeCommand.cs`

Command to permanently delete a recipe.

Members:

- `DeleteRecipeCommand(string id)` _constructor_ — Initializes a new command targeting the recipe with the given `id`. The identifier of the recipe to delete.

#### `ModelLinkParameter`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/Parameter.cs`

Recipe parameter value DTO that references a linked recipe by ID.

Members:

- `ModelLinkParameter(string notes,string recipeId)` _constructor_ — Initializes a new model-link parameter DTO. Optional notes. The identifier of the linked recipe.
- `string RecipeId` _property_ — Gets the identifier of the linked recipe.

#### `ModelParameter`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/Parameter.cs`

Recipe parameter value DTO that holds nested parameter groups for each element of an array model parameter.

Members:

- `ModelParameter(string notes,ParameterGroup[][] parametersGroups)` _constructor_ — Initializes a new model parameter DTO. Optional notes. Jagged array of parameter groups (one per array element, each with one group per model parameter group).
- `ParameterGroup[][] ParametersGroups` _property_ — Gets the jagged array of parameter groups for each array element.

#### `ParameterBase`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/Parameter.cs`

Abstract base for recipe parameter value command DTOs.

Members:

- `ParameterBase(string notes)` _constructor_ — Initializes the parameter base with optional notes. Optional notes or comments for this parameter value.
- `string Notes` _property_ — Gets or sets optional notes or comments for this parameter value.

#### `ParameterGroup`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/ParameterGroup.cs`

A group of recipe parameter values, scoped to a model and key.

Members:

- `ParameterGroup(string modelId,string key,Dictionary&lt;string,ParameterBase&gt; parameters)` _constructor_ — Initializes a new recipe parameter group. The model identifier this group belongs to. The group key. The parameter values, keyed by parameter definition ID (case-insensitive).
- `string Key` _property_ — Gets the group key.
- `string ModelId` _property_ — Gets the identifier of the model this group belongs to.
- `Dictionary&lt;string,ParameterBase&gt; Parameters` _property_ — Gets the parameter values for this group, keyed by parameter definition ID.

#### `UpdateRecipeCommand`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/UpdateRecipeCommand.cs`

Command to update an existing recipe's descriptions, parameters, remote links, and metadata.

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions.
- `MetadataDictionary Metadata` _property_ — Gets optional additional metadata.
- `ParameterGroup[] ParametersGroups` _property_ — Gets the updated parameter-value groups.
- `Dictionary&lt;Uri,string&gt; RemoteRecipes` _property_ — Gets the updated map of remote service URIs to remote recipe identifiers.

#### `ValueParameter`

_public class_

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/Parameter.cs`

Recipe parameter value DTO holding a .

Members:

- `ValueParameter(string notes,DataArrayValue value)` _constructor_ — Initializes a new value parameter DTO. Optional notes. The parameter value.
- `DataArrayValue Value` _property_ — Gets the parameter value.

### `Industria4.Recipes.Cqrs.Handlers`

#### `ModelHandler`

_internal class_

Source: `src/Recipes/Recipes.Cqrs.Handlers/ModelHandler.cs`

Members:

- `Task Handle(AddOrUpdateModelCommand command)` _method_
- `Task Handle(DeleteModelCommand command)` _method_

#### `ModelService`

_public class_

Source: `src/Recipes/Recipes.Cqrs.Handlers/ModelService.cs`

Provides domain operations over recipe models.

Members:

- `ModelService(IRepository&lt;Model&gt; modelRepository)` _constructor_ — Initializes a new with the given model repository. The repository used to load models.

#### `RecipeHandler`

_internal class_

Source: `src/Recipes/Recipes.Cqrs.Handlers/RecipeHandler.cs`

Members:

- `Task Handle(Commands.Recipe.CloneRecipeCommand command)` _method_
- `Task Handle(Commands.Recipe.AddRecipeCommand command)` _method_
- `Task Handle(Commands.Recipe.UpdateRecipeCommand command)` _method_
- `Task Handle(Commands.Recipe.DeleteRecipeCommand command)` _method_

#### `RecipeService`

_public class_

Source: `src/Recipes/Recipes.Cqrs.Handlers/RecipeService.cs`

Provides domain operations over recipes and their parameter values.

Members:

- `RecipeService(IRepository&lt;Recipe&gt; recipeRepository,IRepository&lt;Model&gt; modelRepository,ModelService modelService)` _constructor_ — Initializes a new . The repository used to load recipes. The repository used to load models. The service used to flatten model hierarchies.

### `Industria4.Recipes.DomainModel`

#### `Validation`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Validation.cs`

Centralises maximum-length constraints for Recipes domain-model properties.

### `Industria4.Recipes.DomainModel.Model`

#### `LookupValueItem`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/LookupValueParameter.cs`

Represents a single allowable value in a .

Members:

- `LookupValueItem(LanguageDictionary&lt;string&gt; descriptions,DataValue value)` _constructor_ — Initializes a new with the given localised descriptions and value. The per-language display descriptions for this item. The data value that represents this item.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this lookup item, keyed by language.
- `DataValue Value` _property_ — Gets the data value that represents this lookup item.

#### `LookupValueParameter`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/LookupValueParameter.cs`

A recipe model parameter whose value must be chosen from a fixed list of allowable items.

Members:

- `LookupValueParameter()` _constructor_ — Initializes a new empty .
- `LookupValueParameter(LookupValueItem[] values)` _constructor_ — Initializes a new pre-populated with the given lookup items. The initial set of allowable values.
- `LookupValueItem AddValue(string description,DataValue value)` _method_ — Adds a new lookup item using a single-language description string. The human-readable description for the item. The data value associated with the item. The newly created .
- `LookupValueItem AddValue(LanguageDictionary&lt;string&gt; descriptions,DataValue value)` _method_ — Adds a new lookup item with a localised description dictionary. The per-language descriptions for the item. The data value associated with the item. The newly created .
- `void Set(DataType type,DataValue defaultValue,IEnumerable&lt;KeyValuePair&lt;LanguageDictionary&lt;string&gt;,DataValue&gt;&gt; values)` _method_ — Sets this parameter's type, clears all existing items, and adds items from `values`; also updates . The data type for the parameter. The preferred default value; falls back to the first item when not present in `values`. The new set of allowable items, each as a localised description mapped to its value.
- `IReadOnlyList&lt;LookupValueItem&gt; Values` _property_ — Gets the ordered list of allowable lookup items for this parameter.

#### `Model`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/Model.cs`

Aggregate root describing the parameter structure (groups and parameters) that a recipe must adhere to.

Members:

- `Model(string id)` _constructor_ — Initializes a new model with the given identifier. The unique identifier (max 36 chars).
- `bool Equals(Model other)` _method_
- `bool Equals(object obj)` _method_
- `int GetHashCode()` _method_
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this model, keyed by language.
- `string Id` _property_
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this model (lazily initialised).
- `ValidableList&lt;ParameterGroup&gt; ParametersGroups` _property_ — Gets the ordered list of parameter groups defined by this model.
- `bool RecipeSupported` _property_ — Gets or sets a value indicating whether this model supports recipes.

#### `ModelLinkParameter`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/ModelLinkParameter.cs`

A model parameter that also carries a default recipe to apply when the referenced model is used.

Members:

- `ModelLinkParameter(string modelId,string defaultRecipeId)` _constructor_ — Initializes a new model-link parameter with a referenced model and optional default recipe. The identifier of the referenced model. The default recipe identifier, or `null` for no default.

#### `ModelParameter`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/ModelParameter.cs`

A parameter that references another model by its identifier, enabling nested model composition.

Members:

- `ModelParameter(string modelId)` _constructor_ — Initializes a new model parameter pointing to the specified model. The identifier of the referenced model.

#### `ParameterBase`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/ParameterBase.cs`

Base class for all recipe/model parameters, providing common localisation, metadata, and array-size features.

Members:

- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this parameter, keyed by language.
- `bool IsArray` _property_ — Gets a value indicating whether this parameter is an array (i.e. &amp;gt; 0).
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this parameter (lazily initialised).

#### `ParameterGroup`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/ParameterGroup.cs`

Groups a set of parameters under a shared key and sort order.

Members:

- `ParameterGroup(string key)` _constructor_ — Initializes a new parameter group with the given key. The unique key identifying this group within its parent model or recipe.
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this group, keyed by language.
- `string Key` _property_ — Gets the unique key of this parameter group.
- `ValidableDictionary&lt;string,ParameterBase&gt; Parameters` _property_ — Gets the dictionary of parameters within this group, keyed by parameter key (case-insensitive).

#### `ParameterOperation`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/ParameterOperation.cs`

Describes the data-type, measurement unit, and display format for a value parameter.

Members:

- `DataType Type` _property_ — Gets or sets the data type for this parameter's value.

#### `ValueParameter`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/ValueParameter.cs`

A recipe model parameter that holds a typed scalar value constrained by an .

Members:

- `void SetRangeValidator(object minimum,object maximum)` _method_ — Configures a with the given minimum and maximum numeric bounds, converted to the parameter's . The inclusive lower bound; `null` means no lower bound. The inclusive upper bound; `null` means no upper bound.
- `void SetStringValidator(object minimum,object maximum)` _method_ — Configures a with the given minimum and maximum lengths. The minimum allowed string length; `null` defaults to 0. The maximum allowed string length; `null` defaults to .
- `bool ValidateValue(object value)` _method_ — Converts `value` to the parameter's and validates it against . The raw value to validate. `true` if the converted value passes validation; otherwise `false`.

#### `ValueParameterBase`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Model/ValueParameterBase.cs`

Abstract base for value-type model parameters, providing OPC-UA node IDs, an operation descriptor, and a default value.

Members:

- `ParameterOperation Operation` _property_ — Gets the operation configuration (data type, unit, format) for this parameter.
- `DataValue SystemDefaultValue` _property_ — Gets the system-defined default value for this parameter type (implemented by subclasses).

### `Industria4.Recipes.DomainModel.Recipe`

#### `ModelLinkParameter`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Recipe/ModelLinkParameter.cs`

A recipe parameter value that references a linked recipe by ID.

Members:

- `ModelLinkParameter(string recipeId)` _constructor_ — Initializes a new model-link parameter with the specified recipe reference. The identifier of the linked recipe, or `null` if unset.

#### `ModelParameter`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Recipe/ModelParameter.cs`

A recipe parameter that holds nested parameter groups for each element of an array model parameter.

Members:

- `ValidableList&lt;ParameterGroup&gt; AddElement()` _method_ — Adds a new element (a new set of parameter groups) to this model parameter and returns the new group list. The new of for the added element.
- `IReadOnlyList&lt;ValidableList&lt;ParameterGroup&gt;&gt; ParametersGroups` _property_ — Gets the read-only list of parameter group lists (one per array element).

#### `ParameterBase`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Recipe/ParameterBase.cs`

Base class for recipe parameter values, providing a notes field.

#### `ParameterGroup`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Recipe/ParameterGroup.cs`

A group of parameter values within a recipe, scoped to a specific model and key.

Members:

- `ParameterGroup(string modelId,string key)` _constructor_ — Initializes a new parameter group for the given model and key. The identifier of the model that owns the parameter group definition. The unique key identifying this group within the recipe.
- `string Key` _property_ — Equipment.ParameterGroupKey
- `string ModelId` _property_ — Gets the model id associated
- `ValidableDictionary&lt;string,ParameterBase&gt; Parameters` _property_ — key = ParameterDefinitionId

#### `Recipe`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Recipe/Recipe.cs`

Aggregate root representing a recipe that provides parameter values for a specific .

Members:

- `Recipe(string id,string modelId)` _constructor_ — Initializes a new recipe linked to the given model. The unique recipe identifier. The identifier of the model this recipe satisfies.
- `bool Equals(Recipe other)` _method_
- `bool Equals(object obj)` _method_
- `int GetHashCode()` _method_
- `LanguageDictionary&lt;string&gt; Descriptions` _property_ — Gets the localised descriptions for this recipe, keyed by language.
- `string Id` _property_
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this recipe (lazily initialised).
- `string ModelId` _property_ — Gets the identifier of the model this recipe is based on.
- `ValidableList&lt;ParameterGroup&gt; ParametersGroups` _property_ — Gets the ordered list of parameter groups with their values.
- `Dictionary&lt;Uri,string&gt; RemoteRecipes` _property_ — Gets the map of remote recipe URIs to their remote server addresses.

#### `ValueParameter`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Recipe/ValueParameter.cs`

A recipe parameter value that holds a .

Members:

- `DataArrayValue Value` _property_ — Gets or sets the parameter value as a .

### `Industria4.Recipes.DomainModel.Validators`

#### `IValueValidator`

_public interface_

Source: `src/Recipes/Recipes.DomainModel/Validators/IValueValidator.cs`

Defines the contract for validating and coercing recipe parameter values.

#### `RangeValidator`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Validators/RangeValidator.cs`

Validates and coerces numeric values within an inclusive minimum–maximum range.

Members:

- `object Coerce(object value)` _method_
- `bool Validate(object value)` _method_
- `object Maximum` _property_ — Gets or sets the inclusive upper bound; `null` means no upper bound.
- `object Minimum` _property_ — Gets or sets the inclusive lower bound; `null` means no lower bound.

#### `StringValidator`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Validators/StringValidator.cs`

Validates and coerces string values against minimum and maximum length bounds.

Members:

- `object Coerce(object value)` _method_
- `bool Validate(object value)` _method_
- `int MaximumLength` _property_ — Gets or sets the maximum allowed string length (inclusive).
- `int MininumLength` _property_ — Gets or sets the minimum allowed string length (inclusive).

#### `VoidValidator`

_public class_

Source: `src/Recipes/Recipes.DomainModel/Validators/VoidValidator.cs`

A no-op validator that accepts any value and returns it unchanged.

Members:

- `object Coerce(object value)` _method_
- `bool Validate(object value)` _method_

### `Industria4.Recipes.EntityFramework`

#### `EntitiesHostedServices`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/EntitiesHostedServices.cs`

Members:

- `EntitiesHostedServices(ILogger&lt;EntitiesHostedServices&gt; logger,Backup&lt;RecipesContext&gt; backup,IServiceProvider serviceProvider)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `RecipesMapper`

_public class_

Source: `src/Recipes/Recipes.EntityFramework/RecipesMapper.cs`

Configures and exposes an AutoMapper that maps Entity Framework data models to Recipes read models.

Members:

- `RecipesMapper()` _constructor_ — Initializes a new and builds the AutoMapper configuration.
- `IMapper Mapper` _property_ — Gets the configured mapper instance used to project EF data models to read models.

### `Industria4.Recipes.EntityFramework.DataAccessObject`

#### `RecipesDataAccessObject&lt;TDataModel, TReadModel&gt;`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataAccessObject/RecipesDataAccessObject.cs`

Members:

- `RecipesDataAccessObject(DataModel.RecipesContext context,RecipesMapper mapperAccessor)` _constructor_
- `IQueryable&lt;TReadModel&gt; Query` _property_

### `Industria4.Recipes.EntityFramework.DataModel`

#### `RecipesContext`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/RecipesContext.cs`

Members:

- `RecipesContext(DbContextOptions&lt;RecipesContext&gt; options)` _constructor_
- `void OnModelCreating(ModelBuilder modelBuilder)` _method_
- `DbSet&lt;Model.Model&gt; Models` _property_
- `DbSet&lt;Recipe.Recipe&gt; Recipes` _property_

#### `RecipesContextFactory`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/RecipesContextFactory.cs`

Members:

- `RecipesContext CreateDbContext(string[] args)` _method_

### `Industria4.Recipes.EntityFramework.DataModel.Model`

#### `LookupValueItem`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/ValueParameter.cs`

Members:

- `string Descriptions` _property_
- `int Id` _property_
- `LookupValueParameter Parameter` _property_
- `int ParameterId` _property_
- `DataValue Value` _property_

#### `LookupValueParameter`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/ValueParameter.cs`

Members:

- `List&lt;LookupValueItem&gt; Values` _property_

#### `Model`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/Model.cs`

Members:

- `Model BaseModel` _property_
- `string BaseModelId` _property_
- `string DefaultDescription` _property_
- `string Descriptions` _property_
- `byte[] EntityVersion` _property_
- `string Id` _property_
- `bool IsDeleted` _property_
- `string Metadata` _property_
- `List&lt;ParameterGroup&gt; ParameterGroups` _property_
- `bool RecipeSupported` _property_
- `int SortIndex` _property_

#### `ModelLinkParameter`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/ModelLinkParameter.cs`

Members:

- `Recipe.Recipe DefaultRecipe` _property_
- `string DefaultRecipeId` _property_

#### `ModelParameter`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/ModelParameter.cs`

Members:

- `string ModelId` _property_

#### `ParameterBase`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/ParameterBase.cs`

Members:

- `int ArraySize` _property_
- `string Descriptions` _property_
- `byte[] EntityVersion` _property_
- `int Id` _property_
- `string Key` _property_
- `string Metadata` _property_
- `ParameterGroup ParameterGroup` _property_
- `int ParameterGroupId` _property_
- `int SortIndex` _property_

#### `ParameterGroup`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/ParameterGroup.cs`

Members:

- `string Descriptions` _property_
- `int Id` _property_
- `string Key` _property_
- `Model Model` _property_
- `string ModelId` _property_
- `List&lt;ParameterBase&gt; Parameters` _property_
- `int SortIndex` _property_

#### `ParameterOperation`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/ParameterOperation.cs`

#### `ValueParameter`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/ValueParameter.cs`

Members:

- `DataValue Maximum` _property_
- `DataValue Minimum` _property_
- `string ValidatorType` _property_

#### `ValueParameterBase`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Model/ValueParameter.cs`

Members:

- `DataValue DefaultValue` _property_
- `string Format` _property_
- `string ReadNodeId` _property_
- `DataType Type` _property_
- `string Unit` _property_
- `string WriteNodeId` _property_

### `Industria4.Recipes.EntityFramework.DataModel.Recipe`

#### `ModelLinkParameter`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Recipe/Parameter.cs`

Members:

- `Recipe Recipe` _property_
- `string RecipeId` _property_

#### `ModelParameter`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Recipe/Parameter.cs`

Members:

- `List&lt;ParameterGroup&gt; ParameterGroups` _property_

#### `ParameterBase`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Recipe/Parameter.cs`

Members:

- `int Id` _property_
- `string Key` _property_
- `string Notes` _property_
- `ParameterGroup ParameterGroup` _property_
- `int ParameterGroupId` _property_

#### `ParameterGroup`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Recipe/ParameterGroup.cs`

Members:

- `int? ArrayIndex` _property_
- `int Id` _property_
- `string Key` _property_
- `Model.Model Model` _property_
- `string ModelId` _property_
- `ModelParameter ModelParameter` _property_
- `int? ModelParameterId` _property_
- `List&lt;ParameterBase&gt; Parameters` _property_
- `Recipe Recipe` _property_
- `string RecipeId` _property_

#### `Recipe`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Recipe/Recipe.cs`

Members:

- `string DefaultDescription` _property_
- `string Descriptions` _property_
- `byte[] EntityVersion` _property_
- `string Id` _property_
- `bool IsDeleted` _property_
- `string Metadata` _property_
- `DataModel.Model.Model Model` _property_
- `string ModelId` _property_
- `List&lt;ParameterGroup&gt; ParameterGroups` _property_
- `string RemoteRecipes` _property_
- `int VersionMajor` _property_
- `int VersionMinor` _property_
- `string VersionString` _property_

#### `ValueParameter`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/DataModel/Recipe/Parameter.cs`

Members:

- `DataArrayValue Value` _property_

### `Industria4.Recipes.EntityFramework.Repositories`

#### `ModelRepository`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/Repositories/ModelRepository.cs`

Members:

- `ModelRepository(DataModel.RecipesContext context,ILogger&lt;ModelRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;Model&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;Model&gt; entities)` _method_
- `Model ToDomainModel(DataModel.Model.Model dataModel)` _method_

#### `RecipeRepository`

_internal class_

Source: `src/Recipes/Recipes.EntityFramework/Repositories/RecipeRepository.cs`

Members:

- `RecipeRepository(DataModel.RecipesContext context,ILogger&lt;RecipeRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;DomainModel.Recipe.Recipe&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;DomainModel.Recipe.Recipe&gt; entities)` _method_
- `void RecursiveDelete(object value,HashSet&lt;object&gt; processed)` _method_
- `bool ShouldRecursiveDelete(object value)` _method_
- `void ToDataModel(DomainModel.Recipe.Recipe entity,DataModel.Recipe.Recipe dataModel)` _method_
- `DomainModel.Recipe.Recipe ToDomainModel(DataModel.Recipe.Recipe dataModel)` _method_

### `Industria4.Recipes.Http`

#### `HttpRecipesOptions`

_public class_

Source: `src/Recipes/Recipes.Http/HttpRecipesOptions.cs`

Configuration options for the HTTP Recipes client.

Members:

- `Uri Recipes` _property_ — Gets or sets the base URI of the Recipes service. Defaults to `http://localhost:8001`.

#### `ModelClient`

_public class_

Source: `src/Recipes/Recipes.Http/ModelClient.cs`

HTTP client for querying and managing recipe models via the Recipes REST API.

Members:

- `ModelClient(RestClient restClient,IOptions&lt;HttpRecipesOptions&gt; options)` _constructor_ — Initializes a new . The underlying REST client. Options containing the service base URI.
- `Task AddOrUpdateAsync(AddOrUpdateModelCommand command,CancellationToken token = default)` _method_ — Creates or updates a model using the provided command.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the model with the specified identifier.
- `Task&lt;Model&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Retrieves the full domain model for the given identifier. The model identifier. Cancellation token.
- `Task&lt;Model&gt; GetSingleFlattenedModelAsync(string id,CancellationToken token = default)` _method_ — Retrieves a flattened (fully inherited) version of the domain model for the given identifier. The model identifier. Cancellation token.
- `Uri LanguagesUri` _property_ — Gets the URI of the model-languages endpoint.

#### `RecipeClient`

_public class_

Source: `src/Recipes/Recipes.Http/RecipeClient.cs`

HTTP client for querying and managing recipes via the Recipes REST API.

Members:

- `RecipeClient(RestClient restClient,IOptions&lt;HttpRecipesOptions&gt; options)` _constructor_ — Initializes a new . The underlying REST client. Options containing the service base URI.
- `Task AddAsync(AddRecipeCommand command,CancellationToken token = default)` _method_ — Creates a new recipe.
- `Task CloneAsync(CloneRecipeCommand command,CancellationToken token = default)` _method_ — Clones an existing recipe into a new recipe.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the recipe with the specified identifier.
- `Task&lt;DomainModel.Recipe.Recipe&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Retrieves the full domain recipe for the given identifier.
- `Task UpdateAsync(UpdateRecipeCommand command,CancellationToken token = default)` _method_ — Updates an existing recipe.
- `Task WriteRecipeAsync(string recipeId,string serverId,CancellationToken token = default)` _method_ — Triggers writing of a recipe to a device/server. The identifier of the recipe to write. The identifier of the target server/device. Cancellation token.
- `Uri LanguagesUri` _property_ — Gets the URI of the recipe-languages endpoint.
- `Uri Uri` _property_ — Gets or sets the base URI for recipe endpoints.

### `Industria4.Recipes.Http.Recipe`

#### `GetNodeValuesModel`

_public class_

Source: `src/Recipes/Recipes.Http/Recipe/GetNodeValuesApiModel.cs`

API model that converts a map of value parameters to a write-node-ID to dictionary.

Members:

- `GetNodeValuesModel(IDictionary&lt;DomainModel.Model.ValueParameterBase,List&lt;DomainModel.Recipe.ValueParameter&gt;&gt; values)` _constructor_ — Initializes a new model by flattening parameter values keyed by their OPC-UA write node ID. A map from parameter definition to the list of recipe value parameters for that definition.
- `Dictionary&lt;string,DataArrayValue&gt; Nodes` _property_ — Gets or sets the map of OPC-UA write node IDs to their combined .

#### `GetRecipeModel`

_public class_

Source: `src/Recipes/Recipes.Http/Recipe/GetRecipeModel.cs`

Lightweight API model representing a recipe summary (id, model, descriptions, version).

Members:

- `string Description` _property_ — Gets or sets the default-language description of this recipe.
- `string Id` _property_ — Gets or sets the recipe identifier.
- `string ModelDescription` _property_ — Gets or sets the default-language description of the associated model.
- `string ModelId` _property_ — Gets or sets the identifier of the associated model.
- `string Version` _property_ — Gets or sets the recipe version string.

#### `WriteRecipeModel`

_public class_

Source: `src/Recipes/Recipes.Http/Recipe/WriteRecipeModel.cs`

Request model for triggering a recipe write to a device/server.

Members:

- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets optional metadata to attach to the write operation.
- `string RecipeId` _property_ — Gets or sets the identifier of the recipe to write (required).
- `string ServerId` _property_ — Gets or sets the optional identifier of the target server. If omitted, the default server is used.

### `Industria4.Recipes.ReadModel`

#### `ModelRead`

_public class_

Source: `src/Recipes/Recipes.ReadModel/ModelRead.cs`

Read model representing a recipe model as returned by the Recipes query stack.

Members:

- `string BaseDescription` _property_ — Gets or sets the default-language description of the base model.
- `string BaseModelId` _property_ — Gets or sets the identifier of the parent/base model.
- `string Description` _property_ — Gets or sets the default-language description of this model.
- `string Id` _property_ — Gets or sets the unique model identifier.
- `bool IsDeleted` _property_ — Gets or sets a value indicating whether this model has been soft-deleted.
- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets the deserialized metadata dictionary.
- `string MetadataJson` _property_ — Gets or sets the raw JSON metadata string (not serialized to API responses).
- `bool RecipeSupported` _property_ — Gets or sets a value indicating whether recipes can be created from this model.
- `int SortIndex` _property_ — Gets or sets the display sort order index.

#### `RecipeRead`

_public class_

Source: `src/Recipes/Recipes.ReadModel/RecipeRead.cs`

Read model representing a recipe as returned by the Recipes query stack.

Members:

- `string Description` _property_ — Gets or sets the default-language description of this recipe.
- `string Id` _property_ — Gets or sets the unique recipe identifier.
- `bool IsDeleted` _property_ — Gets or sets a value indicating whether this recipe has been soft-deleted.
- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets the deserialized metadata dictionary.
- `string MetadataJson` _property_ — Gets or sets the raw JSON metadata string (not serialized to API responses).
- `string ModelDescription` _property_ — Gets or sets the default-language description of the associated model.
- `string ModelId` _property_ — Gets or sets the identifier of the model this recipe is based on.
- `string Version` _property_ — Gets or sets the recipe version string.

### `Industria4.Recipes.WebApi`

#### `Program`

_public class_

Source: `src/Recipes/Recipes.WebApi/Program.cs`

Entry point for the Recipes Web API host process.

Members:

- `IHostBuilder CreateBuilder(params string[] args)` _method_ — Creates and configures the with Serilog, default culture, and the Kestrel web host. Command-line arguments forwarded to the default host builder. The configured .
- `void Main(string[] args)` _method_ — Builds and runs the host. Command-line arguments passed to the host builder.

#### `Startup`

_public class_

Source: `src/Recipes/Recipes.WebApi/Startup.cs`

ASP.NET Core startup class that configures services and the HTTP request pipeline for the Recipes Web API.

Members:

- `Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)` _constructor_ — Initializes a new with the given configuration and hosting environment. The application configuration (appsettings, environment variables, etc.). The hosting environment used for environment-specific branching.
- `void Configure(IApplicationBuilder app)` _method_ — Configures the HTTP request pipeline middleware. The application builder used to add middleware to the pipeline.
- `void ConfigureServices(IServiceCollection services)` _method_ — Registers all application services with the DI container. The service collection to configure.
- `IConfiguration Configuration` _property_ — Gets the application configuration.
- `IHostEnvironment HostingEnvironment` _property_ — Gets the current hosting environment.

### `Industria4.Recipes.WebApi.Controllers`

#### `ModelController`

_public class_

Source: `src/Recipes/Recipes.WebApi/Controllers/ModelController.cs`

REST API controller that exposes CRUD and import/export operations for recipe models.

#### `RecipeController`

_public class_

Source: `src/Recipes/Recipes.WebApi/Controllers/RecipeController.cs`

REST API controller that exposes CRUD, write-to-device, and import/export operations for recipes.

### `Industria4.Recipes.WebApi.Hosting`

#### `StartupService`

_public class_

Source: `src/Recipes/Recipes.WebApi.Hosting/StartupService.cs`

Startup service that registers the Recipes Web API module with the host's DI container.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_ — Adds the to the service collection so that it is started as part of the host lifecycle. The host configuration. The service collection to configure.

#### `WebApiModule`

_public class_

Source: `src/Recipes/Recipes.WebApi.Hosting/WebApiModule.cs`

Process module that manages the lifecycle of the Recipes Web API child process.

Members:

- `WebApiModule(ILogger&lt;WebApiModule&gt; logger,IConfiguration configuration)` _constructor_ — Initializes a new with the given logger and configuration. Logger used by the base . Application configuration used to resolve environment variables for the child process.
- `IDictionary&lt;string,string&gt; Environment` _property_
- `string Name` _property_
- `string ProcessNameExe` _property_
- `string WorkingDir` _property_

### `Industria4.Recipes.WebApp`

#### `RecipesOptions`

_public class_

Source: `src/Recipes/Recipes.WebApp/RecipesOptions.cs`

Represents recipes options.

Members:

- `Dictionary&lt;string,Dictionary&lt;string,string&gt;&gt; AdditionalRecipeFields` _property_ — dictionary.
- `Dictionary&lt;string,LanguageDictionary&lt;string&gt;&gt; AdditionalRecipeFieldsTyped` _property_ — language dictionary.
- `bool AskMoveElementsConfirmation` _property_ — Gets or sets ask move elements confirmation.
- `Dictionary&lt;string,Uri&gt; RemoteServers` _property_ — dictionary.

#### `StartupService`

_public class_

Source: `src/Recipes/Recipes.WebApp/StartupService.cs`

Represents startup service.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_ — configure services.

### `Industria4.Recipes.WebApp.Modules`

#### `ModelModule`

_public class_

Source: `src/Recipes/Recipes.WebApp/Modules/ModelModule.cs`

Represents model module.

Members:

- `ModelModule(IMenuService menuService,IStringLocalizer&lt;Localization&gt; localizer,ILanguageContext languageContext,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)` _constructor_ — Initializes a new instance of .
- `Task LoadAsync(CancellationToken cancellationToken)` _method_ — load async.
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_ — unload async.
- `bool Loaded` _property_ — Gets or sets loaded.
- `string Name` _property_ — Gets name.

#### `RecipeModule`

_public class_

Source: `src/Recipes/Recipes.WebApp/Modules/RecipeModule.cs`

Represents recipe module.

Members:

- `RecipeModule(IMenuService menuService,ILanguageContext languageContext,IStringLocalizer&lt;Localization&gt; localizer,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)` _constructor_ — Initializes a new instance of .
- `Task LoadAsync(CancellationToken cancellationToken)` _method_ — load async.
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_ — unload async.
- `bool Loaded` _property_ — Gets or sets loaded.
- `string Name` _property_ — Gets name.

### `Industria4.Recipes.WebApp.Routing`

#### `RecipeDynamicRouteBuilderProvider`

_public class_

Source: `src/Recipes/Recipes.WebApp/Routing/DynamicRouteBuilderProvider.cs`

Represents recipe dynamic route builder provider.

Members:

- `RecipeDynamicRouteBuilderProvider(RecipeModule recipeModule,ModelModule modelModule)` _constructor_ — Initializes a new instance of .
- `IEnumerable&lt;Type&gt; GetTypes()` _method_ — get types.

### `Industria4.Recipes.WebApp.ViewModels.Model`

#### `LookupValueItemViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/LookupValueParameterViewModel.cs`

Represents lookup value item view model.

Members:

- `LookupValueItemViewModel(LookupValueParameterViewModel parent)` _constructor_ — Initializes a new instance of .
- `LookupValueItemViewModel(LookupValueParameterViewModel parent,DomainRecipeModel.LookupValueItem item)` _constructor_ — Initializes a new instance of .
- `Command.LookupValueItem GetItem()` _method_ — get item.
- `LanguageDictionary&lt;string&gt; Description` _property_ — Gets or sets description.

#### `LookupValueParameterViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/LookupValueParameterViewModel.cs`

Represents lookup value parameter view model.

Members:

- `LookupValueParameterViewModel(ParameterGroupViewModel parameterGroupViewModel)` _constructor_ — Initializes a new instance of .
- `LookupValueParameterViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.LookupValueParameter valueParameter)` _constructor_ — Initializes a new instance of .
- `LookupValueItemViewModel AddValue()` _method_ — add value.
- `void CheckValues()` _method_ — check values.
- `Command.ParameterBase GetCommand()` _method_ — get command.
- `void Load()` _method_ — load.
- `void RemoveValue(int index)` _method_ — remove value.
- `ObservableCollection&lt;LookupValueItemViewModel&gt; Values` _property_ — Gets values.

#### `ModelParameterViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ModelParameterViewModel.cs`

Represents model parameter view model.

Members:

- `ModelParameterViewModel(ParameterGroupViewModel parameterGroupViewModel)` _constructor_ — Initializes a new instance of .
- `ModelParameterViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.ModelParameter modelParameter)` _constructor_ — Initializes a new instance of .
- `Recipes.Cqrs.Commands.Model.ParameterBase GetCommand()` _method_ — get command.
- `void Load()` _method_ — load.
- `ModelRead Model` _property_ — Gets or sets model.
- `IReadOnlyList&lt;ModelRead&gt; Models` _property_ — Gets models.

#### `ModelsViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ModelsViewModel.cs`

Represents models view model.

Members:

- `Task NewModelAsync()` _method_ — new model async.
- `void SelectModel(ModelRead model)` _method_ — Selects a model and navigates to edit view
- `string LanguagesUri` _property_ — Gets languages uri.

#### `ModelViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ModelViewModel.cs`

Represents model view model.

Members:

- `ModelViewModel(IServiceProvider serviceProvider)` _constructor_ — Initializes a new instance of .
- `Task DeleteAsync()` _method_ — delete async.
- `Task DeleteGroupAsync()` _method_ — delete group async.
- `void Dispose()` _method_ — dispose.
- `Task LoadAsync(string modelId,string groupKey)` _method_ — load async.
- `void NewGroup()` _method_ — new group.
- `Task SaveAsync()` _method_ — save async.
- `ModelRead BaseModel` _property_ — Gets or sets base model.
- `LanguageDictionary&lt;string&gt; Description` _property_ — Gets or sets description.
- `bool IsNew` _property_ — Gets or sets is new.
- `ILanguageContext LanguageContext` _property_ — Gets language context.
- `string ModelId` _property_ — Gets or sets model id.
- `IReadOnlyList&lt;ModelRead&gt; Models` _property_ — Gets or sets models.
- `List&lt;ParameterGroupViewModel&gt; ParametersGroups` _property_ — Gets parameters groups.
- `IReadOnlyList&lt;ModelRead&gt; ParentModels` _property_ — Gets or sets parent models.
- `bool RecipeSupported` _property_ — Gets or sets recipe supported.
- `IServiceProvider ServiceProvider` _property_ — Gets service provider.
- `IReadOnlyList&lt;UnitRead&gt; Units` _property_ — Gets or sets units.

#### `ParameterBaseViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ParameterBaseViewModel.cs`

Represents parameter base view model.

Members:

- `ParameterBaseViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.ParameterBase modelParameter)` _constructor_
- `ParameterBase GetCommand()` _method_ — get command.
- `void Load()` _method_ — load.
- `int ArraySize` _property_ — Gets or sets array size.
- `LanguageDictionary&lt;string&gt; Description` _property_ — Gets or sets description.
- `ParameterGroupViewModel ParameterGroupViewModel` _property_ — Gets parameter group view model.
- `int SortIndex` _property_ — Gets or sets sort index.

#### `ParameterGroupViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ParameterGroupViewModel.cs`

Represents parameter group view model.

Members:

- `ParameterGroupViewModel(ModelViewModel modelViewModel,DomainRecipeModel.ParameterGroup modelParameterGroup)` _constructor_ — Initializes a new instance of .
- `void AddLookupValueParameter()` _method_ — add lookup value parameter.
- `void AddModelParameter()` _method_ — add model parameter.
- `void AddValueParameter()` _method_ — add value parameter.
- `void DeleteParameter(ParameterBaseViewModel parameter)` _method_ — delete parameter.
- `Command.ParameterGroup GetCommand()` _method_ — get command.
- `void Load()` _method_ — load.
- `void Remove()` _method_ — remove.
- `void ReorderParameters()` _method_ — reorder parameters.
- `bool IsActive` _property_ — Gets or sets is active.
- `string Key` _property_ — Gets key.
- `ModelViewModel Model` _property_ — Gets model.
- `ObservableCollectionEx&lt;ParameterBaseViewModel&gt; Parameters` _property_ — Gets parameters.
- `int SortIndex` _property_ — Gets or sets sort index.

#### `ValueParameterBaseViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ValueParameterBaseViewModel.cs`

Represents value parameter base view model.

Members:

- `ValueParameterBaseViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.ValueParameterBase valueParameterBase)` _constructor_
- `object ConvertValue(DataType type,object value,object defaultValue)` _method_
- `void Load()` _method_ — load.
- `object DefaultValue` _property_ — Gets or sets default value.
- `object[] ObjectTypes` _property_ — Gets object types.
- `DataType[] Types` _property_ — Gets types.
- `IReadOnlyList&lt;string&gt; Units` _property_ — Gets units.
- `string WriteNodeId` _property_ — Gets or sets write node id.

#### `ValueParameterViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ValueParameterViewModel.cs`

Represents value parameter view model.

Members:

- `ValueParameterViewModel(ParameterGroupViewModel parameterGroupViewModel)` _constructor_ — Initializes a new instance of .
- `ValueParameterViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.ValueParameter valueParameter)` _constructor_ — Initializes a new instance of .
- `Command.ParameterBase GetCommand()` _method_ — get command.
- `void Load()` _method_ — load.
- `bool CanSetMaximum` _property_ — Gets or sets can set maximum.
- `bool CanSetMinimum` _property_ — Gets or sets can set minimum.

### `Industria4.Recipes.WebApp.ViewModels.Recipe`

#### `AdditionalFieldViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/AdditionalFieldViewModel.cs`

Represents additional field view model.

Members:

- `AdditionalFieldViewModel(string key,string value)` _constructor_ — Initializes a new instance of .
- `string Key` _property_ — Gets key.

#### `IValueParameterBaseViewModel`

_public interface_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ValueParameterBaseViewModel.cs`

Defines the contract for .

#### `LookupValueItemValueViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/LookupValueParameterViewModel.cs`

Represents lookup value item value view model.

Members:

- `LookupValueItemValueViewModel(LookupValueParameterViewModel parent)` _constructor_ — Initializes a new instance of .
- `LookupValueParameterViewModel Parent` _property_ — Gets parent.

#### `LookupValueItemViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/LookupValueParameterViewModel.cs`

Represents lookup value item view model.

Members:

- `LookupValueItemViewModel(DomainRecipeModel.LookupValueItem item)` _constructor_ — Initializes a new instance of .
- `string Description` _property_ — Gets description.
- `object Value` _property_ — Gets value.

#### `LookupValueParameterViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/LookupValueParameterViewModel.cs`

Represents lookup value parameter view model.

Members:

- `LookupValueParameterViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.LookupValueParameter parameter)` _constructor_ — Initializes a new instance of .
- `Task&lt;object&gt; CloneElementAsync(int index)` _method_ — clone element async.
- `void CopyFrom(ParameterBaseViewModel viewModel)` _method_ — copy from.
- `Task&lt;LookupValueItemValueViewModel&gt; CreateElementAsync()` _method_
- `Command.ParameterBase GetCommand()` _method_ — get command.
- `Task LoadValueAsync(ParameterBase parameterBase)` _method_ — load value async.
- `IReadOnlyList&lt;LookupValueItemViewModel&gt; Values` _property_ — Gets values.

#### `ModelParameterViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ModelParameterViewModel.cs`

Represents model parameter view model.

Members:

- `ModelParameterViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.ModelParameter modelParameter)` _constructor_ — Initializes a new instance of .
- `Task&lt;object&gt; CloneElementAsync(int index)` _method_ — clone element async.
- `void CopyFrom(ParameterBaseViewModel viewModel)` _method_ — copy from.
- `Task&lt;ParametersGroupsViewModel&gt; CreateElementAsync()` _method_
- `Command.ParameterBase GetCommand()` _method_ — get command.
- `Task LoadValueAsync(ParameterBase parameterBase)` _method_ — load value async.

#### `ParameterBaseViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ParameterBaseViewModel.cs`

Represents parameter base view model.

Members:

- `ParameterBaseViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.ParameterBase modelParameter)` _constructor_
- `Task&lt;object&gt; AddElementAsync()` _method_ — add element async.
- `Task&lt;object&gt; CloneElementAsync(int index)` _method_ — clone element async.
- `void CopyFrom(ParameterBaseViewModel viewModel)` _method_ — copy from.
- `void Dispose(bool disposing)` _method_
- `void Dispose()` _method_ — dispose.
- `ParameterBase GetCommand()` _method_ — get command.
- `Task LoadModelAsync()` _method_ — load model async.
- `Task LoadValueAsync(Recipes.DomainModel.Recipe.ParameterBase parameterBase)` _method_ — load value async.
- `object MoveElementDown(int index)` _method_ — move element down.
- `object MoveElementUp(int index)` _method_ — move element up.
- `void RemoveElement(int index)` _method_ — remove element.
- `void SetCurrentElement(object element,bool toggle)` _method_ — set current element.
- `int ArraySize` _property_ — Gets array size.
- `bool CanAddElement` _property_ — Gets can add element.
- `string Description` _property_ — Gets description.
- `bool IsArray` _property_ — Gets is array.
- `string Key` _property_ — Gets key.
- `IList ObjectElements` _property_ — Gets object elements.
- `ParameterGroupViewModel ParameterGroup` _property_ — Gets parameter group.
- `ObservableTracker Tracker` _property_
- `string Unit` _property_ — Gets unit.

#### `ParameterBaseViewModel&lt;T&gt;`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ParameterBaseViewModel.cs`

Represents parameter base view model.

Members:

- `ParameterBaseViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.ParameterBase modelParameter)` _constructor_
- `Task&lt;object&gt; AddElementAsync()` _method_ — add element async.
- `Task&lt;object&gt; CloneElementAsync(int index)` _method_ — clone element async.
- `Task&lt;T&gt; CreateElementAsync()` _method_
- `Task LoadModelAsync()` _method_ — load model async.
- `object MoveElementDown(int index)` _method_ — move element down.
- `object MoveElementUp(int index)` _method_ — move element up.
- `void RemoveElement(int index)` _method_ — remove element.
- `bool CanAddElement` _property_ — Gets can add element.
- `ObservableCollection&lt;T&gt; Elements` _property_ — Gets elements.
- `IList ObjectElements` _property_ — Gets object elements.

#### `ParameterGroupViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ParameterGroupViewModel.cs`

Represents parameter group view model.

Members:

- `ParameterGroupViewModel(ParametersGroupsViewModel parent,DomainRecipeModel.ParameterGroup modelParameterGroup)` _constructor_ — Initializes a new instance of .
- `void Dispose(bool disposing)` _method_
- `void Dispose()` _method_ — dispose.
- `Command.ParameterGroup GetCommand()` _method_ — get command.
- `Task LoadModelAsync(string modelId)` _method_ — load model async.
- `Task LoadValuesAsync(IEnumerable&lt;ParameterGroup&gt; parametersGroups)` _method_ — load values async.
- `string Description` _property_ — Gets description.
- `bool IsActive` _property_ — Gets or sets is active.
- `string Key` _property_ — Gets key.
- `string ModelId` _property_ — Gets or sets model id.
- `List&lt;ParameterBaseViewModel&gt; Parameters` _property_ — Gets parameters.
- `ParametersGroupsViewModel Parent` _property_ — Gets parent.

#### `ParametersGroupsViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ParametersGroupsViewModel.cs`

Represents parameters groups view model.

Members:

- `ParametersGroupsViewModel(IServiceProvider serviceProvider)` _constructor_ — Initializes a new instance of .
- `ParametersGroupsViewModel(IServiceProvider serviceProvider,ParameterBaseViewModel parent)` _constructor_ — Initializes a new instance of .
- `void Dispose(bool disposing)` _method_
- `void Dispose()` _method_ — dispose.
- `Task LoadModelAsync(string modelId)` _method_ — load model async.
- `void ResetChanges()` _method_ — reset changes.
- `bool HasChanges` _property_ — Gets has changes.
- `ILanguageContext LanguageContext` _property_ — Gets language context.
- `string ModelId` _property_ — Gets or sets model id.
- `List&lt;ParameterGroupViewModel&gt; ParametersGroups` _property_ — Gets parameters groups.
- `ParameterBaseViewModel Parent` _property_ — Gets parent.
- `IServiceProvider ServiceProvider` _property_ — Gets service provider.

#### `RecipeRemoteItemViewModel`

_public record_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/RecipeRemotesViewModel.cs`

Immutable data record representing recipe remote item view model.

Members:

- `RecipeRemoteItemViewModel(Uri uri,string name)` _constructor_ — Initializes a new instance of .
- `void Deconstruct(out Uri Uri,out string Name)` _method_ — deconstruct.
- `void Reset()` _method_ — reset.
- `void SetRecipe(RecipeRead recipe)` _method_ — set recipe.
- `string Name` _property_ — Gets name.
- `string RecipeDescription` _property_ — Gets or sets recipe description.
- `string RecipeId` _property_ — Gets or sets recipe id.
- `Uri Uri` _property_ — Gets uri.

#### `RecipeRemotesViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/RecipeRemotesViewModel.cs`

Represents recipe remotes view model.

Members:

- `RecipeRemotesViewModel(IServiceProvider serviceProvider)` _constructor_ — Initializes a new instance of .
- `void Add(RecipeRemoteItemViewModel item)` _method_ — add.
- `void ChangeRecipe(RecipeRemoteItemViewModel item,RecipeRead recipe)` _method_ — change recipe.
- `Task LoadAsync(IDictionary&lt;Uri,string&gt; remoteRecipes)` _method_ — load async.
- `void Remove(RecipeRemoteItemViewModel item)` _method_ — remove.
- `List&lt;RecipeRemoteItemViewModel&gt; AvailableRemotes` _property_ — Gets available remotes.
- `Dictionary&lt;Uri,string&gt; Data` _property_ — dictionary.
- `List&lt;RecipeRemoteItemViewModel&gt; Remotes` _property_ — Gets remotes.

#### `RecipesViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/RecipesViewModel.cs`

Represents recipes view model.

Members:

- `Task NewRecipeAsync(string modelId)` _method_ — new recipe async.
- `void SelectRecipe(RecipeRead recipe)` _method_ — Selects a recipe and navigates to edit view
- `string LanguagesUri` _property_ — Gets languages uri.

#### `RecipeViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/RecipeViewModel.cs`

Represents recipe view model.

Members:

- `RecipeViewModel(IServiceProvider serviceProvider)` _constructor_ — Initializes a new instance of .
- `Task CloneAsync(string description)` _method_ — clone async.
- `Task DeleteAsync()` _method_ — delete async.
- `void Dispose(bool disposing)` _method_
- `Task DownloadAsync()` _method_ — download async.
- `Task LoadAsync(string modelId,string recipeId,string groupKey)` _method_ — load async.
- `Task LoadModelAsync(string modelId)` _method_ — load model async.
- `Task&lt;bool&gt; SaveAsync()` _method_ — save async.
- `Task ShowValidationErrorsAsync(IEnumerable&lt;string&gt; messages)` _method_ — show validation errors async.
- `LanguageDictionary&lt;string&gt; Description` _property_ — Gets or sets description.
- `bool IsNew` _property_ — Gets or sets is new.
- `string RecipeId` _property_ — Gets or sets recipe id.
- `RecipeRemotesViewModel Remotes` _property_ — Gets remotes.

#### `ValueParameterBaseViewModel&lt;T&gt;`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ValueParameterBaseViewModel.cs`

Represents value parameter base view model.

Members:

- `ValueParameterBaseViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.ValueParameterBase valueParameterBase)` _constructor_
- `Task LoadValueAsync(ParameterBase parameterBase)` _method_ — load value async.
- `DomainRecipeModel.ValueParameterBase Parameter` _property_
- `bool ShowValidation` _property_ — Gets show validation.
- `string Validation` _property_ — Gets validation.

#### `ValueParameterViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ValueParameterViewModel.cs`

Represents value parameter view model.

Members:

- `ValueParameterViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.ValueParameter modelParameter)` _constructor_ — Initializes a new instance of .
- `Task&lt;object&gt; CloneElementAsync(int index)` _method_ — clone element async.
- `void CopyFrom(ParameterBaseViewModel viewModel)` _method_ — copy from.
- `Task&lt;ValueViewModel&gt; CreateElementAsync()` _method_
- `Command.ParameterBase GetCommand()` _method_ — get command.
- `Task LoadValueAsync(ParameterBase parameterBase)` _method_ — load value async.
- `bool ShowValidation` _property_ — Gets show validation.
- `DomainRecipeModel.ValueParameter ValueParameter` _property_ — Gets value parameter.

#### `ValueViewModel`

_public class_

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ValueParameterViewModel.cs`

Represents value view model.

Members:

- `ValueViewModel(ValueParameterViewModel parent)` _constructor_ — Initializes a new instance of .
- `ValueParameterViewModel Parent` _property_ — Gets parent.

### `Industria4.Repository`

#### `IMultiRepository`

_public interface_

Source: `src/Shared/Repository/IMultiRepository.cs`

Represents the repository pattern for generic objects

#### `IMultiRepository&lt;T&gt;`

_public interface_

Source: `src/Shared/Repository/IMultiRepository.cs`

Represents the repository pattern for a specific type

#### `IRepository`

_public interface_

Source: `src/Shared/Repository/IRepository.cs`

Represents the repository pattern for generic objects

#### `IRepository&lt;T&gt;`

_public interface_

Source: `src/Shared/Repository/IRepository.cs`

Represents the repository pattern for a specific type

#### `IRepositoryTransaction`

_public interface_

Source: `src/Shared/Repository/ITransactionalRepository.cs`

Represents an active database transaction that can be committed or rolled back.

#### `ITransactionalRepository`

_public interface_

Source: `src/Shared/Repository/ITransactionalRepository.cs`

Extends a repository with the ability to open explicit database transactions.

#### `MultiRepository&lt;T&gt;`

_public class_

Source: `src/Shared/Repository/MultiRepository.cs`

Base implementation of repository which takes care of casting object to a specific type

Members:

- `Task AddAsync(T entity)` _method_ — Adds the object to the repository
- `Task AddAsync(object entity)` _method_ — Adds the object to the repository
- `Task AddAsync(IEnumerable&lt;T&gt; entities)` _method_ — Adds the objects to the repository
- `Task AddAsync(IEnumerable&lt;object&gt; entities)` _method_ — Adds the objects to the repository
- `Task&lt;bool&gt; ExistAsync(string id)` _method_ — Gets the object by id from the repository
- `Task&lt;T&gt; GetAsync(string id)` _method_ — Gets the object by id from the repository
- `Task&lt;object&gt; GetObjectAsync(string id)` _method_ — Gets the object by id from the repository
- `Task OnAddAsync(IEnumerable&lt;T&gt; entities)` _method_ — Adds the objects to the repository
- `Task OnRemoveAsync(IEnumerable&lt;string&gt; ids)` _method_ — Removes the objects from the repository
- `Task OnUpdateAsync(IEnumerable&lt;T&gt; entities)` _method_ — Updates the object contained into the repository
- `Task RemoveAsync(string id)` _method_ — Removes the object from the repository
- `Task RemoveAsync(IEnumerable&lt;string&gt; ids)` _method_ — Removes the objects from the repository
- `Task UpdateAsync(T entity)` _method_ — Updates the object contained into the repository
- `Task UpdateAsync(object entity)` _method_ — Updates the object contained into the repository
- `Task UpdateAsync(IEnumerable&lt;T&gt; entities)` _method_ — Updates the objects contained into the repository
- `Task UpdateAsync(IEnumerable&lt;object&gt; entities)` _method_ — Updates the objects contained into the repository

#### `Repository&lt;T&gt;`

_public class_

Source: `src/Shared/Repository/Repository.cs`

Base implementation of repository which takes care of casting object to a specific type

Members:

- `Task AddAsync(T entity)` _method_ — Adds the object to the repository
- `Task AddAsync(object entity)` _method_ — Adds the object to the repository
- `Task&lt;bool&gt; ExistAsync(string id)` _method_ — Gets the object by id from the repository
- `Task&lt;T&gt; GetAsync(string id)` _method_ — Gets the object by id from the repository
- `Task&lt;object&gt; GetObjectAsync(string id)` _method_ — Gets the object by id from the repository
- `Task OnAddAsync(T entity)` _method_ — Adds the object to the repository
- `Task&lt;bool&gt; OnExistAsync(string id)` _method_ — Gets the object by id from the repository
- `Task&lt;T&gt; OnGetAsync(string id)` _method_ — Gets the object by id from the repository
- `Task OnRemoveAsync(string id)` _method_ — Removes the object from the repository
- `Task OnUpdateAsync(T entity)` _method_ — Updates the object contained into the repository
- `Task RemoveAsync(string id)` _method_ — Removes the object from the repository
- `Task UpdateAsync(T entity)` _method_ — Updates the object contained into the repository
- `Task UpdateAsync(object entity)` _method_ — Updates the object contained into the repository

#### `RepositoryException`

_public class_

Source: `src/Shared/Repository/RepositoryException.cs`

Exception thrown when a repository operation fails due to a conflict, concurrency violation, or entity-not-found condition.

Members:

- `RepositoryException(EventId eventId,string message,Exception innerException)` _constructor_ — Initializes a new instance with the given event ID, message, and inner exception. The structured log event identifier. The error message. The exception that caused this failure, or `null`.
- `RepositoryException(SerializationInfo info,StreamingContext context)` _constructor_ — Initializes a new instance from serialized data. The serialization info. The streaming context.

#### `RepositoryExtensions`

_public class_

Source: `src/Shared/Repository/RepositoryExtensions.cs`

Extension methods for and its typed variants.

Members:

- `Task AddSafetyAsync&lt;T&gt;(this IRepository&lt;T&gt; repository,T item)` _method_ — Adds or updates the entity based on the id
- `ITransactionalRepository AsTransactional(this IRepository repository)` _method_ — Casts the repository to , throwing if it does not support transactions. The repository to cast. The same repository as .
- `Task ReplaceAsync&lt;T&gt;(this IRepository&lt;T&gt; repository,T item)` _method_ — Replaces the entity identified by `item`.Id with the given item, removing the previous version first. The entity type. The repository to operate on. The new entity value.

### `Industria4.Sequences.Cqrs`

#### `SequenceType`

_public class_

Source: `src/Sequences/Sequences.Cqrs/SequenceTypes.cs`

CQRS entity type marker for `Sequence` entities.

### `Industria4.Sequences.Cqrs.Commands.Sequence`

#### `AddQuantitySequenceCommand`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/AddQuantitySequenceCommand.cs`

Command to add a produced quantity increment to a sequence.

Members:

- `AddQuantitySequenceCommand(string id,double quantity,MetadataDictionary metadata,byte[] entityVersion)` _constructor_ — Initializes a new .
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to this quantity update.
- `double Quantity` _property_ — Gets the quantity increment to add.

#### `AddSequenceCommand`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/AddSequenceCommand.cs`

Command to create a new production sequence.

Members:

- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to this sequence.
- `int Priority` _property_ — Gets or sets the scheduling priority.
- `string RecipeId` _property_ — Gets the identifier of the recipe to execute.
- `double RequiredQuantity` _property_ — Gets the total quantity to produce in this sequence.

#### `ChangeSequencePriority`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/ChangeSequencePriorityCommand.cs`

Represents a single sequence priority change item within a .

Members:

- `ChangeSequencePriority(string id,int priority,byte[] entityVersion)` _constructor_ — Initializes a new priority change item. The sequence identifier. The new priority value. The concurrency token for optimistic locking.
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `string Id` _property_ — Gets the sequence identifier.
- `int Priority` _property_ — Gets the new priority value.

#### `ChangeSequencePriorityCommand`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/ChangeSequencePriorityCommand.cs`

Command to change the scheduling priorities of one or more sequences in a single operation.

Members:

- `ChangeSequencePriorityCommand(ChangeSequencePriority[] priorities)` _constructor_ — Initializes a new . The array of priority update items.
- `ChangeSequencePriority[] Priorities` _property_ — Gets the list of sequence priority updates.

#### `ChangeSequenceStateCommand`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/ChangeSequenceStateCommand.cs`

Command to transition a sequence to a new lifecycle state.

Members:

- `ChangeSequenceStateCommand(string id,SequenceState state,MetadataDictionary metadata,byte[] entityVersion)` _constructor_ — Initializes a new .
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to this state change.
- `SequenceState State` _property_ — Gets the new lifecycle state for the sequence.

#### `DeleteSequenceCommand`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/DeleteSequenceCommand.cs`

Command to delete a sequence by identifier.

Members:

- `DeleteSequenceCommand(string id)` _constructor_ — Initializes a new . The identifier of the sequence to delete.

#### `ResetSequenceCommand`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/ResetSequenceCommand.cs`

Command that resets all sequences to their initial state.

#### `ToggleSequenceCommand`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/ToggleSequenceCommand.cs`

Command that toggles the running state of the sequence engine.

#### `UpdateSequenceCommand`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/UpdateSequenceCommand.cs`

Command to update the details of an existing sequence.

Members:

- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `MetadataDictionary Metadata` _property_ — Gets the metadata to attach to this update.
- `int Priority` _property_ — Gets or sets the scheduling priority.
- `string RecipeId` _property_ — Gets the identifier of the recipe to execute.
- `double RequiredQuantity` _property_ — Gets the total quantity to produce in this sequence.

### `Industria4.Sequences.Cqrs.Events.Sequence`

#### `SequenceQuantityAddedEvent`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Events/Sequence/SequenceQuantityAddedEvent.cs`

Domain event raised when a quantity increment is added to a sequence.

Members:

- `SequenceQuantityAddedEvent(string id,double quantity,MetadataDictionary metadata)` _constructor_ — Initializes a new .
- `MetadataDictionary Metadata` _property_ — Gets the metadata associated with this event.
- `double Quantity` _property_ — Gets the quantity that was added.

#### `SequenceStateChangedEvent`

_public class_

Source: `src/Sequences/Sequences.Cqrs/Events/Sequence/SequenceStateChangedEvent.cs`

Domain event raised when the lifecycle state of a sequence changes.

Members:

- `SequenceStateChangedEvent(string id,SequenceState state,MetadataDictionary metadata)` _constructor_ — Initializes a new .
- `MetadataDictionary Metadata` _property_ — Gets the metadata associated with this event.
- `SequenceState State` _property_ — Gets the new lifecycle state of the sequence.

### `Industria4.Sequences.Cqrs.Handlers`

#### `NextNodeInfoType`

_public enum_

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequencesOptions.cs`

Specifies what value is written to the OPC UA `NextNode` when a sequence is queued.

#### `SequencesHandler`

_internal class_

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequencesHandler.cs`

Members:

- `Task Handle(AddSequenceCommand command)` _method_
- `Task Handle(DeleteSequenceCommand command)` _method_
- `Task Handle(UpdateSequenceCommand command)` _method_
- `Task Handle(ChangeSequenceStateCommand command)` _method_
- `Task Handle(AddQuantitySequenceCommand command)` _method_
- `Task Handle(ResetSequenceCommand command)` _method_
- `Task Handle(ChangeSequencePriorityCommand command)` _method_
- `Task Handle(ToggleSequenceCommand message)` _method_
- `Task Handle(SequenceStateChangedEvent message)` _method_

#### `SequencesOpcUaOptions`

_public class_

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequencesOptions.cs`

OPC UA node and connection settings used by the Sequences service.

Members:

- `string NextNode` _property_ — Gets or sets the OPC UA node identifier to which the next sequence information is written.
- `NextNodeInfoType NextNodeInfo` _property_ — Gets or sets the type of information written to .
- `string Password` _property_ — Gets or sets the password for authenticating with the OPC UA server.
- `string QuantityDoneNode` _property_ — Gets or sets the OPC UA node identifier for the quantity produced so far.
- `string RequiredQuantityNode` _property_ — Gets or sets the OPC UA node identifier for the required production quantity.
- `string SequenceNode` _property_ — Gets or sets the OPC UA node identifier that holds the current active sequence.
- `string StateNode` _property_ — Gets or sets the OPC UA node identifier for the sequence runner state (started/stopped).
- `Uri Uri` _property_ — Gets or sets the URI of the OPC UA server endpoint.
- `string UserName` _property_ — Gets or sets the user name for authenticating with the OPC UA server.

#### `SequencesOptions`

_public class_

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequencesOptions.cs`

Configuration options for the Sequences CQRS handlers and OPC UA integration.

Members:

- `bool AddAnyQuantityDoneChanges` _property_ — Gets or sets a value indicating whether any change to the quantity-done node triggers a sequence state change.
- `SequencesOpcUaOptions OpcUa` _property_ — Gets the OPC UA-specific configuration for the Sequences integration.

#### `SequencesService`

_public class_

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequencesService.cs`

Hosted service that connects to the OPC UA server and synchronises sequence state with the PLC.

Members:

- `void Dispose()` _method_ — Releases the OPC UA client connection.
- `Task&lt;bool&gt; GetIsSequenceRunningAsync()` _method_ — Reads the PLC sequence node to determine whether the sequence runner is currently active. when the runner is active; otherwise .
- `Task&lt;string&gt; RunNextSequenceAsync()` _method_ — Selects the next eligible sequence, transitions it to the `Running` state, and synchronises the PLC. The identifier of the sequence that was started, or when no sequence is available.
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StateChangedAsync(string sequenceId)` _method_ — Reacts to a sequence state-change event by synchronising the OPC UA PLC state. The identifier of the sequence whose state changed. A task that represents the asynchronous synchronisation operation.
- `Task StopAsync(CancellationToken cancellationToken)` _method_
- `Task ToggleSequenceAsync(bool value)` _method_ — Writes the desired running state to the PLC sequence node. to start the runner; to stop it. A task that represents the asynchronous write operation.

### `Industria4.Sequences.DomainModel`

#### `Sequence`

_public class_

Source: `src/Sequences/Sequences.DomainModel/Sequence.cs`

Aggregate root representing a production sequence that tracks progress through required and completed quantities.

Members:

- `Sequence(string id,double requiredQuantity)` _constructor_ — Initializes a new sequence with the given ID and target quantity. The unique identifier. The total quantity to produce.
- `bool EvaluateCanChange(SequenceState state)` _method_ — Determines whether the sequence may transition to the specified `state`. The target state to evaluate. `true` if the transition is permitted; otherwise `false`.
- `string Id` _property_
- `MetadataDictionary Metadata` _property_ — Gets the arbitrary metadata for this sequence (lazily initialised).
- `int Priority` _property_ — Gets or sets the scheduling priority.
- `SequenceState State` _property_ — Gets or sets the current lifecycle state.

#### `SequenceState`

_public enum_

Source: `src/Sequences/Sequences.DomainModel/Sequence.cs`

Represents the lifecycle state of a sequence.

#### `Validation`

_public class_

Source: `src/Sequences/Sequences.DomainModel/Validation.cs`

Centralises maximum-length constraints for Sequences domain-model properties.

### `Industria4.Sequences.EntityFramework`

#### `EntitiesHostedServices`

_internal class_

Source: `src/Sequences/Sequences.EntityFramework/EntitiesHostedServices.cs`

Members:

- `EntitiesHostedServices(ILogger&lt;EntitiesHostedServices&gt; logger,Backup&lt;SequencesContext&gt; backup,IServiceProvider serviceProvider)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

#### `SequencesMapper`

_public class_

Source: `src/Sequences/Sequences.EntityFramework/SequencesMapper.cs`

Creates and exposes AutoMapper configuration that maps between Sequences data models and read models.

Members:

- `SequencesMapper()` _constructor_ — Initializes a new instance of and builds the AutoMapper configuration.
- `IMapper Mapper` _property_ — Gets the configured instance.

### `Industria4.Sequences.EntityFramework.DataAccessObject`

#### `SequencesDataAccessObject&lt;TDataModel, TReadModel&gt;`

_internal class_

Source: `src/Sequences/Sequences.EntityFramework/DataAccessObject/SequencesDataAccessObject.cs`

Members:

- `SequencesDataAccessObject(SequencesContext context,SequencesMapper mapperAccessor)` _constructor_
- `IQueryable&lt;TReadModel&gt; Query` _property_

### `Industria4.Sequences.EntityFramework.DataModel`

#### `Sequence`

_internal class_

Source: `src/Sequences/Sequences.EntityFramework/DataModel/Sequence.cs`

Members:

- `double DoneQuantity` _property_
- `byte[] EntityVersion` _property_
- `string Id` _property_
- `string Metadata` _property_
- `int Priority` _property_
- `string RecipeId` _property_
- `double RequiredQuantity` _property_
- `SequenceState State` _property_

#### `SequencesContext`

_internal class_

Source: `src/Sequences/Sequences.EntityFramework/DataModel/SequencesContext.cs`

Members:

- `SequencesContext(DbContextOptions&lt;SequencesContext&gt; options)` _constructor_
- `void OnConfiguring(DbContextOptionsBuilder optionsBuilder)` _method_
- `void OnModelCreating(ModelBuilder modelBuilder)` _method_
- `DbSet&lt;Sequence&gt; Sequences` _property_

#### `SequencesContextFactory`

_internal class_

Source: `src/Sequences/Sequences.EntityFramework/DataModel/SequencesContextFactory.cs`

Members:

- `SequencesContext CreateDbContext(string[] args)` _method_

### `Industria4.Sequences.EntityFramework.Repositories`

#### `SequenceRepository`

_internal class_

Source: `src/Sequences/Sequences.EntityFramework/Repositories/SequenceRepository.cs`

Members:

- `SequenceRepository(SequencesContext context,ILogger&lt;SequenceRepository&gt; logger)` _constructor_
- `Task OnAddAsync(IEnumerable&lt;DomainModel.Sequence&gt; entities)` _method_
- `Task OnUpdateAsync(IEnumerable&lt;DomainModel.Sequence&gt; entities)` _method_
- `void ToDataModel(DomainModel.Sequence entity,Sequence dataModel)` _method_
- `DomainModel.Sequence ToDomainModel(Sequence dataModel)` _method_

### `Industria4.Sequences.Http`

#### `HttpSequencesOptions`

_public class_

Source: `src/Sequences/Sequences.Http/HttpSequencesOptions.cs`

Configuration options for the HTTP Sequences client.

Members:

- `Uri Sequences` _property_ — Gets or sets the base URI of the Sequences service. Defaults to `http://localhost:8006`.

#### `SequenceClient`

_public class_

Source: `src/Sequences/Sequences.Http/SequenceClient.cs`

HTTP client for querying and managing sequences via the Sequences REST API.

Members:

- `SequenceClient(RestClient restClient,IOptions&lt;HttpSequencesOptions&gt; options)` _constructor_ — Initializes a new . The underlying REST client. Options containing the service base URI.
- `Task AddAsync(AddSequenceCommand command,CancellationToken token = default)` _method_ — Creates a new sequence.
- `Task AddQuantityAsync(AddQuantitySequenceCommand command,CancellationToken token = default)` _method_ — Adds a produced quantity increment to a sequence.
- `Task ChangePriorityAsync(ChangeSequencePriorityCommand command,CancellationToken token = default)` _method_ — Changes the scheduling priorities of one or more sequences.
- `Task ChangeStateAsync(ChangeSequenceStateCommand command,CancellationToken token = default)` _method_ — Transitions a sequence to a new lifecycle state.
- `Task DeleteAsync(string id,CancellationToken token = default)` _method_ — Deletes the sequence with the specified identifier.
- `Task&lt;DomainModel.Sequence&gt; GetAsync(string id,CancellationToken token = default)` _method_ — Retrieves the full domain sequence for the given identifier.
- `Task&lt;DomainModel.Sequence&gt; GetNextAsync(CancellationToken token = default)` _method_ — Returns the next scheduled sequence, or `null` if none is available.
- `Task&lt;bool&gt; GetStatusAsync(CancellationToken token = default)` _method_ — Returns `true` if the sequence engine is currently running.
- `Task ResetAsync(CancellationToken token = default)` _method_ — Resets all sequences to their initial state.
- `Task ToggleAsync(CancellationToken token = default)` _method_ — Toggles the running state of the sequence engine.
- `Task UpdateAsync(UpdateSequenceCommand command,CancellationToken token = default)` _method_ — Updates an existing sequence.

### `Industria4.Sequences.ReadModel`

#### `SequenceRead`

_public class_

Source: `src/Sequences/Sequences.ReadModel/SequenceRead.cs`

Read model representing a sequence as returned by the Sequences query stack.

Members:

- `double DoneQuantity` _property_ — Gets or sets the cumulative quantity that has been produced.
- `byte[] EntityVersion` _property_ — Gets the concurrency token for optimistic locking.
- `string Id` _property_ — Gets or sets the unique sequence identifier.
- `Dictionary&lt;string,object&gt; Metadata` _property_ — Gets or sets the deserialized metadata dictionary.
- `string MetadataJson` _property_ — Gets or sets the raw JSON metadata string (not serialized to API responses).
- `int Priority` _property_ — Gets or sets the scheduling priority.
- `string RecipeId` _property_ — Gets or sets the identifier of the recipe to execute.
- `double RequiredQuantity` _property_ — Gets or sets the total quantity to be produced.
- `SequenceState State` _property_ — Gets or sets the current lifecycle state.

### `Industria4.Sequences.WebApi`

#### `Program`

_public class_

Source: `src/Sequences/Sequences.WebApi/Program.cs`

Entry point for the Sequences Web API host.

Members:

- `IHostBuilder CreateBuilder(params string[] args)` _method_ — Creates and configures the for the Sequences Web API. Command-line arguments passed to the host builder. A configured .
- `void Main(string[] args)` _method_ — Application entry point; builds and runs the host. Command-line arguments.

#### `Startup`

_public class_

Source: `src/Sequences/Sequences.WebApi/Startup.cs`

ASP.NET Core startup class that configures the Sequences Web API application services and middleware pipeline.

Members:

- `Startup(IConfiguration configuration,IHostEnvironment hostingEnvironment)` _constructor_ — Initializes a new instance of . The application configuration. The hosting environment information.
- `void Configure(IApplicationBuilder app)` _method_ — Configures the HTTP request processing middleware pipeline. The application builder used to compose middleware.
- `void ConfigureServices(IServiceCollection services)` _method_ — Configures the services required by the Sequences Web API. The service collection to register services into.
- `IConfiguration Configuration` _property_ — Gets the application configuration.
- `IHostEnvironment HostingEnvironment` _property_ — Gets the hosting environment information.

### `Industria4.Sequences.WebApi.Controllers`

#### `SequenceController`

_public class_

Source: `src/Sequences/Sequences.WebApi/Controllers/SequenceController.cs`

API controller that exposes sequence read endpoints and runner status.

Members:

- `Task&lt;IActionResult&gt; GetStatus()` _method_ — Returns the current running state of the sequence runner. An containing an anonymous object with an `isRunning` boolean.

### `Industria4.Sequences.WebApi.Hosting`

#### `StartupService`

_public class_

Source: `src/Sequences/Sequences.WebApi.Hosting/StartupService.cs`

Startup service that registers the Sequences Web API process module into the host.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_ — Registers the into the service collection. The application configuration. The service collection to register services into.

#### `WebApiModule`

_public class_

Source: `src/Sequences/Sequences.WebApi.Hosting/WebApiModule.cs`

Process module that launches and manages the Sequences Web API executable.

Members:

- `WebApiModule(ILogger&lt;WebApiModule&gt; logger,IConfiguration configuration)` _constructor_ — Initializes a new instance of . Logger for the module. The application configuration.
- `IDictionary&lt;string,string&gt; Environment` _property_
- `string Name` _property_
- `string ProcessNameExe` _property_
- `string WorkingDir` _property_

### `Industria4.Sequences.WebApp`

#### `SectionsProvider`

_internal class_

Source: `src/Sequences/Sequences.WebApp/SectionsProvider.cs`

Members:

- `IEnumerable&lt;SectionItem&gt; GetItems()` _method_

#### `SequencesOptions`

_public class_

Source: `src/Sequences/Sequences.WebApp/SequencesOptions.cs`

Configuration options for the Sequences web application module.

#### `StartupService`

_public class_

Source: `src/Sequences/Sequences.WebApp/StartupService.cs`

Startup service that registers Sequences web application dependencies into the DI container.

Members:

- `void ConfigureServices(IConfiguration configuration,IServiceCollection services)` _method_ — Configures services required by the Sequences web application module. The application configuration. The service collection to register services into.

### `Industria4.Sequences.WebApp.Modules`

#### `SequencesModule`

_public class_

Source: `src/Sequences/Sequences.WebApp/Modules/SequencesModule.cs`

Client-side module that registers the Sequences entry in the navigation menu.

Members:

- `Task LoadAsync(CancellationToken cancellationToken)` _method_
- `Task UnloadAsync(CancellationToken cancellationToken)` _method_
- `string Name` _property_

### `Industria4.Sequences.WebApp.Routing`

#### `DynamicRouteBuilderProvider`

_public class_

Source: `src/Sequences/Sequences.WebApp/Routing/DynamicRouteBuilderProvider.cs`

Provides the routable component types registered by the Sequences web application module.

Members:

- `IEnumerable&lt;Type&gt; GetTypes()` _method_

### `Industria4.Sequences.WebApp.Services`

#### `IRecipesDialogService`

_public interface_

Source: `src/Sequences/Sequences.WebApp/Services/IRecipesDialogService.cs`

Service that shows the recipe picker dialog and returns the user's selection.

#### `RecipesDialogMessage`

_public class_

Source: `src/Sequences/Sequences.WebApp/Services/IRecipesDialogService.cs`

Message passed to subscribers of to communicate the result callback.

Members:

- `RecipesDialogMessage(Action&lt;RecipeRead&gt; callback)` _constructor_ — Initializes a new instance of . The action to invoke with the selected recipe when the dialog closes.
- `Action&lt;RecipeRead&gt; Callback` _property_ — Gets the callback to invoke with the recipe selected by the user.

#### `RecipesDialogService`

_internal class_

Source: `src/Sequences/Sequences.WebApp/Services/RecipesDialogService.cs`

Members:

- `event Action&lt;RecipesDialogMessage&gt; OnShowDialog` _event_
- `Task&lt;RecipeRead&gt; ShowAsync()` _method_

### `Industria4.Sequences.WebApp.ViewModels`

#### `SequencesViewModel`

_public class_

Source: `src/Sequences/Sequences.WebApp/ViewModels/SequencesViewModel.cs`

View model that manages the sequences list and coordinates user interactions for the Sequences page.

Members:

- `Task AddAsync()` _method_ — Adds a new sequence using the currently selected recipe and required quantity. A task that represents the asynchronous add operation.
- `Task ChangePriorityAsync(IEnumerable&lt;string&gt; ids)` _method_ — Updates the priority of sequences according to the supplied ordered list of identifiers. Sequence identifiers in the desired priority order. A task that represents the asynchronous priority-change operation.
- `Task DeleteSequenceAsync(SequenceRead sequence)` _method_ — Deletes the specified sequence and refreshes the list. The sequence to delete. A task that represents the asynchronous delete operation.
- `void Dispose()` _method_ — Releases resources used by the view model, including the background refresh timer.
- `string GetRecipeName(string recipeId)` _method_ — Returns the display name for a recipe by its identifier, or an empty string if not found. The recipe identifier to look up. The recipe description, or when not cached.
- `Task RefreshAsync()` _method_ — Reloads the running state and the sequence list from the server. A task that represents the asynchronous refresh operation.
- `Task ResetAsync()` _method_ — Prompts the user for confirmation and resets all sequences. A task that represents the asynchronous reset operation.
- `Task SelectAsync()` _method_ — Opens the recipe picker dialog and sets from the user's choice. A task that represents the asynchronous select operation.
- `Task ToggleAsync()` _method_ — Toggles the sequence runner on or off and refreshes the current state. A task that represents the asynchronous toggle operation.
- `bool CanChangePriority` _property_ — Gets a value indicating whether the priority of sequences can be changed (only when the runner is not active).
- `ObservableCollection&lt;SequenceRead&gt; Sequences` _property_ — Gets the observable collection of sequences currently loaded from the server.

### `Industria4.Sequences.WebApp.Views`

#### `Sequences`

_public class_

Source: `src/Sequences/Sequences.WebApp/Views/Sequences.razor.cs`

Code-behind for the Sequences Razor component.

Members:

- `void Dispose(bool disposing)` _method_
- `Task OnAfterRenderAsync(bool firstRender)` _method_
- `void OnInitialized()` _method_
- `Task OnInitializedAsync()` _method_
- `Task SetSort(string[] ids)` _method_ — Updates the sequence priorities after the user has reordered rows via drag-and-drop. Sequence identifiers in the new priority order. A task that represents the asynchronous sort operation.

### `Industria4.Transformation`

#### `DomainExcelExporter`

_public class_

Source: `src/Shared/Transformation/DomainExcelExporter.cs`

Concrete Excel exporter that maps entity property descriptors to columns, with optional filtering and language-dictionary support.

Members:

- `DomainExcelExporter(ILogger&lt;DomainExcelExporter&gt; logger,IOptions&lt;GlobalizationOptions&gt; globalizationOptions)` _constructor_ — Initialises a new exporter with logging and globalization options. Logger for diagnostics. Options defining the active cultures for language-dictionary columns.
- `Task ExportItemsAsync&lt;T&gt;(ExcelWorksheet worksheet,IAsyncEnumerable&lt;T&gt; entities)` _method_
- `IAsyncEnumerable&lt;T&gt; ImportItemsAsync&lt;T&gt;(ExcelWorksheet worksheet,IAsyncEnumerable&lt;T&gt; entities)` _method_
- `Func&lt;PropertyDescriptor,bool&gt; FilterFields` _property_ — Gets or sets an optional predicate to exclude specific properties from the export.
- `bool OnlyLanguagesFields` _property_ — Gets or sets a value indicating whether only properties are exported.

#### `DomainExcelExporterBase`

_public class_

Source: `src/Shared/Transformation/DomainExcelExporterBase.cs`

Base class for Excel-based import/export of domain entities, supporting chunked batch operations.

Members:

- `DomainExcelExporterBase(ILogger logger)` _constructor_
- `Task ExportAsync&lt;T&gt;(Stream stream,IMultiRepository&lt;T&gt; repository,IQueryable&lt;string&gt; ids)` _method_ — Exports entities to an Excel stream, reading in pages of 100 from the repository. The entity type. Target stream to write the Excel workbook to. Repository used to load the entities. Query of entity IDs to export.
- `Task ExportAsync&lt;T&gt;(Stream stream,IMultiRepository&lt;T&gt; repository,IQueryable&lt;string&gt; ids,int chunkSize)` _method_ — Exports entities from the repository in chunks of the specified size to an Excel stream. The entity type. Target stream to write the Excel workbook to. Repository used to load the entities. Query of entity IDs to export. Number of entities to process per batch.
- `Task ExportAsync&lt;T&gt;(Stream stream,IAsyncEnumerable&lt;T&gt; entities)` _method_ — Exports an async sequence of entities to an Excel stream. The entity type. Target stream to write the Excel workbook to. Async sequence of entities to export.
- `Task ExportItemsAsync&lt;T&gt;(ExcelWorksheet worksheet,IAsyncEnumerable&lt;T&gt; entities)` _method_
- `Task ImportAsync&lt;T&gt;(Stream stream,IMultiRepository&lt;T&gt; repository,IQueryable&lt;string&gt; ids)` _method_ — Imports entities from an Excel stream, reading in pages of 100 from the repository. The entity type. Stream containing the Excel workbook. Repository used to update the imported entities. Query of entity IDs to import.
- `Task ImportAsync&lt;T&gt;(Stream stream,IMultiRepository&lt;T&gt; repository,IQueryable&lt;string&gt; ids,int chunkSize)` _method_ — Imports entities from an Excel stream in chunks of the specified size, persisting updates to the repository. The entity type. Stream containing the Excel workbook. Repository used to update the imported entities. Query of entity IDs to import. Number of entities to process per batch.
- `IAsyncEnumerable&lt;T&gt; ImportAsync&lt;T&gt;(Stream stream,IAsyncEnumerable&lt;T&gt; entities)` _method_ — Imports entities by merging Excel data into the provided async sequence and yields the updated entities. The entity type. Stream containing the Excel workbook. Async sequence of existing entities to update. Updated entities ready for persistence.
- `IAsyncEnumerable&lt;T&gt; ImportItemsAsync&lt;T&gt;(ExcelWorksheet worksheet,IAsyncEnumerable&lt;T&gt; entities)` _method_

#### `LanguagesExcelExporter`

_public class_

Source: `src/Shared/Transformation/LanguagesExcelExporter.cs`

Exports and imports fields on entities to and from Excel worksheets.

Members:

- `LanguagesExcelExporter(ILogger&lt;LanguagesExcelExporter&gt; logger,IOptions&lt;GlobalizationOptions&gt; globalizationOptions)` _constructor_ — Initialises a new exporter with logging and globalization options. Logger for diagnostics. Options defining the active cultures to export.
- `Task ExportItemsAsync&lt;T&gt;(ExcelWorksheet worksheet,IAsyncEnumerable&lt;T&gt; entities)` _method_
- `IAsyncEnumerable&lt;T&gt; ImportItemsAsync&lt;T&gt;(ExcelWorksheet worksheet,IAsyncEnumerable&lt;T&gt; entities)` _method_

### `Industria4.Web`

#### `DepdendenciesExtensions`

_public class_

Source: `src/Shared/Web/Dependencies.cs`

Extension methods for configuring dependency checkers on .

Members:

- `DependenciesConfiguration AddSqlConnectionCheck(this DependenciesConfiguration configuration,string connectionString)` _method_ — Adds a SQL Server check
- `DependenciesConfiguration AddSqlConnectionsCheck(this DependenciesConfiguration configuration)` _method_ — Adds a SQL Server check for all available connection strings
- `DependenciesConfiguration AddTcpCheck(this DependenciesConfiguration configuration,string host,int port)` _method_ — Adds a TCP connection check

#### `DependenciesConfiguration`

_public class_

Source: `src/Shared/Web/Dependencies.cs`

Configures and holds instances to run before host start.

Members:

- `DependenciesConfiguration(IServiceProvider services)` _constructor_ — Initialises a new configuration with the host service provider. The host's service provider.
- `DependenciesConfiguration Add&lt;T&gt;(T checker)` _method_ — Adds a new check
- `IEnumerable&lt;IDependencyChecker&gt; Checkers` _property_ — Gets the list of configured checker
- `IServiceProvider Services` _property_ — Gets the services

#### `DependenciesConfigurationExtensions`

_public class_

Source: `src/Shared/Web.Cqrs/DependenciesConfigurationExtensions.cs`

Extension methods for that add common service-bus readiness checks.

Members:

- `DependenciesConfiguration AddRabbitMQCheck(this DependenciesConfiguration configuration)` _method_ — Adds a TCP readiness check for every RabbitMQ URI found in the application configuration. The dependencies configuration builder. The same for chaining.

#### `DependenciesHost`

_public class_

Source: `src/Shared/Web/Dependencies.cs`

IWebHost implementation which wraps another one and checks dependencies before to start the original implementation

Members:

- `DependenciesHost(IHost originalHost,DependenciesConfiguration configuration)` _constructor_ — Initialises a new dependencies host wrapping the original host. The underlying host to start after all dependency checks pass. The dependency configuration with registered checkers.
- `void Dispose()` _method_
- `Task StartAsync(CancellationToken cancellationToken = default(CancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken = default(CancellationToken)` _method_
- `IServiceProvider Services` _property_

#### `DictionaryFilterBinder`

_public class_

Source: `src/Shared/Web/DictionaryFilterBinder.cs`

OData filter binder that supports dictionary property access using underscore-separated syntax (e.g. `Property_Key`).

Members:

- `Expression BindDynamicPropertyAccessQueryNode(SingleValueOpenPropertyAccessNode openNode,QueryBinderContext context)` _method_

#### `DictionaryOrderByBinder`

_public class_

Source: `src/Shared/Web/DictionaryFilterBinder.cs`

OData order-by binder that supports dictionary property access using underscore-separated syntax (e.g. `Property_Key`).

Members:

- `Expression BindDynamicPropertyAccessQueryNode(SingleValueOpenPropertyAccessNode openNode,QueryBinderContext context)` _method_

#### `HttpProxyMiddleware`

_public class_

Source: `src/Shared/Web/HttpProxyMiddleware.cs`

ASP.NET Core middleware that forwards requests to a host specified by the `x-proxy-host` header.

Members:

- `HttpProxyMiddleware(RequestDelegate next)` _constructor_ — Initialises the middleware with the next delegate in the pipeline. The next middleware delegate.
- `Task Invoke(HttpContext httpContext,IHttpClientFactory httpClientFactory)` _method_ — Forwards the request to the proxy host when the `x-proxy-host` header is present; otherwise passes through to the next middleware. The current HTTP context. Factory for creating the forwarding HTTP client.

#### `SqlConnectionCheck`

_public class_

Source: `src/Shared/Web/SqlConnectionCheck.cs`

Chech if connection to a SQL Server is available

Members:

- `SqlConnectionCheck(ILogger&lt;SqlConnectionCheck&gt; logger,string connectionString)` _constructor_ — Initialises a new SQL Server dependency check targeting the `master` database. Logger used for status messages. Connection string; the initial catalog is overridden with `master`.
- `Task WaitForReady()` _method_

#### `TcpCheck`

_public class_

Source: `src/Shared/Web/TcpCheck.cs`

Check if a TCP connection to a host works

Members:

- `TcpCheck(ILogger&lt;TcpCheck&gt; logger,string host,int port)` _constructor_ — Initialises a new TCP dependency check. Logger used for status messages. The hostname or IP address to connect to. The TCP port to connect to.
- `Task WaitForReady()` _method_

### `Industria4.Web.Authorization`

#### `FallbackAuthorizationPolicyProvider`

_public class_

Source: `src/Shared/Web.Core/Authorization/FallbackAuthorizationPolicyProvider.cs`

Authorization policy provider that returns a configurable fallback policy when a named policy is not registered.

Members:

- `FallbackAuthorizationPolicyProvider(IOptions&lt;AuthorizationOptions&gt; options,IOptions&lt;PolicyOptions&gt; policyOptions)` _constructor_ — Initializes a new instance, building the fallback policy from `policyOptions`. The ASP.NET Core authorization options. The application-level policy options that control the fallback behaviour.
- `Task&lt;AuthorizationPolicy&gt; GetPolicyAsync(string policyName)` _method_ — Returns the named policy if registered, otherwise returns the fallback policy. The name of the requested policy. The policy, or the fallback if no policy with `policyName` is found.

#### `PolicyItemOptions`

_public class_

Source: `src/Shared/Web.Core/Authorization/PolicyOptions.cs`

Requirements for a single named authorization policy.

Members:

- `bool? OnlyAuthenticated` _property_ — When set, overrides the flag for this specific policy.
- `string[] Roles` _property_ — Gets or sets the roles allowed to satisfy this policy.

#### `PolicyOptions`

_public class_

Source: `src/Shared/Web.Core/Authorization/PolicyOptions.cs`

Top-level authorization policy configuration that maps policy names to their requirements.

Members:

- `bool OnlyAuthenticated` _property_ — Gets or sets a value indicating whether every endpoint requires authentication unless a policy explicitly overrides it.

### `Industria4.Web.Cqrs`

#### `GatewayOptions`

_public class_

Source: `src/Shared/Web.Cqrs/GatewayOptions.cs`

Configuration options for the CQRS HTTP gateway middleware.

Members:

- `PathString BasePath` _property_ — Gets or sets the URL base path at which the gateway is mounted. Defaults to "/".
- `List&lt;Assembly&gt; CqrsAssemblies` _property_ — Gets the assemblies that are scanned for CQRS command and query types to expose through the gateway.

### `Industria4.Web.Cqrs.Controllers`

#### `GatewayController`

_public class_

Source: `src/Shared/Web.Cqrs/Controllers/GatewayController.cs`

Generic MVC controller that acts as an HTTP gateway for CQRS commands, forwarding POST/PUT requests to the bus for processing.

Members:

- `GatewayController(IBus bus)` _constructor_ — Initialises a new instance with the given Rebus bus. The bus used to send commands.
- `Task&lt;IActionResult&gt; Delete(ICommand id)` _method_ — Handles DELETE requests by sending the command to the bus and returning the entity id if applicable. The delete command to send. 200 OK with the entity id if the command implements .
- `Task&lt;IActionResult&gt; PostPut(ICommand value)` _method_ — Handles POST and PUT requests by sending the command to the bus and returning the entity id if applicable. The command to send. 200 OK with the entity id, or 400 Bad Request on validation failure.

### `Industria4.Web.Cqrs.Filters`

#### `WaitCommandEventsAttribute`

_public class_

Source: `src/Shared/Web.Cqrs/Filters/WaitCommandEventsAttribute.cs`

Block any action for completetion until an event is received of any command involved into the action

Members:

- `bool GetShouldHandle(ActionExecutingContext context)` _method_
- `Task OnActionExecutionAsync(ActionExecutingContext context,ActionExecutionDelegate next)` _method_
- `bool Disabled` _property_ — Gets or sets a value indicating whether this filter is disabled.
- `Type[] EventTypes` _property_ — Gets or sets the event types to wait for. Defaults to completed, error, and validation event types.

### `Industria4.Web.Cqrs.ModelBinding`

#### `DeleteModelBinder`

_public class_

Source: `src/Shared/Web.Cqrs/ModelBinding/DeleteModelBinder.cs`

MVC model binder that constructs a command from a single string route parameter, using the command's single-string constructor.

Members:

- `Task BindModelAsync(ModelBindingContext bindingContext)` _method_

### `Industria4.Web.Cqrs.Providers`

#### `CqrsDiscovery`

_public class_

Source: `src/Shared/Web.Cqrs/Providers/CqrsDiscovery.cs`

Service that discovers all types in the configured CQRS assemblies and maps them to controller/action/path tuples for the gateway.

Members:

- `CqrsDiscovery(IOptions&lt;GatewayOptions&gt; options)` _constructor_ — Initialises a new instance and prepares the command-to-route mapping. Gateway options supplying the assemblies to scan.
- `IEnumerable&lt;(Type type,string controller,string action,string path)&gt; GetAll()` _method_ — Returns all discovered command mappings as `(type, controller, action, path)` tuples. An enumerable of tuples describing each command and its gateway route.

#### `GatewayActionDescriptorProvider`

_public class_

Source: `src/Shared/Web.Cqrs/Providers/GatewayActionDescriptorProvider.cs`

MVC that synthesises controller action descriptors for each CQRS command discovered via .

Members:

- `void OnProvidersExecuted(ActionDescriptorProviderContext context)` _method_
- `void OnProvidersExecuting(ActionDescriptorProviderContext context)` _method_
- `int Order` _property_ — Gets the provider execution order. A lower value runs first.

#### `GatewayApiDescriptionProvider`

_public class_

Source: `src/Shared/Web.Cqrs/Providers/GatewayApiDescriptionProvider.cs`

MVC that generates entries for CQRS gateway actions, enabling Swagger/OpenAPI integration.

Members:

- `GatewayApiDescriptionProvider(IModelMetadataProvider modelMetadataProvider)` _constructor_ — Initialises a new instance with the given model-metadata provider. Provides model metadata used to describe action parameters.
- `void OnProvidersExecuted(ApiDescriptionProviderContext context)` _method_
- `void OnProvidersExecuting(ApiDescriptionProviderContext context)` _method_
- `int Order` _property_

#### `GatewayModelMetadataProvider`

_public class_

Source: `src/Shared/Web.Cqrs/Providers/GatewayModelMetadataProvider.cs`

MVC model-metadata provider that returns type-level metadata for parameters, bypassing the standard parameter lookup.

Members:

- `GatewayModelMetadataProvider(ICompositeMetadataDetailsProvider detailsProvider)` _constructor_
- `GatewayModelMetadataProvider(ICompositeMetadataDetailsProvider detailsProvider,IOptions&lt;MvcOptions&gt; optionsAccessor)` _constructor_
- `ModelMetadata GetMetadataForParameter(ParameterInfo parameter,Type modelType)` _method_

#### `GatewayParameterInfo`

_public class_

Source: `src/Shared/Web.Cqrs/Providers/GatewayParameterInfo.cs`

Custom used by the CQRS gateway to represent command parameters with a specific type.

Members:

- `GatewayParameterInfo(Type parameterType)` _constructor_ — Initialises a new instance with the given parameter type. The CLR type of the parameter.
- `Type ParameterType` _property_

### `Industria4.Web.Filters`

#### `ODataServiceFilter`

_internal class_

Source: `src/Shared/Web/Filters/ODataServiceFilter.cs`

Members:

- `void OnActionExecuted(ActionExecutedContext context)` _method_ — on action executed.
- `void OnActionExecuting(ActionExecutingContext context)` _method_ — on action executing.

### `Industria4.Web.Forms`

#### `ObservableObject`

_public class_

Source: `src/Shared/Web.Forms/ObservableObject.cs`

Base class for observable objects that implement .

Members:

- `event PropertyChangedEventHandler PropertyChanged` _event_ — Occurs after a property value changes.

#### `ObservableTracker`

_public class_

Source: `src/Shared/Web.Forms/ObservableTracker.cs`

Tracks changes on objects and collections that implement or , and surfaces aggregated change events.

Members:

- `event NotifyCollectionChangedEventHandler CollectionChanged` _event_
- `event PropertyChangedEventHandler PropertyChanged` _event_
- `event EventHandler SomethingChanged` _event_ — Raised when any tracked property or collection change is detected.
- `void Dispose()` _method_
- `void OnCollectionChanged(object s,NotifyCollectionChangedEventArgs e)` _method_
- `void OnPropertyChanged(object s,PropertyChangedEventArgs e)` _method_
- `void OnSomethingChanged(object s,EventArgs e)` _method_
- `void TrackChanges(object obj,Action&lt;ObservableTrackRules&gt; rules)` _method_ — Begins tracking changes on `obj` using a rules builder delegate. The object to track. An action that configures which child members to also track.
- `void TrackChanges(object obj)` _method_ — Begins tracking changes on `obj` with default rules. The object to track.
- `void TrackChanges(object obj,ObservableTrackRules rules)` _method_ — Begins tracking changes on `obj` using the supplied rules. The object to track. Rules that determine which child members to also track.
- `void UntrackChanges(object obj)` _method_ — Stops tracking changes on `obj`. The object to stop tracking.
- `IEnumerable&lt;object&gt; TrackedItems` _property_ — Gets the set of objects currently being tracked.

#### `ObservableTrackRules`

_public class_

Source: `src/Shared/Web.Forms/ObservableTracker.cs`

Defines rules for which child members an should recursively track.

Members:

- `void Add&lt;T&gt;(Func&lt;T,object&gt; item)` _method_ — Adds a rule that extracts a child object of type `T` to also track. The source object type. Function that extracts the child member to track.
- `void Apply(ObservableTracker observableTracker,object obj)` _method_ — Applies the matching rule (if any) to `obj` by extracting its child and registering it with the tracker. The tracker to register child members with. The object whose child members should be tracked.

### `Industria4.Web.Forms.Components`

#### `ComponentHook&lt;T&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/ComponentHook.cs`

Blazor component that wraps another component and forwards parameter-set notifications through . The type of the target component to hook into.

Members:

- `Task OnParametersSetAsync()` _method_
- `T Child` _property_ — Gets or sets the target component whose parameter changes are monitored.
- `ComponentsHook ComponentsHook` _property_ — Gets or sets the injected components hook service.

#### `ComponentsHook`

_public class_

Source: `src/Shared/Web.Forms/Components/ComponentsHook.cs`

Scoped service that allows external code to register callbacks for Blazor component parameter-set events, with optional history replay.

Members:

- `Task AddHookAsync&lt;T&gt;(Func&lt;T,Task&gt; hook,bool includeHistory = false)` _method_ — Registers an async hook that is called each time a component of type `T` has its parameters set. The component type to hook into. The async callback to invoke. When `true`, the hook is immediately replayed for all previously rendered components of the same type.
- `void Dispose()` _method_
- `Task RaiseParameterSetAsync(IComponent component)` _method_ — Invokes all registered hooks for the given component and records it in the history. The component whose parameters have just been set.
- `void Remove(IComponent component)` _method_ — Removes a specific component instance from the history so that future hooks with `includeHistory: true` do not replay it. The component instance to remove.
- `void RemoveHook&lt;T&gt;(Func&lt;T,Task&gt; hook)` _method_ — Removes a previously registered hook for component type `T`. The component type the hook was registered for. The callback to remove.

#### `ComponentsHookExtensions`

_public class_

Source: `src/Shared/Web.Forms/Components/ComponentsHookExtensions.cs`

Extension methods for that simplify adding typed component hooks.

Members:

- `Task AddDataGridColumnHookAsync&lt;T,TProp&gt;(this ComponentsHook componentsHook,Expression&lt;Func&lt;T,TProp&gt;&gt; property,Action&lt;DataGridPropertyColumn&lt;T,TProp&gt;&gt; hook,bool includeHistory = false)` _method_ — Registers a hook for a specific data-grid property column identified by a property expression. The grid item type. The property type. The components hook service. Expression identifying the column property. Callback invoked for the matching column. When `true`, the hook is immediately replayed for already-rendered columns.
- `Task AddDataGridHookAsync&lt;T&gt;(this ComponentsHook componentsHook,Action&lt;DataGrid&lt;T&gt;&gt; hook,bool includeHistory = false)` _method_ — Registers a hook for any component. The grid item type. The components hook service. Callback invoked for every matching data grid. When `true`, the hook is immediately replayed for already-rendered grids.
- `Task AddHookAsync&lt;T&gt;(this ComponentsHook componentsHook,Action&lt;T&gt; hook,bool includeHistory = false)` _method_ — Registers a synchronous hook for component type `T`. The component type to hook into. The components hook service. The synchronous callback to invoke. When `true`, the hook is immediately replayed for already-rendered components.
- `ModelComponentsHook&lt;T&gt; ForModel&lt;T&gt;(this ComponentsHook componentsHook)` _method_ — Returns a model-scoped hook builder for the given model type `T`. The model type to scope hooks to. The components hook service. A for chaining model-specific hooks.

#### `ContextSection&lt;TContext&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/Section.cs`

Blazor component that registers a named typed render fragment into the current .

Members:

- `void Dispose()` _method_
- `void OnParametersSet()` _method_
- `RenderFragment&lt;TContext&gt; ChildContent` _property_ — Gets or sets the typed content to register under .
- `string Name` _property_ — Gets or sets the section name under which the content is registered.
- `SectionsContext SectionsContext` _property_ — Gets or sets the injected sections context used to register content.

#### `DataGrid&lt;T&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/QuickGrid/DataGrid.cs`

Extends with Bootstrap styling, integration, and a row-selection event. The item type displayed in the grid.

Members:

- `void InterceptClick(RenderTreeBuilder builder,T item)` _method_
- `Task OnParametersSetAsync()` _method_
- `Task SetParametersAsync(ParameterView parameters)` _method_
- `ComponentsHook ComponentsHook` _property_ — Gets or sets the injected components hook service.
- `EventCallback&lt;T&gt; RowSelected` _property_ — Raised when the user clicks or activates a grid row.

#### `DataGridFilteringMode`

_public enum_

Source: `src/Shared/Web.Forms/Components/Select.razor.cs`

Controls how items in a data grid or select component are matched against a search string.

#### `DataGridPaginator`

_public class_

Source: `src/Shared/Web.Forms/Components/QuickGrid/DataGridPaginator.razor.cs`

A hooked version of Paginator that integrates with the ComponentsHook system and provides a custom Bootstrap-styled pagination template.

Members:

- `Task OnParametersSetAsync()` _method_
- `ComponentsHook ComponentsHook` _property_ — Gets or sets the injected components hook service.

#### `DataGridPropertyColumn&lt;T, TProp&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/QuickGrid/DataGridPropertyColumn.cs`

Extends to integrate with and support row click interception via .

Members:

- `void CellContent(RenderTreeBuilder builder,T item)` _method_
- `Task OnParametersSetAsync()` _method_
- `ComponentsHook ComponentsHook` _property_ — Gets or sets the injected components hook service.
- `DataGrid&lt;T&gt; Grid` _property_ — Gets the parent this column belongs to.

#### `DataGridTemplateColumn&lt;T&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/QuickGrid/DataGridTemplateColumn.cs`

Extends to integrate with and optionally intercept row clicks via .

Members:

- `void CellContent(RenderTreeBuilder builder,T item)` _method_
- `Task OnParametersSetAsync()` _method_
- `ComponentsHook ComponentsHook` _property_ — Gets or sets the injected components hook service.
- `DataGrid&lt;T&gt; Grid` _property_ — Gets the parent this column belongs to.
- `bool HandleClick` _property_ — Gets or sets whether cell clicks should be forwarded to the grid's row-selected callback. Defaults to `true`.

#### `IComponentViewModel`

_public interface_

Source: `src/Shared/Web.Forms/Components/IComponentViewModel.cs`

Exposes a public view-model from a Blazor component for use by component hooks and external consumers.

#### `InputNumberHack&lt;T&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/InputNumberHack.cs`

Extends to format values using invariant culture, avoiding parse errors with locale-specific decimal separators, and integrates with .

Members:

- `void Dispose()` _method_
- `string FormatValueAsString(T value)` _method_
- `Task OnParametersSetAsync()` _method_ — Gets or sets the injected components hook service.

#### `ISectionsProvider`

_public interface_

Source: `src/Shared/Web.Forms/Components/SectionPlaceholder.cs`

Contract for objects that supply static section items to a .

#### `ModelComponentsHook&lt;T&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/ComponentsHookExtensions.cs`

Fluent builder for registering model-scoped component hooks, keyed by property expressions. The model type used to match row-input and plain-input components.

Members:

- `ModelComponentsHook(ComponentsHook componentsHook)` _constructor_ — Initialises a new instance backed by the given . The underlying hook service.

#### `MonitorComponentBase`

_public class_

Source: `src/Shared/Web.Forms/Components/MonitorComponentBase.cs`

Base Blazor component that tracks observable changes on registered objects and triggers state re-renders on changes.

Members:

- `MonitorComponentBase()` _constructor_ — Initialises the component and sets up the internal change tracker.
- `void Dispose(bool disposing)` _method_
- `void Dispose()` _method_
- `void MonitorChanges(object obj)` _method_ — Begins tracking changes on `obj` without disposing it when this component is disposed. The object to track.
- `void MonitorChanges(object obj,bool dispose)` _method_ — Begins tracking changes on `obj`, optionally disposing it when this component is disposed. The object to track. When `true`, the object is disposed together with this component.
- `Task OnParametersSetAsync()` _method_

#### `MultiTagSelection`

_public class_

Source: `src/Shared/Web.Forms/Components/MultiTagSelection.razor.cs`

Blazor component for selecting multiple key-value tag pairs, raising events when the selection changes.

Members:

- `void OnInitialized()` _method_ — Gets or sets a value indicating whether the selection is in edit mode.
- `EventCallback&lt;TagsSelectionKeysEventArgs&gt; OnKeys` _property_ — Raised when the user requests keys for the available tags.
- `EventCallback&lt;TagsSelectionValuesEventArgs&gt; OnValues` _property_ — Raised when the user requests values for a specific key.
- `EventCallback&lt;TagSelectionItem[]&gt; SelectedTagsChanged` _property_ — Raised when the selected tag array changes.

#### `ObjectRowInput`

_public class_

Source: `src/Shared/Web.Forms/Components/ObjectRowInput.cs`

Blazor row input component that dynamically renders a typed based on the runtime type of the untyped `Value` parameter.

Members:

- `void BuildRenderTree(RenderTreeBuilder builder)` _method_
- `void BuildRenderTree&lt;T&gt;(RenderTreeBuilder builder)` _method_
- `void OnParametersSet()` _method_
- `IReadOnlyDictionary&lt;string,object&gt; AdditionalAttributes` _property_ — Gets or sets whether the field should be rendered inside a form row wrapper. Gets or sets whether the input is disabled. Gets or sets the display label for the field. Gets or sets the help text shown alongside the field. Gets or sets the current untyped value. Raised when the value changes. Gets or sets the expression used to identify the field for validation. Gets or sets additional HTML attributes to pass through to the underlying input element.

#### `ObjectSelect&lt;T&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/ObjectSelect.cs`

Generic Blazor select input bound to a typed data collection with a customisable item template.

Members:

- `void BuildRenderTree(RenderTreeBuilder builder)` _method_
- `bool TryParseValueFromString(string value,out T result,out string validationErrorMessage)` _method_ — Gets or sets a value indicating whether the select element is disabled. Gets or sets the `select` . May be if accessed before the component is rendered.
- `IEnumerable&lt;T&gt; Data` _property_ — Gets or sets the collection of items to display in the select element.
- `RenderFragment&lt;T&gt; ItemTemplate` _property_ — Gets or sets the render fragment used to render each item.

#### `QuickGridExtensions`

_public class_

Source: `src/Shared/Web.Forms/Extensions/QuickGridExtensions.cs`

Extension methods for that persist and restore column layout in browser local storage.

Members:

- `ValueTask SaveLayoutToStorageAsync&lt;T&gt;(this QuickGrid&lt;T&gt; grid,IJSRuntime jsRuntime,string id)` _method_ — Saves the current grid layout to browser local storage under the given identifier. The grid item type. The grid whose layout to save. JS interop runtime. Storage key suffix that uniquely identifies this grid. A representing the async write.

#### `RowInputBase&lt;TItem&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/RowInputBase.cs`

Base Blazor component for typed form row inputs, providing label, help, and value binding with automatic label inference from data annotations. The value type bound to this input.

Members:

- `void OnParametersSet()` _method_
- `void OpenComponent(RenderTreeBuilder builder)` _method_
- `void RenderInput(RenderTreeBuilder builder)` _method_
- `IReadOnlyDictionary&lt;string,object&gt; AdditionalAttributes` _property_ — Gets or sets a value indicating whether this row is hidden from view. Gets or sets a value indicating whether the input is disabled. Gets or sets the label text displayed next to the input. Gets or sets the help text shown below the input. Gets or sets the bound value of the input. Gets or sets the callback invoked when changes. Gets or sets the expression used to identify the bound field for validation and label inference. Gets or sets additional HTML attributes to pass through to the underlying input element.
- `RenderFragment Input` _property_

#### `SearchEvent&lt;TValue&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/Select.razor.cs`

Carries a search string and the mutable list of matching items populated by the search handler. The item type.

Members:

- `List&lt;TValue&gt; Items` _property_ — Gets the result items to be displayed, populated by the event handler.
- `string Search` _property_ — Gets the search string entered by the user.

#### `Section`

_public class_

Source: `src/Shared/Web.Forms/Components/Section.cs`

Blazor component that registers a named render fragment into the current .

Members:

- `void Dispose()` _method_
- `void OnParametersSet()` _method_
- `RenderFragment ChildContent` _property_ — Gets or sets the content to register under .
- `string Name` _property_ — Gets or sets the section name under which the content is registered.
- `SectionsContext SectionsContext` _property_ — Gets or sets the injected sections context used to register content.

#### `SectionItem`

_public class_

Source: `src/Shared/Web.Forms/Components/SectionPlaceholder.cs`

Describes a named render fragment entry registered with a .

Members:

- `SectionItem Create(string name,RenderFragment fragment,int order = 0)` _method_ — Creates a wrapping a plain render fragment. The section name. The render fragment to register. Optional rendering order.
- `SectionItem Create&lt;TContext&gt;(string name,RenderFragment&lt;TContext&gt; fragment,int order = 0)` _method_ — Creates a wrapping a typed render fragment. The context type passed to the fragment. The section name. The typed render fragment. Optional rendering order.
- `SectionItem Create&lt;TComponent&gt;(string name,int order = 0)` _method_ — Creates a that renders a component of type `TComponent`. The component type to render. The section name. Optional rendering order.
- `SectionItem CreateWithContextParameter&lt;TComponent,TContext&gt;(string name,int order = 0)` _method_ — Creates a that renders `TComponent` and passes the section context as a `Context` parameter. The component type to render. The context type passed to the component. The section name. Optional rendering order.
- `Delegate Fragment` _property_ — Gets the render fragment delegate registered for this section item.
- `string Name` _property_ — Gets the section name this item is registered under.
- `int Order` _property_ — Gets or sets the rendering order of this item within its section.

#### `SectionPlaceholder&lt;TContext&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/SectionPlaceholder.cs`

Blazor component that renders registered render fragments for a named section with an optional typed context. The context type passed to typed render fragments.

Members:

- `void BuildRenderTree(RenderTreeBuilder builder)` _method_
- `void Dispose()` _method_
- `TContext Context` _property_ — Gets or sets the context value passed to typed render fragments.
- `string Name` _property_ — Gets or sets the name of the section whose fragments this placeholder renders.
- `SectionsContext SectionsContext` _property_ — Gets or sets the injected sections context used to look up registered fragments.

#### `SectionsContext`

_public class_

Source: `src/Shared/Web.Forms/Components/Section.cs`

Manages named render fragments and notifies placeholder components when sections change.

Members:

- `SectionsContext(NavigationManager navigationManager,IEnumerable&lt;ISectionsProvider&gt; sectionsProviders)` _constructor_ — Initialises a new instance, subscribes to navigation changes, and pre-populates sections from registered providers. The navigation manager used to detect page changes. Optional providers that supply static section content.
- `void Add(string name,Delegate fragment)` _method_ — Adds a render fragment delegate under the specified section name. The section name. The delegate to register.
- `void Remove(string name,Delegate fragment)` _method_ — Removes a specific render fragment delegate from the named section. The section name. The delegate to remove.
- `void Remove(string name)` _method_ — Removes all render fragments registered under the specified section name. The section name to remove.
- `Dictionary&lt;string,Action&gt; Callbacks` _property_ — Gets the registered notification callbacks keyed by section name.
- `Dictionary&lt;string,List&lt;Delegate&gt;&gt; RenderFragments` _property_

#### `Select&lt;TValue&gt;`

_public class_

Source: `src/Shared/Web.Forms/Components/Select.razor.cs`

Generic Blazor select component backed by SlimSelect, supporting data binding, async search, and customisable text-field display. The type of item displayed and selected by this component.

Members:

- `Task HandleChange(List&lt;string&gt; values)` _method_ — Receives JS interop notification when the SlimSelect selection changes. The list of selected value indices as strings.
- `Task&lt;object&gt; HandleSearch(string search)` _method_ — Receives JS interop notification when the user types in the SlimSelect search box, raises the event, and returns SlimSelect-formatted option objects. The search text entered by the user. An array of anonymous SlimSelect option objects.
- `Task OnAfterRenderAsync(bool firstRender)` _method_
- `Task OnParametersSetAsync()` _method_
- `IReadOnlyDictionary&lt;string,object&gt; AdditionalAttributes` _property_ — Gets or sets additional HTML attributes passed through to the underlying select element.
- `IReadOnlyList&lt;TValue&gt; Data` _property_ — Gets or sets the static data source for the select options.
- `DataGridFilteringMode FilteringMode` _property_ — Gets or sets the filtering mode applied when matching search input against options.
- `EventCallback&lt;SearchEvent&lt;TValue&gt;&gt; Search` _property_ — Gets or sets the callback raised when the user types in the search box.
- `string TextFieldName` _property_ — Gets or sets the property name used to derive the display text for each item.
- `TValue Value` _property_ — Gets or sets the currently selected value.
- `EventCallback&lt;TValue&gt; ValueChanged` _property_ — Gets or sets the callback raised when the selected value changes.
- `Expression&lt;Func&lt;TValue&gt;&gt; ValueExpression` _property_ — Gets or sets an expression identifying the bound value, used for validation.

#### `Spinner`

_public class_

Source: `src/Shared/Web.Forms/Components/Spinner.cs`

Blazor component that renders a Bootstrap spinner element when visible.

Members:

- `void BuildRenderTree(RenderTreeBuilder builder)` _method_
- `bool Visible` _property_ — Gets or sets whether the spinner is visible.

#### `SwitchInput`

_public class_

Source: `src/Shared/Web.Forms/Components/SwitchInput.cs`

A Blazor checkbox input rendered as a toggle switch, integrated with for parameter-set notifications.

Members:

- `void BuildRenderTree(RenderTreeBuilder builder)` _method_
- `void Dispose()` _method_
- `Task OnParametersSetAsync()` _method_ — Gets or sets the injected components hook service.

#### `TagSelection`

_public class_

Source: `src/Shared/Web.Forms/Components/TagSelection.razor.cs`

Blazor component for selecting a single key-value tag pair, with async key and value search support.

Members:

- `Task OnParametersSetAsync()` _method_
- `Task RefreshAsync()` _method_ — Reloads the keys list from the event and refreshes the component.
- `bool EditMode` _property_ — Gets or sets whether the component is in edit mode (allowing changes).
- `EventCallback OnDelete` _property_ — Raised when the user requests deletion of this tag.
- `EventCallback&lt;TagsSelectionKeysEventArgs&gt; OnKeys` _property_ — Raised when the component needs to retrieve the available keys.
- `EventCallback&lt;TagsSelectionValuesEventArgs&gt; OnValues` _property_ — Raised when the component needs to retrieve the available values for the selected key.
- `TagSelectionItem SelectedTag` _property_ — Gets or sets the currently selected tag.
- `EventCallback&lt;TagSelectionItem&gt; SelectedTagChanged` _property_ — Raised when the selected key-value tag changes.

#### `TagSelectionItem`

_public class_

Source: `src/Shared/Web.Forms/Components/TagSelection.razor.cs`

Represents a single key-value tag selection pair.

Members:

- `string? Key` _property_ — Gets or sets the tag key.
- `string? Value` _property_ — Gets or sets the tag value.

#### `TagsSelectionExtensions`

_public class_

Source: `src/Shared/Web.Forms/Components/TagSelection.razor.cs`

Extension methods for converting between dictionaries and collections.

Members:

- `IDictionary&lt;string,string&gt; ToDictionary(this IEnumerable&lt;TagSelectionItem&gt; items)` _method_ — Converts a collection of to a string dictionary, ignoring items with blank keys. The source items. A dictionary of non-empty key-value pairs.
- `TagSelectionItem[] ToTagSelectionItems(this IDictionary&lt;string,string&gt; dictionary)` _method_ — Converts a string dictionary to an array of . The source dictionary. Array of representing each key-value pair.

#### `TagsSelectionKeysEventArgs`

_public class_

Source: `src/Shared/Web.Forms/Components/TagSelection.razor.cs`

Event arguments for the tag-key search event, carrying the triggering tag item, the filter text, and the result keys.

Members:

- `string Filter` _property_ — Gets the filter text used to search for keys.
- `IEnumerable&lt;string&gt; Keys` _property_ — Gets or sets the matching key values returned by the event handler.
- `TagSelectionItem TagSelectionItem` _property_ — Gets the tag selection item that triggered the key search.

#### `TagsSelectionValuesEventArgs`

_public class_

Source: `src/Shared/Web.Forms/Components/TagSelection.razor.cs`

Event arguments for the tag-value search event, carrying the selected key, the filter text, and the result values.

Members:

- `string Filter` _property_ — Gets the filter text used to search for values.
- `string? Key` _property_ — Gets the key whose values are being searched.
- `IEnumerable&lt;string&gt; Values` _property_ — Gets or sets the matching values returned by the event handler.

### `Industria4.Web.Forms.Globalization.Components`

#### `LanguageComponentBase`

_public class_

Source: `src/Shared/Web.Forms.Globalization/Components/LanguageComponentBase.cs`

Base Blazor component that monitors changes and re-renders on language switch.

Members:

- `void OnInitialized()` _method_
- `ILanguageContext LanguageContext` _property_ — Gets or sets the injected language context.

#### `LanguageDictionaryInput`

_public class_

Source: `src/Shared/Web.Forms.Globalization/Components/LanguageDictionaryInput.cs`

Blazor input component for editing a value, with an integrated dialog to manage individual language entries.

Members:

- `void BuildRenderTree(RenderTreeBuilder builder)` _method_
- `void Dispose()` _method_
- `string FormatValueAsString(LanguageDictionary&lt;string&gt; value)` _method_
- `void OnInitialized()` _method_ — Gets or sets the component hook used to track parameter sets and disposal. Gets or sets the dialog service used to open the language dictionary editor. Gets or sets a value indicating whether to suppress the input-group wrapper element. Gets or sets a value indicating whether the input is disabled.
- `Task OnParametersSetAsync()` _method_
- `bool TryParseValueFromString(string value,out LanguageDictionary&lt;string&gt; result,out string validationErrorMessage)` _method_

#### `LanguageObjectRowInput`

_public class_

Source: `src/Shared/Web.Forms.Globalization/Components/LanguageObjectRowInput.cs`

Row-input component that automatically resolves its label from resource types and refreshes when the active language changes.

Members:

- `void BuildRenderTree(RenderTreeBuilder builder)` _method_
- `void OnInitialized()` _method_
- `void OnParametersSet()` _method_
- `ILanguageContext LanguageContext` _property_ — Gets or sets the injected language context used to detect locale changes.
- `IStringLocalizerFactory StringLocalizerFactory` _property_ — Gets or sets the injected string localizer factory for resolving resources.

#### `LanguageRowInput&lt;TItem&gt;`

_public class_

Source: `src/Shared/Web.Forms.Globalization/Components/LanguageRowInput.cs`

Generic row-input component that resolves its label from resource types and refreshes when the active language changes. The model item type.

Members:

- `void OnInitialized()` _method_
- `void OnParametersSet()` _method_
- `void OpenComponent(RenderTreeBuilder builder)` _method_
- `ILanguageContext LanguageContext` _property_ — Gets or sets the injected language context used to detect locale changes.
- `IStringLocalizerFactory StringLocalizerFactory` _property_ — Gets or sets the injected string localizer factory for resolving resources.

#### `LanguageTransformation`

_public class_

Source: `src/Shared/Web.Forms.Globalization/Components/LanguageTransformation.razor.cs`

Blazor component providing export and import actions for language resource transformations.

Members:

- `string ExportUri` _property_ — Gets or sets the URI used to trigger a language resource export.
- `EventCallback ImportCompleted` _property_ — Raised after a successful import operation completes.
- `string ImportUri` _property_ — Gets or sets the URI used to trigger a language resource import.

### `Industria4.Web.Forms.Globalization.Services`

#### `ILanguageDictionaryDialogService`

_public interface_

Source: `src/Shared/Web.Forms.Globalization/Services/ILanguageDictionaryDialogService.cs`

Shows a dialog for editing a value.

#### `ILanguagesImportDialogService`

_public interface_

Source: `src/Shared/Web.Forms.Globalization/Services/ILanguagesImportDialogService.cs`

Shows an import dialog that allows users to upload a language resource file.

#### `LanguageDictionaryDialogMessage`

_public class_

Source: `src/Shared/Web.Forms.Globalization/Services/ILanguageDictionaryDialogService.cs`

Carries the dictionary value and result callback for a language dictionary dialog request.

Members:

- `LanguageDictionaryDialogMessage(LanguageDictionary&lt;string&gt; value,Action&lt;bool&gt; callback)` _constructor_ — Initialises a new message with the value and result callback. The language dictionary being edited. Invoked with `true` when the user confirms changes.
- `Action&lt;bool&gt; Callback` _property_ — Gets the callback invoked with the user's confirmation result.
- `LanguageDictionary&lt;string&gt; Value` _property_ — Gets the language dictionary being edited.

#### `LanguageDictionaryDialogService`

_internal class_

Source: `src/Shared/Web.Forms.Globalization/Services/LanguageDictionaryDialogService.cs`

Members:

- `event Action&lt;LanguageDictionaryDialogMessage&gt; OnShowDialog` _event_ — Raised when on show dialogs.
- `Task&lt;bool&gt; ShowAsync(LanguageDictionary&lt;string&gt; value)` _method_ — show async.

#### `LanguageMenuItem`

_public class_

Source: `src/Shared/Web.Forms.Globalization/Services/LanguageMenuItem.cs`

A whose is automatically refreshed when the active language changes.

Members:

- `LanguageMenuItem(ILanguageContext languageContext,string key,IStringLocalizer localizer)` _constructor_ — Initialises a new language-aware menu item. The language context whose changes trigger a title refresh. The resource key (also used as the menu item key). The string localizer used to resolve the title.
- `void Dispose()` _method_

#### `LanguagesImportDialogMessage`

_public class_

Source: `src/Shared/Web.Forms.Globalization/Services/ILanguagesImportDialogService.cs`

Carries the import URI and result callback for a language import dialog request.

Members:

- `LanguagesImportDialogMessage(string importUri,Action&lt;bool&gt; callback)` _constructor_ — Initialises a new message with the import URI and result callback. The URI to which the language file is uploaded. Invoked with `true` when the user confirms the import.
- `Action&lt;bool&gt; Callback` _property_ — Gets the callback invoked with the user's confirmation result.
- `string ImportUri` _property_ — Gets the import endpoint URI.

#### `LanguagesImportDialogService`

_internal class_

Source: `src/Shared/Web.Forms.Globalization/Services/LanguagesImportDialogService.cs`

Members:

- `event Action&lt;LanguagesImportDialogMessage&gt; OnShowDialog` _event_ — Raised when on show dialogs.
- `Task&lt;bool&gt; ShowAsync(string importUri)` _method_ — show async.

### `Industria4.Web.Forms.Routing`

#### `DynamicPage&lt;TPage, TLayout&gt;`

_public class_

Source: `src/Shared/Web.Forms/Routing/DynamicPage.cs`

Blazor component that renders `TPage` optionally wrapped in a layout of type `TLayout`, forwarding any route parameters. The page component type to render. The layout component type; use `object` to render without a layout.

Members:

- `void BuildRenderTree(RenderTreeBuilder builder)` _method_
- `IReadOnlyDictionary&lt;string,object&gt; PageParameters` _property_ — Gets or sets additional HTML attributes and route parameters to forward to the page component.

#### `DynamicRouteBuilder`

_public class_

Source: `src/Shared/Web.Forms/Routing/DynamicRouteBuilder.cs`

Builds and caches a dynamic whose types wrap registered page components with their route and authorize attributes, enabling runtime routing without static Razor page declarations.

Members:

- `DynamicRouteBuilder(IEnumerable&lt;IDynamicRouteBuilderProvider&gt; providers)` _constructor_ — Initialises a new instance with the given route type providers. Providers that supply the component types to route.
- `void Dispose()` _method_
- `Assembly Assembly` _property_ — Gets the dynamically built assembly, rebuilding it when the registered types change.

#### `IDynamicRouteBuilderProvider`

_public interface_

Source: `src/Shared/Web.Forms/Routing/IDynamicRouteBuilderProvider.cs`

Provides a set of component types that should have dynamically generated route components.

#### `RouteUtility`

_public class_

Source: `src/Shared/Web.Forms/Routing/RouteUtility.cs`

Utility methods for reflecting over Blazor routing and authorization attributes.

Members:

- `IEnumerable&lt;AuthorizeAttribute&gt; GetAuthorizes(Type type)` _method_ — Returns the instances declared on the given `type`. The component type to inspect. The authorize attributes.
- `string GetRouteRootTemplate(Type type)` _method_ — Returns the first route template with no path parameters, throwing if none exists. The component type to inspect. The root (parameter-free) route template.
- `string GetRouteRootTemplate&lt;T&gt;()` _method_ — Returns the first route template with no path parameters for component type `T`. The component type to inspect. The root (parameter-free) route template.
- `IEnumerable&lt;string&gt; GetRouteTemplates&lt;T&gt;()` _method_ — Returns the route templates declared on component type `T`. The component type to inspect. The route template strings.
- `IEnumerable&lt;string&gt; GetRouteTemplates(Type type)` _method_ — Returns the route templates declared on the given `type`. The component type to inspect. The route template strings.

### `Industria4.Web.Forms.Services`

#### `DialogMessage`

_public class_

Source: `src/Shared/Web.Forms/Services/IDialogService.cs`

Describes a modal dialog to display, including its title, body text, optional description, and an optional result callback.

Members:

- `DialogMessage(string title,string message,string description)` _constructor_ — Initialises an informational dialog with title, message and description. The dialog title. The message body. Additional description text.
- `DialogMessage(string title,string message,string description,Action&lt;bool&gt; callback)` _constructor_ — Initialises an ask dialog with title, message, description and a result callback. The dialog title. The message body. Additional description text. Invoked with `true` if the user confirms.
- `bool Ask` _property_ — Gets or sets whether the dialog requires a yes/no response.
- `Action&lt;bool&gt; Callback` _property_ — Gets the callback invoked with the user's yes/no choice, or `null` for informational dialogs.
- `string Description` _property_ — Gets the optional additional description shown below the message.
- `string Message` _property_ — Gets the main message body.
- `string Title` _property_ — Gets the dialog title.

#### `DialogService`

_public class_

Source: `src/Shared/Web.Forms/Services/DialogService.cs`

Default implementation of that raises for each dialog request.

Members:

- `event Action&lt;DialogMessage&gt; OnShowDialog` _event_
- `Task&lt;bool&gt; AskAsync(string title,string message,string description)` _method_
- `Task ShowAsync(string title,string message,string description)` _method_

#### `IDialogService`

_public interface_

Source: `src/Shared/Web.Forms/Services/IDialogService.cs`

Provides modal dialog operations for showing informational messages and asking yes/no questions.

#### `ILoadingService`

_public interface_

Source: `src/Shared/Web.Forms/Services/ILoadingService.cs`

Abstracts the loading-indicator state and safe execution of async operations with error handling.

#### `IMenuService`

_public interface_

Source: `src/Shared/Web.Forms/Services/IMenuService.cs`

Manages the main and bottom navigation menu items and provides scoped menu registration.

#### `LoadingService`

_public class_

Source: `src/Shared/Web.Forms/Services/LoadingService.cs`

Implements by wrapping an async operation with loading-indicator management and centralised error handling via .

Members:

- `LoadingService(ILogger&lt;LoadingService&gt; logger,IDialogService dialogService,IEnumerable&lt;IResourcesProvider&gt; resourcesProviders)` _constructor_ — Initialises a new instance with the required services. Logger for error diagnostics. Dialog service used to display error messages. Resource providers for localising error codes.
- `Task&lt;bool&gt; LoadAsync(Func&lt;Task&gt; load)` _method_

#### `MenuItem`

_public class_

Source: `src/Shared/Web.Forms/Services/MenuItem.cs`

Represents a single navigation menu entry, supporting link, click, icon, and nested children.

Members:

- `MenuItem(string title,string key)` _constructor_ — Initialises a new menu item with the given display title and unique key. Display text for the menu item. Unique key identifying this item.
- `IList&lt;MenuItem&gt; Children` _property_ — Gets the nested child menu items.
- `bool HasChildren` _property_ — Gets whether this item has nested child items.
- `bool HasIcon` _property_ — Gets whether this item has an icon class.
- `bool IsLink` _property_ — Gets whether this item navigates to a URL.
- `string Key` _property_ — Gets the unique key for this menu item.
- `NavLinkMatch Match` _property_ — Gets or sets the NavLink match behaviour for route highlighting.

#### `MenuService`

_public class_

Source: `src/Shared/Web.Forms/Services/MenuService.cs`

Default implementation of that stores navigation items and supports scoped overrides.

Members:

- `IDisposable CreateScope()` _method_
- `IList&lt;MenuItem&gt; BottomItems` _property_
- `IList&lt;MenuItem&gt; Items` _property_

#### `MenuServiceExtensions`

_public class_

Source: `src/Shared/Web.Forms/Services/MenuServiceExtensions.cs`

Extension methods for removing entries from navigation lists.

Members:

- `void Remove(this IList&lt;MenuItem&gt; items,Type hrefType)` _method_ — Removes all items whose matches the given type. The menu list to modify. The page component type to remove.
- `void Remove(this IList&lt;MenuItem&gt; items,string href)` _method_ — Removes all items whose matches the given path. The menu list to modify. The href string to match.

#### `Scope`

_public class_

Source: `src/Shared/Web.Forms/Services/MenuService.cs`

Snapshot scope that clears the menu collections on enter and restores them on dispose.

Members:

- `Scope(IList&lt;MenuItem&gt; items,IList&lt;MenuItem&gt; bottomItems)` _constructor_ — Clears the menu items, saving the current contents for later restoration. The main items collection. The bottom items collection.
- `void Dispose()` _method_

### `Industria4.Web.Html`

#### `HtmlSectionItem`

_public class_

Source: `src/Shared/Web/Html/IHtmlSectionsProvider.cs`

Represents a named, ordered fragment of HTML to render within a named section.

Members:

- `HtmlSectionItem(string name,RenderContent render)` _constructor_ — Initialises a new section item at order position 0. The section name. The rendering delegate.
- `HtmlSectionItem(string name,RenderContent render,int order)` _constructor_ — Initialises a new section item with an explicit order. The section name. The rendering delegate. The render order; lower values render first.
- `string Name` _property_ — Gets the section name this item belongs to.
- `int Order` _property_ — Gets or sets the render order; lower values render first.
- `RenderContent Render` _property_ — Gets the rendering delegate for this section fragment.

#### `IHtmlSectionsProvider`

_public interface_

Source: `src/Shared/Web/Html/IHtmlSectionsProvider.cs`

Provides a collection of HTML section items to inject into Razor views.

Members:

- `delegate Task RenderContent(IHtmlHelper helper)` _method_ — Delegate for rendering HTML content into a Razor view helper. The current HTML helper.

### `Industria4.Web.Json`

#### `PageResultJsonConverter`

_internal class_

Source: `src/Shared/Web/Json/SelectExpandJsonConverter.cs`

Members:

- `bool CanConvert(Type objectType)` _method_
- `object ReadJson(JsonReader reader,Type objectType,object existingValue,JsonSerializer serializer)` _method_
- `void WriteJson(JsonWriter writer,object value,JsonSerializer serializer)` _method_

#### `SelectExpandJsonConverter`

_internal class_

Source: `src/Shared/Web/Json/SelectExpandJsonConverter.cs`

Members:

- `bool CanConvert(Type objectType)` _method_
- `object? ReadJson(JsonReader reader,Type objectType,object? existingValue,JsonSerializer serializer)` _method_
- `void WriteJson(JsonWriter writer,object? value,JsonSerializer serializer)` _method_

### `Industria4.Web.Security`

#### `KeycloakRoleClaimsTransformation`

_internal class_

Source: `src/Shared/Web/Security/KeycloakRoleClaimsTransformation.cs`

Members:

- `Task&lt;ClaimsPrincipal&gt; TransformAsync(ClaimsPrincipal principal)` _method_ — transform async.

#### `SecurityOptions`

_public class_

Source: `src/Shared/Web/Security/SecurityOptions.cs`

Holds identity provider settings for configuring JWT bearer authentication.

Members:

- `string Audience` _property_ — Gets or sets the expected JWT audience (API resource identifier).
- `string Authority` _property_ — Gets or sets the authority URL of the identity provider.

### `InfluxDB.Client.Core.Exceptions`

#### `InfluxException`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Flux/InfluxException.cs`

Base exception for all InfluxDB client errors. Carries an HTTP status code and a reference error code.

Members:

- `InfluxException(string message,Exception exception = null)` _constructor_ — Initializes an with a message and an optional inner exception (error code defaults to 0).
- `InfluxException(Exception exception)` _constructor_ — Initializes an wrapping an existing exception (error code 0).
- `InfluxException(string message,int code,Exception exception = null)` _constructor_ — Initializes an with a message, numeric error code, and an optional inner exception.
- `int Code` _property_ — Gets the reference code unique to the error type. If the reference code is not present than return "0".
- `int Status` _property_ — Gets the HTTP status code of the unsuccessful response. If the response is not present than return "0".

### `InfluxDB.Client.Core.Flux.Domain`

#### `FluxColumn`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxColumn.cs`

This class represents column header specification of .

Members:

- `string ToString()` _method_ — Returns a debug-friendly string showing all column metadata fields.
- `string DataType` _property_ — The data type of column (e.g., "string", "long", "dateTime:RFC3339").
- `string DefaultValue` _property_ — Default value to be used for rows whose string value is the empty string.
- `bool Group` _property_ — Boolean flag indicating if the column is part of the table's group key.
- `int Index` _property_ — Column index in record.
- `string Label` _property_ — The label of column (e.g., "_start", "_stop", "_time").

#### `FluxRecord`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxRecord.cs`

A record is a tuple of values. Each record in the table represents a single point in the series. Specification .

Members:

- `FluxRecord(int table)` _constructor_ — Initializes a new associated with the given table index.
- `string GetField()` _method_ — get value with key _field
- `string GetMeasurement()` _method_ — get value with key _measurement
- `Instant? GetStart()` _method_ — the inclusive lower time bound of all records
- `Instant? GetStop()` _method_ — the exclusive upper time bound of all records
- `Instant? GetTime()` _method_ — The timestamp as a the time of the record
- `DateTime? GetTimeInDateTime()` _method_ — The timestamp as a the time of the record
- `object GetValue()` _method_ — the value of the record
- `object GetValueByIndex(int index)` _method_ — Get FluxRecord value by index. index of value in CSV response value
- `object GetValueByKey(string key)` _method_ — Get FluxRecord value by key. the key of value in CSV response value
- `string ToString()` _method_ — Returns a debug-friendly string showing the table index and the number of values in this record.
- `int Table` _property_ — The Index of the table that the record belongs.
- `Dictionary&lt;string,object&gt; Values` _property_ — The record's values.

#### `FluxTable`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxTable.cs`

This class represents table structure of Flux CSV Response. Specification .

Members:

- `List&lt;FluxColumn&gt; GetGroupKey()` _method_ — A table's group key is subset of the entire columns dataset that assigned to the table. As such, all records within a table will have the same values for each column that is part of the group key.
- `string ToString()` _method_ — Returns a debug-friendly string showing the number of columns and records in this table.
- `List&lt;FluxColumn&gt; Columns` _property_ — Table column's labels and types.
- `List&lt;FluxRecord&gt; Records` _property_ — Table records.

### `InfluxDB.Client.Core.Flux.Exceptions`

#### `FluxCsvParserException`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxCsvParserException.cs`

The error that occurs during mapping response to , or .

Members:

- `FluxCsvParserException(string message)` _constructor_ — Initializes a with a description of the CSV mapping error.

#### `FluxQueryException`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxQueryException.cs`

Exception thrown when an InfluxDB Flux query returns an error response.

Members:

- `FluxQueryException(string message,int reference)` _constructor_ — Initializes a with the server error message and reference code.
- `int Reference` _property_ — Gets the reference error code returned by InfluxDB in the error response.

### `InfluxDB.Client.Core.Flux.Internal`

#### `FluxCsvParser`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxCsvParser.cs`

This class us used to construct from CSV.

#### `FluxResponseConsumerTable`

_public class_

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxCsvParser.cs`

Default implementation that collects all parsed tables into an in-memory list.

Members:

- `void Accept(int index,FluxTable table)` _method_
- `void Accept(int index,FluxRecord record)` _method_
- `void ParseFluxResponse(string source,IFluxResponseConsumer consumer)` _method_ — Parses a Flux CSV response string, forwarding each table/record to `consumer`. Flux CSV response as a string. The consumer that receives parsed and objects.
- `void ParseFluxResponse(Stream source,IFluxResponseConsumer consumer)` _method_ — Parse Flux CSV response to . CSV Data source to accept or
- `IAsyncEnumerable&lt;(FluxTable,FluxRecord)&gt; ParseFluxResponseAsync(StringReader reader,[EnumeratorCancellation] CancellationToken cancellationToken)` _method_ — Parse Flux CSV response to . CSV Data source reader cancellation token
- `List&lt;FluxTable&gt; Tables` _property_ — Gets the list of objects accumulated so far by the parser.

#### `IFluxResponseConsumer`

_public interface_

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxCsvParser.cs`

Callback interface that receives parsed and instances from the CSV parser.

### `LanguageTranslator`

#### `ITranslatorService`

_public interface_

Source: `utility/LanguageTranslator/Program.cs`

#### `Program`

_internal class_

Source: `utility/LanguageTranslator/Program.cs`

#### `Translation`

_public class_

Source: `utility/LanguageTranslator/Program.cs`

Members:

- `string Text` _property_
- `string To` _property_

#### `TranslatorRequest`

_public class_

Source: `utility/LanguageTranslator/Program.cs`

Members:

- `string Text` _property_

#### `TranslatorResponse`

_public class_

Source: `utility/LanguageTranslator/Program.cs`

Members:

- `Translation[] Translations` _property_

### `Microsoft.AspNet.OData`

#### `ODataPagingAttribute`

_public class_

Source: `src/Shared/Web/Filters/ODataPagingAttribute.cs`

Extensions of ODataPaging which supports pagination result

Members:

- `ODataPagingAttribute()` _constructor_ — Initialises the attribute with a default max node count of 500.
- `void OnActionExecuted(ActionExecutedContext context)` _method_

### `Microsoft.AspNetCore.Builder`

#### `ApplicationBuilderExtensions`

_public class_

Source: `src/Shared/Web/ApplicationBuilderExtensions.cs`

Extensions for

Members:

- `IApplicationBuilder UseAlternativeStaticFiles(this IApplicationBuilder app)` _method_ — Support loading wwwroot folder from %programdata%\industria4\wwwroot folder
- `IApplicationBuilder UseHttpProxy(this IApplicationBuilder app)` _method_ — Registers the in the pipeline so that requests bearing an `x-proxy-host` header are forwarded. The application builder. The same for chaining.
- `IApplicationBuilder UseRequestLocalizationWithAllCultures(this IApplicationBuilder app)` _method_ — Adds the localization middleware and supports all available cultures, with en-US as default culture https://msdn.microsoft.com/en-us/library/ee825488%28v=cs.20%29.aspx?

#### `EndpointRouteBuilderExtensions`

_public class_

Source: `src/Hosting/Hosting.Startup/EndpointRouteBuilderExtensions.cs`

Extension methods for mapping hosting-specific endpoints to an .

Members:

- `IEndpointRouteBuilder MapAssemblies(this IEndpointRouteBuilder builder)` _method_ — Maps the `/_hosting/assemblies.json` endpoint that returns a hash map of all available assembly files. The endpoint route builder to add the route to. The same `builder` instance for chaining.
- `IEndpointRouteBuilder MapCatalogs(this IEndpointRouteBuilder builder)` _method_ — Maps the `/_hosting/catalogs.json` endpoint that returns the list of client assembly names from all catalogs. The endpoint route builder to add the route to. The same `builder` instance for chaining.

### `Microsoft.AspNetCore.Components`

#### `NavigationManagerExtensions`

_public class_

Source: `src/Identity/Identity.WebApp/Routing/NavigationManagerExtensions.cs`

Extension methods on for Identity-specific navigation shortcuts.

Members:

- `void NavigateToEditUser(this NavigationManager navigationManager,string workOrderId)` _method_ — Navigates to the edit page for the specified user. The navigation manager. The identifier of the user to edit.
- `void NavigateToNewUser(this NavigationManager navigationManager)` _method_ — Navigates to the new user creation page. The navigation manager.
- `void NavigateToUsers(this NavigationManager navigationManager)` _method_ — Navigates to the users list page. The navigation manager.

#### `NavigationManagerExtensions`

_public class_

Source: `src/Mes/Mes.WebApp/Routing/NavigationManagerExtensions.cs`

Extension methods on for MES-specific navigation.

Members:

- `void NavigateToEditWorkOrder(this NavigationManager navigationManager,string workOrderId)` _method_ — Navigates to the edit page for an existing work order. The current . The unique identifier of the work order to edit.
- `void NavigateToNewWorkOrder(this NavigationManager navigationManager)` _method_ — Navigates to the new work-order creation page.
- `void NavigateToWorkOrders(this NavigationManager navigationManager)` _method_ — Navigates to the work-orders list page.

#### `NavigationManagerExtensions`

_public class_

Source: `src/Production/Production.WebApp/Routing/NavigationManagerExtensions.cs`

Extension methods that provide strongly-typed navigation for Production routes.

Members:

- `void NavigateToCompositions(this NavigationManager navigationManager)` _method_ — Navigates to the compositions list page.
- `void NavigateToDeployments(this NavigationManager navigationManager)` _method_ — Navigates to the deployments list page.
- `void NavigateToEditComposition(this NavigationManager navigationManager,string compositionId)` _method_ — Navigates to the edit page for the given composition. The navigation manager. The identifier of the composition to edit.
- `void NavigateToEditDeployment(this NavigationManager navigationManager,string deploymentId)` _method_ — Navigates to the edit page for the given deployment. The navigation manager. The identifier of the deployment to edit.
- `void NavigateToNewComposition(this NavigationManager navigationManager)` _method_ — Navigates to the new composition page without a group key.
- `void NavigateToNewComposition(this NavigationManager navigationManager,string groupKey)` _method_ — Navigates to the new composition page, optionally scoped to the given group key. The navigation manager. Optional group key to pre-select on the new composition page.
- `void NavigateToNewDeployment(this NavigationManager navigationManager,string compositionId)` _method_ — Navigates to the new deployment page for the given composition. The navigation manager. The identifier of the composition to deploy.
- `void NavigateToNewDeployment(this NavigationManager navigationManager,string compositionId,string groupKey)` _method_ — Navigates to the new deployment page for the given composition, optionally scoped to the given group key. The navigation manager. The identifier of the composition to deploy. Optional group key to pre-select on the new deployment page.

#### `NavigationManagerExtensions`

_public class_

Source: `src/Recipes/Recipes.WebApp/Routing/NavigationManagerExtensions.cs`

Represents navigation manager extensions.

Members:

- `void NavigateToEditModel(this NavigationManager navigationManager,string modelId)` _method_ — navigate to edit model.
- `void NavigateToEditModel(this NavigationManager navigationManager,string modelId,string groupKey)` _method_ — navigate to edit model.
- `void NavigateToEditRecipe(this NavigationManager navigationManager,string recipeId)` _method_ — navigate to edit recipe.
- `void NavigateToEditRecipe(this NavigationManager navigationManager,string recipeId,string groupKey)` _method_ — navigate to edit recipe.
- `void NavigateToModels(this NavigationManager navigationManager)` _method_ — navigate to models.
- `void NavigateToNewModel(this NavigationManager navigationManager)` _method_ — navigate to new model.
- `void NavigateToNewModel(this NavigationManager navigationManager,string groupKey)` _method_ — navigate to new model.
- `void NavigateToNewRecipe(this NavigationManager navigationManager,string modelId)` _method_ — navigate to new recipe.
- `void NavigateToNewRecipe(this NavigationManager navigationManager,string modelId,string groupKey)` _method_ — navigate to new recipe.
- `void NavigateToRecipes(this NavigationManager navigationManager)` _method_ — navigate to recipes.

#### `NavigationManagerExtensions`

_public class_

Source: `src/Sequences/Sequences.WebApp/Routing/NavigationManagerExtensions.cs`

Extension methods for that provide navigation helpers for the Sequences module.

Members:

- `void NavigateToSequences(this NavigationManager navigationManager)` _method_ — Navigates to the Sequences page. The instance.

### `Microsoft.AspNetCore.Mvc.Rendering`

#### `SectionHtmlHelperExtensions`

_public class_

Source: `src/Shared/Web/Html/SectionHtmlHelperExtensions.cs`

Extension methods for rendering named HTML sections via registered services.

Members:

- `Task RenderSectionAsync(this IHtmlHelper helper,string name)` _method_ — Renders all section items registered under the given `name`, in order. The HTML helper to render into. The section name to render.

### `Microsoft.EntityFrameworkCore`

#### `DbContextExtensions`

_public class_

Source: `src/Shared/EntityFramework/DbContextExtensions.cs`

Extension methods for that add rolling backup support.

Members:

- `Task BackupAsync(this DbContext context,bool overwriteToday = false,int maxRollingFile = 7)` _method_ — Creates a rolling backup of the current SQLite database file. The whose underlying SQLite database is backed up. When `true`, an existing backup for today is overwritten. The maximum number of dated backup files to keep; older files are deleted.

#### `ModelBuilderExtensions`

_public class_

Source: `src/Shared/EntityFramework/ModelBuilderExtensions.cs`

Extensions for

Members:

- `void AddSqliteFunctions(this ModelBuilder modelBuilder)` _method_ — Adds support for
- `void AddSqlServerFunctions(this ModelBuilder modelBuilder)` _method_ — Adds support for

### `Microsoft.EntityFrameworkCore.Metadata.Builders`

#### `PropertyBuilderExtensions`

_public class_

Source: `src/Shared/EntityFramework/PropertyBuilderExtensions.cs`

Extension methods for that register and value converters.

Members:

- `PropertyBuilder&lt;TProperty&gt; HasDataArrayValueConversion&lt;TProperty&gt;(this PropertyBuilder&lt;TProperty&gt; property)` _method_ — Configures the property to store and retrieve values using binary serialisation. The CLR type of the property. The property builder to configure. The same builder so that further calls can be chained.
- `PropertyBuilder&lt;TProperty&gt; HasDataValueConversion&lt;TProperty&gt;(this PropertyBuilder&lt;TProperty&gt; property)` _method_ — Configures the property to store and retrieve values using binary serialisation. The CLR type of the property. The property builder to configure. The same builder so that further calls can be chained.

### `Microsoft.Extensions.Configuration`

#### `ConfigurationExtensions`

_public class_

Source: `src/Shared/Core/ConfigurationExtensions.cs`

Extension methods for for converting configuration sections to environment-variable dictionaries.

Members:

- `IDictionary&lt;string,string&gt; GetEnvironmentVariables(this IConfiguration configuration,string prefix)` _method_ — Flattens a configuration section into a dictionary using environment-variable naming conventions (colons replaced by double-underscores). The configuration section to enumerate. The section prefix to strip from keys. A dictionary of environment-variable keys mapped to their values.
- `IDictionary&lt;string,string&gt; GetEnvironmentVariablesFromSection(this IConfiguration configuration,string name)` _method_ — Reads a named configuration section and returns its values as environment-variable name/value pairs. The configuration root. The section name to read. A dictionary of environment-variable keys mapped to their values.

### `Microsoft.Extensions.DependencyInjection`

#### `CachingServiceExtensions`

_public class_

Source: `src/Shared/Caching/CachingServiceExtensions.cs`

Extension methods for that register the caching infrastructure.

Members:

- `IServiceCollection AddCaching(this IServiceCollection services)` _method_ — Registers the caching infrastructure with default options. The service collection to add to. The same for chaining.
- `IServiceCollection AddCaching(this IServiceCollection services,Action&lt;CacheOptions&gt; options)` _method_ — Registers the caching infrastructure, applying the optional `options` callback. The service collection to add to. Optional callback to configure . The same for chaining.
- `IServiceCollection ConfigureCaching&lt;T&gt;(this IServiceCollection services)` _method_ — Registers an singleton for `T` using the default builder options. The service type to configure. The service collection to add to. The same for chaining.
- `IServiceCollection ConfigureCaching&lt;T&gt;(this IServiceCollection services,Action&lt;ICacheConfigurationBuilder&lt;T&gt;&gt; configure)` _method_ — Registers an singleton for `T`, applying the optional `configure` callback. The service type to configure. The service collection to add to. Optional callback that customises the builder before it is built. The same for chaining.

#### `CqrsWebServiceCollectionExtensions`

_public class_

Source: `src/Shared/Cqrs.Web/CqrsWebServiceCollectionExtensions.cs`

Extension methods for that register the SignalR-backed CQRS messaging waiter.

Members:

- `IServiceCollection AddSignalrMessagesWaiter(this IServiceCollection services)` _method_ — Registers as the with default options. The service collection to add to. The same for chaining.
- `IServiceCollection AddSignalrMessagesWaiter(this IServiceCollection services,Action&lt;SignalrMessagesWaiterOptions&gt; options)` _method_ — Registers as the , applying the optional `options` callback. The service collection to add to. Optional callback to configure . The same for chaining.

#### `HostingEntityFrameworkExtensions`

_public class_

Source: `src/Hosting/Hosting.Startup/HostingEntityFrameworkExtensions.cs`

Convenience extension methods for registering the hosting Entity Framework store with default SQLite configuration.

Members:

- `IServiceCollection AddHostingEntityFramework(this IServiceCollection services,ServiceLifetime lifetime = ServiceLifetime.Scoped)` _method_ — Registers hosting Entity Framework services using a SQLite database stored in the Industria4 root folder. The service collection to configure. The service lifetime for the registered services. Defaults to . The same `services` instance for chaining.

#### `HostingServiceExtensions`

_public class_

Source: `src/Shared/Hosting/HostingServiceExtensions.cs`

Extension methods for that register the hosting module infrastructure.

Members:

- `IServiceCollection AddModules(this IServiceCollection services)` _method_ — Registers (scoped) and (singleton) into the container. The service collection to add to. The same so that calls can be chained.

#### `HttpServiceExtensions`

_public class_

Source: `src/Globalization/Globalization.Http/HttpServiceExtensions.cs`

Extension methods that register the Globalization HTTP clients with the DI container.

Members:

- `IServiceCollection AddHttpGlobalization(this IServiceCollection services)` _method_ — Registers and as transient services. The service collection to add the clients to. The same `services` for chaining.

#### `HttpServiceExtensions`

_public class_

Source: `src/Hosting/Hosting.Http/HttpServiceExtensions.cs`

Extension methods for registering hosting HTTP clients in the dependency-injection container.

Members:

- `IServiceCollection AddHttpHosting(this IServiceCollection services)` _method_ — Registers , , and as transient services. The service collection to configure. The same `services` instance for chaining.

#### `HttpServiceExtensions`

_public class_

Source: `src/Identity/Identity.Http/HttpServiceExtensions.cs`

Extension methods that register the Identity HTTP clients with the DI container.

Members:

- `IServiceCollection AddHttpIdentity(this IServiceCollection services)` _method_ — Registers and as transient services. The service collection to add the clients to. The same `services` for chaining.

#### `HttpServiceExtensions`

_public class_

Source: `src/Mes/Mes.Http/HttpServiceExtensions.cs`

Extension methods that register the MES HTTP clients with the DI container.

Members:

- `IServiceCollection AddHttpMes(this IServiceCollection services)` _method_ — Registers as a transient service. The service collection to add the client to. The same `services` for chaining.

#### `HttpServiceExtensions`

_public class_

Source: `src/OpcUa/OpcUa.Http/HttpServiceExtensions.cs`

Extension methods for registering OPC-UA HTTP clients.

Members:

- `IServiceCollection AddHttpOpcUa(this IServiceCollection services)` _method_ — Registers and as transient services.

#### `HttpServiceExtensions`

_public class_

Source: `src/Production/Production.Http/HttpServiceExtensions.cs`

Extension methods that register the Production HTTP clients with the DI container.

Members:

- `IServiceCollection AddHttpProduction(this IServiceCollection services)` _method_ — Registers and as transient services. The service collection to add the clients to. The same `services` for chaining.

#### `HttpServiceExtensions`

_public class_

Source: `src/Recipes/Recipes.Http/HttpServiceExtensions.cs`

Extension methods that register the Recipes HTTP clients with the DI container.

Members:

- `IServiceCollection AddHttpRecipes(this IServiceCollection services)` _method_ — Registers and as transient services. The service collection to add the clients to. The same `services` for chaining.

#### `HttpServiceExtensions`

_public class_

Source: `src/Sequences/Sequences.Http/HttpServiceExtensions.cs`

Extension methods that register the Sequences HTTP clients with the DI container.

Members:

- `IServiceCollection AddHttpSequences(this IServiceCollection services)` _method_ — Registers as a transient service. The service collection to add the client to. The same `services` for chaining.

#### `HttpServiceExtensions`

_public class_

Source: `src/Shared/Http/HttpServiceExtensions.cs`

Extension methods for that register HTTP client services.

Members:

- `IServiceCollection AddHttp(this IServiceCollection services)` _method_ — Registers as a transient service. The service collection to add to. The same so that calls can be chained.

#### `LoggingServiceExtensions`

_public class_

Source: `src/Shared/Logging/LoggingServiceExtensions.cs`

Extension methods for registering Industria4 logging infrastructure services.

Members:

- `IServiceCollection AddCorrelation(this IServiceCollection services)` _method_ — Adds support to

#### `MvcBuilderExtensions`

_public class_

Source: `src/Shared/Web.Cqrs/MvcBuilderExtensions.cs`

Extension methods for that register the CQRS gateway infrastructure.

Members:

- `IMvcBuilder AddCqrsGateway(this IMvcBuilder mvcBuilder,Action&lt;GatewayOptions&gt; options)` _method_ — Adds the CQRS gateway pipeline — auto-discovered controller/action descriptors, model-metadata provider, and API description provider. The MVC builder to configure. Action to configure . The same for chaining.

#### `MvcBuilderExtensions`

_public class_

Source: `src/Shared/Web/MvcBuilderExtensions.cs`

Extension methods for configuring OData support on an MVC builder.

Members:

- `IMvcBuilder AddODataSupport(this IMvcBuilder builder)` _method_ — Configures OData with case-insensitive filter resolution, paging, ordering, and custom filter/order-by binders. The MVC builder to extend. The same for chaining.

#### `PolicyServiceCollectionExtensions`

_public class_

Source: `src/Shared/Web.Core/Authorization/PolicyServiceCollectionExtensions.cs`

Extension methods for registering policy-based authorization options from configuration.

Members:

- `IServiceCollection ConfigurePolicyOptions(this IServiceCollection services,IConfiguration configuration)` _method_ — Reads from configuration and registers an that converts them to ASP.NET Core authorization policies. The service collection to configure. Configuration section containing the policy options. The same for chaining.

#### `RazorExtensions`

_public class_

Source: `src/Shared/Web/RazorExtensions.cs`

Extension methods for registering Razor section-placeholder services.

Members:

- `IServiceCollection AddSectionsPlaceHolders(this IServiceCollection services)` _method_ — Registers section placeholder services. Currently a no-op placeholder for future configuration. The service collection. The same for chaining.

#### `SecurityServiceCollectionExtensions`

_public class_

Source: `src/Shared/Web/Security/SecurityServiceCollectionExtensions.cs`

Extension methods for registering JWT-based security services including Keycloak role claims transformation.

Members:

- `IServiceCollection AddIndustria4Security(this IServiceCollection services,IConfiguration configuration)` _method_ — Configures JWT bearer authentication, authorization, and Keycloak role claims transformation from . The service collection to configure. Configuration used to read `Identity:Authority` and `Identity:Audience`. The same for chaining.

#### `ServiceCollectionExtensions`

_public class_

Source: `src/Hosting/Hosting.Startup/ServiceCollectionExtensions.cs`

Extension methods for registering license services in the dependency-injection container.

Members:

- `IServiceCollection AddLicense(this IServiceCollection services)` _method_ — Registers data protection and as a singleton service. The service collection to configure. The same `services` instance for chaining.

#### `ServiceCollectionExtensions`

_public class_

Source: `src/Shared/Transformation/ServiceCollectionExtensions.cs`

Extension methods for registering transformation services.

Members:

- `IServiceCollection AddTransformation(this IServiceCollection services)` _method_ — Registers and as transient services. The service collection to configure. The same for chaining.

#### `ServiceExtensions`

_public class_

Source: `src/Recipes/Recipes.Cqrs.Handlers/ServiceExtensions.cs`

Extension methods that register Recipes domain services with the DI container.

Members:

- `IServiceCollection AddRecipesServices(this IServiceCollection services)` _method_ — Registers and as transient services. The service collection to add services to. The same `services` for chaining.

#### `ServiceExtensions`

_public class_

Source: `src/Shared/Globalization/ServiceExtensions.cs`

Extension methods for registering globalization services with the DI container.

Members:

- `IServiceCollection AddGlobalization(this IServiceCollection services)` _method_ — Registers the scoped service required for multi-language support. The service collection. The same `services` instance for chaining.
- `IServiceCollection AddResourceProvider(this IServiceCollection services,ResourceManager resourceManager)` _method_ — Registers an singleton backed by the specified `resourceManager`. The service collection. The resource manager to expose. The same `services` instance for chaining.

#### `ServicesExtensions`

_public class_

Source: `src/Globalization/Globalization.EntityFramework/ServicesExtensions.cs`

Extension methods for registering Globalization Entity Framework services.

#### `ServicesExtensions`

_public class_

Source: `src/Hosting/Hosting.EntityFramework/ServicesExtensions.cs`

Extension methods for that register the Hosting Entity Framework layer (DbContext, repositories, and data-access objects).

#### `ServicesExtensions`

_public class_

Source: `src/Identity/Identity.EntityFramework/ServicesExtensions.cs`

Extension methods for registering Identity Entity Framework services.

Members:

- `IdentityBuilder AddIdentityEntityFramework(this IdentityBuilder builder)` _method_ — Configures ASP.NET Core Identity to use the Entity Framework store. The identity builder. The same `builder` for chaining.

#### `ServicesExtensions`

_public class_

Source: `src/Mes/Mes.Cqrs.Handlers/ServicesExtensions.cs`

DI registration extensions for the MES command-handler layer.

Members:

- `IServiceCollection AddMes(this IServiceCollection services)` _method_ — Registers the MES scheduler background service (auto-promote / auto-expire timers). The service collection to add to. The same `services` for chaining.

#### `ServicesExtensions`

_public class_

Source: `src/Mes/Mes.EntityFramework/ServicesExtensions.cs`

Extension methods for registering MES Entity Framework services.

#### `ServicesExtensions`

_public class_

Source: `src/OpcUa/OpcUa.Comunication/ServicesExtensions.cs`

Extension methods for registering OPC-UA communication services.

Members:

- `IServiceCollection AddOpcUa(this IServiceCollection services)` _method_ — Registers the singleton.
- `IServiceCollection AddOpcUaMiddleware&lt;T&gt;(this IServiceCollection services)` _method_ — Registers `T` as an singleton.

#### `ServicesExtensions`

_public class_

Source: `src/OpcUa/OpcUa.EntityFramework/ServicesExtensions.cs`

Extension methods for registering OPC-UA Entity Framework services.

#### `ServicesExtensions`

_public class_

Source: `src/Production/Production.EntityFramework/ServicesExtensions.cs`

Extension methods for registering Production Entity Framework services into an .

#### `ServicesExtensions`

_public class_

Source: `src/Recipes/Recipes.EntityFramework/ServicesExtensions.cs`

Represents services extensions.

#### `ServicesExtensions`

_public class_

Source: `src/Sequences/Sequences.Cqrs.Handlers/ServicesExtensions.cs`

Extension methods for that register Sequences services.

Members:

- `IServiceCollection AddSequences(this IServiceCollection services)` _method_ — Registers and its hosted-service wrapper into the DI container. The service collection to register services into. The same `services` instance for chaining.

#### `ServicesExtensions`

_public class_

Source: `src/Sequences/Sequences.EntityFramework/ServicesExtensions.cs`

Extension methods for that register Sequences Entity Framework infrastructure.

#### `ServicesExtensions`

_public class_

Source: `src/Shared/Cqrs.Rebus/ServicesExtensions.cs`

Extensions for configuring service bus

Members:

- `IServiceCollection AddServiceBus(this IServiceCollection services,Action&lt;ICqrsConfigurer&gt; configurerAction)` _method_ — Adds all bus services allowing the configuration through `configurerAction`
- `IServiceCollection AddServiceBusDependencies(this IServiceCollection services,IServiceProvider provider)` _method_ — Adds service bus memory implementations copying that from the provider passed
- `IServiceCollection ConfigureServiceBus(this IServiceCollection services,Action&lt;ICqrsConfigurer&gt; configure)` _method_ — Configures services bus with additional action

#### `ServicesExtensions`

_public class_

Source: `src/Shared/DataAccessObject/ServicesExtensions.cs`

Extension methods for that wrap data access objects to filter soft-deleted entities automatically.

Members:

- `IServiceCollection AddDaoDeletion(this IServiceCollection services)` _method_ — Replaces all registered services that implements where T is of type . The replacement filter automatically all deleted entities

#### `ServicesExtensions`

_public class_

Source: `src/Shared/EntityFramework/ServicesExtensions.cs`

Extension methods for that register Entity Framework services.

Members:

- `IServiceCollection AddDbContextBackup(this IServiceCollection services)` _method_ — Registers as a singleton, enabling automatic scheduled backups for the specified type. The service collection to add to. The same so that calls can be chained.

#### `ServicesModulesExtensions`

_public class_

Source: `src/Shared/Hosting/Modules/ServicesModulesExtensions.cs`

Extension methods for that register implementations.

Members:

- `IServiceCollection AddModule&lt;T&gt;(this IServiceCollection services,ICatalogContextAccessor catalogContextAccessor)` _method_ — Registers `T` as a scoped service and maps it to all its module interfaces, injecting the catalog context. The module type to register. The service collection to add to. Provides the catalog context to inject into the module instance, or `null`. The same so that calls can be chained.
- `IServiceCollection AddModule&lt;T&gt;(this IServiceCollection services)` _method_ — Registers `T` as a scoped service and maps it to all its module interfaces with no catalog context. The module type to register. The service collection to add to. The same so that calls can be chained.

#### `ServicesModulesExtensions`

_public class_

Source: `src/Shared/Web.Forms/Routing/ServicesRoutingExtensions.cs`

Extension methods for that register dynamic route builder providers.

Members:

- `IServiceCollection AddDynamicRouteBuilderProvider&lt;T&gt;(this IServiceCollection services)` _method_ — Registers a scoped of type `T`. The concrete provider type. The service collection to configure. The same for chaining.

#### `WebFormsServiceExtensions`

_public class_

Source: `src/Shared/Web.Forms.Globalization/WebFormsServiceExtensions.cs`

Extension methods for registering globalization UI services used by Web.Forms.Globalization components.

Members:

- `IServiceCollection AddGlobalizationWebForms(this IServiceCollection services)` _method_ — Registers the language dictionary and language import dialog services. The service collection to configure. The same for chaining.

#### `WebFormsServiceExtensions`

_public class_

Source: `src/Shared/Web.Forms/WebFormsServiceExtensions.cs`

Extension methods for that register the Web.Forms infrastructure.

Members:

- `IServiceCollection AddWebForms(this IServiceCollection services)` _method_ — Registers all Web.Forms services including observable tracking, component hooks, loading, dialog, menu, sections, and dynamic routing. The service collection to configure. The same for chaining.

### `Microsoft.Extensions.Hosting`

#### `DepdendenciesExtensions`

_public class_

Source: `src/Shared/Web/Dependencies.cs`

Extensions for IWebHost which allow to apply depedency check before running the host

Members:

- `IHost CheckDependencies(this IHost host,Action&lt;DependenciesConfiguration&gt; configuration)` _method_ — Configures dependency checks and returns a wrapped host that validates them before starting. The application host. An action that registers instances. A new that runs dependency checks before starting the original host.

#### `HostBuilderExtensions`

_public class_

Source: `src/Hosting/Hosting.Startup/HostBuilderExtensions.cs`

Extension methods for configuring packages, catalogs, and resource files on an .

Members:

- `IHostBuilder ConfigureCatalogs(this IHostBuilder hostBuilder,bool isClient,params ICatalog[] catalogs)` _method_ — Configures catalog services, module loading, and startup services for the specified catalogs. The host builder to configure. When , only entry-point client catalog contexts are activated at startup. The catalogs to register with the DI container and file providers.
- `IHostBuilder ConfigureExternalResourceFiles(this IHostBuilder hostBuilder,bool isClient)` _method_ — Registers the service and, for server hosts, the background service that initializes external resource assemblies. The host builder to configure. When , stores the instance in host properties for use by the file provider instead of starting a hosted service.
- `IHostBuilder ConfigurePackages(this IHostBuilder hostBuilder,IEnumerable&lt;IPackagesProvider&gt; additionalPackageProviders)` _method_ — Configures the host builder to load packages from the specified additional providers. The host builder to configure. Additional package providers to include alongside the built-in providers.
- `IHostBuilder ConfigurePackages(this IHostBuilder hostBuilder,bool onlyChildProcess,bool isClient)` _method_ — Configures the host builder to load packages, optionally filtering to child-process or client packages only. The host builder to configure. When , only configure if this process is a child process. When , target the client (browser) catalog entries.
- `IHostBuilder ConfigurePackages(this IHostBuilder hostBuilder,IEnumerable&lt;IPackagesProvider&gt; additionalPackageProviders,bool onlyChildProcess,bool isClient)` _method_ — Configures the host builder to load packages from optional additional providers with child-process and client filtering. The host builder to configure. Additional package providers; may be . When , only configure if this process is a child process. When , target the client (browser) catalog entries.
- `IFileProvider GetCompositeFileProvider(this IFileProvider fileProvider,IHostBuilder host)` _method_ — Returns a composite file provider that combines the given provider with any catalog or external-resource file providers registered on the host builder. The base file provider to augment. The host builder whose properties are inspected for additional file providers.

#### `HostBuilderExtensions`

_public class_

Source: `src/Shared/Hosting.Server/HostBuilderExtensions.cs`

Extensions for

Members:

- `IHostBuilder ConfigureStartupServices(this IHostBuilder hostBuilder,Func&lt;AssemblyCatalogItem,bool&gt; filter,params ICatalog[] catalogs)` _method_ — Finds all assemblies which implements and runs the configuration for the passed
- `IHostBuilder SetDefaultCultureInfo(this IHostBuilder hostBuilder)` _method_ — Set default language for the thread to en
- `IHostBuilder UseSerilogWithConfiguration(this IHostBuilder hostBuilder)` _method_ — Configures Serilog as logger, adds it to the service list and configures Serilog from configuration

#### `HostingEnvironmentExtensions`

_public class_

Source: `src/Shared/Web/HostingEnvironmentExtensions.cs`

Extensions for

Members:

- `bool IsInmemoryTesting(this IHostEnvironment hostingEnvironment)` _method_ — Gets if current environment is in memory testing mode
- `bool IsTesting(this IHostEnvironment hostingEnvironment)` _method_ — Gets if current environment is in testing mode
- `bool IsUnix(this IHostEnvironment hostingEnvironment)` _method_ — Gets if current environment is unix type

#### `TestEnvironmentName`

_public class_

Source: `src/Shared/Web/TestEnvironmentName.cs`

Exposes environment names for testing purpose

Members:

- `string Get(bool inMemory)` _method_ — Returns the appropriate testing environment name based on whether in-memory infrastructure is requested. `true` to get the in-memory variant; `false` for the standard testing name. The environment name string.

### `Microsoft.Extensions.Logging`

#### `LoggerExtensions`

_public class_

Source: `src/Shared/Logging/LoggerExtensions.cs`

Extension methods for that add performance timing helpers.

Members:

- `IDisposable CreateStopwatch(this ILogger logger,string message = null,params object[] args)` _method_ — Creates a stopwatch scope that logs the elapsed time at when disposed. If the logger has debug logging disabled a lightweight no-op disposable is returned instead. The logger to write the timing entry to. An optional structured-log message template. The elapsed milliseconds are appended automatically. Optional arguments for the message template. An scope; dispose it to record the elapsed time.

### `Newtonsoft.Json`

#### `JsonSerializerSettingsExtensions`

_public class_

Source: `src/Shared/Cqrs/Json/JsonSerializerSettingsExtensions.cs`

Extension methods for that apply the standard CQRS serialisation conventions.

Members:

- `JsonSerializerSettings ConfigureForCqrs(this JsonSerializerSettings settings,params Type[] excludeTypes)` _method_ — Applies CQRS-compatible settings including type-name handling, enum converters, and message contract resolution. The settings instance to configure. Optional types to exclude from sub-type resolution. The same instance for chaining.

#### `JsonSerializerSettingsExtensions`

_public class_

Source: `src/Shared/Web/Json/JsonSerializerSettingsExtensions.cs`

Extension methods for configuring for OData compatibility.

Members:

- `JsonSerializerSettings ConfigureForOData(this JsonSerializerSettings settings)` _method_ — Adds `SelectExpand` and `PageResult` JSON converters to support OData query results. The serializer settings to configure. The same for chaining.

### `Rebus.Bus`

#### `Extensions`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/Extensions.cs`

Extension methods for Rebus

Members:

- `Task PublishCommandErrorEvent&lt;T&gt;(this IBus bus,T command,Exception exception)` _method_ — Publish a CommandErrorEvent

### `Rebus.Config`

#### `Extensions`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/Extensions.cs`

Extension methods for Rebus

Members:

- `void ApplyAuthorization(this OptionsConfigurer configurer)` _method_ — Registers a pipeline step that enforces policies on both incoming and outgoing messages. The Rebus options configurer.
- `void ApplyServiceProvider(this OptionsConfigurer configurer,IServiceProvider provider)` _method_ — Registers a step which the scope of each pipeline
- `void AutoSetMessageId(this OptionsConfigurer configurer)` _method_ — Registers a step which set and load the message id header from IMessage.MessageId
- `void CatchMessagesSent(this OptionsConfigurer configurer)` _method_ — Registers a step which set and load the message id header from IMessage.MessageId
- `void HandleCommandsEvents(this OptionsConfigurer configurer,IServiceProvider provider)` _method_ — Registers a custom IErrorHandler which emits events for any exceptions raised by a command
- `void IncludePrincipalClaims(this OptionsConfigurer configurer)` _method_ — Registers a pipeline step that reads claims from message headers on incoming messages and writes claims to headers on outgoing messages. The Rebus options configurer.
- `void LogMessages(this OptionsConfigurer configurer,IServiceProvider provider)` _method_ — Registers a step which set and load the message id header from IMessage.MessageId

### `Rebus.Pipeline`

#### `Extensions`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/Extensions.cs`

Extension methods for Rebus

Members:

- `DateTimeOffset GetSentDateTime(this IMessageContext messageContext)` _method_ — Gets when the message has been sent

### `Rebus.Transport`

#### `Extensions`

_public class_

Source: `src/Shared/Cqrs.Rebus/Rebus/Extensions.cs`

Extension methods for Rebus

Members:

- `IServiceProvider GetProvider(this ITransactionContext context)` _method_ — Gets the DI scope available inside the context

### `Serilog`

#### `CorrelationIdLoggerConfigurationExtensions`

_public class_

Source: `src/Shared/Logging/Correlation/CorrelationIdLoggerConfigurationExtensions.cs`

Extension methods for adding the correlation-ID enricher to a Serilog .

Members:

- `LoggerConfiguration WithCorrelationId(this LoggerEnrichmentConfiguration enrichmentConfiguration)` _method_ — Enriches log events with a `CorrelationId` property sourced from . The enrichment configuration to extend. The updated .

#### `LoggerConfigurationExtensions`

_public class_

Source: `src/Shared/Logging/LoggerConfigurationExtensions.cs`

Extension methods for configuring with Industria4 conventions.

Members:

- `void ConfigureLogger(this LoggerConfiguration loggerConfiguration,IConfiguration configuration)` _method_ — Applies the standard Industria4 logging pipeline: correlation-ID enrichment, settings from `configuration`, coloured console output, rolling-file output and, when a debugger is attached, a debug sink. The Serilog logger configuration to configure. The application configuration used to apply additional Serilog settings via `Serilog` sections.

### `System`

#### `StringExtensions`

_public class_

Source: `src/Shared/Core/StringExtensions.cs`

Extension methods for .

Members:

- `string ToCamelCase(this string str)` _method_ — Converts the first character of the string to lower-case (camelCase). The input string. The camelCased string, or the original value if it is `null` or empty.

#### `TypeExtensions`

_public class_

Source: `src/Shared/Web.Forms/Components/TypeExtensions.cs`

Extension methods for that support Blazor rendering.

Members:

- `RenderFragment GetRenderFragment(this Type type)` _method_ — Creates a that renders an instance of this type as a Blazor component. The component type to render. A that opens and closes the component.

#### `UriExtensions`

_public class_

Source: `src/Shared/Http/UriExtensions.cs`

Extension methods for that simplify query string construction.

Members:

- `Uri AddQueryString(this Uri uri,IDictionary&lt;string,object&gt; values)` _method_ — Returns a new with the provided key-value pairs appended as a query string. The base URI to extend. A dictionary of query parameter names and their values. A new with the query string appended.

### `System.Collections.ObjectModel`

#### `ObservableCollectionEx&lt;T&gt;`

_public class_

Source: `src/Shared/Web.Forms/ObservableCollectionEx.cs`

Observable collection with ability to delay or suspend CollectionChanged notifications

Members:

- `ObservableCollectionEx()` _constructor_ — Initializes a new instance of ObservableCollectionEx that is empty and has default initial capacity.
- `ObservableCollectionEx(List&lt;T&gt; list)` _constructor_ — Initializes a new instance of the ObservableCollectionEx class that contains elements copied from the specified list The list whose elements are copied to the new list. The elements are copied onto the ObservableCollectionEx in the same order they are read by the enumerator of the list. list is a null reference
- `ObservableCollectionEx(IEnumerable&lt;T&gt; collection)` _constructor_ — Initializes a new instance of the ObservableCollection class that contains elements copied from the specified collection and has sufficient capacity to accommodate the number of elements copied. The collection whose elements are copied to the new list. The elements are copied onto the ObservableCollection in the same order they are read by the enumerator of the collection. collection is a null reference
- `ObservableCollectionEx(ObservableCollectionEx&lt;T&gt; parent,bool notify)` _constructor_ — Constructor that configures the container to delay or disable notifications. Reference to an original collection whos events are being postponed Specifies if notifications needs to be delayed or disabled
- `event NotifyCollectionChangedEventHandler CollectionChanged = _emptyDelegate` _event_ — Occurs when the collection changes, either by adding or removing an item. See
- `event PropertyChangedEventHandler PropertyChanged` _event_ — PropertyChanged event .
- `IDisposable BlockReentrancy()` _method_ — Disallow reentrant attempts to change this collection. E.g. a event handler of the CollectionChanged event is not allowed to make changes to this collection. typical usage is to wrap e.g. a OnCollectionChanged call with a using() scope: ` using (BlockReentrancy()) &#123; CollectionChanged(this, new NotifyCollectionChangedEventArgs(action, item, index)); &#125; `
- `void CheckReentrancy()` _method_ — Check and assert for reentrant attempts to change this collection. raised when changing the collection while another collection change is still being notified to other listeners
- `void ClearItems()` _method_ — Called by base class Collection&amp;lt;T&amp;gt; when the list is being cleared; raises a CollectionChanged event to any listeners.
- `ObservableCollectionEx&lt;T&gt; DelayNotifications()` _method_ — Returns an instance of class which manipulates original collection but suppresses notifications untill this instance has been released and Dispose() method has been called. To supress notifications it is recommended to use this instance inside using() statement: ` using (var iSuppressed = collection.DelayNotifications()) &#123; iSuppressed.Add(x); iSuppressed.Add(y); iSuppressed.Add(z); &#125; ` Each delayed interface is bound to only one type of operation such as Add, Remove, etc. Different types of operation on the same delayed interface are not allowed. In order to do other type of opertaion you can allocate another wrapper by calling .DelayNotifications() on either original object or any delayed instances.
- `ObservableCollectionEx&lt;T&gt; DisableNotifications()` _method_ — Returns a wrapper instance of an ObservableCollectionEx class. Calling methods of this instance will modify original collection but will not generate any notifications.
- `void Dispose()` _method_ — Called by the application code to fire all delayed notifications.
- `void Dispose(bool reason)` _method_ — Fires notification with all accumulated events True is called by App code. False if called from GC.
- `void InsertItem(int index,T item)` _method_ — Called by base class Collection&amp;lt;T&amp;gt; when an item is added to list; raises a CollectionChanged event to any listeners.
- `void Move(int oldIndex,int newIndex)` _method_ — Move item at oldIndex to newIndex.
- `void MoveItem(int oldIndex,int newIndex)` _method_ — Called by base class ObservableCollection&amp;lt;T&amp;gt; when an item is to be moved within the list; raises a CollectionChanged event to any listeners.
- `void OnCollectionChanged(NotifyCollectionChangedEventArgs e)` _method_ — Raise CollectionChanged event to any listeners. Properties/methods modifying this ObservableCollection will raise a collection changed event through this virtual method. When overriding this method, either call its base implementation or call to guard against reentrant collection changes.
- `void OnPropertyChanged(PropertyChangedEventArgs e)` _method_ — Raises a PropertyChanged event (per ).
- `void RemoveItem(int index)` _method_ — Called by base class Collection&amp;lt;T&amp;gt; when an item is removed from list; raises a CollectionChanged event to any listeners.
- `void SetItem(int index,T item)` _method_ — Called by base class Collection&amp;lt;T&amp;gt; when an item is set in list; raises a CollectionChanged event to any listeners.

### `System.Linq`

#### `LinqExtensions`

_public class_

Source: `src/Shared/Http/LinqExtensions.cs`

Extension methods that add OData-specific LINQ operators (`$filter` and `$orderby` raw strings) to pipelines.

Members:

- `IQueryable&lt;T&gt; OrderByOData&lt;T&gt;(this IQueryable&lt;T&gt; source,string member)` _method_ — Appends an OData `$orderby` clause expressed as a raw member string. The element type of the queryable. The queryable to order. The raw OData order expression (e.g. `Name asc`). A new queryable with the ordering applied.
- `IQueryable&lt;T&gt; WhereOData&lt;T&gt;(this IQueryable&lt;T&gt; source,string filter)` _method_ — Appends an OData `$filter` clause expressed as a raw filter string. The element type of the queryable. The queryable to filter. The raw OData filter expression (e.g. `Name eq 'Alice'`). A new queryable with the filter applied.

#### `QueryableExtensions`

_public class_

Source: `src/Shared/Linq/QueryableExtensions.cs`

Extension methods for that add filtering helpers operating on expressions.

Members:

- `IQueryable&lt;T&gt; In&lt;T,TValue&gt;(this IQueryable&lt;T&gt; query,Expression&lt;Func&lt;T,TValue&gt;&gt; property,IEnumerable&lt;TValue&gt; values)` _method_ — Filters items by the property and specified values
- `IQueryable&lt;T&gt; WhereAndDictionary&lt;T,TValue&gt;(this IQueryable&lt;T&gt; query,Expression&lt;Func&lt;T,TValue&gt;&gt; property,IDictionary&lt;string,object&gt; dictionary,ExpressionType type)` _method_ — Applies a filter to a property of type dictionary using all the possibile values and a operator
- `IQueryable&lt;T&gt; WhereOrDictionary&lt;T,TValue&gt;(this IQueryable&lt;T&gt; query,Expression&lt;Func&lt;T,TValue&gt;&gt; property,IDictionary&lt;string,object&gt; dictionary,ExpressionType type)` _method_ — Applies a filter to a property of type dictionary using one of the possibile values and a operator

#### `QueryableExtensions`

_public class_

Source: `src/Shared/Web.Forms/Extensions/QuickGridExtensions.cs`

Extension methods for that apply dynamic filtering and sorting by property name.

Members:

- `IQueryable&lt;T&gt; ApplyFilter&lt;T&gt;(this IQueryable&lt;T&gt; query,string propertyName,string @operator,object value)` _method_ — Applies a dynamic filter to `query` by the given property name, operator, and value. The element type. The queryable to filter. The name of the property to filter on. The comparison operator (e.g. `"="`, `"contains"`). The value to compare against. A filtered queryable.
- `IQueryable&lt;T&gt; ApplyQuickGridPagination&lt;T&gt;(this IQueryable&lt;T&gt; query,GridItemsProviderRequest&lt;T&gt; request)` _method_ — Applies pagination from GridItemsProviderRequest to IQueryable The entity type The queryable to paginate The GridItemsProviderRequest containing pagination information Paginated queryable
- `IQueryable&lt;T&gt; ApplyQuickGridRequest&lt;T&gt;(this IQueryable&lt;T&gt; query,GridItemsProviderRequest&lt;T&gt; request)` _method_ — Applies all QuickGrid operations (sorting and pagination) to IQueryable The entity type The queryable to process The GridItemsProviderRequest Processed queryable with sorting and pagination applied
- `IQueryable&lt;T&gt; ApplyQuickGridSorting&lt;T&gt;(this IQueryable&lt;T&gt; query,GridItemsProviderRequest&lt;T&gt; request)` _method_ — Applies sorting from GridItemsProviderRequest to IQueryable using dynamic property resolution The entity type The queryable to sort The GridItemsProviderRequest containing sort information Sorted queryable
- `IQueryable&lt;T&gt; ApplySort&lt;T&gt;(this IQueryable&lt;T&gt; query,string propertyName,bool descending = false)` _method_ — Applies dynamic ordering to `query` by the given property name. The element type. The queryable to sort. The name of the property to sort by. When `true` sorts in descending order. An ordered queryable.

### `System.Linq.Expressions`

#### `ExpressionExtensions`

_public class_

Source: `src/Shared/Linq/ExpressionExtensions.cs`

Extensions for

Members:

- `TValue GetConstantValue&lt;TValue&gt;(this IEnumerable&lt;Expression&gt; expressions)` _method_ — Returns the first expression whose type returns the searched value. If needed, it compiles and evaluates the expression
- `MemberInfo GetMemberInfo&lt;T,TValue&gt;(this Expression&lt;Func&lt;T,TValue&gt;&gt; property)` _method_ — Gets the member used in the expression
- `T Optimize&lt;T&gt;(this T expression)` _method_ — Optimizes expressions by simplifying AND and OR logic.
- `T Replace&lt;T&gt;(this T expression,Expression from,Expression to)` _method_ — Replaces an expression inside a parent expression with another one.
- `T Replace&lt;T&gt;(this T expression,Func&lt;Expression,bool&gt; match,Func&lt;Expression,Expression&gt; replaceWith)` _method_ — Replaces an expression inside a parent expression according to match rules.
- `T Replace&lt;T&gt;(this T expression,Func&lt;Expression,bool&gt; match,Func&lt;Expression,Expression&gt; replaceWith,bool visitReplaced)` _method_ — Replaces an expression inside a parent expression according to match rules.
- `void Visit(this Expression expression,Action&lt;Expression&gt; visit)` _method_ — Visits an expression by traversing it.
- `IEnumerable&lt;Expression&gt; Visit(this Expression expression)` _method_ — Visits an expression and returns an IEnumerable of visited nodes.

### `System.Resources`

#### `AssemblyNamesTypeResolutionService`

_internal class_

Source: `src/Shared/Globalization/Resources/ResXDataNode.cs`

Members:

- `AssemblyNamesTypeResolutionService(AssemblyName[] names)` _constructor_
- `Assembly GetAssembly(AssemblyName name)` _method_
- `Assembly GetAssembly(AssemblyName name,bool throwOnError)` _method_
- `string GetPathOfAssembly(AssemblyName name)` _method_
- `Type GetType(string name)` _method_
- `Type GetType(string name,bool throwOnError)` _method_
- `Type GetType(string name,bool throwOnError,bool ignoreCase)` _method_
- `void ReferenceAssembly(AssemblyName name)` _method_

#### `Converter`

_public class_

Source: `src/Shared/Globalization/Resources/ResXFileRef.cs`

Type converter for that converts to and from a string representation.

Members:

- `string[] ParseResxFileRefString(string stringValue)` _method_

#### `DataNodeInfo`

_internal class_

Source: `src/Shared/Globalization/Resources/ResXDataNode.cs`

Members:

- `DataNodeInfo Clone()` _method_

#### `IAliasResolver`

_internal interface_

Source: `src/Shared/Globalization/Resources/IAliasResolver.cs`

Summary of IAliasResolver.

#### `MultitargetUtil`

_internal class_

Source: `src/Shared/Globalization/Resources/MultitargetUtil.cs`

Helper class supporting Multitarget type assembly qualified name resolution for ResX API. Note: this file is compiled into different assemblies (runtime and VSIP assemblies ...)

Members:

- `string GetAssemblyQualifiedName(Type type,Func&lt;Type,string&gt; typeNameConverter)` _method_ — This method gets assembly info for the corresponding type. If the delegate is provided it is used to get this information.

#### `ResXDataNode`

_public class_

Source: `src/Shared/Globalization/Resources/ResXDataNode.cs`

Represents a resource data node in a .resx file, holding either a value object or a .

Members:

- `ResXDataNode(string name,object value)` _constructor_ — Initialises a new instance of with the specified name and value. The name of the resource node. The resource value object.
- `ResXDataNode(string name,object value,Func&lt;Type,string&gt; typeNameConverter)` _constructor_ — Initialises a new instance of with the specified name, value, and type name converter. The name of the resource node. The resource value object. A callback that converts a to its assembly-qualified name, used for multi-targeting.
- `ResXDataNode(string name,ResXFileRef fileRef)` _constructor_ — Initialises a new instance of that references an external file via a . The name of the resource node. The file reference describing the external resource.
- `ResXDataNode(string name,ResXFileRef fileRef,Func&lt;Type,string&gt; typeNameConverter)` _constructor_ — Initialises a new instance of that references an external file via a with a type name converter. The name of the resource node. The file reference describing the external resource. A callback that converts a to its assembly-qualified name, used for multi-targeting.
- `ResXDataNode(DataNodeInfo nodeInfo,string basePath)` _constructor_
- `ResXDataNode DeepClone()` _method_
- `DataNodeInfo GetDataNodeInfo()` _method_
- `Point GetNodePosition()` _method_ — Might return the position in the resx file of the current node, if known otherwise, will return Point(0,0) since point is a struct
- `object GetValue(ITypeResolutionService typeResolver)` _method_ — Get the value contained in this datanode
- `object GetValue(AssemblyName[] names)` _method_ — Get the value contained in this datanode
- `string GetValueTypeName(ITypeResolutionService typeResolver)` _method_ — Get the FQ type name for this datanode. We return typeof(object) for ResXNullRef
- `string GetValueTypeName(AssemblyName[] names)` _method_ — Get the FQ type name for this datanode

#### `ResXFileRef`

_public class_

Source: `src/Shared/Globalization/Resources/ResXFileRef.cs`

ResX File Reference class. This allows the developer to represent a link to an external resource. When the resource manager asks for the value of the resource item, the external resource is loaded.

Members:

- `ResXFileRef(string fileName,string typeName)` _constructor_ — Creates a new ResXFileRef that points to the specified file. The type refered to by typeName must support a constructor that accepts a System.IO.Stream as a parameter.
- `ResXFileRef(string fileName,string typeName,Encoding textFileEncoding)` _constructor_ — Creates a new ResXFileRef that points to the specified file. The type refered to by typeName must support a constructor that accepts a System.IO.Stream as a parameter.
- `ResXFileRef Clone()` _method_
- `void MakeFilePathRelative(string basePath)` _method_
- `string ToString()` _method_

#### `ResXNullRef`

_internal class_

Source: `src/Shared/Globalization/Resources/ResXNullRef.cs`

ResX Null Reference class. This class allows ResX to store null values. It is a placeholder that is written into the file. On read, it is replaced with null.

#### `ResXResourceReader`

_public class_

Source: `src/Shared/Globalization/Resources/ResXResourceReader.cs`

ResX resource reader.

Members:

- `ResXResourceReader(string fileName)` _constructor_ — Initialises a new instance of that reads from the specified file. The path to the .resx resource file.
- `ResXResourceReader(string fileName,ITypeResolutionService typeResolver)` _constructor_ — Initialises a new instance of that reads from the specified file using the given type resolver. The path to the .resx resource file. The type resolver used to locate types referenced in the resource file.
- `ResXResourceReader(string fileName,ITypeResolutionService typeResolver,IAliasResolver aliasResolver)` _constructor_
- `ResXResourceReader(TextReader reader)` _constructor_ — Initialises a new instance of that reads from the specified . The providing the .resx content.
- `ResXResourceReader(TextReader reader,ITypeResolutionService typeResolver)` _constructor_ — Initialises a new instance of that reads from the specified using the given type resolver. The providing the .resx content. The type resolver used to locate types referenced in the resource file.
- `ResXResourceReader(TextReader reader,ITypeResolutionService typeResolver,IAliasResolver aliasResolver)` _constructor_
- `ResXResourceReader(Stream stream)` _constructor_ — Initialises a new instance of that reads from the specified . The providing the .resx content.
- `ResXResourceReader(Stream stream,ITypeResolutionService typeResolver)` _constructor_ — Initialises a new instance of that reads from the specified using the given type resolver. The providing the .resx content. The type resolver used to locate types referenced in the resource file.
- `ResXResourceReader(Stream stream,ITypeResolutionService typeResolver,IAliasResolver aliasResolver)` _constructor_
- `ResXResourceReader(Stream stream,AssemblyName[] assemblyNames)` _constructor_ — Initialises a new instance of that reads from the specified using the given assembly names. The providing the .resx content. An array of objects used to resolve types in the resource file.
- `ResXResourceReader(Stream stream,AssemblyName[] assemblyNames,IAliasResolver aliasResolver)` _constructor_
- `ResXResourceReader(TextReader reader,AssemblyName[] assemblyNames)` _constructor_ — Initialises a new instance of that reads from the specified using the given assembly names. The providing the .resx content. An array of objects used to resolve types in the resource file.
- `ResXResourceReader(TextReader reader,AssemblyName[] assemblyNames,IAliasResolver aliasResolver)` _constructor_
- `ResXResourceReader(string fileName,AssemblyName[] assemblyNames)` _constructor_ — Initialises a new instance of that reads from the specified file using the given assembly names. The path to the .resx resource file. An array of objects used to resolve types in the resource file.
- `ResXResourceReader(string fileName,AssemblyName[] assemblyNames,IAliasResolver aliasResolver)` _constructor_
- `void Close()` _method_ — Closes and files or streams being used by the reader. Closes any files or streams being used by the reader.
- `void Dispose(bool disposing)` _method_
- `ResXResourceReader FromFileContents(string fileContents)` _method_ — Creates a reader with the specified file contents.
- `ResXResourceReader FromFileContents(string fileContents,ITypeResolutionService typeResolver)` _method_ — Creates a reader with the specified file contents.
- `ResXResourceReader FromFileContents(string fileContents,AssemblyName[] assemblyNames)` _method_ — Creates a reader with the specified file contents.
- `IDictionaryEnumerator GetEnumerator()` _method_
- `IDictionaryEnumerator GetMetadataEnumerator()` _method_ — Returns a dictionary enumerator that can be used to enumerate the elements in the .resx file.

#### `ResXResourceSet`

_public class_

Source: `src/Shared/Globalization/Resources/ResXResourceSet.cs`

ResX resource set.

Members:

- `ResXResourceSet(string fileName)` _constructor_ — Creates a resource set for the specified file.
- `ResXResourceSet(Stream stream)` _constructor_ — Creates a resource set for the specified stream.
- `Type GetDefaultReader()` _method_ — Gets the default reader type associated with this set.
- `Type GetDefaultWriter()` _method_ — Gets the default writer type associated with this set.

#### `ResXResourceWriter`

_public class_

Source: `src/Shared/Globalization/Resources/ResXResourceWriter.cs`

ResX resource writer. See the text in "ResourceSchema" for more information.

Members:

- `ResXResourceWriter(string fileName)` _constructor_ — Creates a new ResXResourceWriter that will write to the specified file.
- `ResXResourceWriter(string fileName,Func&lt;Type,string&gt; typeNameConverter)` _constructor_ — Initialises a new instance of that will write to the specified file using a custom type name converter. The path to the output .resx file. A callback that converts a to its assembly-qualified name for multi-targeting.
- `ResXResourceWriter(Stream stream)` _constructor_ — Creates a new ResXResourceWriter that will write to the specified stream.
- `ResXResourceWriter(Stream stream,Func&lt;Type,string&gt; typeNameConverter)` _constructor_ — Initialises a new instance of that will write to the specified stream using a custom type name converter. The to write the .resx content to. A callback that converts a to its assembly-qualified name for multi-targeting.
- `ResXResourceWriter(TextWriter textWriter)` _constructor_ — Creates a new ResXResourceWriter that will write to the specified TextWriter.
- `ResXResourceWriter(TextWriter textWriter,Func&lt;Type,string&gt; typeNameConverter)` _constructor_ — Initialises a new instance of that will write to the specified using a custom type name converter. The to write the .resx content to. A callback that converts a to its assembly-qualified name for multi-targeting.
- `void AddAlias(string aliasName,AssemblyName assemblyName)` _method_ — Adds aliases to the resource file...
- `void AddMetadata(string name,byte[] value)` _method_ — Adds the given value to the collection of metadata. These name/value pairs will be emitted to the elements in the .resx file.
- `void AddMetadata(string name,string value)` _method_ — Adds the given value to the collection of metadata. These name/value pairs will be emitted to the elements in the .resx file.
- `void AddMetadata(string name,object value)` _method_ — Adds the given value to the collection of metadata. These name/value pairs will be emitted to the elements in the .resx file.
- `void AddResource(string name,byte[] value)` _method_ — Adds a blob resource to the resources. add resource.
- `void AddResource(string name,object value)` _method_ — Adds a resource to the resources. If the resource is a string, it will be saved that way, otherwise it will be serialized and stored as in binary. add resource.
- `void AddResource(string name,string value)` _method_ — Adds a string resource to the resources. add resource.
- `void AddResource(ResXDataNode node)` _method_ — Adds a string resource to the resources.
- `void Close()` _method_ — Closes any files or streams locked by the writer. close.
- `void Dispose()` _method_
- `void Dispose(bool disposing)` _method_
- `void Generate()` _method_ — Writes the resources out to the file or stream. generate.
- `string BasePath` _property_ — Base Path for ResXFileRefs.

#### `ResXSerializationBinder`

_internal class_

Source: `src/Shared/Globalization/Resources/ResXDataNode.cs`

Members:

- `ResXSerializationBinder(ITypeResolutionService typeResolver)` _constructor_
- `ResXSerializationBinder(Func&lt;Type,string&gt; typeNameConverter)` _constructor_
- `void BindToName(Type serializedType,out string assemblyName,out string typeName)` _method_
- `Type BindToType(string assemblyName,string typeName)` _method_

### `System.Windows.Forms`

#### `WeakRefCollection`

_internal class_

Source: `src/Shared/Globalization/Resources/ClientUtils.cs`

WeakRefCollection - a collection that holds onto weak references Essentially you pass in the object as it is, and under the covers we only hold a weak reference to the object. ----------------------------------------------------------------- !!!IMPORTANT USAGE NOTE!!! Users of this class should set the RefCheckThreshold property explicitly or call ScavengeReferences every once in a while to remove dead references. Also avoid calling Remove(item). Instead call RemoveByHashCode(item) to make sure dead refs are removed. -----------------------------------------------------------------

Members:

- `WeakRefCollection()` _constructor_
- `WeakRefCollection(int size)` _constructor_
- `int Add(object value)` _method_
- `void Clear()` _method_
- `bool Contains(object value)` _method_
- `void CopyTo(Array array,int index)` _method_
- `bool Equals(object obj)` _method_
- `IEnumerator GetEnumerator()` _method_
- `int GetHashCode()` _method_
- `int IndexOf(object value)` _method_
- `void Insert(int index,object value)` _method_
- `void Remove(object value)` _method_
- `void RemoveAt(int index)` _method_
- `void RemoveByHashCode(object value)` _method_ — Removes the value using its hash code as its identity. This is needed because the underlying item in the collection may have already been collected changing the identity of the WeakRefObject making it impossible for the collection to identify it. See WeakRefObject for more info.
- `void ScavengeReferences()` _method_
- `int Count` _property_
- `ArrayList InnerList` _property_
- `bool IsFixedSize` _property_
- `bool IsReadOnly` _property_
- `int RefCheckThreshold` _property_ — Indicates the value where the collection should check its items to remove dead weakref left over. Note: When GC collects weak refs from this collection the WeakRefObject identity changes since its Target becomes null. This makes the item unrecognizable by the collection and cannot be removed - Remove(item) and Contains(item) will not find it anymore.

#### `WeakRefObject`

_internal class_

Source: `src/Shared/Globalization/Resources/ClientUtils.cs`

Wraps a weak ref object. WARNING: Use this class carefully! When the weak ref is collected, this object looses its identity. This is bad when the object has been added to a collection since Contains(WeakRef(item)) and Remove(WeakRef(item)) would not be able to identify the item.

Members:

- `WeakRefObject(object obj)` _constructor_
- `bool Equals(object obj)` _method_
- `int GetHashCode()` _method_


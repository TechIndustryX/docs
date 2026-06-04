---
title: "Industria4"
---

# Industria4

This namespace contains 33 public API types.

## Types

- [AsyncEventHandlerExtensions](./asynceventhandlerextensions.md) _class_ - Extension methods for .
- [AvailableEntityEvents&lt;T&gt;](./availableentityevents.md) _class_ - Default implementation of
- [BuildVersionAttribute](./buildversionattribute.md) _class_ - Assembly-level attribute that records the build version string injected by the CI pipeline.
- [CqrsEvents](./cqrsevents.md) _class_ - Base events exposed for Cqrs
- [CqrsEventsExtensions](./cqrseventsextensions.md) _class_ - Extends with CQRS events
- [EventIds](./eventids.md) _class_ - Static class which aggregates all event ids available
- [GlobalizationEvents](./globalizationevents.md) _class_ - Provides event-ID registrations for the Globalization domain entities.
- [HookServiceProvider](./hookserviceprovider.md) _class_ - An decorator that allows intercepting resolved services with registered callbacks.
- [HookServiceProviderFactory&lt;T&gt;](./hookserviceproviderfactory.md) _class_ - A factory that wraps an existing to produce a . The container builder type used by the inner factory.
- [IAvailableEntityEvents](./iavailableentityevents-2.md) _interface_ - Interface used to group events dedicated to entity
- [IAvailableEntityEvents&lt;T&gt;](./iavailableentityevents.md) _interface_ - Interface used to group events dedicated to entity
- [IAvailableEvents](./iavailableevents.md) _interface_ - Interface used by extensions methods for providing available event ids
- [IdentityEntityEvents](./identityentityevents.md) _class_ - Provides access to entity-scoped Identity events.
- [IdentityEvents](./identityevents.md) _class_ - Provides access to Identity domain events.
- [IDependencyChecker](./idependencychecker.md) _interface_ - Represents a dependency that must be ready before the application host starts.
- [Industria4Environment](./industria4environment.md) _class_ - Provides environment-level configuration for the Industria4 platform, such as the data root folder.
- [Industria4Exception](./industria4exception.md) _class_ - Base exception class for domain and infrastructure errors in the Industria4 platform.
- [MesEntityEvents](./mesentityevents.md) _class_ - MES-domain structured-log event IDs scoped to a specific entity event range.
- [MesEvents](./mesevents.md) _class_ - Top-level MES event-ID container that groups event ranges by aggregate type.
- [MesEventsExtensions](./meseventsextensions.md) _class_ - Extension methods for accessing Identity event collections from CQRS event providers.
- [MesEventsExtensions](./meseventsextensions-2.md) _class_ - Extension methods that expose MES-specific structured-log event-ID groups.
- [OpcUaEvents](./opcuaevents.md) _class_ - Groups domain events for the OPC-UA bounded context.
- [ProductionEvents](./productionevents.md) _class_ - Well-known event IDs for the Production bounded context.
- [ProductionEventsExtensions](./productioneventsextensions.md) _class_ - Extension methods that expose the group from the available-events catalog.
- [RecipesEvents](./recipesevents.md) _class_ - Provides categorised event-ID ranges for Recipes entities.
- [RecipesEventsExtensions](./recipeseventsextensions.md) _class_ - Extension methods for accessing from .
- [RecipesEventsExtensions](./recipeseventsextensions-2.md) _class_ - Provides the accessor on any instance.
- [RecipesEventsExtensions](./recipeseventsextensions-3.md) _class_ - Extension methods for accessing Recipes-scoped event IDs.
- [RepositoryEvents](./repositoryevents.md) _class_ - Well-known log event IDs for repository operations.
- [RepositoryEventsExtensions](./repositoryeventsextensions.md) _class_ - Extension methods that expose the event-ID group.
- [SequencesEntityEvents](./sequencesentityevents.md) _class_ - Provides entity-level event identifiers scoped to a specific Sequences entity.
- [SequencesEvents](./sequencesevents.md) _class_ - Provides access to domain-level Sequences event groups.
- [SequencesEventsExtensions](./sequenceseventsextensions.md) _class_ - Extension methods on and that expose Sequences event groups.

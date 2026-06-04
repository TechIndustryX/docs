---
title: "Industria4.Cqrs"
---

# Industria4.Cqrs

This namespace contains 41 public API types.

## Types

- [AuditLogType](./auditlogtype.md) _class_ - CQRS entity type marker for `AuditLog` entities.
- [CqrsAuthorizeAttribute](./cqrsauthorizeattribute.md) _class_ - Requires that the caller satisfies the specified authorization policy before a CQRS command or query is dispatched.
- [CqrsConfigurer](./cqrsconfigurer.md) _class_
- [CqrsExtensions](./cqrsextensions.md) _class_ - Extension methods for wiring Gateway CQRS queues.
- [CqrsExtensions](./cqrsextensions-2.md) _class_ - Extension methods for registering Globalization CQRS handlers.
- [CqrsExtensions](./cqrsextensions-3.md) _class_ - Extension methods for wiring Globalization CQRS queues and command routes.
- [CqrsExtensions](./cqrsextensions-4.md) _class_ - Extension methods for registering Identity handlers with the CQRS configurer.
- [CqrsExtensions](./cqrsextensions-5.md) _class_ - Extension methods that register Identity CQRS infrastructure on .
- [CqrsExtensions](./cqrsextensions-6.md) _class_ - Extension methods for registering MES CQRS command handlers.
- [CqrsExtensions](./cqrsextensions-7.md) _class_ - Extension methods for wiring MES CQRS queues and command routes.
- [CqrsExtensions](./cqrsextensions-8.md) _class_ - Extension methods for registering OPC-UA command handlers with an .
- [CqrsExtensions](./cqrsextensions-9.md) _class_ - Extension methods for configuring OPC-UA queues and command routes on an .
- [CqrsExtensions](./cqrsextensions-10.md) _class_ - Extension methods for registering Production CQRS message handlers.
- [CqrsExtensions](./cqrsextensions-11.md) _class_ - Extension methods for wiring Production CQRS queues and command routes.
- [CqrsExtensions](./cqrsextensions-12.md) _class_ - Extension methods that register Recipes CQRS handlers with an .
- [CqrsExtensions](./cqrsextensions-13.md) _class_ - Extension methods that register Recipes CQRS infrastructure on .
- [CqrsExtensions](./cqrsextensions-14.md) _class_ - Extension methods for that register Sequences CQRS handlers and event subscriptions.
- [CqrsExtensions](./cqrsextensions-15.md) _class_ - Extension methods for wiring Sequences CQRS queues and command routes.
- [CqrsOptions](./cqrsoptions.md) _class_ - Options containing connection strings and service bus settings
- [GatewayQueues](./gatewayqueues.md) _class_ - Well-known queue names for the Gateway bounded context.
- [GlobalizationQueues](./globalizationqueues.md) _class_ - Defines the queue names used by the Globalization bounded context.
- [GlobalizationQueuesExtensions](./globalizationqueuesextensions.md) _class_ - Extension methods for obtaining the instance from the available queues registry.
- [IAvailableQueues](./iavailablequeues.md) _interface_ - Interface used by extensions methods for providing available queues
- [ICqrsConfigurer](./icqrsconfigurer.md) _interface_ - Interfaces used for configuring service bus
- [IdentityQueues](./identityqueues.md) _class_ - Well-known queue names for the Identity bounded context.
- [IdentityQueuesExtensions](./identityqueuesextensions.md) _class_ - Extension methods that expose the queue-name group.
- [IEntityType](./ientitytype.md) _interface_ - Marker interface that identifies a CQRS entity type, used for generic constraints and service discovery.
- [MesQueues](./mesqueues.md) _class_ - Well-known queue names for the MES bounded context.
- [MesQueuesExtensions](./mesqueuesextensions.md) _class_ - Extension methods that expose the queue-name group.
- [OpcUaQueues](./opcuaqueues.md) _class_ - Well-known queue names for the OPC-UA bounded context.
- [OpcUaQueuesExtensions](./opcuaqueuesextensions.md) _class_ - Extension methods that expose the queue-name group.
- [OpcUaQueuesExtensions](./opcuaqueuesextensions-2.md) _class_ - Extension methods that expose the queue-name group.
- [ProductionQueues](./productionqueues.md) _class_ - Well-known queue names for the Production bounded context.
- [ProductionQueuesExtensions](./productionqueuesextensions.md) _class_ - Extension methods that expose the queue-name group.
- [Queues](./queues.md) _class_ - Static class which aggregates all queues available
- [RecipesQueues](./recipesqueues.md) _class_ - Well-known queue names for the Recipes bounded context.
- [RecipesQueuesExtensions](./recipesqueuesextensions.md) _class_ - Extension methods that expose the queue-name group.
- [RoleType](./roletype.md) _class_ - CQRS entity type marker for `Role` entities.
- [SequencesQueues](./sequencesqueues.md) _class_ - Well-known queue names for the Sequences bounded context.
- [SequencesQueuesExtensions](./sequencesqueuesextensions.md) _class_ - Extension methods that expose the queue-name group.
- [UserType](./usertype.md) _class_ - CQRS entity type marker for `User` entities.

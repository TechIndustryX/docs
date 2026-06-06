---
title: CQRS Command Flow
---

# CQRS Command Flow

## Scenario

Send a command from a web/API module, handle it in a service and publish an event that updates waiting clients.

## Command

```csharp title="ReleaseOrderCommand.cs"
public sealed record ReleaseOrderCommand(
    Guid OrderId,
    string LineCode,
    string RequestedBy);
```

## Handler

```csharp title="ReleaseOrderHandler.cs"
public sealed class ReleaseOrderHandler(
    IProductionRepository repository,
    IMessagePublisher publisher)
{
    public async Task Handle(ReleaseOrderCommand command, CancellationToken token)
    {
        var order = await repository.GetOrderAsync(command.OrderId, token);
        order.ReleaseToLine(command.LineCode, command.RequestedBy);

        await repository.SaveAsync(order, token);
        await publisher.PublishAsync(new OrderReleasedEvent(command.OrderId, command.LineCode), token);
    }
}
```

## Step By Step

1. Define an immutable command with only the data required for the operation.
2. Validate authorization before sending the command.
3. Handle business changes in the domain/application service.
4. Persist changes.
5. Publish a completion or domain event.
6. Update web clients from the event stream.
7. Log command ID, user and aggregate ID.

## Validation

Send a command from the API and confirm:

- entity state changes in storage;
- completion event is published;
- UI updates after the event;
- invalid commands return validation errors.

---
title: Command Messaging
---

# Command Messaging

## Scenario

Define a command, expose it through the CQRS gateway and process it through the platform messaging pipeline.

The reference pattern is MES work-order commands such as `AddWorkOrderCommand`: commands are strongly typed, authorization-aware and routed through service-bus configuration.

## Command Definition

```csharp title="Commands/AddMyItemCommand.cs"
using Industria4.Cqrs;
using Industria4.Cqrs.Messaging.Commands;
using Industria4.DomainModel;

namespace Industria4.MyFeature.Cqrs.Commands;

[CqrsAuthorize("MyFeature.Items.New")]
public sealed class AddMyItemCommand : AddEntityCommand<MyItemType>
{
    public AddMyItemCommand(
        string id,
        string code,
        LanguageDictionary<string> descriptions,
        MetadataDictionary metadata) : base(id)
    {
        Code = code;
        Descriptions = descriptions ?? throw new ArgumentNullException(nameof(descriptions));
        Metadata = metadata ?? new MetadataDictionary();
    }

    public string Code { get; }
    public LanguageDictionary<string> Descriptions { get; }
    public MetadataDictionary Metadata { get; }
}
```

## Handler Pattern

```csharp title="Handlers/AddMyItemHandler.cs"
using Industria4.Repository;

public sealed class AddMyItemHandler(IRepository<MyItem> repository)
{
    public async Task Handle(AddMyItemCommand command)
    {
        var item = new MyItem(
            command.Id,
            command.Code,
            command.Descriptions,
            command.Metadata);

        await repository.AddAsync(item);
    }
}
```

## Service Bus Registration

```csharp title="Startup.cs"
services.AddServiceBus(bus =>
{
    bus.AddMyFeatureCommandsRoute();
    bus.AddMyFeatureHandlers();

    if (HostingEnvironment.IsTesting())
    {
        bus.UseMyFeatureInMemoryQueue();
    }
    else
    {
        bus.UseMyFeatureQueue();
    }
});
```

## CQRS Gateway

```csharp title="Startup.cs"
services.AddControllers()
    .AddCqrsGateway(options =>
    {
        options.BasePath = "/v1";
        options.CqrsAssemblies.Add(typeof(AddMyItemCommand).Assembly);
    })
    .AddODataSupport()
    .AddNewtonsoftJson(options =>
        options.SerializerSettings.ConfigureForCqrs().ConfigureForOData());
```

## Client Usage

```csharp title="MyItemClient.cs"
public Task AddAsync(AddMyItemCommand command, CancellationToken token = default)
{
    return _restClient.PostAsync<AddMyItemCommand, string>(_uri, command, token);
}
```

## Step By Step

1. Create the command in the bounded context `*.Cqrs` package.
2. Add `[CqrsAuthorize]` with the policy that protects the operation.
3. Derive entity commands from the platform command base classes when possible.
4. Create a handler in the backend context.
5. Register command routes and handlers in `AddServiceBus`.
6. Add the command assembly to `AddCqrsGateway`.
7. Expose typed client methods that send the command.
8. Handle command completion, validation and error events in the frontend.

## Validation

Run these checks:

- unauthorized users cannot send the command;
- valid command reaches the handler;
- invalid command emits a validation/error event;
- successful command changes read model state;
- frontend waits for command completion before refreshing the grid.

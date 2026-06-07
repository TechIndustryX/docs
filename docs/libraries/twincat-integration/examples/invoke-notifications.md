---
title: Invoke Notifications
---

# Invoke Notifications

## Scenario

Receive notifications from PLC function blocks. This is useful for events such as machine state changes, counters, alarms or operator actions.

## Complete Example

```csharp title="MachineEventsWorker.cs"
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using TechIndustry.Rpc.TwinCAT;

public sealed class MachineEventsWorker(
    IAdsClientFactory factory,
    ILogger<MachineEventsWorker> logger) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        await using var intEvent = factory.CreateInvoke<int>("MAIN.fbMachine2.fbInvokeInt");
        await using var boolEvent = factory.CreateInvoke<bool>("MAIN.fbMachine2.fbInvokeBool");
        await using var realEvent = factory.CreateInvoke<float>("MAIN.fbMachine2.fbInvokeReal");
        await using var textEvent = factory.CreateInvoke<string>("MAIN.fbMachine2.fbInvokeString");

        intEvent.Invoked += (_, value) =>
        {
            logger.LogInformation("Int event: {Value}", value);
            return Task.CompletedTask;
        };

        boolEvent.Invoked += (_, value) =>
        {
            logger.LogInformation("Bool event: {Value}", value);
            return Task.CompletedTask;
        };

        realEvent.Invoked += (_, value) =>
        {
            logger.LogInformation("Real event: {Value}", value);
            return Task.CompletedTask;
        };

        textEvent.Invoked += (_, value) =>
        {
            logger.LogInformation("String event: {Value}", value);
            return Task.CompletedTask;
        };

        await Task.Delay(Timeout.InfiniteTimeSpan, stoppingToken);
    }
}
```

## Step By Step

1. Identify the PLC invoke function block symbol.
2. Choose the .NET type that matches the PLC payload.
3. Create the invoke subscription with `CreateInvoke<T>()`.
4. Attach an `Invoked` handler.
5. Keep the object alive for as long as you want to receive events.
6. Dispose it when the service stops.

## Validation

Trigger the corresponding PLC event and confirm that the .NET log prints the value.

## Production Use

Use invoke notifications for asynchronous events. Do not poll PLC symbols if the PLC can push the event through an invoke block.

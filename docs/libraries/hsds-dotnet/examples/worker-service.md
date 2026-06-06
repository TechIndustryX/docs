---
title: Worker Service
---

# Worker Service

## Scenario

Use HSDS from a long-running .NET worker that periodically writes machine snapshots or analytical results.

## Source Pattern

This extends the host-builder pattern from `TechIndustry.Hsds.Console` into a normal hosted service.

## Steps

1. Register `AddHsdsClient` in the worker host.
2. Bind credentials and domain from configuration.
3. Inject `SimpleHsdsClient` into a `BackgroundService`.
4. Ensure domain and target group during startup.
5. Write datasets or attributes from the worker loop.

## Example

```csharp
builder.Services.AddHsdsClient(builder.Configuration.GetValue<Uri>("Hsds:Uri")!);
builder.Services.AddHostedService<MachineSnapshotWorker>();
```

```csharp
public sealed class MachineSnapshotWorker(SimpleHsdsClient hsds) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        await hsds.EnsureDomainAsync(stoppingToken);
        var group = await hsds.EnsureGroupAsync("machines/press-01", stoppingToken);
        await hsds.SetGroupAttributeAsync(group, "status", "running", stoppingToken);
    }
}
```

## Expected Result

The worker owns the operational timing, while `SimpleHsdsClient` handles HSDS domain, group and value operations.


---
title: Quickstart
---

# TwinCAT Integration Quickstart

Use TwinCAT Integration when you want the PLC and a .NET service to talk through explicit operations: invoke notifications, requests, request/reply calls, and PLC-side messaging primitives.

## 1. Add the .NET package

Configure the TechIndustry GitHub Packages feed, then add the library:

```bash
dotnet add package TechIndustry.Rpc.TwinCAT
```

## 2. Reference the PLC libraries

In TwinCAT, add the PLC projects/libraries used by your machine program:

- `TechIndustry.TwinCAT.Rpc` for `FB_RequestInt`, `FB_RequestReplyString`, `FB_InvokeInt`, JSON-symbol payloads, and binary-symbol payloads.
- `TechIndustry.TwinCAT.IoTCore` for `ServiceLocator`, task queues, messages, MQTT service brokers, typed signals, and machine-state primitives.

For a first validation, open the sample project and use the existing symbols under `MAIN.fbMachine2`.

## 3. Configure ADS access

Register the TwinCAT Integration services and bind ADS settings from configuration:

```csharp
using Microsoft.Extensions.DependencyInjection;
using TechIndustry.Rpc.TwinCAT;

var services = new ServiceCollection();

services.AddTwinCATRpc();
services.Configure<AdsOptions>(options =>
{
    // Use the AMS Net ID and PLC runtime port of the target TwinCAT runtime.
    options.NetId = "127.0.0.1.1.1";
    options.Port = 851;
});
```

## 4. Expose a PLC request

Create a PLC function block and keep the handshake explicit inside the PLC cycle:

```pascal title="FB_Machine2 excerpt"
VAR
    // .NET writes the parameter and toggles the execute handshake through ADS.
    fbSetQuantity : FB_RequestInt();
END_VAR

// Enable the request only while the machine can accept the command.
fbSetQuantity.CanExecute := TRUE;

IF fbSetQuantity.Executing THEN
    // Read the parameter copied by FB_RequestInt.Execute().
    IF fbSetQuantity.Parameter <= 0 THEN
        // Return a PLC-side error to the .NET caller.
        fbSetQuantity.SetError(1);
    ELSE
        // Complete the handshake and unblock the .NET InvokeAsync call.
        fbSetQuantity.SetExecuted();
    END_IF
END_IF
```

## 5. Call the PLC symbol from .NET

Create a typed client for the full PLC symbol path:

```csharp
using Microsoft.Extensions.DependencyInjection;
using TechIndustry.Rpc.TwinCAT;

var provider = services.BuildServiceProvider();
var factory = provider.GetRequiredService<IAdsClientFactory>();

// The symbol path must match the TwinCAT online symbol exactly.
await using var setQuantity =
    factory.CreateRequest<short>("MAIN.fbMachine2.fbSetQuantity");

// InvokeAsync waits until the PLC calls SetExecuted() or SetError().
await setQuantity.InvokeAsync(2, CancellationToken.None);
```

## 6. Validate a request/reply

Request/reply blocks must be executed every PLC scan so timeout and reply state are updated:

```pascal title="FB_Machine2 excerpt"
VAR
    fbGetString : FB_RequestReplyString(T#5S);
END_VAR

// Call the block every cycle. This manages timeout and reply completion.
fbGetString();
fbGetString.CanExecute := TRUE;

IF fbGetString.Executing THEN
    // SetExecuted(value) publishes the reply payload for the .NET caller.
    fbGetString.SetExecuted('test2');
END_IF
```

Then call it from .NET:

```csharp
await using var getString =
    factory.CreateRequestReply<string>("MAIN.fbMachine2.fbGetString");

var value = await getString.InvokeAsync(CancellationToken.None);
Console.WriteLine(value);
```

## 7. Run PLC-side tasks

If you use `TechIndustry.TwinCAT.IoTCore`, run the registered queues from the PLC main cycle:

```pascal title="MAIN excerpt"
// Timer tasks are always processed.
ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sTimerTask);

IF EVENTS.bReady THEN
    // Signals and commands are drained only when the runtime is ready.
    ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sSignalsTask);
    ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sCommandsTask);
END_IF
```

Use the sample project first. Once the symbol names, handshakes, and payloads are validated, copy the same pattern into the production PLC project.

---
title: PLC Sample Project
---

# PLC Sample Project

## Scenario

Use `TechIndustry.TwinCAT.Samples` as the validation harness before wiring a production PLC project. It contains the sample `MAIN`, machines, RPC function blocks, counters, MQTT integration blocks, and domain messages used throughout the examples.

## Project Contents

- `MAIN`: cyclic entry point that runs sample machines and task queues.
- `FB_Machine2`: RPC request, request/reply, invoke, JSON-symbol, and binary-symbol examples.
- `FB_Counter`: signal-backed counter that publishes events.
- `FB_MesMqtt`: MQTT integration listener and command receiver.
- `FB_MesMqttCommands`: command-specific MQTT behavior.
- `FB_Machine3` and `FB_Equipment1`: machine-state examples.
- `ST_Order`, `ST_Order2`, `ST_CounterMes`, `ST_Context`: sample DTOs used by RPC and JSON serialization.

## MAIN Wiring

```pascal title="MAIN"
PROGRAM MAIN
VAR
    iCounter : UINT := 0;

    fbMachine1 : FB_Machine1();
    fbMachine2 : FB_Machine2();
    fbMachine3 : FB_Machine3();
    fbSeries : FB_Series();

    {attribute 'Workflow'}
    fbSamples : FB_Samples();

    bSignal1 AT %Q* : BOOL;
    bSignal2 AT %Q* : BOOL;
END_VAR
```

```pascal title="MAIN execution"
// FB_Machine2 exposes the request/reply and invoke symbols used by the .NET sample.
fbMachine2();

// FB_Samples wires additional sample blocks used by the IoTCore examples.
fbSamples();

iCounter := iCounter + 1;

// Run task queues explicitly from the PLC cycle.
ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sTimerTask);

IF EVENTS.bReady THEN
    ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sSignalsTask);
    ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sCommandsTask);
END_IF
```

## Symbols To Test From .NET

Start with these sample symbols:

| Symbol | PLC block | .NET factory method | Purpose |
| --- | --- | --- | --- |
| `MAIN.fbMachine2.fbSetQuantity` | `FB_RequestInt` | `CreateRequest<short>()` | Send a quantity command to PLC. |
| `MAIN.fbMachine2.fbSetString` | `FB_RequestString` | `CreateRequest<string>()` | Send a text command to PLC. |
| `MAIN.fbMachine2.fbGetString` | `FB_RequestReplyString` | `CreateRequestReply<string>()` | Read a string reply from PLC. |
| `MAIN.fbMachine2.fbCompleteOrder` | `FB_RequestReplyInt` | `CreateRequestReply<short>()` | Execute an operation and receive a numeric result. |
| `MAIN.fbMachine2.fbSetOrder` | `FB_RequestSymbol` | `CreateRequest<OrderValue>()` | Send a fixed-layout binary struct. |
| `MAIN.fbMachine2.fbSetOrder2` | `FB_RequestJsonSymbol` | `CreateRequest<Order>()` | Send a JSON object into a PLC structure. |
| `MAIN.fbMachine2.fbGetOrder` | `FB_RequestReplySymbol` | `CreateRequestReply<OrderValue>()` | Read a fixed-layout binary struct. |
| `MAIN.fbMachine2.fbGetOrder2` | `FB_RequestReplyJsonSymbol` | `CreateRequestReply<Order>()` | Read a JSON object from a PLC structure. |
| `MAIN.fbMachine2.fbInvokeInt` | `FB_InvokeInt` | `CreateInvoke<int>()` | Subscribe to PLC integer events. |
| `MAIN.fbMachine2.fbInvokeBool` | `FB_InvokeBool` | `CreateInvoke<bool>()` | Subscribe to PLC boolean events. |
| `MAIN.fbMachine2.fbInvokeReal` | `FB_InvokeReal` | `CreateInvoke<float>()` | Subscribe to PLC real events. |
| `MAIN.fbMachine2.fbInvokeString` | `FB_InvokeString` | `CreateInvoke<string>()` | Subscribe to PLC string events. |

## Recommended Validation Flow

1. Open the TwinCAT sample project.
2. Activate it against a local or test runtime.
3. Confirm the `MAIN.fbMachine2.*` symbols are visible online.
4. Start the .NET sample host with the correct `Ads:NetId` and `Ads:Port`.
5. Validate `fbSetQuantity` first because it has the smallest payload.
6. Validate `fbGetString` to prove request/reply timeout handling is running.
7. Validate `fbSetOrder2` and `fbGetOrder2` to prove JSON payload mapping.
8. Toggle `bInvoke` in the PLC and confirm `.NET` receives invoke notifications.
9. Enable the IoTCore tasks and validate event publication through `FB_MesMqtt`.

## Moving To Production

Copy the pattern, not the sample names:

- keep stable PLC symbol paths for every operation;
- set `CanExecute` from real machine safety/state conditions;
- return explicit `SetError(code)` values for PLC-side rejection;
- call request/reply and invoke blocks every scan when they manage timeouts;
- keep DTOs such as `ST_Order` versioned alongside the .NET payload class;
- validate each symbol with the tester before connecting a production service.

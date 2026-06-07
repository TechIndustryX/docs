---
title: PLC Structured Text RPC
---

# PLC Structured Text RPC

## Scenario

Use `TechIndustry.TwinCAT.Rpc` when PLC code must expose explicit operations to .NET instead of raw variable reads and writes. The sample `FB_Machine2` shows the main patterns:

- `FB_Request*`: .NET sends a typed value and waits for PLC completion.
- `FB_RequestReply*`: .NET asks the PLC for a typed value and waits for a reply.
- `FB_Invoke*`: the PLC publishes a notification and .NET receives it.
- `FB_RequestSymbol` and `FB_RequestJsonSymbol`: larger payloads are moved as binary memory or JSON.

## Request From .NET To PLC

```pascal title="FB_Machine2 request declaration"
VAR
    // The Workflow attributes are optional metadata used by tooling/test UIs.
    {attribute 'Workflow'}
    {attribute 'Workflow-Name' := 'Set quantity'}
    {attribute 'Workflow-Description' := 'Set quantity using integer'}
    fbSetQuantity : FB_RequestInt();

    nQuantity : INT;
END_VAR
```

```pascal title="FB_Machine2 request execution"
// Keep this TRUE only when the PLC can accept a new request.
fbSetQuantity.CanExecute := TRUE;

IF fbSetQuantity.Executing THEN
    // Parameter is copied by FB_RequestInt.Execute() when .NET invokes the symbol.
    nQuantity := fbSetQuantity.Parameter;

    IF nQuantity <= 0 THEN
        // Non-zero errors are propagated to the .NET caller as TwinCATRpcException.
        fbSetQuantity.SetError(1);
    ELSE
        // SetExecuted() completes the PLC side of the request handshake.
        fbSetQuantity.SetExecuted();
    END_IF
END_IF
```

```csharp title="SetQuantityClient.cs"
using TechIndustry.Rpc.TwinCAT;

public sealed class SetQuantityClient(IAdsClientFactory factory)
{
    public async Task SetQuantityAsync(short quantity, CancellationToken token)
    {
        // The symbol path must point to the function block instance in the online PLC.
        await using var request =
            factory.CreateRequest<short>("MAIN.fbMachine2.fbSetQuantity");

        // InvokeAsync returns only after the PLC calls SetExecuted().
        await request.InvokeAsync(quantity, token);
    }
}
```

## Request/Reply From .NET To PLC

Request/reply blocks must be called every PLC scan. The call updates timeout state and completes reply cleanup.

```pascal title="FB_Machine2 string reply"
VAR
    // T#5S is the maximum time allowed for the reply handshake.
    fbGetString : FB_RequestReplyString(T#5S);
END_VAR

// Required every cycle: this manages timeout and reply state.
fbGetString();
fbGetString.CanExecute := TRUE;

IF fbGetString.Executing THEN
    // The string is written into the reply channel and read by .NET.
    fbGetString.SetExecuted('test2');
END_IF
```

```csharp title="GetStringClient.cs"
await using var getString =
    factory.CreateRequestReply<string>("MAIN.fbMachine2.fbGetString");

// The library waits for bReplying, reads the payload, and confirms the reply.
var value = await getString.InvokeAsync(token);
```

## Invoke From PLC To .NET

Use invoke blocks for PLC-originated events. The PLC triggers the event only when `CanInvoke` is true.

```pascal title="FB_Machine2 invoke declaration"
VAR
    bInvoke : BOOL;
    fbInvokeInt : FB_InvokeInt(T#5S);
    fbInvokeReal : FB_InvokeReal(T#5S);
    fbInvokeString : FB_InvokeString(T#5S);
    fbInvokeBool : FB_InvokeBool(T#5S);
END_VAR
```

```pascal title="FB_Machine2 invoke execution"
// Call each invoke block every scan so timeout and acknowledgement state progress.
fbInvokeInt();
fbInvokeReal();
fbInvokeString();
fbInvokeBool();

IF bInvoke AND fbInvokeInt.CanInvoke THEN
    // Reset the trigger before sending to avoid repeated notifications.
    bInvoke := FALSE;

    // Each Invoke() writes the payload and toggles bInvoking for the .NET subscriber.
    fbInvokeInt.Invoke(20);
    fbInvokeReal.Invoke(12.5);
    fbInvokeString.Invoke('machine-event');
    fbInvokeBool.Invoke(TRUE);
END_IF
```

```csharp title="MachineEventWorker.cs"
await using var intEvent =
    factory.CreateInvoke<int>("MAIN.fbMachine2.fbInvokeInt");

intEvent.Invoked += (_, value) =>
{
    // The handler runs when the PLC calls FB_InvokeInt.Invoke(value).
    logger.LogInformation("PLC integer event: {Value}", value);
    return Task.CompletedTask;
};
```

## JSON Symbol Payloads

Use JSON-symbol blocks when the PLC structure should be transferred by property name instead of fixed binary layout.

```pascal title="FB_Machine2 JSON request/reply"
VAR
    sOrder : ST_Order;

    {attribute 'Workflow'}
    {attribute 'Workflow-JsonType' := 'ST_Order'}
    fbSetOrder2 : FB_RequestJsonSymbol(SIZEOF(sOrder), ADR(sOrder));

    {attribute 'Workflow'}
    {attribute 'Workflow-JsonType' := 'ST_Order'}
    fbGetOrder2 : FB_RequestReplyJsonSymbol(T#5S, SIZEOF(sOrder), ADR(sOrder));
END_VAR

fbSetOrder2.CanExecute := TRUE;

IF fbSetOrder2.Executing THEN
    // At this point sOrder has been populated from the JSON payload.
    fbSetOrder2.SetExecuted();
END_IF

fbGetOrder2();
fbGetOrder2.CanExecute := TRUE;

IF fbGetOrder2.Executing THEN
    // FB_RequestReplyJsonSymbol serializes sOrder and serves it in chunks.
    fbGetOrder2.SetExecuted();
END_IF
```

```csharp title="Order.cs"
using System.Text.Json.Serialization;

public sealed class Order
{
    // Names must match the PLC JSON fields produced from ST_Order.
    [JsonPropertyName("sOrder")]
    public string? OrderNumber { get; set; }

    [JsonPropertyName("iQuantity")]
    public int Quantity { get; set; }
}
```

```csharp title="OrderClient.cs"
await using var setOrder =
    factory.CreateRequest<Order>("MAIN.fbMachine2.fbSetOrder2");

await setOrder.InvokeAsync(new Order
{
    OrderNumber = "ORD-2026-0001",
    Quantity = 12
}, token);

await using var getOrder =
    factory.CreateRequestReply<Order>("MAIN.fbMachine2.fbGetOrder2");

var current = await getOrder.InvokeAsync(token);
```

## Binary Symbol Payloads

Use binary-symbol blocks only when the .NET struct layout exactly matches the PLC structure memory layout.

```csharp title="OrderValue.cs"
using System.Runtime.InteropServices;

// Pack, field order, string size and character set must match the PLC struct.
[StructLayout(LayoutKind.Sequential, Pack = 8, CharSet = CharSet.Ansi)]
public struct OrderValue
{
    [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 255)]
    public string Number;

    public short Quantity;
}
```

```csharp title="BinaryPayloadClient.cs"
await using var setOrder =
    factory.CreateRequest<OrderValue>("MAIN.fbMachine2.fbSetOrder");

await setOrder.InvokeAsync(new OrderValue
{
    Number = "ORD-2026-0002",
    Quantity = 5
}, token);
```

## Validation Checklist

- The PLC function block instance is visible in online symbols.
- `CanExecute` is false when the machine cannot safely accept the operation.
- `SetExecuted()` or `SetError()` is called for every accepted request.
- Request/reply and invoke blocks are called every scan when they manage timeout state.
- JSON property names and binary struct layout are tested with known round-trip values.

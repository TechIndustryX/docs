---
title: Typed Payloads
---

# Typed Payloads

## Scenario

Send and receive structured values between .NET and PLC code. The sample shows both fixed-layout structs and JSON-serialized classes.

## Fixed Struct Payload

Use a struct when the PLC side expects a fixed memory layout.

```csharp title="OrderValue.cs"
using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;

[StructLayout(LayoutKind.Sequential, Pack = 8, CharSet = CharSet.Ansi)]
[SuppressMessage("ReSharper", "FieldCanBeMadeReadOnly.Global")]
public struct OrderValue
{
    [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 255)]
    public string Number;

    public short Quantity;
}
```

```csharp
await using var setOrder =
    factory.CreateRequest<OrderValue>("MAIN.fbMachine2.fbSetOrder");

await setOrder.InvokeAsync(new OrderValue
{
    Number = "ORD-2026-0001",
    Quantity = 12
});
```

## JSON Payload

Use a class when the PLC function block exchanges JSON.

```csharp title="Order.cs"
using System.Text.Json.Serialization;

public sealed class Order
{
    [JsonPropertyName("sOrder")]
    public string? OrderNumber { get; set; }

    [JsonPropertyName("iQuantity")]
    public int Quantity { get; set; }
}
```

```csharp
await using var setOrder =
    factory.CreateRequest<Order>("MAIN.fbMachine2.fbSetOrder2");

await setOrder.InvokeAsync(new Order
{
    OrderNumber = "ORD-2026-0002",
    Quantity = 20
});
```

## Step By Step

1. Decide whether the PLC payload is memory-layout based or JSON based.
2. For memory layout, match `StructLayout`, packing, string size and field order.
3. For JSON, match PLC property names with `JsonPropertyName`.
4. Use the same .NET type for `CreateRequest<T>()` or `CreateRequestReply<T>()`.
5. Add a round-trip test with known values before using the payload in production.

## Validation

Set a known order from .NET and read it back with a request/reply symbol. The order number and quantity must match exactly.

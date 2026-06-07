---
title: Request Reply
---

# Request Reply

## Scenario

Ask the PLC for a value or operation result and wait for the typed reply. The library handles the request handshake against the PLC function block.

## Complete Example

```csharp title="GetCurrentOrder.cs"
using System.Text.Json.Serialization;
using TechIndustry.Rpc.TwinCAT;

public sealed class OrderClient(IAdsClientFactory factory)
{
    public async Task<Order?> GetCurrentOrderAsync(CancellationToken token)
    {
        // Create one RPC wrapper per invocation scope and dispose the ADS handle after use.
        await using var getOrder =
            factory.CreateRequestReply<Order>("MAIN.fbMachine2.fbGetOrder2");

        // InvokeAsync waits until the PLC replies or the cancellation token fires.
        return await getOrder.InvokeAsync(token);
    }
}

public sealed class Order
{
    // Match the JSON field emitted by the PLC structure.
    [JsonPropertyName("sOrder")]
    public string? OrderNumber { get; set; }

    [JsonPropertyName("iQuantity")]
    public int Quantity { get; set; }
}
```

## Step By Step

1. Create the PLC request/reply function block.
2. Expose it with a stable symbol, for example `MAIN.fbMachine2.fbGetOrder2`.
3. Define the .NET reply type.
4. Call `CreateRequestReply<TReply>(symbol)`.
5. Call `InvokeAsync(token)`.
6. Handle `TwinCATRpcException` for PLC-side errors or timeout states.

## Validation

```csharp
var order = await orderClient.GetCurrentOrderAsync(CancellationToken.None);
Console.WriteLine($"{order?.OrderNumber}: {order?.Quantity}");
```

## When To Use

Use request/reply when the .NET side needs a deterministic answer from the PLC before continuing, such as current order, calculated setpoint, command result or validation result.

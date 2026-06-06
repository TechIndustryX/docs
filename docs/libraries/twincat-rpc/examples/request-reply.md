---
title: Request Reply
---

# Request Reply

## Scenario

Ask the PLC for a value or operation result and wait for the typed reply.

## Source Pattern

The sample uses `CreateRequestReply<T>()`. `RequestReply<T>` waits for `bCanExecute`, invokes `Execute`, waits for `bReplying`, reads the reply and confirms completion.

## Steps

1. Create a request/reply object for the PLC function block symbol.
2. Call `InvokeAsync` with a timeout token.
3. Read the typed result.
4. Handle `TwinCATRpcException` when the PLC reports an error.

## Example

```csharp
var getOrder = factory.CreateRequestReply<Order>("MAIN.fbMachine2.fbGetOrder2");
var order = await getOrder.InvokeAsync(cancellationToken);
```

## Expected Result

The .NET application receives a typed response while the PLC handshake remains consistent.


---
title: Typed Payloads
---

# Typed Payloads

## Scenario

Exchange different payload shapes between PLC and .NET.

## Source Pattern

`Request<T>` sends primitive types directly, class types as JSON chunks and struct types through ADS marshaling. `RequestReply<T>` applies the same distinction while reading replies.

## Steps

1. Use primitive types for simple command values.
2. Use classes when JSON mapping is easier to evolve.
3. Use structs when PLC memory layout must be explicit.
4. Add `StructLayout` and fixed string sizes for binary structs.
5. Keep payloads small enough for chunked ADS RPC transfer.

## Expected Result

The integration can start simple and evolve toward structured data without changing the handshake pattern.


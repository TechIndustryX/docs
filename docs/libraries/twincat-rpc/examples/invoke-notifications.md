---
title: Invoke Notifications
---

# Invoke Notifications

## Scenario

Let PLC logic trigger external .NET behavior without expecting a return payload.

## Source Pattern

The sample creates typed invokes such as `CreateInvoke<int>("MAIN.fbMachine2.fbInvokeInt")` and handles the `Invoked` event.

## Steps

1. Create an invoke object for the PLC function block symbol.
2. Subscribe to `Invoked`.
3. Keep the object alive for the lifetime of the subscription.
4. Execute application logic in the event handler.
5. Dispose the invoke object when the host stops.

## Expected Result

PLC-side events are observed in .NET through ADS notifications.


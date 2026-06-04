---
title: "TechIndustry.Rpc.TwinCAT"
---

# TechIndustry.Rpc.TwinCAT

This namespace contains 13 public API types.

## Types

- [AdsClientService](./adsclientservice.md) _class_ - Background service that maintains a persistent ADS connection to a TwinCAT PLC and implements to create RPC request/invoke objects. Reconnects automatically after connection loss or when TwinCAT leaves run state.
- [AdsOptions](./adsoptions.md) _class_ - Configuration options for establishing an ADS connection to a TwinCAT PLC target.
- [AdsRouterService](./adsrouterservice.md) _class_ - Background service that starts and supervises the AMS TCP/IP router, enabling ADS communication over TCP when a local TwinCAT installation is not available.
- [AsyncAdsNotification&lt;T&gt;](./asyncadsnotification.md) _class_ - Wraps an ADS device notification for a single PLC symbol and exposes it as an async stream. Each value change on the symbol is yielded through . The .NET type of the PLC symbol value.
- [IAdsClientFactory](./iadsclientfactory.md) _interface_ - Factory that creates typed TwinCAT RPC request/invoke objects bound to the shared .
- [Invoke](./invoke.md) _class_ - Untyped TwinCAT PLC invoke subscription that raises when the PLC triggers the function block.
- [Invoke&lt;T&gt;](./invoke-2.md) _class_ - Typed TwinCAT PLC invoke subscription that reads a parameter value from the PLC and raises with it when the PLC triggers the function block. Only primitive types are supported as the parameter type `T`. The primitive parameter type read from the PLC symbol `nParameter`.
- [InvokeBase](./invokebase.md) _class_ - Base class for TwinCAT PLC-initiated invoke subscriptions. Subscribes to the `bInvoking` symbol and calls whenever the PLC sets the symbol to .
- [Request&lt;T&gt;](./request.md) _class_ - Fire-and-forget TwinCAT RPC request that sends a typed argument to a PLC function block and waits for the `bExecuted` confirmation. Supports primitive types (sent directly), class types (serialized as JSON), and struct types (marshalled as binary). The type of the argument passed to the PLC function block.
- [RequestBase](./requestbase.md) _class_ - Base class for TwinCAT RPC request types. Manages the handshake protocol with `bCanExecute` / `bExecuted` PLC symbols and handles ADS reconnect on symbol-version changes.
- [RequestReply&lt;T&gt;](./requestreply.md) _class_ - TwinCAT RPC request that invokes a PLC function block with no input argument and reads back a typed reply. Supports primitive types (read directly), class types (deserialized from JSON), and struct types (unmarshalled from binary). The type of the value returned by the PLC function block.
- [ServiceCollectionExtensions](./servicecollectionextensions.md) _class_ - Extension methods for registering TwinCAT RPC services in the dependency-injection container.
- [TwinCATRpcException](./twincatrpcexception.md) _class_ - Exception thrown when a TwinCAT RPC call returns a non-zero error code or cannot be completed.

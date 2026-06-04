---
title: TwinCAT RPC
---

# TwinCAT RPC API Reference

Source repository: `TechIndustryX/twincat-rpc`

## .NET API

Detected 20 C# types and 54 members across 4 namespaces.

### `(global)`

#### `Order`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT.Sample/Program.cs`

Represents a production order received from a TwinCAT PLC via JSON-serialised RPC.

#### `OrderValue`

_public struct_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT.Sample/Program.cs`

Represents a production order value transferred via TwinCAT ADS RPC.

### `TechIndustry.Rpc.TwinCAT`

#### `AdsClientService`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/AdsClientService.cs`

Background service that maintains a persistent ADS connection to a TwinCAT PLC and implements to create RPC request/invoke objects. Reconnects automatically after connection loss or when TwinCAT leaves run state.

Members:

- `Invoke&lt;T&gt; CreateInvoke&lt;T&gt;(string symbol)` _method_
- `Invoke CreateInvoke(string symbol)` _method_
- `Request&lt;T&gt; CreateRequest&lt;T&gt;(string symbol)` _method_
- `RequestReply&lt;T&gt; CreateRequestReply&lt;T&gt;(string symbol)` _method_
- `Task ExecuteAsync(CancellationToken stoppingToken)` _method_
- `AdsClient Client` _property_ — Gets the shared managed by this service.

#### `AdsOptions`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/AdsOptions.cs`

Configuration options for establishing an ADS connection to a TwinCAT PLC target.

Members:

- `string NetId` _property_ — Gets or sets the AMS Net ID of the target PLC (e.g. `192.168.1.1.1.1`).
- `int Port` _property_ — Gets or sets the AMS port on the target PLC. Defaults to `851` (first PLC runtime).

#### `AdsRouterService`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/AdsRouterService.cs`

Background service that starts and supervises the AMS TCP/IP router, enabling ADS communication over TCP when a local TwinCAT installation is not available.

Members:

- `AdsRouterService(IServiceProvider serviceProvider,ILogger&lt;AdsRouterService&gt; logger)` _constructor_ — Initializes a new with the required dependencies.
- `Task ExecuteAsync(CancellationToken stoppingToken)` _method_

#### `AsyncAdsNotification&lt;T&gt;`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/AsyncAdsNotification.cs`

Wraps an ADS device notification for a single PLC symbol and exposes it as an async stream. Each value change on the symbol is yielded through . The .NET type of the PLC symbol value.

Members:

- `AsyncAdsNotification(AdsClient client,string symbol)` _constructor_ — Initializes a new bound to `symbol` on `client`. The connected ADS client. The fully-qualified PLC symbol path to watch.
- `IAsyncEnumerable&lt;T&gt; ReadAllAsync([EnumeratorCancellation] CancellationToken token = default)` _method_ — Subscribes to the ADS device notification and yields each value change as an async sequence. The subscription is automatically removed when the enumeration completes or is cancelled. Cancellation token.
- `string Symbol` _property_ — Gets the fully-qualified PLC symbol path being watched.

#### `IAdsClientFactory`

_public interface_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/IAdsClientFactory.cs`

Factory that creates typed TwinCAT RPC request/invoke objects bound to the shared .

#### `Invoke`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Invoke.cs`

Untyped TwinCAT PLC invoke subscription that raises when the PLC triggers the function block.

Members:

- `Invoke(ILogger logger,AdsClient client,string symbol)` _constructor_ — Initializes a new bound to `symbol` on `client`.
- `event AsyncEventHandler&lt;EventArgs&gt;? Invoked` _event_ — Raised each time the PLC triggers the function block.
- `Task OnInvoked()` _method_

#### `Invoke&lt;T&gt;`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Invoke.cs`

Typed TwinCAT PLC invoke subscription that reads a parameter value from the PLC and raises with it when the PLC triggers the function block. Only primitive types are supported as the parameter type `T`. The primitive parameter type read from the PLC symbol `nParameter`.

Members:

- `Invoke(ILogger&lt;Invoke&lt;T&gt;&gt; logger,AdsClient client,string symbol)` _constructor_ — Initializes a new bound to `symbol` on `client`.
- `event AsyncEventHandler&lt;T?&gt;? Invoked` _event_ — Raised each time the PLC triggers the function block, with the current parameter value.
- `Task OnInvocationAsync()` _method_
- `Task OnInvoked(T? args)` _method_

#### `InvokeBase`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Invoke.cs`

Base class for TwinCAT PLC-initiated invoke subscriptions. Subscribes to the `bInvoking` symbol and calls whenever the PLC sets the symbol to .

Members:

- `InvokeBase(ILogger logger,AdsClient client,string symbol)` _constructor_
- `ValueTask DisposeAsync()` _method_ — Unsubscribes the ADS notification and releases the device notification handle.
- `Task OnInvocationAsync()` _method_
- `void Start()` _method_
- `AdsClient Client` _property_ — Gets the ADS client used by this invoke instance.
- `ILogger Logger` _property_ — Gets the logger used by this invoke instance.
- `string Symbol` _property_ — Gets the fully-qualified PLC symbol path of the invokable function block.

#### `Request&lt;T&gt;`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Request.cs`

Fire-and-forget TwinCAT RPC request that sends a typed argument to a PLC function block and waits for the `bExecuted` confirmation. Supports primitive types (sent directly), class types (serialized as JSON), and struct types (marshalled as binary). The type of the argument passed to the PLC function block.

Members:

- `Request(ILogger&lt;Request&lt;T&gt;&gt; logger,AdsClient client,string symbol)` _constructor_ — Initializes a new bound to the given ADS client and symbol.
- `Task InvokeAsync(T arg,CancellationToken token = default)` _method_ — Invokes the PLC function block with the specified argument and waits for execution to complete. The argument to pass to the PLC function block. Cancellation token.
- `Task OnCanExecuteAsync(object? state,CancellationToken token)` _method_

#### `RequestBase`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/RequestBase.cs`

Base class for TwinCAT RPC request types. Manages the handshake protocol with `bCanExecute` / `bExecuted` PLC symbols and handles ADS reconnect on symbol-version changes.

Members:

- `RequestBase(ILogger logger,AdsClient client,string symbol)` _constructor_ — Initializes the base request with the ADS client and the fully-qualified PLC symbol path. Logger for diagnostic output. The connected ADS client. Fully-qualified symbol path of the PLC function block.
- `Task ExecuteAsync(object? state,CancellationToken token)` _method_
- `Task InvokeInternalAsync(object? state,CancellationToken token = default)` _method_
- `Task OnCanExecuteAsync(object? state,CancellationToken token)` _method_
- `Task SafeCallAsync(Func&lt;Task&gt; func,CancellationToken token)` _method_
- `Task&lt;T&gt; SafeCallAsync&lt;T&gt;(Func&lt;Task&lt;T&gt;&gt; func,CancellationToken token)` _method_
- `Task WaitExecuteAsync(CancellationToken token)` _method_
- `AdsClient Client` _property_ — Gets the ADS client used by this request.
- `string Symbol` _property_ — Gets the fully-qualified PLC symbol path of this request's function block.

#### `RequestReply&lt;T&gt;`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/RequestReply.cs`

TwinCAT RPC request that invokes a PLC function block with no input argument and reads back a typed reply. Supports primitive types (read directly), class types (deserialized from JSON), and struct types (unmarshalled from binary). The type of the value returned by the PLC function block.

Members:

- `RequestReply(ILogger&lt;RequestReply&lt;T&gt;&gt; logger,AdsClient client,string symbol)` _constructor_ — Initializes a new bound to the given ADS client and symbol.
- `Task&lt;T&gt; InvokeAsync(CancellationToken token = default)` _method_ — Invokes the PLC function block, waits for the reply to be ready, reads the result, and confirms execution. Cancellation token. The typed return value from the PLC function block.
- `Task OnCanExecuteAsync(object? state,CancellationToken token)` _method_

#### `ServiceCollectionExtensions`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/ServiceCollectionExtensions.cs`

Extension methods for registering TwinCAT RPC services in the dependency-injection container.

Members:

- `IServiceCollection AddTwinCATRouter(this IServiceCollection services)` _method_ — Registers the hosted service and the singleton. The service collection to configure.
- `IServiceCollection AddTwinCATRpc(this IServiceCollection services)` _method_ — Registers the singleton, its hosted service, and the abstraction. The service collection to configure.

#### `TwinCATRpcException`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/TwinCATRpcException.cs`

Exception thrown when a TwinCAT RPC call returns a non-zero error code or cannot be completed.

Members:

- `TwinCATRpcException()` _constructor_ — Initializes a new with no message.
- `TwinCATRpcException(string message)` _constructor_ — Initializes a new with the specified message. The error description.
- `TwinCATRpcException(int error)` _constructor_ — Initializes a new for a numeric TwinCAT error code. The TwinCAT error code.
- `TwinCATRpcException(string message,int error)` _constructor_ — Initializes a new with both a message and a numeric error code. The error description. The TwinCAT error code.
- `int? Error` _property_ — Gets the ADS/TwinCAT error code, or when no numeric error code is available.

### `TechIndustry.Rpc.TwinCAT.Tester`

#### `SymbolMode`

_public enum_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT.Tester/SymbolsOptions.cs`

Interaction mode for a PLC symbol in the tester.

#### `SymbolOption`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT.Tester/SymbolsOptions.cs`

Configuration for a single PLC symbol under test.

Members:

- `SymbolMode Mode` _property_ — Gets or sets the interaction mode for the symbol (request or reply).
- `string Symbol` _property_ — Gets or sets the fully-qualified PLC symbol path.
- `SymbolType Type` _property_ — Gets or sets the data type of the symbol value.

#### `SymbolsOptions`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT.Tester/SymbolsOptions.cs`

Dictionary of named symbol configurations used by the TwinCAT RPC tester.

#### `SymbolType`

_public enum_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT.Tester/SymbolsOptions.cs`

Supported PLC symbol data types for the tester.

### `TwinCAT.Ads`

#### `Extensions`

_public class_

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Extensions.cs`

Extension methods for marshalling ADS RPC method return values to .NET structures.

Members:

- `T MarshalResultToStructure&lt;T&gt;(this ResultRpcMethod result)` _method_ — Unmarshals the byte-array return value of an ADS RPC method into a blittable struct of type `T`. The target value type. The RPC method result containing the raw byte array. The unmarshalled struct value, or `default` when the return value is not a byte array.
- `T MarshalToStructure&lt;T&gt;(this byte[] bytes)` _method_ — Unmarshals a raw byte array into a blittable struct of type `T` using unsafe pointer casting. The target value type. The byte array containing the raw struct data.

## TwinCAT PLC Inventory

Detected 112 PLC files.

- `TcDUT`: 10
- `TcPOU`: 100
- `TcGVL`: 2


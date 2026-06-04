---
title: "SequencesService"
---

# SequencesService

_public class_

Namespace: `Industria4.Sequences.Cqrs.Handlers`

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequencesService.cs`

## Summary

Hosted service that connects to the OPC UA server and synchronises sequence state with the PLC.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

Releases the OPC UA client connection.

### GetIsSequenceRunningAsync

_method_

```csharp
Task<bool> GetIsSequenceRunningAsync()
```

Reads the PLC sequence node to determine whether the sequence runner is currently active. when the runner is active; otherwise .

### RunNextSequenceAsync

_method_

```csharp
Task<string> RunNextSequenceAsync()
```

Selects the next eligible sequence, transitions it to the `Running` state, and synchronises the PLC. The identifier of the sequence that was started, or when no sequence is available.

### StartAsync

_method_

```csharp
Task StartAsync(CancellationToken cancellationToken)
```

### StateChangedAsync

_method_

```csharp
Task StateChangedAsync(string sequenceId)
```

Reacts to a sequence state-change event by synchronising the OPC UA PLC state. The identifier of the sequence whose state changed. A task that represents the asynchronous synchronisation operation.

### StopAsync

_method_

```csharp
Task StopAsync(CancellationToken cancellationToken)
```

### ToggleSequenceAsync

_method_

```csharp
Task ToggleSequenceAsync(bool value)
```

Writes the desired running state to the PLC sequence node. to start the runner; to stop it. A task that represents the asynchronous write operation.


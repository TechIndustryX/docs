---
title: "SequenceClient"
---

# SequenceClient

_public class_

Namespace: `Industria4.Sequences.Http`

Source: `src/Sequences/Sequences.Http/SequenceClient.cs`

## Summary

HTTP client for querying and managing sequences via the Sequences REST API.

## Constructors

### SequenceClient

_constructor_

```csharp
SequenceClient(RestClient restClient,IOptions<HttpSequencesOptions> options)
```

Initializes a new . The underlying REST client. Options containing the service base URI.

## Methods

### AddAsync

_method_

```csharp
Task AddAsync(AddSequenceCommand command,CancellationToken token = default)
```

Creates a new sequence.

### AddQuantityAsync

_method_

```csharp
Task AddQuantityAsync(AddQuantitySequenceCommand command,CancellationToken token = default)
```

Adds a produced quantity increment to a sequence.

### ChangePriorityAsync

_method_

```csharp
Task ChangePriorityAsync(ChangeSequencePriorityCommand command,CancellationToken token = default)
```

Changes the scheduling priorities of one or more sequences.

### ChangeStateAsync

_method_

```csharp
Task ChangeStateAsync(ChangeSequenceStateCommand command,CancellationToken token = default)
```

Transitions a sequence to a new lifecycle state.

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the sequence with the specified identifier.

### GetAsync

_method_

```csharp
Task<DomainModel.Sequence> GetAsync(string id,CancellationToken token = default)
```

Retrieves the full domain sequence for the given identifier.

### GetNextAsync

_method_

```csharp
Task<DomainModel.Sequence> GetNextAsync(CancellationToken token = default)
```

Returns the next scheduled sequence, or `null` if none is available.

### GetStatusAsync

_method_

```csharp
Task<bool> GetStatusAsync(CancellationToken token = default)
```

Returns `true` if the sequence engine is currently running.

### ResetAsync

_method_

```csharp
Task ResetAsync(CancellationToken token = default)
```

Resets all sequences to their initial state.

### ToggleAsync

_method_

```csharp
Task ToggleAsync(CancellationToken token = default)
```

Toggles the running state of the sequence engine.

### UpdateAsync

_method_

```csharp
Task UpdateAsync(UpdateSequenceCommand command,CancellationToken token = default)
```

Updates an existing sequence.


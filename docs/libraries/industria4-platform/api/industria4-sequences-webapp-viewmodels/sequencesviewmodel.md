---
title: "SequencesViewModel"
---

# SequencesViewModel

_public class_

Namespace: `Industria4.Sequences.WebApp.ViewModels`

Source: `src/Sequences/Sequences.WebApp/ViewModels/SequencesViewModel.cs`

## Summary

View model that manages the sequences list and coordinates user interactions for the Sequences page.

## Properties

### CanChangePriority

_property_

```csharp
bool CanChangePriority
```

Gets a value indicating whether the priority of sequences can be changed (only when the runner is not active).

### Sequences

_property_

```csharp
ObservableCollection<SequenceRead> Sequences
```

Gets the observable collection of sequences currently loaded from the server.

## Methods

### AddAsync

_method_

```csharp
Task AddAsync()
```

Adds a new sequence using the currently selected recipe and required quantity. A task that represents the asynchronous add operation.

### ChangePriorityAsync

_method_

```csharp
Task ChangePriorityAsync(IEnumerable<string> ids)
```

Updates the priority of sequences according to the supplied ordered list of identifiers. Sequence identifiers in the desired priority order. A task that represents the asynchronous priority-change operation.

### DeleteSequenceAsync

_method_

```csharp
Task DeleteSequenceAsync(SequenceRead sequence)
```

Deletes the specified sequence and refreshes the list. The sequence to delete. A task that represents the asynchronous delete operation.

### Dispose

_method_

```csharp
void Dispose()
```

Releases resources used by the view model, including the background refresh timer.

### GetRecipeName

_method_

```csharp
string GetRecipeName(string recipeId)
```

Returns the display name for a recipe by its identifier, or an empty string if not found. The recipe identifier to look up. The recipe description, or when not cached.

### RefreshAsync

_method_

```csharp
Task RefreshAsync()
```

Reloads the running state and the sequence list from the server. A task that represents the asynchronous refresh operation.

### ResetAsync

_method_

```csharp
Task ResetAsync()
```

Prompts the user for confirmation and resets all sequences. A task that represents the asynchronous reset operation.

### SelectAsync

_method_

```csharp
Task SelectAsync()
```

Opens the recipe picker dialog and sets from the user's choice. A task that represents the asynchronous select operation.

### ToggleAsync

_method_

```csharp
Task ToggleAsync()
```

Toggles the sequence runner on or off and refreshes the current state. A task that represents the asynchronous toggle operation.


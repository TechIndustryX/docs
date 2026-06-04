---
title: "DialogMessage"
---

# DialogMessage

_public class_

Namespace: `Industria4.Web.Forms.Services`

Source: `src/Shared/Web.Forms/Services/IDialogService.cs`

## Summary

Describes a modal dialog to display, including its title, body text, optional description, and an optional result callback.

## Constructors

### DialogMessage

_constructor_

```csharp
DialogMessage(string title,string message,string description,Action<bool> callback)
```

Initialises an ask dialog with title, message, description and a result callback. The dialog title. The message body. Additional description text. Invoked with `true` if the user confirms.

### DialogMessage

_constructor_

```csharp
DialogMessage(string title,string message,string description)
```

Initialises an informational dialog with title, message and description. The dialog title. The message body. Additional description text.

## Properties

### Ask

_property_

```csharp
bool Ask
```

Gets or sets whether the dialog requires a yes/no response.

### Callback

_property_

```csharp
Action<bool> Callback
```

Gets the callback invoked with the user's yes/no choice, or `null` for informational dialogs.

### Description

_property_

```csharp
string Description
```

Gets the optional additional description shown below the message.

### Message

_property_

```csharp
string Message
```

Gets the main message body.

### Title

_property_

```csharp
string Title
```

Gets the dialog title.


---
title: "DialogService"
---

# DialogService

_public class_

Namespace: `Industria4.Web.Forms.Services`

Source: `src/Shared/Web.Forms/Services/DialogService.cs`

## Summary

Default implementation of that raises for each dialog request.

## Methods

### AskAsync

_method_

```csharp
Task<bool> AskAsync(string title,string message,string description)
```

### ShowAsync

_method_

```csharp
Task ShowAsync(string title,string message,string description)
```

## Events

### OnShowDialog

_event_

```csharp
event Action<DialogMessage> OnShowDialog
```


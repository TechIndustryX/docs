---
title: "RdpClient"
---

# RdpClient

_public class_

Namespace: `WinCC.Chronium`

Source: `src/WinCC.Chronium/RdpClient.cs`

## Summary

WinForms user control that embeds a WebView2 browser pointed at a Myrtille RDP gateway, providing remote desktop access within a WinCC HMI runtime panel.

## Constructors

### RdpClient

_constructor_

```csharp
RdpClient()
```

## Properties

### CacheEnabled

_property_

```csharp
bool CacheEnabled
```

Gets or sets whether the WebView2 browser instance is shared across identical sessions (cache by URL + credentials).

## Methods

### OnHandleDestroyed

_method_

```csharp
void OnHandleDestroyed(EventArgs e)
```

### OnLoad

_method_

```csharp
void OnLoad(EventArgs e)
```


---
title: "LoggedOutViewModel"
---

# LoggedOutViewModel

_public class_

Namespace: `Industria4.Identity.WebApi.Models.Account`

Source: `src/Identity/Identity.WebApi/Models/Account/LoggedOutViewModel.cs`

## Summary

View model for the logged-out page.

## Properties

### AutomaticRedirectAfterSignOut

_property_

```csharp
bool AutomaticRedirectAfterSignOut
```

Gets or sets a value indicating whether to redirect automatically after sign-out.

### ClientName

_property_

```csharp
string ClientName
```

Gets or sets the display name of the client application.

### ExternalAuthenticationScheme

_property_

```csharp
string ExternalAuthenticationScheme
```

Gets or sets the external authentication scheme to sign out of, if applicable.

### LogoutId

_property_

```csharp
string LogoutId
```

Gets or sets the logout session identifier.

### PostLogoutRedirectUri

_property_

```csharp
string PostLogoutRedirectUri
```

Gets or sets the URI the client wishes to redirect to after logout.

### SignOutIframeUrl

_property_

```csharp
string SignOutIframeUrl
```

Gets or sets the URL of the sign-out iframe used for front-channel logout.

### TriggerExternalSignout

_property_

```csharp
bool TriggerExternalSignout
```

Gets a value indicating whether an external sign-out should be triggered.


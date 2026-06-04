---
title: "DevServer"
---

# DevServer

_public class_

Namespace: `Industria4.Hosting`

Source: `src/Shared/Hosting.Server/DevServer.cs`

## Summary

Launches the Industria4 platform server process from within a development environment and waits until the console is cancelled.

## Constructors

### DevServer

_constructor_

```csharp
DevServer()
```

Initialises a new instance using the path specified by the `INDUSTRIA4_BIN` environment variable.

### DevServer

_constructor_

```csharp
DevServer(string executablePath)
```

Initialises a new instance that will launch the executable at the given path. Full path to the server executable.

## Properties

### AdditionalPackages

_property_

```csharp
List<string> AdditionalPackages
```

Gets the list of additional package paths to pass to the server process on startup.

### RootFolder

_property_

```csharp
string RootFolder
```

Root folder of the whole installation

## Methods

### Run

_method_

```csharp
void Run()
```

Starts the server process and blocks until Ctrl+C is pressed.


---
title: "ServiceApplication"
---

# ServiceApplication

_public class_

Namespace: `Industria4.Hosting`

Source: `src/Shared/Hosting.Server/ServiceApplication.cs`

## Summary

Base class for applications that can run either as a Windows service or as a console application, with sub-commands to install/uninstall the service.

## Constructors

### ServiceApplication

_constructor_

```csharp
ServiceApplication()
```

Initialises the application and registers the `console` and `service` sub-commands.

## Methods

### ApplyDebugArguments

_method_

```csharp
string[] ApplyDebugArguments(IEnumerable<string> args,params string[] afterArguments)
```

Applies debug-mode overrides to the argument list, forcing console mode when a debugger is attached or the process is hosted in IIS. The original command-line arguments. Optional arguments that should appear before the console switch when it is injected. The adjusted argument array.

### ForceConsole

_method_

```csharp
string[] ForceConsole(IEnumerable<string> args,params string[] afterArguments)
```

Ensures the console-mode command-line switch is present in the returned argument array, inserting it after the specified `afterArguments` if supplied. The original command-line arguments. Optional arguments that should appear before the console switch in the result. A new argument array that always contains the console switch.

### IsIis

_method_

```csharp
bool IsIis()
```

Returns `true` when the current process is hosted inside IIS (detected by the process name). `true` if running inside IIS; otherwise, `false`.

### IsService

_method_

```csharp
bool IsService(IEnumerable<string> args)
```

Returns `true` when the process should run as a Windows Service (i.e. the console command-line switch is absent). The command-line arguments passed to the application. `true` if the application should behave as a Windows Service; `false` if it should run as a console application.

### Run

_method_

```csharp
int Run(bool isService)
```

Executes the application in either service or console mode. When `true` run as a Windows service; when `false` run as a console application. The process exit code.

### ValidateArgument

_method_

```csharp
bool ValidateArgument(CommandLineApplication app,CommandArgument argument,params string[] allowedValues)
```

Validates that the provided argument value is one of the allowed values. The current command application, used to display help on failure. The argument whose value is checked. The set of accepted values (case-insensitive). `true` if the value is allowed; otherwise `false`.

### ValidateArguments

_method_

```csharp
bool ValidateArguments(CommandLineApplication app,params CommandArgument[] arguments)
```

Validates that the provided arguments are non-empty, writing a help message to the console for each invalid argument. The current command application, used to display help on failure. The arguments to validate. `true` when all arguments have values; otherwise `false`.


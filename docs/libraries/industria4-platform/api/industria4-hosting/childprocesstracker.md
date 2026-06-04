---
title: "ChildProcessTracker"
---

# ChildProcessTracker

_public class_

Namespace: `Industria4.Hosting`

Source: `src/Shared/Hosting.Server/ChildProcessTracker.cs`

## Summary

Allows processes to be automatically killed if this parent process unexpectedly quits. This feature requires Windows 8 or greater. On Windows 7, nothing is done. References: http://stackoverflow.com/a/4657392/386091 http://stackoverflow.com/a/9164742/386091

## Methods

### AddProcess

_method_

```csharp
void AddProcess(Process process)
```

Add the process to be tracked. If our current process is killed, the child processes that we are tracking will be automatically killed, too. If the child process terminates first, that's fine, too.


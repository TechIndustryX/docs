---
title: "Industria4.Hosting"
---

# Industria4.Hosting

This namespace contains 16 public API types.

## Types

- [ChildProcessTracker](./childprocesstracker.md) _class_ - Allows processes to be automatically killed if this parent process unexpectedly quits. This feature requires Windows 8 or greater. On Windows 7, nothing is done. References: http://stackoverflow.com/a/4657392/386091 http://stackoverflow.com/a/9164742/386091
- [DevServer](./devserver.md) _class_ - Launches the Industria4 platform server process from within a development environment and waits until the console is cancelled.
- [HostExtensions](./hostextensions.md) _class_ - Extension methods for that add Windows Service hosting support.
- [HostService](./hostservice.md) _class_ - Windows service which runs an instance of
- [HostServiceApplication](./hostserviceapplication.md) _class_ - Host which supports console commands in order to execute the app as a console or as a service
- [IO_COUNTERS](./io-counters.md) _struct_ - Maps to the native `IO_COUNTERS` structure that holds I/O accounting information for a process or job object.
- [IStartupService](./istartupservice.md) _interface_ - Interface used to configured custom services dynamically through .
- [IThemeContext](./ithemecontext.md) _interface_ - Provides access to the current UI theme and allows changing it at runtime.
- [JOBOBJECT_BASIC_LIMIT_INFORMATION](./jobobject-basic-limit-information.md) _struct_ - Maps to the native `JOBOBJECT_BASIC_LIMIT_INFORMATION` structure used with Windows job objects.
- [JOBOBJECT_EXTENDED_LIMIT_INFORMATION](./jobobject-extended-limit-information.md) _struct_ - Maps to the native `JOBOBJECT_EXTENDED_LIMIT_INFORMATION` structure used when querying or setting extended limits on a Windows job object.
- [JobObjectInfoType](./jobobjectinfotype.md) _enum_ - Specifies the type of information to query or set on a Windows job object.
- [LimitFlags](./limitflags.md) _enum_ - Flags that specify limits applied to processes belonging to a Windows job object.
- [PluginsDiscover](./pluginsdiscover.md) _class_ - Utility class for discovering and instantiating plug-in implementations found in external assemblies on disk.
- [ProcessExtensions](./processextensions.md) _class_ - Provides utilities for launching processes in the context of the currently active Windows desktop session.
- [ServiceApplication](./serviceapplication.md) _class_ - Base class for applications that can run either as a Windows service or as a console application, with sub-commands to install/uninstall the service.
- [WebHostServiceApplication](./webhostserviceapplication.md) _class_ - WebHost which supports console commands in order to execute the app as a console or as a service

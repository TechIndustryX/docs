---
title: "Industria4.Hosting.Modules"
---

# Industria4.Hosting.Modules

This namespace contains 4 public API types.

## Types

- [IClientModule](./iclientmodule.md) _interface_ - Marker interface for modules that run in the client (browser/desktop) context.
- [IModule](./imodule.md) _interface_ - Represents a loadable application module with a defined lifecycle.
- [ModulesLoader](./modulesloader.md) _class_ - Loads registered implementations from the DI container and calls their methods in sequence.
- [ProcessModule](./processmodule.md) _class_ - Base class for modules that are hosted as external child processes, providing lifecycle management (start/stop/restart) and health-check pinging.

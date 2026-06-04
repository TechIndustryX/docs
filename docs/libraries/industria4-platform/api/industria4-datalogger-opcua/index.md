---
title: "Industria4.DataLogger.OpcUa"
---

# Industria4.DataLogger.OpcUa

This namespace contains 6 public API types.

## Types

- [DataLoggerModule](./dataloggermodule.md) _class_ - Hosting module that registers the OPC UA data-logger within the plugin system.
- [DataLoggerOptions](./dataloggeroptions.md) _class_ - Top-level configuration options for the OPC UA data-logger.
- [DataLoggerService](./dataloggerservice.md) _class_ - Background service that reads OPC UA nodes and writes measurement data to InfluxDB.
- [DataLoggerTagOptions](./dataloggertagoptions.md) _class_ - Configuration options for a single OPC UA tag to be logged.
- [DataLoggerTargetOptions](./dataloggertargetoptions.md) _class_ - Configuration options for a single InfluxDB write target.
- [StartupService](./startupservice.md) _class_ - Startup service that registers OPC UA data-logger dependencies and configuration.

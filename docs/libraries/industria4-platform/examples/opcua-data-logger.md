---
title: OPC UA Data Logger
---

# OPC UA Data Logger

## Scenario

Register OPC UA middleware and a data-logging module in the platform host.

## Source Pattern

`OpcUa.Comunication.Core.Startup` registers OPC UA middleware and `CoreModule`. `DataLogger.OpcUa.DataLoggerModule` represents the OPC UA data logger as a hosting module.

## Steps

1. Configure the `OpcUa:Core` section.
2. Register OPC UA middleware from the startup service.
3. Register the core utility module.
4. Add the data logger module.
5. Use module logs and API endpoints to validate data acquisition configuration.

## Expected Result

OPC UA functionality is composed as platform modules rather than hardcoded into the host.


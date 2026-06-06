---
title: Edge Container
---

# Edge Container

## Scenario

Package the bridge and plugins for distributed or edge execution.

## Source Pattern

The repository contains `src/OpcUaServer.IoTEdge` assets and the server/plugin split already supports separate processes.

## Steps

1. Build the server image or deployment artifact.
2. Expose the gRPC endpoint used by plugins.
3. Run plugin processes in the same network.
4. Configure each plugin with the bridge URI.
5. Monitor namespace registration and plugin disconnect behavior.

## Expected Result

The server can be deployed as a reusable edge component while plugins remain independently versioned and replaceable.


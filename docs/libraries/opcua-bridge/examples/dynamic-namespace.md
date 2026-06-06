---
title: Dynamic Namespace
---

# Dynamic Namespace

## Scenario

Register a compiled OPC UA node-set document from a plugin and expose it as a dynamic namespace.

## Source Pattern

`PluginHostedService.BackgroundStartAsync` opens `Model/<name>.uanodes` and sends a `ConfigureNodeRequest` with `NodeNamespace`, `NodeNamespaceIndex` and `Document`.

## Steps

1. Compile or prepare the `.uanodes` model file.
2. Choose a stable namespace URI.
3. Send `ConfigureNodesConnection` to keep the namespace lifecycle tied to the plugin connection.
4. Reconfigure by disposing the previous stream and sending the new model.

## Expected Result

The OPC UA server adds the namespace while the plugin is connected and removes it when the connection is closed.


---
title: Write and Method Interception
---

# Write and Method Interception

## Scenario

Let a plugin decide whether an OPC UA client write or method call should succeed.

## Source Pattern

`PluginService.InterceptWriteNode` opens a bidirectional stream. The server sends write or method operations to the plugin, and the plugin replies with status and outputs.

## Steps

1. Open an interception stream for the plugin namespace.
2. Register the stream as an interceptor on the node manager.
3. Process incoming write or method requests.
4. Return a status for writes and a status plus outputs for methods.
5. Dispose the session when the plugin disconnects.

## Expected Result

Device-specific validation and method behavior stay in the plugin process while the bridge remains the OPC UA protocol host.


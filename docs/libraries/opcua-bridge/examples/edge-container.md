---
title: Edge Container
---

# Edge Container

## Scenario

Run the bridge server and one or more plugins as separate edge services. This keeps the OPC UA endpoint stable while plugins can be upgraded independently.

## Compose Example

```yaml title="docker-compose.yml"
services:
  opcua-bridge:
    image: ghcr.io/techindustryx/opcua-bridge:latest
    ports:
      - "4840:4840"
      - "8100:8100"
    environment:
      ASPNETCORE_ENVIRONMENT: Production

  echo-plugin:
    image: ghcr.io/techindustryx/opcua-bridge-echo-plugin:latest
    depends_on:
      - opcua-bridge
    environment:
      BRIDGE_URI: http://opcua-bridge:8100
      MQTT__Host: mqtt
      MQTT__Topic: line-a/press-01/#
    volumes:
      - ./models:/app/Model:ro
```

## Step By Step

1. Publish the bridge server image.
2. Publish each plugin as its own image.
3. Mount `.uanodes` model files into the plugin container.
4. Set `BRIDGE_URI` to the service name of the bridge.
5. Expose the OPC UA endpoint to the plant network.
6. Keep gRPC port `8100` internal when plugins run in the same container network.
7. Add health checks for both bridge and plugins.

## Validation

1. Start the stack with `docker compose up -d`.
2. Check that the bridge root endpoint answers.
3. Check plugin logs for namespace configuration.
4. Browse the OPC UA endpoint from a client.
5. Restart the plugin and confirm the bridge endpoint stays available.

## Operational Model

Use one plugin per integration boundary: MQTT, file import, machine-specific protocol or business connector. This makes failures easier to isolate and lets you deploy a plugin without touching other namespaces.

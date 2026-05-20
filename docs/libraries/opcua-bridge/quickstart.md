---
title: Quickstart
---

# OPC UA Bridge Quickstart

Use OPC UA Bridge when you need to expose an OPC UA endpoint and connect it to bridge plugins or downstream integrations.

## 1. Start the bridge

Pull the runtime image from GitHub Container Registry:

```bash
docker pull ghcr.io/techindustryx/opcua-bridge:latest
```

Run it with the OPC UA port exposed:

```bash
docker run --rm \
  --name opcua-bridge \
  -p 4840:4840 \
  ghcr.io/techindustryx/opcua-bridge:latest
```

## 2. Connect an OPC UA client

Point your OPC UA client to:

```text
opc.tcp://localhost:4840
```

For production, configure certificates, endpoint policy and namespace exposure according to the target plant security rules.

## 3. Add plugins or integrations

Attach the bridge plugin you need for the integration scenario. Start with the echo or sample plugin only to verify lifecycle, then switch to the production plugin and validate data flow with a known tag set.

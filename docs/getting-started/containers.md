---
title: Containers
---

# Containers

Runtime services are published to GitHub Container Registry.

```bash
echo "$TOKEN" | docker login ghcr.io -u USERNAME --password-stdin
docker pull ghcr.io/techindustryx/opcua-bridge:latest
```

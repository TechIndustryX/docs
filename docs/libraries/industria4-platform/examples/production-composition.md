---
title: Production Composition
---

# Production Composition

## Scenario

Compose a production deployment with gateway, identity, MES/recipes, data logger and external infrastructure.

## Deployment Shape

```yaml title="production-compose.yml"
services:
  gateway:
    image: ghcr.io/techindustryx/industria4-platform-gateway:stable
    environment:
      ASPNETCORE_ENVIRONMENT: Production
      ReverseProxy__Clusters__Identity__Destinations__default__Address: http://identity-api:8080
      ReverseProxy__Clusters__Mes__Destinations__default__Address: http://mes-api:8080

  identity-api:
    image: ghcr.io/techindustryx/industria4-platform-identity-api:stable
    environment:
      ConnectionStrings__Default: "<from secret store>"

  mes-api:
    image: ghcr.io/techindustryx/industria4-platform-mes-api:stable
    environment:
      ConnectionStrings__Default: "<from secret store>"

  datalogger:
    image: ghcr.io/techindustryx/industria4-platform-datalogger:stable
    environment:
      DataLogger__Targets__0__EndpointUrl: "opc.tcp://press-01:4840"
```

## Step By Step

1. Choose stable image tags, not `latest`.
2. Put connection strings and passwords in the deployment secret store.
3. Route all browser/API traffic through the gateway.
4. Deploy identity before modules that require authentication.
5. Deploy MES/recipes before production flows.
6. Deploy data logger close to machine network access.
7. Add health checks and log aggregation for every service.
8. Test rollback with one module before go-live.

## Validation

Run a production readiness check:

- gateway routes resolve;
- identity login works;
- MES order can be created;
- recipe can be selected;
- OPC UA tags update;
- logs contain no startup errors.

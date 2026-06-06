---
title: Local Composition
---

# Local Composition

## Scenario

Run a local platform composition with gateway, web modules and backing services so integrators can validate configuration before production.

## Compose Example

```yaml title="docker-compose.yml"
services:
  gateway:
    image: ghcr.io/techindustryx/industria4-platform-gateway:latest
    ports:
      - "8080:8080"
    environment:
      ASPNETCORE_ENVIRONMENT: Development
      ConnectionStrings__Default: "Server=db;Database=platform;User Id=platform;Password=<local-password>;TrustServerCertificate=True"

  db:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      ACCEPT_EULA: "Y"
      MSSQL_SA_PASSWORD: "<local-password>"
    ports:
      - "1433:1433"
```

## Step By Step

1. Choose the modules needed for the local scenario.
2. Start database and infrastructure services first.
3. Start the gateway.
4. Start module web APIs and web apps.
5. Use local connection strings and non-production credentials.
6. Open the gateway and confirm module routes are available.
7. Seed only the data needed for the scenario under test.

## Validation

Open the gateway URL and verify:

- health endpoint responds;
- module routes are registered;
- database connection succeeds;
- logs show module startup without route conflicts.

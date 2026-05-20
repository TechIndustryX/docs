---
title: Quickstart
---

# Industria4 Platform Quickstart

Use Industria4 Platform as the operational shell for industrial modules and integrations. Start from a deployed environment or from the standard local composition prepared by the platform owner.

## 1. Open the platform

Open the platform URL provided for the target environment and sign in with an account that can access the modules you need to configure.

## 2. Select the module

Choose the operational area you want to use, such as data collection, machine integration, dashboarding or administration. Each module should expose its own configuration, runtime status and logs.

## 3. Configure runtime dependencies

Prepare the external services required by the module:

- message broker or ingestion endpoint;
- database or file storage;
- machine, PLC, OPC UA or gateway connection;
- credentials stored in the target secret manager.

## 4. Validate the environment

Run a simple end-to-end check: connect one source, publish one sample payload and verify that the platform shows the expected state. Treat local composition as an evaluation path; production usage should rely on the deployed environment and managed configuration.

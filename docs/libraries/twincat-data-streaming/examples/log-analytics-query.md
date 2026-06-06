---
title: Log Analytics Query
---

# Log Analytics Query

## Scenario

Expose historical telemetry queries to a frontend or service through an HTTP API.

## Source Pattern

`LogAnalyticsQuery` reads an `InputQuery`, calls `LogAnalyticsService.QueryAsync`, and returns the result table.

## Steps

1. Configure the Log Analytics workspace id.
2. Grant the function identity permission to query the workspace.
3. Send a JSON request containing the KQL query.
4. Return the table to the caller.
5. Keep dashboard-specific shaping outside the ingestion path.

## Expected Result

Clients can request historical trends without direct access to Azure Monitor credentials.


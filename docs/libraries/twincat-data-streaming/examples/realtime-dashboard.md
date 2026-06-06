---
title: Realtime Dashboard
---

# Realtime Dashboard

## Scenario

Show live machine values in a React dashboard while querying history from Log Analytics.

## Source Pattern

The `TechIndustry.Streaming.DemoSite` README describes a dashboard that combines Web PubSub live messages, Log Analytics historical queries and CoreUI/Chart.js visualization.

## Steps

1. Run the backend functions that provide Web PubSub access tokens and query history.
2. Configure the dashboard endpoints.
3. Open the dashboard and establish the Web PubSub connection.
4. Publish live telemetry messages to the hub.
5. Load hour/day/week history from Log Analytics.

## Expected Result

Operators and stakeholders see current values, historical trend ranges and anomaly indicators in one UI.


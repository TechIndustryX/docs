---
title: Router Service
---

# Router Service

## Scenario

Use an AMS TCP/IP router from the .NET process when a local TwinCAT router is not available.

## Source Pattern

`AddTwinCATRouter` registers `AdsRouterService` and `AmsTcpIpRouter`. The hosted service starts the router and logs status changes.

## Steps

1. Register `AddTwinCATRouter()` before starting the host.
2. Configure static routes as required by the target network.
3. Start the host.
4. Confirm router status logs.
5. Use normal RPC request/invoke objects once ADS routing is available.

## Expected Result

The process can communicate over ADS TCP/IP in environments where the workstation does not already host a TwinCAT router.


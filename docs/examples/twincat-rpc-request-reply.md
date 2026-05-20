---
title: TwinCAT RPC Request/Reply
---

# TwinCAT RPC Request/Reply

The request/reply pattern uses ADS symbols as the transport between PLC logic and .NET handlers. PLC code emits a request, .NET executes application logic, then writes the reply to the expected channel.

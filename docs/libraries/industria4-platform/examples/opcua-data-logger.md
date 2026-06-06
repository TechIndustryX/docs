---
title: OPC UA Data Logger
---

# OPC UA Data Logger

## Scenario

Configure the platform data logger to read OPC UA tags and persist them for trend and diagnostic screens.

## Configuration

```json title="appsettings.json"
{
  "DataLogger": {
    "Targets": [
      {
        "Name": "Press01",
        "EndpointUrl": "opc.tcp://press-01:4840",
        "Tags": [
          { "Name": "Temperature", "NodeId": "ns=2;s=MAIN.fbPress.fTemperature" },
          { "Name": "Running", "NodeId": "ns=2;s=MAIN.fbPress.bRunning" }
        ],
        "SamplingInterval": "00:00:01"
      }
    ]
  }
}
```

## Step By Step

1. Configure one target per OPC UA server or machine.
2. Add tags with stable names and node IDs.
3. Set sampling interval according to process speed.
4. Start the data logger module.
5. Confirm subscriptions are active.
6. Open trend screens and verify values.
7. Add alarm or quality handling for unavailable nodes.

## Validation

Change a PLC value and confirm the data logger view shows the new value with the expected timestamp.

## Operations Notes

- Keep tag names stable because dashboards and reports depend on them.
- Group tags by target machine.
- Log unavailable nodes at startup so commissioning issues are visible immediately.

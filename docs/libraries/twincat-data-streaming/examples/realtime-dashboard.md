---
title: Realtime Dashboard
---

# Realtime Dashboard

## Scenario

Build a dashboard that shows current machine values from forwarded MQTT topics.

## Browser Client Example

```ts title="dashboard.ts"
import mqtt from 'mqtt';

const client = mqtt.connect('wss://mqtt.example.local:8084/mqtt');
const values = new Map<string, string>();

client.on('connect', () => {
  client.subscribe('line-a/press-01/#');
});

client.on('message', (topic, payload) => {
  values.set(topic, payload.toString());
  render();
});

function render() {
  document.querySelector('#temperature')!.textContent =
    values.get('line-a/press-01/temperature') ?? '-';
  document.querySelector('#running')!.textContent =
    values.get('line-a/press-01/running') ?? '-';
}
```

## Step By Step

1. Configure the `MqttForwarder` to publish one simple topic per value.
2. Use retained MQTT messages for current state.
3. Connect the dashboard over WebSocket MQTT.
4. Subscribe to the machine topic prefix.
5. Store the latest value per topic.
6. Render values whenever a new message arrives.

## Validation

Open the dashboard, restart it and confirm that retained values appear immediately without waiting for the next PLC update.

## Production Notes

- Use a broker that supports WebSocket connections for browser dashboards.
- Protect browser subscriptions with broker ACLs.
- Keep dashboards read-only unless command writes are explicitly designed and audited.

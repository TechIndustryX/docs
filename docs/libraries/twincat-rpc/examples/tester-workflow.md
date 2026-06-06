---
title: Tester Workflow
---

# Tester Workflow

## Scenario

Configure the tester utility with a list of PLC symbols so commissioning can invoke requests and replies without writing custom code every time.

## Configuration

```json title="appsettings.json"
{
  "Ads": {
    "NetId": "192.168.1.30.1.1",
    "Port": 851
  },
  "Symbols": {
    "1": {
      "Symbol": "MAIN.fbMachine2.fbSetQuantity",
      "Type": "Int32",
      "Mode": "Request"
    },
    "2": {
      "Symbol": "MAIN.fbMachine2.fbCompleteOrder",
      "Type": "Int32",
      "Mode": "Reply"
    },
    "3": {
      "Symbol": "MAIN.fbMachine2.fbSetOrder2",
      "Type": "Json",
      "Mode": "Request"
    },
    "4": {
      "Symbol": "MAIN.fbMachine2.fbGetOrder2",
      "Type": "Json",
      "Mode": "Reply"
    }
  }
}
```

## Step By Step

1. Set the ADS route to the target runtime.
2. Add one entry under `Symbols` per PLC operation.
3. Use `Mode: Request` for commands without return value.
4. Use `Mode: Reply` for commands that return a value.
5. Set `Type` to the expected payload format.
6. Run the tester against a PLC test project first.
7. Promote the validated symbol list into commissioning documentation.

## Validation Checklist

- The ADS route resolves.
- Each symbol exists in the PLC runtime.
- Request symbols toggle the expected PLC handshake.
- Reply symbols return values in the expected type.
- JSON payloads match the PLC property names.

## Usage Pattern

Use the tester during PLC commissioning, troubleshooting and regression tests. Production services should still use explicit typed clients so failures are handled in code.

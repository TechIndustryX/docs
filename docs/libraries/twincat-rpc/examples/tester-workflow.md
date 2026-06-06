---
title: Tester Workflow
---

# Tester Workflow

## Scenario

Validate PLC symbols interactively before wiring them into a production service.

## Source Pattern

`TechIndustry.Rpc.TwinCAT.Tester` reads configured `SymbolsOptions`, asks which symbol to invoke, parses values by type and runs request or reply mode.

## Steps

1. Configure a numbered list of symbols.
2. Assign `Mode` as `Request` or `Reply`.
3. Assign `Type` as `Int32`, `Bool`, `Float`, `String` or `Json`.
4. Run the tester.
5. Invoke each symbol and check timeout or result behavior.

## Expected Result

PLC and .NET teams can verify symbols and function block handshakes before building the final integration.


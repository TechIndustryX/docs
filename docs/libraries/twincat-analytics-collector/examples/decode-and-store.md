---
title: Decode and Store
---

# Decode and Store

## Scenario

Decode a completed TwinCAT Analytics recording and write normalized samples to a configured backend.

## Source Pattern

`HistoricalStream.RecordingsChanged`, `SymbolsAvailable` and `DescriptionChanged` enqueue download jobs. Each job calls `IRecordsStorage.StoreAsync`.

## Steps

1. Wait until symbol metadata and stream layout are both available.
2. Skip records that are still recording.
3. Download the historical range through `GetStreamAsync`.
4. Decode samples using the symbol collection and stream layout.
5. Store samples through the selected `IRecordsStorage` implementation.

## Expected Result

Completed TwinCAT Analytics records are converted to structured time-series data.


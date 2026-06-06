---
title: Historical Download Cleanup
---

# Historical Download Cleanup

## Scenario

Avoid reprocessing old recordings by deleting a historical record after it has been stored successfully.

## Source Pattern

`HistoricalStream.TryDownloadRecordsAsync` calls `StoreAsync`; on `StoreResult.Success` it sends a delete command through `MqttHistoricalService.DeleteStreamAsync`.

## Steps

1. Process only records that are not currently recording.
2. Store the record through the selected backend.
3. Return `StoreResult.Success` only after the backend write is complete.
4. Send `DeleteHistoricalDataCmd` for the processed record ids.
5. Remove deleted ids from pending download jobs.

## Expected Result

The collector is idempotent enough for continuous use: successful records are removed from the TwinCAT Analytics source queue.


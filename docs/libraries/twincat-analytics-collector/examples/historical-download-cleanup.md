---
title: Historical Download Cleanup
---

# Historical Download Cleanup

## Scenario

Download historical records, verify that they were persisted and then delete old recordings from the source when your retention policy allows it.

## Cleanup Flow

```csharp title="CleanupFlow.cs"
public async Task ArchiveAndCleanupAsync(
    HistoricalStream stream,
    DateTimeOffset start,
    DateTimeOffset end,
    CancellationToken token)
{
    var storedRecordIds = new List<int>();

    await foreach (var batch in stream.GetDataAsync(start, end, 10_000, token))
    {
        await storage.StoreAsync(stream, batch, token);
        storedRecordIds.AddRange(batch.Select(x => x.RecordId).Distinct());
    }

    await stream.DeleteAsync(storedRecordIds.Distinct(), token);
}
```

## Step By Step

1. Select a retention window, for example data older than 30 days.
2. Download a small time range first.
3. Store the downloaded batches.
4. Verify stored count and expected time span.
5. Only after validation, send delete commands for the archived record IDs.
6. Log every deleted record ID.
7. Keep cleanup disabled in dry-run mode until the storage backend is proven.

## Validation

- Re-run the query against storage and confirm the archived data is present.
- Ask the source for the same historical range and confirm old record IDs were removed.
- Keep audit logs for each cleanup run.

## Safety Notes

Do not delete source recordings in the same transaction as the first storage write. Validate storage first, then cleanup.

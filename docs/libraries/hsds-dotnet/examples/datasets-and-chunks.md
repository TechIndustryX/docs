---
title: Datasets and Chunks
---

# Datasets and Chunks

## Scenario

Store large time-series or batch data efficiently by creating a dataset with compression and chunked writes.

## Source Pattern

The console sample creates a compressed integer dataset and writes values in one-million-sample chunks using `SetDatasetValuesAsync`.

## Steps

1. Delete or rename an existing dataset only when you intentionally want a clean run.
2. Create the dataset with shape, max dimensions, compression and chunk settings.
3. Write values by ranges instead of uploading one large array.
4. Read ranges back to validate the stored data.

## Example

```csharp
var sampleCount = 5_000_000;
var chunkSize = 1_000_000;

var dataset = await hsds.EnsureDatasetAsync<int>(
    "measurements/temperature",
    shape: [sampleCount],
    maxdims: [sampleCount],
    gzipCompressed: true,
    chunks: [chunkSize]);

var position = 0;
foreach (var chunk in Enumerable.Range(0, sampleCount).Chunk(chunkSize))
{
    await hsds.SetDatasetValuesAsync(dataset.Id, chunk, position..(position + chunk.Length));
    position += chunk.Length;
}
```

## Expected Result

The dataset can be loaded and queried in ranges, which keeps memory usage predictable for large industrial data series.


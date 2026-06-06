---
title: Datasets and Chunks
---

# Datasets and Chunks

## Scenario

Create a compressed numeric dataset and write a large number of values without loading everything into memory at once. This follows the console sample pattern that writes and reads by `Range`.

## Complete Example

```csharp title="ChunkedDataset.cs"
using System.Diagnostics;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TechIndustry.Hsds;

var builder = Host.CreateApplicationBuilder(args);
builder.Services.AddHsdsClient(new Uri(builder.Configuration["Hsds:Endpoint"]!));

using var host = builder.Build();
var hsds = host.Services.GetRequiredService<SimpleHsdsClient>();
hsds.Username = builder.Configuration["Hsds:Username"];
hsds.Password = builder.Configuration["Hsds:Password"];
hsds.Domain = builder.Configuration["Hsds:Domain"];

await hsds.EnsureDomainAsync();

const string datasetPath = "FactoryA/Line01/Press01/temperature";
const int totalValues = 5_000_000;
const int chunkSize = 100_000;

await hsds.DeleteDatasetAsync(datasetPath);

var dataset = await hsds.EnsureDatasetAsync<float>(
    datasetPath,
    shape: [totalValues],
    maxdims: [totalValues],
    gzipCompressed: true,
    chunks: [chunkSize]);

var stopwatch = Stopwatch.StartNew();
var position = 0;

foreach (var chunk in Enumerable.Range(0, totalValues).Chunk(chunkSize))
{
    var values = chunk.Select(x => 20.0f + MathF.Sin(x / 1000f)).ToArray();
    await hsds.SetDatasetValuesAsync(dataset.Id, values, position..(position + values.Length));
    position += values.Length;
}

Console.WriteLine($"Write completed in {stopwatch.Elapsed}");

var firstMinute = await hsds.GetDatasetValuesAsync<float>(dataset.Id, 0..60);
Console.WriteLine($"First value: {firstMinute[0]}");
```

## Step By Step

1. Decide the logical dataset path under the machine group.
2. Choose a typed dataset, for example `float`, `int`, `bool` or `double`.
3. Set `shape` and `maxdims` to the expected size.
4. Enable `gzipCompressed` for telemetry and historical arrays.
5. Set `chunks` to the write/read block size used by your ingestion process.
6. Write each range with `SetDatasetValuesAsync(dataset.Id, values, range)`.
7. Read only the needed range with `GetDatasetValuesAsync<T>()`.

## Validation

After writing, verify both metadata and data:

```csharp
var info = await hsds.GetDatasetAsync(datasetPath);
Console.WriteLine($"{info.Id} {info.Shape.Dims[0]} values");

var sample = await hsds.GetDatasetValuesAsync<float>(info.Id, 1000..1010);
Console.WriteLine(string.Join(", ", sample));
```

## Sizing Guidance

- Use small chunks for interactive reads.
- Use larger chunks for batch ingestion.
- Keep chunk size aligned with the amount of data your producer can retry safely.
- For append-like flows, resize first, then write only the newly allocated range.

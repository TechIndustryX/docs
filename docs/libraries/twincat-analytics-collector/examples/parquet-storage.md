---
title: Parquet Storage
---

# Parquet Storage

## Scenario

Persist historical samples to Parquet files for data lake, batch analytics or offline inspection.

## Configuration

```json title="appsettings.json"
{
  "Storage": "Parquet",
  "Parquet": {
    "Directory": "data/parquet",
    "FileNamePattern": "{stream}/{yyyy}/{MM}/{dd}/{recordId}.parquet"
  }
}
```

## Complete Host

```csharp
app.Services.Configure<ParquetOptions>(app.Configuration.GetSection("Parquet"));
app.Services.AddParquetStorage();
```

## Step By Step

1. Set `Storage` to `Parquet`.
2. Configure the output directory.
3. Choose a path pattern that partitions by stream and date.
4. Start the collector.
5. Download a historical range.
6. Confirm Parquet files are created.
7. Load the files from Spark, DuckDB, Python or another analytics tool.

## Validation

```bash
find data/parquet -name '*.parquet' -print
```

Then query a file with your preferred Parquet reader and verify timestamp, symbol and value columns.

## When To Use

Choose Parquet for long-term analytics, batch processing and inexpensive archival storage.

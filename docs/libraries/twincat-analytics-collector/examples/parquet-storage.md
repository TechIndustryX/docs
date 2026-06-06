---
title: Parquet Storage
---

# Parquet Storage

## Scenario

Persist TwinCAT Analytics recordings as Parquet files for data-lake or batch-processing workflows.

## Source Pattern

The collector selects Parquet storage from configuration and registers the Parquet `IRecordsStorage` implementation.

## Steps

1. Set `Storage` to `Parquet`.
2. Configure the Parquet output location and record options.
3. Start the collector.
4. Let completed recordings flow through `StoreAsync`.
5. Inspect output files with Python, Spark or another Parquet-compatible tool.

## Expected Result

Historical machine data is available as analytical files with typed columns and timestamps.


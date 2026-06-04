---
title: "ParquetRecordOptions"
---

# ParquetRecordOptions

_public class_

Namespace: `TechIndustry.TwinCAT.Analytics.Collector.Parquet`

Source: `TechIndustry.TwinCAT.Analytics.Collector.Parquet/ParquetOptions.cs`

## Summary

Per-record Parquet storage options that control chunking, compression and output file path.

## Properties

### ChunkSize

_property_

```csharp
int ChunkSize
```

Gets or sets the maximum number of samples buffered in memory before writing a Parquet row group.

### Compression

_property_

```csharp
bool Compression
```

Gets or sets whether Snappy compression is applied to stored Parquet files.

### IncludeTimestamp

_property_

```csharp
bool IncludeTimestamp
```

Gets or sets whether a `timestamp` column is prepended to each row.

### Path

_property_

```csharp
string Path
```

Gets or sets the output path template. Tokens such as `&#123;alias&#125;`, `&#123;record&#125;`, `&#123;id&#125;` and `&#123;slot&#125;` are replaced at runtime.

### UploadChunkSize

_property_

```csharp
int UploadChunkSize
```

Gets or sets the maximum number of rows uploaded per request to Azure Blob Storage.


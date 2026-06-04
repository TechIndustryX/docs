---
title: "ParquetOptions"
---

# ParquetOptions

_public class_

Namespace: `TechIndustry.TwinCAT.Analytics.Collector.Parquet`

Source: `TechIndustry.TwinCAT.Analytics.Collector.Parquet/ParquetOptions.cs`

## Summary

Configuration options for the Parquet storage backend.

## Properties

### Azure

_property_

```csharp
AzureStorageParquetOptions Azure
```

Gets or sets Azure Blob Storage connection options for uploading Parquet files.

### Default

_property_

```csharp
ParquetRecordOptions Default
```

Gets or sets the default per-record options applied when no record-specific override exists.

### ExcludeRecords

_property_

```csharp
List<string> ExcludeRecords
```

Gets or sets a list of record names that are excluded from storage.

### IncludeRecords

_property_

```csharp
List<string> IncludeRecords
```

Gets or sets a list of record names that are explicitly included; an empty list means all records are included.

### Records

_property_

```csharp
Dictionary<string,ParquetRecordOptions> Records
```

Gets or sets per-record storage option overrides, keyed by record name.


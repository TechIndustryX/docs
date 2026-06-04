---
title: "HsdsRecordOptions"
---

# HsdsRecordOptions

_public class_

Namespace: `TechIndustry.TwinCAT.Analytics.Collector.Hsds`

Source: `TechIndustry.TwinCAT.Analytics.Collector.Hsds/HsdsOptions.cs`

## Summary

Per-record HSDS storage options that control chunking and compression behaviour.

## Properties

### ChunkSize

_property_

```csharp
int ChunkSize
```

Gets or sets the maximum number of samples buffered before flushing a chunk to HSDS.

### Compression

_property_

```csharp
bool Compression
```

Gets or sets whether gzip compression is applied to stored datasets.

### Group

_property_

```csharp
string? Group
```

Gets or sets an optional HSDS group path that overrides the default path derived from the stream alias.

### UploadChunkSize

_property_

```csharp
int UploadChunkSize
```

Gets or sets the maximum number of samples sent in a single HSDS upload request.


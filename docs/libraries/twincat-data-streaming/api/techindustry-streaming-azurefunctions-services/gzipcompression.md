---
title: "GZipCompression"
---

# GZipCompression

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Services`

Source: `TechIndustry.Streaming.AzureFunctions/Services/GZipCompression.cs`

## Summary

Utility class that decompresses GZip-compressed data into a UTF-8 string.

## Methods

### Decompress

_method_

```csharp
string Decompress(byte[] compressedBytes)
```

Decompresses a GZip-compressed byte array and returns the decoded UTF-8 string. A byte array containing GZip-compressed data.

### Decompress

_method_

```csharp
string Decompress(Stream compressedStream)
```

Decompresses a GZip-compressed `compressedStream` and returns the decoded UTF-8 string. A readable stream containing GZip-compressed data.


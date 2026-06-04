---
title: "DomainExcelExporterBase"
---

# DomainExcelExporterBase

_public class_

Namespace: `Industria4.Transformation`

Source: `src/Shared/Transformation/DomainExcelExporterBase.cs`

## Summary

Base class for Excel-based import/export of domain entities, supporting chunked batch operations.

## Constructors

### DomainExcelExporterBase

_constructor_

```csharp
DomainExcelExporterBase(ILogger logger)
```

## Methods

### ExportAsync

_method_

```csharp
Task ExportAsync<T>(Stream stream,IAsyncEnumerable<T> entities)
```

Exports an async sequence of entities to an Excel stream. The entity type. Target stream to write the Excel workbook to. Async sequence of entities to export.

### ExportAsync

_method_

```csharp
Task ExportAsync<T>(Stream stream,IMultiRepository<T> repository,IQueryable<string> ids,int chunkSize)
```

Exports entities from the repository in chunks of the specified size to an Excel stream. The entity type. Target stream to write the Excel workbook to. Repository used to load the entities. Query of entity IDs to export. Number of entities to process per batch.

### ExportAsync

_method_

```csharp
Task ExportAsync<T>(Stream stream,IMultiRepository<T> repository,IQueryable<string> ids)
```

Exports entities to an Excel stream, reading in pages of 100 from the repository. The entity type. Target stream to write the Excel workbook to. Repository used to load the entities. Query of entity IDs to export.

### ExportItemsAsync

_method_

```csharp
Task ExportItemsAsync<T>(ExcelWorksheet worksheet,IAsyncEnumerable<T> entities)
```

### ImportAsync

_method_

```csharp
IAsyncEnumerable<T> ImportAsync<T>(Stream stream,IAsyncEnumerable<T> entities)
```

Imports entities by merging Excel data into the provided async sequence and yields the updated entities. The entity type. Stream containing the Excel workbook. Async sequence of existing entities to update. Updated entities ready for persistence.

### ImportAsync

_method_

```csharp
Task ImportAsync<T>(Stream stream,IMultiRepository<T> repository,IQueryable<string> ids,int chunkSize)
```

Imports entities from an Excel stream in chunks of the specified size, persisting updates to the repository. The entity type. Stream containing the Excel workbook. Repository used to update the imported entities. Query of entity IDs to import. Number of entities to process per batch.

### ImportAsync

_method_

```csharp
Task ImportAsync<T>(Stream stream,IMultiRepository<T> repository,IQueryable<string> ids)
```

Imports entities from an Excel stream, reading in pages of 100 from the repository. The entity type. Stream containing the Excel workbook. Repository used to update the imported entities. Query of entity IDs to import.

### ImportItemsAsync

_method_

```csharp
IAsyncEnumerable<T> ImportItemsAsync<T>(ExcelWorksheet worksheet,IAsyncEnumerable<T> entities)
```


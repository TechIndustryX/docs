---
title: TwinCAT Analytics Collector
---

# TwinCAT Analytics Collector API Reference

Source repository: `TechIndustryX/twincat-analytics-collector`

## .NET API

Detected 34 C# types and 114 members across 9 namespaces.

### `(global)`

#### `Storage`

_internal enum_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Program.cs`

### `Microsoft.Extensions.DependencyInjection`

#### `ServiceCollectionExtensions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector.Hsds/ServiceCollectionExtensions.cs`

Extension methods for registering the HSDS records storage with the DI container.

#### `ServiceCollectionExtensions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector.Parquet/ServiceCollectionExtensions.cs`

Extension methods for registering the Parquet records storage with the DI container.

### `System`

#### `DateTimeOffsetUnixExtensions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics/DateTimeOffsetUnixExtensions.cs`

Extension methods that convert a to Unix epoch values at various precisions.

Members:

- `long ToUnixTimeMicroseconds(this DateTimeOffset dto)` _method_ — Returns the number of whole microseconds elapsed since the Unix epoch.
- `long ToUnixTimeMilliseconds(this DateTimeOffset dto)` _method_ — Returns the number of whole milliseconds elapsed since the Unix epoch.
- `long ToUnixTimeNanoseconds(this DateTimeOffset dto)` _method_ — Returns the number of whole nanoseconds elapsed since the Unix epoch.
- `long ToUnixTimeSeconds(this DateTimeOffset dto)` _method_ — Returns the number of whole seconds elapsed since the Unix epoch.

#### `TypeCodeExtensions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics/TypeCodeExtensions.cs`

Extension methods that convert a value to the corresponding CLR .

Members:

- `Type GetTypeFromCode(this TypeCode typeCode)` _method_ — Returns the CLR that corresponds to `typeCode`. The type code to convert. The matching CLR . Thrown when `typeCode` has no corresponding CLR type.

### `TechIndustry.TwinCAT.Analytics`

#### `IHistoricalStream`

_public interface_

Source: `TechIndustry.TwinCAT.Analytics/IHistoricalStream.cs`

Represents a historical data stream from a TwinCAT Analytics recording that can be enumerated asynchronously.

#### `IRecordsStorage`

_public interface_

Source: `TechIndustry.TwinCAT.Analytics/IRecordsStorage.cs`

Abstraction for a backend store that persists historical stream data for a single recording.

#### `IStreamRecordDescription`

_public interface_

Source: `TechIndustry.TwinCAT.Analytics/IStreamRecordDescription.cs`

Describes a single recording segment within a historical stream.

#### `StoreResult`

_public enum_

Source: `TechIndustry.TwinCAT.Analytics/IRecordsStorage.cs`

Indicates the outcome of a call.

#### `struct`

_public record_

Source: `TechIndustry.TwinCAT.Analytics/HistoricalStreamSample.cs`

A single time-stamped sample from a historical data stream, carrying parallel arrays of symbol names and their corresponding values.

#### `struct`

_public record_

Source: `TechIndustry.TwinCAT.Analytics/Timestamp.cs`

An immutable value type representing a Windows FILETIME timestamp (100-nanosecond ticks since 1601-01-01 UTC). Supports arithmetic, comparison, and implicit conversion to/from .

Members:

- `int CompareTo(Timestamp other)` _method_
- `int CompareTo(object? obj)` _method_
- `implicit operator long(Timestamp timestamp)` _method_
- `implicit operator Timestamp(long value)` _method_
- `string ToString()` _method_
- `DateTimeOffset DateTimeOffset` _property_ — Gets the equivalent of this timestamp.

#### `TemplateString`

_public class_

Source: `TechIndustry.TwinCAT.Analytics/TemplateString.cs`

Provides named-placeholder string formatting similar to `string.Format`, using `&#123;key&#125;` or `&#123;key:format&#125;` tokens.

Members:

- `string Format(string format,IDictionary&lt;string,object&gt; args)` _method_ — Replaces named placeholders in `format` with values from `args`. A template string containing `&#123;key&#125;` or `&#123;key:format&#125;` placeholders. A dictionary mapping placeholder keys to their replacement values. The formatted string with all matching placeholders replaced.

#### `TimestampJsonConverter`

_public class_

Source: `TechIndustry.TwinCAT.Analytics/Timestamp.cs`

Converts values to/from their underlying JSON representation.

Members:

- `Timestamp Read(ref Utf8JsonReader reader,Type typeToConvert,JsonSerializerOptions options)` _method_
- `void Write(Utf8JsonWriter writer,Timestamp value,JsonSerializerOptions options)` _method_

### `TechIndustry.TwinCAT.Analytics.Collector`

#### `HistoricalStream`

_internal class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/HistoricalStream.cs`

Members:

- `void DescriptionChanged(StreamBinTxDesc description)` _method_
- `void RecordingsChanged()` _method_
- `void SymbolsAvailable(TcIoTSymbolCollection symbols)` _method_
- `string Alias` _property_
- `int CycleTime` _property_
- `StreamBinTxDesc Description` _property_
- `string StorageName` _property_
- `string StorageProviderId` _property_
- `TcIoTSymbolCollection? Symbols` _property_

#### `MqttHistoricalService`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/MqttHistoricalService.cs`

that connects to an MQTT broker, subscribes to TwinCAT Analytics stream topics, and dispatches historical data downloads to configured storage backends.

Members:

- `Task DeleteStreamAsync(HistoricalStream historicalStream,IEnumerable&lt;int&gt; recordIds)` _method_
- `Task StartAsync(CancellationToken cancellationToken)` _method_ — Connects to the MQTT broker and begins processing incoming stream messages.
- `Task StopAsync(CancellationToken cancellationToken)` _method_ — Disconnects from the MQTT broker and disposes the client.
- `bool? TryGetIsRecording(int recordId)` _method_ — Returns whether `recordId` is currently being recorded, or if the recording state is not yet known.

#### `MqttOptions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/MqttOptions.cs`

Configuration options for the MQTT broker connection used by the analytics collector.

Members:

- `string ClientId` _property_ — Gets or sets the MQTT client identifier. Defaults to the machine name.
- `string DownloadTopic` _property_ — Gets or sets the sub-topic used to receive download/export commands from the broker.
- `string MainTopic` _property_ — Gets or sets the root topic prefix under which all TwinCAT Analytics messages are published.
- `string Password` _property_ — Gets or sets the password used to authenticate with the MQTT broker.
- `int Port` _property_ — Gets or sets the TCP port of the MQTT broker.
- `string Server` _property_ — Gets or sets the hostname or IP address of the MQTT broker.
- `string Username` _property_ — Gets or sets the username used to authenticate with the MQTT broker.
- `bool UseTls` _property_ — Gets or sets whether TLS is used for the broker connection.

### `TechIndustry.TwinCAT.Analytics.Collector.Hsds`

#### `HsdsOptions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector.Hsds/HsdsOptions.cs`

Configuration options for the HSDS (Highly Scalable Data Service) storage backend.

Members:

- `HsdsRecordOptions Default` _property_ — Gets or sets the default record storage options applied when no record-specific override exists.
- `string Domain` _property_ — Gets or sets the HSDS domain root path under which all datasets are stored.
- `List&lt;string&gt; ExcludeRecords` _property_ — Gets or sets a list of record names that are excluded from storage.
- `List&lt;string&gt; IncludeRecords` _property_ — Gets or sets a list of record names that are explicitly included; an empty list means all records are included.
- `string Password` _property_ — Gets or sets the password for authenticating with the HSDS server.
- `Dictionary&lt;string,HsdsRecordOptions&gt; Records` _property_ — Gets or sets per-record storage option overrides, keyed by record name.
- `Uri Uri` _property_ — Gets or sets the base URI of the HSDS server.
- `string Username` _property_ — Gets or sets the username for authenticating with the HSDS server.

#### `HsdsRecordOptions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector.Hsds/HsdsOptions.cs`

Per-record HSDS storage options that control chunking and compression behaviour.

Members:

- `int ChunkSize` _property_ — Gets or sets the maximum number of samples buffered before flushing a chunk to HSDS.
- `bool Compression` _property_ — Gets or sets whether gzip compression is applied to stored datasets.
- `string? Group` _property_ — Gets or sets an optional HSDS group path that overrides the default path derived from the stream alias.
- `int UploadChunkSize` _property_ — Gets or sets the maximum number of samples sent in a single HSDS upload request.

#### `HsdsRecordsStorage`

_internal class_

Source: `TechIndustry.TwinCAT.Analytics.Collector.Hsds/HsdsRecordsStorage.cs`

### `TechIndustry.TwinCAT.Analytics.Collector.Json`

#### `GuidJsonConverter`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Json/GuidJsonConverter.cs`

A that serializes and deserializes nullable values as JSON strings.

Members:

- `Guid? Read(ref Utf8JsonReader reader,Type typeToConvert,JsonSerializerOptions options)` _method_
- `void Write(Utf8JsonWriter writer,Guid? value,JsonSerializerOptions options)` _method_

### `TechIndustry.TwinCAT.Analytics.Collector.Models.Mqtt`

#### `AdditionalSymbolInfo`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/ServicesRecordDataDesc.cs`

Placeholder class for additional per-symbol metadata not yet exposed by the TwinCAT Analytics Services API.

#### `DeleteHistoricalDataCmd`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/DeleteHistoricalDataCmd.cs`

MQTT command payload requesting deletion of historical recording data from TwinCAT Analytics Services.

#### `GetHistoricalDataCmd`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/GetHistoricalDataCmd.cs`

MQTT command payload requesting a historical data export from TwinCAT Analytics Services.

Members:

- `Timestamp? EndTimestamp` _property_
- `Guid? Layout` _property_
- `int? MaxSampleCount` _property_
- `string? Mode` _property_
- `string? OutputFormat` _property_
- `int? RecordID` _property_
- `int? RecordingID` _property_
- `string? ResultTopic` _property_
- `Timestamp? StartTimestamp` _property_
- `Guid? SubBroker` _property_
- `Guid? SystemID` _property_
- `string? Topic` _property_
- `int? UserSampleTime` _property_

#### `Record`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/ServicesRecordDataDesc.cs`

Describes a single data record within a TwinCAT Analytics Services recording.

Members:

- `AdditionalSymbolInfo? AdditionalSymbolInfo` _property_
- `string? Alias` _property_
- `string? DataFormat` _property_
- `int Duration` _property_
- `string? Mode` _property_
- `string? Pipeline` _property_
- `string? RecordDataKey` _property_
- `Guid? Recorder` _property_
- `string? RecorderAlias` _property_
- `string? Recording` _property_
- `string? RecordName` _property_
- `string? RingBuffer` _property_
- `int RingBufferPara` _property_
- `string? SourceSystemID` _property_
- `string? SourceSystemIDAlias` _property_
- `Guid? Storage` _property_
- `string? SubBroker` _property_
- `string? SymbolLayout` _property_
- `string? Topic` _property_

#### `Recording`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/ServicesRecordDataDesc.cs`

Represents a completed recording run with start time, status, and associated record metadata.

Members:

- `Record? Record` _property_
- `Guid? RecordDataGuid` _property_
- `int RecordId` _property_
- `long StartTimestamp` _property_
- `int Status` _property_

#### `ServicesRecordDataDesc`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/ServicesRecordDataDesc.cs`

Top-level MQTT response payload containing a list of completed recordings from TwinCAT Analytics Services.

Members:

- `List&lt;Recording&gt;? Recordings` _property_

#### `StreamBinTxDesc`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/StreamBinTxDesc.cs`

Top-level descriptor of a TwinCAT Analytics binary streaming topic, containing stream metadata and a list of recording segments.

Members:

- `int HistStreamIDStorage` _property_

#### `StreamBinTxDescRecord`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/StreamBinTxDesc.cs`

Describes a single recording segment within a and implements .

#### `Symbol`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/ServicesRecordDataDesc.cs`

Describes the layout of a single TwinCAT symbol: its name, base type, and memory layout within a binary sample buffer.

Members:

- `string? BaseType` _property_
- `int BitOffset` _property_
- `int BitSize` _property_
- `string? Name` _property_

#### `Topic`

_public struct_

Source: `TechIndustry.TwinCAT.Analytics.Collector/Models/Mqtt/Topic.cs`

An immutable, case-insensitive MQTT topic path that supports segment-based comparison and composition operations.

Members:

- `Topic(string value)` _constructor_ — Initializes a from a slash-delimited `value`, stripping leading and trailing separators.
- `Topic Combine(Topic subTopic)` _method_ — Returns a new formed by appending `subTopic` to this topic.
- `bool Contains(Topic partialTopic)` _method_ — Returns if this topic contains `partialTopic` as a contiguous sub-sequence of segments (case-insensitive).
- `bool EndsWith(Topic endTopic)` _method_ — Returns if this topic ends with `endTopic` (case-insensitive segment comparison).
- `bool Equals(Topic other)` _method_
- `bool Equals(object? obj)` _method_
- `int GetHashCode()` _method_
- `bool StartsWith(Topic startTopic)` _method_ — Returns if this topic starts with `startTopic` (case-insensitive segment comparison).
- `string ToString()` _method_
- `IReadOnlyList&lt;string&gt; Segments` _property_ — Gets the individual path segments that make up this topic.
- `string Value` _property_ — Gets the normalized string representation of this topic path.

### `TechIndustry.TwinCAT.Analytics.Collector.Parquet`

#### `AzureStorageParquetOptions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector.Parquet/ParquetOptions.cs`

Azure Blob Storage connection options used when uploading Parquet output files.

Members:

- `string ConnectionString` _property_ — Gets or sets the Azure Storage account connection string.

#### `ParquetOptions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector.Parquet/ParquetOptions.cs`

Configuration options for the Parquet storage backend.

Members:

- `AzureStorageParquetOptions Azure` _property_ — Gets or sets Azure Blob Storage connection options for uploading Parquet files.
- `ParquetRecordOptions Default` _property_ — Gets or sets the default per-record options applied when no record-specific override exists.
- `List&lt;string&gt; ExcludeRecords` _property_ — Gets or sets a list of record names that are excluded from storage.
- `List&lt;string&gt; IncludeRecords` _property_ — Gets or sets a list of record names that are explicitly included; an empty list means all records are included.
- `Dictionary&lt;string,ParquetRecordOptions&gt; Records` _property_ — Gets or sets per-record storage option overrides, keyed by record name.

#### `ParquetRecordOptions`

_public class_

Source: `TechIndustry.TwinCAT.Analytics.Collector.Parquet/ParquetOptions.cs`

Per-record Parquet storage options that control chunking, compression and output file path.

Members:

- `int ChunkSize` _property_ — Gets or sets the maximum number of samples buffered in memory before writing a Parquet row group.
- `bool Compression` _property_ — Gets or sets whether Snappy compression is applied to stored Parquet files.
- `bool IncludeTimestamp` _property_ — Gets or sets whether a `timestamp` column is prepended to each row.
- `string Path` _property_ — Gets or sets the output path template. Tokens such as `&#123;alias&#125;`, `&#123;record&#125;`, `&#123;id&#125;` and `&#123;slot&#125;` are replaced at runtime.
- `int UploadChunkSize` _property_ — Gets or sets the maximum number of rows uploaded per request to Azure Blob Storage.

#### `ParquetRecordsStorage`

_internal class_

Source: `TechIndustry.TwinCAT.Analytics.Collector.Parquet/ParquetRecordsStorage.cs`


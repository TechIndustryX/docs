---
title: TwinCAT Data Streaming
---

# TwinCAT Data Streaming API Reference

Source repository: `TechIndustryX/twincat-data-streaming`

## .NET API

Detected 33 C# types and 87 members across 7 namespaces.

### `(global)`

#### `TwinCatLicenseBypass`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/Program.cs`

Reflection-based workaround that bypasses the TwinCAT Analytics license check so the library can be used without a valid license at runtime.

Members:

- `void ForceLevelValid()` _method_ — Uses reflection to set the internal `LicenseValidator.Level` to `Valid`, preventing the SDK from throwing a license exception.

### `Azure.Monitor.Collector`

#### `LogAnalyticsCollector`

_public class_

Source: `Azure.Monitor.Collector/LogAnalyticsCollector.cs`

Sends JSON metric batches to Azure Monitor Log Analytics using the legacy HTTP Data Collector API (2016-04-01), signing each request with the configured workspace key.

Members:

- `Task SendMetricsAsync(string logType,IReadOnlyList&lt;JsonElement&gt; metrics,string? timeGeneratedField = null,CancellationToken token = default)` _method_ — Serializes `metrics` and uploads them to the Log Analytics workspace under the given `logType` table. The custom log table name in Log Analytics (without the `_CL` suffix). The JSON metric objects to ingest. Optional field name in the payload that represents the event timestamp. Token to cancel the operation.

#### `LogAnalyticsOptions`

_public class_

Source: `Azure.Monitor.Collector/LogAnalyticsOptions.cs`

Configuration options for the legacy Azure Monitor Log Analytics HTTP Data Collector API (2016-04-01).

Members:

- `JsonSerializerOptions JsonSerializerOptions` _property_ — Gets or sets the JSON serialization settings applied when formatting metric payloads.
- `string WorkspaceId` _property_ — Gets or sets the Log Analytics workspace ID.
- `string WorkspaceKey` _property_ — Gets or sets the primary or secondary shared key used to sign requests.

### `Microsoft.Extensions.DependencyInjection`

#### `LogAnalyticsExtensions`

_public class_

Source: `Azure.Monitor.Collector/LogAnalyticsExtensions.cs`

Extension methods for registering with the DI container.

Members:

- `IServiceCollection AddLogAnalyticsCollector(this IServiceCollection services)` _method_ — Registers with default options. The same for chaining.
- `IServiceCollection AddLogAnalyticsCollector(this IServiceCollection services,Action&lt;LogAnalyticsOptions&gt;? options)` _method_ — Registers with an optional configuration action. The service collection to add to. Optional action to configure . The same for chaining.

### `TechIndustry.Streaming.AzureFunctions.Functions`

#### `EventHubToLogAnalytics`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Functions/EventHubToLogAnalytics.cs`

Azure Function that receives Event Hub batches from a TwinCAT data stream and forwards them to Log Analytics.

Members:

- `Task Run([EventHubTrigger("%EventHubToLogAnalytics%",Connection = "EventHubToLogAnalytics")` _method_ — Processes an array of Event Hub messages and ingests their metric payload into Log Analytics.

#### `HttpToLogAnalytics`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Functions/HttpToLogAnalytics.cs`

Azure Function that accepts an HTTP POST of metric data and forwards it to Log Analytics.

Members:

- `Task&lt;IActionResult&gt; Run([HttpTrigger(AuthorizationLevel.Function,"post")` _method_ — Deserializes the JSON request body as an array of and ingests them into Log Analytics.

#### `HttpToPubMessage`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Functions/HttpToPubMessage.cs`

Azure Function that acts as an HTTP gateway to Azure Web PubSub: GET returns a client-access URI; POST publishes a message to a hub.

Members:

- `Task&lt;IActionResult&gt; Run([HttpTrigger(AuthorizationLevel.Function,"get","post")` _method_ — Handles GET (return a client access URI) or POST (publish a message) requests to the configured Web PubSub hub.

#### `LogAnalyticsQuery`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Functions/LogAnalyticsQuery.cs`

Azure Function that executes a KQL query against Log Analytics and returns the result table as JSON.

Members:

- `Task&lt;IActionResult&gt; Run([HttpTrigger(AuthorizationLevel.Function,"post")` _method_ — Deserializes the KQL query from the request body, executes it, and returns the result.

### `TechIndustry.Streaming.AzureFunctions.Models`

#### `InputMetric`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Models/InputMetric.cs`

Represents a single metric data point received from a TwinCAT data stream, carrying a stream name and arbitrary key/value fields.

Members:

- `IDictionary&lt;string,object&gt;? Data` _property_ — Gets or sets any additional JSON fields that form the metric payload.
- `string StreamName` _property_ — Gets or sets the name of the source data stream; used as the destination Log Analytics table.

#### `InputPubMessage`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Models/InputPubMessage.cs`

Represents an Azure Web PubSub message payload that carries a target hub, content, and optional additional data.

Members:

- `string Content` _property_ — Gets or sets the message content body published to the PubSub hub.
- `IDictionary&lt;string,object&gt;? Data` _property_ — Gets or sets any additional JSON fields included in the message payload.
- `string Hub` _property_ — Gets or sets the Web PubSub hub name that the message is published to.

#### `InputQuery`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Models/InputQuery.cs`

Represents a Kusto (KQL) query request with an optional set of named parameters.

Members:

- `IDictionary&lt;string,object&gt;? Data` _property_ — Gets or sets additional JSON fields that may be used to parameterise the query.
- `string Query` _property_ — Gets or sets the KQL query string to execute against the Log Analytics workspace.

### `TechIndustry.Streaming.AzureFunctions.Services`

#### `BinaryDataConverter`

_internal class_

Source: `TechIndustry.Streaming.AzureFunctions/Services/BinaryDataConverter.cs`

Members:

- `BinaryData? Read(ref Utf8JsonReader reader,Type typeToConvert,JsonSerializerOptions options)` _method_
- `void Write(Utf8JsonWriter writer,BinaryData value,JsonSerializerOptions options)` _method_

#### `GZipCompression`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Services/GZipCompression.cs`

Utility class that decompresses GZip-compressed data into a UTF-8 string.

Members:

- `string Decompress(Stream compressedStream)` _method_ — Decompresses a GZip-compressed `compressedStream` and returns the decoded UTF-8 string. A readable stream containing GZip-compressed data.
- `string Decompress(byte[] compressedBytes)` _method_ — Decompresses a GZip-compressed byte array and returns the decoded UTF-8 string. A byte array containing GZip-compressed data.

#### `IgnoreStreamNameResolver`

_internal class_

Source: `TechIndustry.Streaming.AzureFunctions/Services/IgnoreStreamNameResolver.cs`

Members:

- `JsonTypeInfo GetTypeInfo(Type type,JsonSerializerOptions options)` _method_

#### `LogAnalyticsOptions`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Services/LogAnalyticsOptions.cs`

Configuration options for ingesting data to Azure Monitor Log Analytics via the Data Collection Rule endpoint.

Members:

- `string IngestionEndpoint` _property_ — Gets or sets the Log Analytics ingestion endpoint URI for the DCR.
- `string RuleId` _property_ — Gets or sets the Data Collection Rule (DCR) ID used to route ingested data.
- `string WorkspaceId` _property_ — Gets or sets the Log Analytics workspace ID.

#### `LogAnalyticsService`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Services/LogAnalyticsService.cs`

Provides query and ingestion operations against Azure Monitor Log Analytics using the Data Collection Rule (DCR) endpoint and the Log Analytics query API.

Members:

- `Task&lt;LogsTable&gt; QueryAsync(string query,CancellationToken token = default)` _method_ — Executes a KQL `query` against the configured Log Analytics workspace and returns the result table. The KQL query string to execute. Token to cancel the operation.
- `Task SendMetricsAsync(IEnumerable&lt;InputMetric&gt; metrics,CancellationToken token = default)` _method_ — Ingests `metrics` into Log Analytics, grouping them by stream name into separate tables. The metric payloads to ingest. Items with an empty `StreamName` are ignored. Token to cancel the operation.

#### `PubSubOptions`

_public class_

Source: `TechIndustry.Streaming.AzureFunctions/Services/PubSubOptions.cs`

Configuration options for the Azure Web PubSub endpoint.

Members:

- `Uri Endpoint` _property_ — Gets or sets the Azure Web PubSub service endpoint URI.

### `TechIndustry.Streaming.TwinCAT`

#### `MqttBroker`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/MqttBroker.cs`

Holds the connection parameters for a single MQTT broker.

Members:

- `string ClientId` _property_ — Gets or sets the MQTT client identifier. Defaults to `"TechIndustry"`.
- `string Host` _property_ — Gets the MQTT broker host name or IP address.
- `string Password` _property_ — Gets or sets the MQTT password for authenticated brokers.
- `int Port` _property_ — Gets or sets the TCP port. Defaults to `1883`.
- `bool Tls` _property_ — Gets or sets a value indicating whether TLS is used for the connection.
- `string Username` _property_ — Gets or sets the MQTT username for authenticated brokers.

#### `MqttBrokerItemOptions`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

Configuration for a single MQTT broker connection entry referenced by name from other options.

Members:

- `string ClientId` _property_ — Gets or sets the MQTT client identifier. Defaults to `"TechIndustry"`.
- `string Host` _property_ — Gets or sets the broker host name or IP address.
- `string Password` _property_ — Gets or sets the MQTT password for authenticated brokers.
- `int Port` _property_ — Gets or sets the TCP port. Defaults to `1883`.
- `bool Tls` _property_ — Gets or sets a value indicating whether TLS is used for the connection.
- `string Username` _property_ — Gets or sets the MQTT username for authenticated brokers.

#### `MqttBrokerOptions`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

Named dictionary of keyed by broker name.

#### `MqttForwarder`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/MqttForwarder.cs`

Forwards samples from one or more channel readers to an MQTT broker, applying optional batching, compression, and a Roslyn C# script for payload customisation.

Members:

- `void AddReader(ChannelReader&lt;SymbolValue&gt; reader)` _method_ — Attaches `reader` to this forwarder so its values are published to the MQTT topic. The channel reader to subscribe from.
- `void RemoveReader(ChannelReader&lt;SymbolValue&gt; reader)` _method_ — Detaches `reader` and stops forwarding its values. The channel reader to unsubscribe.
- `Task StartAsync()` _method_ — Connects to the MQTT broker and starts processing; must be called before adding readers.
- `MqttBroker MqttBroker` _property_ — Gets the MQTT broker this forwarder publishes to.
- `string Topic` _property_ — Gets the MQTT topic that messages are published under.

#### `MqttForwarderCustomGlobals`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/MqttForwarder.cs`

Global variables object passed to a custom Roslyn script when a is being processed.

#### `MqttForwarderCustomOptions`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

Options for a custom Roslyn C# script that intercepts and transforms each before publishing.

Members:

- `Dictionary&lt;string,string&gt; Parameters` _property_ — Gets or sets the named parameters passed to the script via .
- `string Source` _property_ — Gets or sets the C# script source code (or a path to a script file) applied to each forwarder item.

#### `MqttForwarderItem`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/MqttForwarder.cs`

Represents a single symbol value being prepared for publication to an MQTT topic, including payload and cancellation state.

Members:

- `JsonNode CreateDefaultNode()` _method_ — Builds the default JSON payload for this item by serialising using the symbol's type info.
- `bool Cancel` _property_ — Gets or sets a value indicating whether this item should be silently dropped instead of published.
- `JsonNode? JsonPayload` _property_ — Gets or sets the JSON payload; when a default node is generated via .
- `SymbolValue SymbolValue` _property_ — Gets the original sample from the reader.
- `string Topic` _property_ — Gets or sets the MQTT topic the item will be published to.

#### `MqttForwarderItemCompression`

_public enum_

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

Specifies the compression algorithm applied to MQTT message payloads.

#### `MqttForwarderItemOptions`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

Configuration for a single MQTT forwarder item that maps a set of symbol readers to a topic on a broker.

Members:

- `int BatchSize` _property_ — Gets or sets the maximum number of messages batched together before publishing. Defaults to `1` (no batching).
- `TimeSpan BatchTimeout` _property_ — Gets or sets the maximum time a partial batch is held before being flushed. Defaults to 15 seconds.
- `MqttForwarderItemCompression Compression` _property_ — Gets or sets the compression algorithm applied to message payloads. Defaults to .
- `MqttForwarderCustomOptions Custom` _property_ — Gets or sets the optional Roslyn C# script customisation settings applied to each message before publishing.
- `string MqttBroker` _property_ — Gets or sets the name of the entry to use as the target broker.
- `List&lt;string&gt; MqttSymbolReaders` _property_ — Gets the list of entry names whose values this forwarder relays.
- `string Topic` _property_ — Gets or sets the MQTT topic to publish values to.

#### `MqttForwarderOptions`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

Collection of that configures how symbol values are published to MQTT brokers.

#### `MqttSymbolsReader`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/MqttSymbolsReader.cs`

Subscribes to an MQTT live-stream topic published by TwinCAT Analytics and exposes received samples through a bounded .

Members:

- `void Dispose()` _method_ — Cancels the reader loop and releases MQTT source resources.
- `void Start()` _method_ — Connects to the MQTT broker, resolves symbols, and begins writing values to the internal channel.
- `void Stop()` _method_ — Signals the reader loop to stop by cancelling the internal .
- `MqttSymbolsReaderConfiguration Configuration` _property_ — Gets the configuration used to create this reader instance.
- `ChannelReader&lt;SymbolValue&gt; Reader` _property_ — Gets the channel reader from which consumers can read incoming samples.

#### `MqttSymbolsReaderConfiguration`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/MqttSymbolsReaderConfiguration.cs`

Configuration for a single that subscribes to an MQTT live stream topic and reads TwinCAT symbol values.

Members:

- `string BaseTopic` _property_ — Gets or sets the MQTT base topic prefix. Combined with to form .
- `TimeSpan DataTimeout` _property_ — Gets or sets the timeout for receiving data after the stream has started. Defaults to 10 seconds.
- `string FullTopic` _property_ — Gets the fully qualified MQTT topic (`BaseTopic/StreamName`) the reader subscribes to.
- `int MaxSortQueueSize` _property_ — Gets or sets the maximum sort-queue depth. Defaults to `5`.
- `int MinSortQueueSize` _property_ — Gets or sets the minimum sort-queue depth used for timestamp ordering. Defaults to `0`.
- `MqttBroker MqttBroker` _property_ — Gets the MQTT broker connection parameters used by this reader.
- `string StreamName` _property_ — Gets the stream name, which also forms the last segment of .
- `List&lt;string&gt; Symbols` _property_ — Gets the list of TwinCAT symbol paths this reader subscribes to.
- `TimeSpan SymbolTimeout` _property_ — Gets or sets the timeout for receiving the initial symbol metadata. Defaults to 10 seconds.

#### `MqttSymbolsReaderItemOptions`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

Configuration for a single that subscribes to a TwinCAT MQTT live stream topic.

Members:

- `string BaseTopic` _property_ — Gets or sets the MQTT base topic prefix.
- `TimeSpan DataTimeout` _property_ — Gets or sets the timeout for receiving data after the stream has started. Defaults to 10 seconds.
- `int MaxSortQueueSize` _property_ — Gets or sets the maximum sort-queue depth. Defaults to `5`.
- `int MinSortQueueSize` _property_ — Gets or sets the minimum sort-queue depth for timestamp ordering. Defaults to `0`.
- `string MqttBroker` _property_ — Gets or sets the name of the entry to connect to.
- `string StreamName` _property_ — Gets or sets the stream name that forms the final segment of the subscribed topic.
- `List&lt;string&gt; Symbols` _property_ — Gets the list of TwinCAT symbol paths to read from the stream.
- `TimeSpan SymbolTimeout` _property_ — Gets or sets the timeout for receiving the initial symbol metadata. Defaults to 10 seconds.

#### `MqttSymbolsReaderOptions`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

Named dictionary of keyed by reader name.

#### `StreamingService`

_public class_

Source: `TechIndustry.Streaming.TwinCAT/StreamingService.cs`

Hosted service that creates and orchestrates all configured , , and instances based on application options.

Members:

- `Task StartAsync(CancellationToken cancellationToken)` _method_ — Builds brokers, readers, and forwarders, then starts each one in dependency order.
- `Task StopAsync(CancellationToken cancellationToken)` _method_ — Stops all running readers and disposes all forwarder connections.

#### `SymbolValue`

_public record_

Source: `TechIndustry.Streaming.TwinCAT/SymbolValue.cs`

Represents a single timestamped value sample read from a TwinCAT symbol via an MQTT live stream.

Members:

- `DateTimeOffset Date` _property_ — Record parameter on SymbolValue.
- `ISymbolDefinition SymbolDefinition` _property_ — Record parameter on SymbolValue.
- `object Value` _property_ — Record parameter on SymbolValue.


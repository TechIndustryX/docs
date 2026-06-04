---
title: "TechIndustry.TwinCAT.Analytics"
---

# TechIndustry.TwinCAT.Analytics

This namespace contains 8 public API types.

## Types

- [IHistoricalStream](./ihistoricalstream.md) _interface_ - Represents a historical data stream from a TwinCAT Analytics recording that can be enumerated asynchronously.
- [IRecordsStorage](./irecordsstorage.md) _interface_ - Abstraction for a backend store that persists historical stream data for a single recording.
- [IStreamRecordDescription](./istreamrecorddescription.md) _interface_ - Describes a single recording segment within a historical stream.
- [StoreResult](./storeresult.md) _enum_ - Indicates the outcome of a call.
- [struct](./struct.md) _record_ - A single time-stamped sample from a historical data stream, carrying parallel arrays of symbol names and their corresponding values.
- [struct](./struct-2.md) _record_ - An immutable value type representing a Windows FILETIME timestamp (100-nanosecond ticks since 1601-01-01 UTC). Supports arithmetic, comparison, and implicit conversion to/from .
- [TemplateString](./templatestring.md) _class_ - Provides named-placeholder string formatting similar to `string.Format`, using `&#123;key&#125;` or `&#123;key:format&#125;` tokens.
- [TimestampJsonConverter](./timestampjsonconverter.md) _class_ - Converts values to/from their underlying JSON representation.

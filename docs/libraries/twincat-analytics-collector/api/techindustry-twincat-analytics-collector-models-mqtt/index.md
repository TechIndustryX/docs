---
title: "TechIndustry.TwinCAT.Analytics.Collector.Models.Mqtt"
---

# TechIndustry.TwinCAT.Analytics.Collector.Models.Mqtt

This namespace contains 10 public API types.

## Types

- [AdditionalSymbolInfo](./additionalsymbolinfo.md) _class_ - Placeholder class for additional per-symbol metadata not yet exposed by the TwinCAT Analytics Services API.
- [DeleteHistoricalDataCmd](./deletehistoricaldatacmd.md) _class_ - MQTT command payload requesting deletion of historical recording data from TwinCAT Analytics Services.
- [GetHistoricalDataCmd](./gethistoricaldatacmd.md) _class_ - MQTT command payload requesting a historical data export from TwinCAT Analytics Services.
- [Record](./record.md) _class_ - Describes a single data record within a TwinCAT Analytics Services recording.
- [Recording](./recording.md) _class_ - Represents a completed recording run with start time, status, and associated record metadata.
- [ServicesRecordDataDesc](./servicesrecorddatadesc.md) _class_ - Top-level MQTT response payload containing a list of completed recordings from TwinCAT Analytics Services.
- [StreamBinTxDesc](./streambintxdesc.md) _class_ - Top-level descriptor of a TwinCAT Analytics binary streaming topic, containing stream metadata and a list of recording segments.
- [StreamBinTxDescRecord](./streambintxdescrecord.md) _class_ - Describes a single recording segment within a and implements .
- [Symbol](./symbol.md) _class_ - Describes the layout of a single TwinCAT symbol: its name, base type, and memory layout within a binary sample buffer.
- [Topic](./topic.md) _struct_ - An immutable, case-insensitive MQTT topic path that supports segment-based comparison and composition operations.

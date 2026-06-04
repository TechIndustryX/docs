---
title: "HsdsOptions"
---

# HsdsOptions

_public class_

Namespace: `TechIndustry.TwinCAT.Analytics.Collector.Hsds`

Source: `TechIndustry.TwinCAT.Analytics.Collector.Hsds/HsdsOptions.cs`

## Summary

Configuration options for the HSDS (Highly Scalable Data Service) storage backend.

## Properties

### Default

_property_

```csharp
HsdsRecordOptions Default
```

Gets or sets the default record storage options applied when no record-specific override exists.

### Domain

_property_

```csharp
string Domain
```

Gets or sets the HSDS domain root path under which all datasets are stored.

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

### Password

_property_

```csharp
string Password
```

Gets or sets the password for authenticating with the HSDS server.

### Records

_property_

```csharp
Dictionary<string,HsdsRecordOptions> Records
```

Gets or sets per-record storage option overrides, keyed by record name.

### Uri

_property_

```csharp
Uri Uri
```

Gets or sets the base URI of the HSDS server.

### Username

_property_

```csharp
string Username
```

Gets or sets the username for authenticating with the HSDS server.


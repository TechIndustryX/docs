---
title: HSDS Storage
---

# HSDS Storage

## Scenario

Persist historical TwinCAT Analytics samples to HSDS so they can be browsed by domain, stream, dataset and time range.

## Configuration

```json title="appsettings.json"
{
  "Storage": "Hsds",
  "Hsds": {
    "Uri": "https://hsds.example.local/",
    "Username": "hsds-writer",
    "Password": "<set from secret store>",
    "Domain": "/home/line-a-history.h5",
    "RootPath": "TwinCAT/Analytics"
  }
}
```

## Complete Host

```csharp
app.Services.Configure<HsdsOptions>(app.Configuration.GetSection("Hsds"));
app.Services.AddHsdsStorage(app.Configuration.GetValue<Uri>("Hsds:Uri")!);
```

## Step By Step

1. Set `Storage` to `Hsds`.
2. Configure HSDS endpoint, domain and root path.
3. Store credentials in deployment secrets.
4. Start the collector.
5. Download a historical range.
6. Confirm groups and datasets under the configured root path.
7. Query a dataset range to validate values.

## Validation

Use the HSDS client to read back a dataset:

```csharp
var dataset = await hsds.GetDatasetAsync("TwinCAT/Analytics/press-01/temperature");
var values = await hsds.GetDatasetValuesAsync<double>(dataset.Id, 0..100);
Console.WriteLine(values.Length);
```

## When To Use

Choose HSDS when users need HDF5-style domain organization and direct range reads from applications.

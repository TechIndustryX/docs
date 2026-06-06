---
title: Groups and Attributes
---

# Groups and Attributes

## Scenario

Organize industrial data in a hierarchical structure and attach metadata to groups.

## Source Pattern

The console sample exercises `EnsureGroupAsync`, `GetGroupAttributeAsync`, `SetGroupAttributeAsync` and `DeleteGroupAttributeAsync`.

## Steps

1. Normalize the target path with `H5Path` or a string path.
2. Ensure all intermediate groups exist.
3. Write metadata attributes to the leaf group.
4. Read attributes back when a downstream process needs context.
5. Delete obsolete attributes explicitly.

## Example

```csharp
var group = await hsds.EnsureGroupAsync("Factory/LineA/Station01");

await hsds.SetGroupAttributeAsync(group, "asset", "station-01");
await hsds.SetGroupAttributeAsync(group, "line", "A");

var asset = await hsds.GetGroupAttributeAsync(group, "asset");
```

## Expected Result

The HSDS domain contains a predictable group path with metadata that can be reused by data collection, analytics or reporting jobs.


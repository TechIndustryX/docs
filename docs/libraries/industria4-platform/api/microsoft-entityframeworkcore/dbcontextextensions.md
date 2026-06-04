---
title: "DbContextExtensions"
---

# DbContextExtensions

_public class_

Namespace: `Microsoft.EntityFrameworkCore`

Source: `src/Shared/EntityFramework/DbContextExtensions.cs`

## Summary

Extension methods for that add rolling backup support.

## Methods

### BackupAsync

_method_

```csharp
Task BackupAsync(this DbContext context,bool overwriteToday = false,int maxRollingFile = 7)
```

Creates a rolling backup of the current SQLite database file. The whose underlying SQLite database is backed up. When `true`, an existing backup for today is overwritten. The maximum number of dated backup files to keep; older files are deleted.


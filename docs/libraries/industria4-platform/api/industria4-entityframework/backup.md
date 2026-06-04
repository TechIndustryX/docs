---
title: "Backup<T>"
---

# Backup&lt;T&gt;

_public class_

Namespace: `Industria4.EntityFramework`

Source: `src/Shared/EntityFramework/Backup.cs`

## Summary

Manages scheduled SQLite database backups for a given type. The type to back up.

## Constructors

### Backup

_constructor_

```csharp
Backup(IServiceProvider serviceProvider,ILogger<Backup<T>> logger)
```

Initialises a new instance using the provided service provider and logger. The service provider used to resolve scoped `T` instances. The logger for backup operations.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

### ScheduleBackup

_method_

```csharp
void ScheduleBackup(DateTime startDate,TimeSpan interval,int maxRollingFile = 7)
```

Schedules a recurring backup starting from the specified date at the given interval. The earliest date at which the first backup should occur. The time between backups; must be at least one minute. The maximum number of rolling backup files to retain.

### ScheduleBackup

_method_

```csharp
void ScheduleBackup(TimeSpan interval,int maxRollingFile = 7)
```

Schedules a recurring backup starting from today at the given interval. The time between backups; must be at least one minute. The maximum number of rolling backup files to retain.


---
title: "DataLoggerViewModel"
---

# DataLoggerViewModel

_public class_

Namespace: `Industria4.DataLogger.WebApp.ViewModels`

Source: `src/DataLogger/DataLogger.WebApp/ViewModels/DataLoggerViewModel.cs`

## Summary

View model that drives the DataLogger Blazor page, querying InfluxDB and presenting paginated measurement data.

## Constructors

### DataLoggerViewModel

_constructor_

```csharp
DataLoggerViewModel(IOptions<DataLoggerOptions> options,ILoadingService loadingService,NavigationManager navigationManager,ILanguageContext languageContext)
```

Initializes a new .

## Properties

### CurrentPage

_property_

```csharp
int CurrentPage
```

Gets the zero-based index of the currently displayed page.

### Fields

_property_

```csharp
List<Field> Fields
```

Gets the list of queryable fields available for the current measurement.

### Measurement

_property_

```csharp
string Measurement
```

Gets or sets the name of the active InfluxDB measurement.

### Pages

_property_

```csharp
int Pages
```

Gets the total number of pages for the current query result.

## Methods

### ChangeSortingAsync

_method_

```csharp
Task ChangeSortingAsync(string field)
```

Changes the sort field and reloads the data, toggling sort direction if the same field is selected again.

### Dispose

_method_

```csharp
void Dispose()
```

### GoToNextPageAsync

_method_

```csharp
Task GoToNextPageAsync()
```

Navigates to the next page and reloads the data.

### GoToPageAsync

_method_

```csharp
Task GoToPageAsync(int page)
```

Navigates to the specified page index and reloads the data.

### GoToPreviousPageAsync

_method_

```csharp
Task GoToPreviousPageAsync()
```

Navigates to the previous page and reloads the data.

### LoadAsync

_method_

```csharp
Task LoadAsync(string measurement)
```

Loads the measurement with the given name, navigating to the first available measurement if `measurement` is `null`.


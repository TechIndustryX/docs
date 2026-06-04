---
title: "RestClient"
---

# RestClient

_public class_

Namespace: `Industria4.Http`

Source: `src/Shared/Http/RestClient.cs`

## Summary

HTTP client wrapper that builds OData query strings from LINQ expressions and performs CRUD operations against a REST API.

## Constructors

### RestClient

_constructor_

```csharp
RestClient(HttpClient client)
```

Initialises a new instance wrapping the given . The underlying HTTP client used to send requests.

## Properties

### InnerClient

_property_

```csharp
HttpClient InnerClient
```

Gets the underlying used to send HTTP requests.

### JsonSerializerSettings

_property_

```csharp
JsonSerializerSettings JsonSerializerSettings
```

Gets the JSON serialiser settings used when deserialising response bodies.

## Methods

### DeleteAsync

_method_

```csharp
Task DeleteAsync(Uri uri,CancellationToken token = default)
```

Execute a Delete call to REST WS CancellationToken

### DeleteAsync

_method_

```csharp
Task DeleteAsync<T>(Uri uri,T entity,CancellationToken token = default)
```

Execute a Delete call to REST WS by Entity as parameter Entity to delete CancellationToken

### GetAsync

_method_

```csharp
Task<T> GetAsync<T>(Uri uri,CancellationToken token = default)
```

Execute a GET call to REST WS

### GetAsync

_method_

```csharp
Task<TList> GetAsync<T,TList,TResult>(Uri uri,GetRequest<T,TResult> request,CancellationToken token = default)
```

Get a IReadOnlyList of entity domain class quering by razor component Es. await XXAgent.GetAsync(uri, q =&gt; q.Take(5).Select(r =&gt; new &#123; r.Id &#125;), CancellationToken.None); CancellationToken IReadOnlyList

### PostAsync

_method_

```csharp
Task<T> PostAsync<T>(Uri uri,T entity,CancellationToken token = default)
```

Execute a Post call to REST WS (Add) CancellationToken

### PostAsync

_method_

```csharp
Task<TResult> PostAsync<T,TResult>(Uri uri,T entity,CancellationToken token = default)
```

Execute a Post call to REST WS (Add) CancellationToken

### PutAsync

_method_

```csharp
Task<T> PutAsync<T>(Uri uri,T entity,CancellationToken token = default)
```

Execute a Put call to REST WS (Update) CancellationToken

### PutAsync

_method_

```csharp
Task<TResult> PutAsync<T,TResult>(Uri uri,T entity,CancellationToken token = default)
```

Execute a Put call to REST WS (Update) CancellationToken


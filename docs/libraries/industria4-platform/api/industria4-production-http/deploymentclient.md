---
title: "DeploymentClient"
---

# DeploymentClient

_public class_

Namespace: `Industria4.Production.Http`

Source: `src/Production/Production.Http/DeploymentClient.cs`

## Summary

HTTP client for querying and managing deployments via the Production REST API.

## Constructors

### DeploymentClient

_constructor_

```csharp
DeploymentClient(RestClient restClient,IOptions<HttpProductionOptions> options)
```

Initializes a new . The underlying REST client. Options containing the service base URI.

## Properties

### Uri

_property_

```csharp
Uri Uri
```

Gets or sets the base URI for deployment endpoints.

## Methods

### AddAsync

_method_

```csharp
Task AddAsync(AddDeploymentCommand command,CancellationToken token = default)
```

Creates a new deployment.

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the deployment with the specified identifier.

### GetAsync

_method_

```csharp
Task<DomainModel.Deployment.Deployment> GetAsync(string id,CancellationToken token = default)
```

Retrieves the full domain deployment for the given identifier.

### UpdateAsync

_method_

```csharp
Task UpdateAsync(UpdateDeploymentCommand command,CancellationToken token = default)
```

Updates an existing deployment.


---
title: Standardized API and OData
---

# Standardized API and OData

## Scenario

Create a platform API that exposes read endpoints with OData query support, command endpoints through the CQRS gateway and a typed HTTP client for frontend modules.

The reference pattern is `WorkorderController` plus `WorkOrderClient`.

## Server Startup

```csharp title="Startup.cs"
public void ConfigureServices(IServiceCollection services)
{
    services.AddHttpContextAccessor();
    services.AddCorrelation();

    services.AddMyFeatureEntityFramework(options =>
    {
        var connectionString = Environment.ExpandEnvironmentVariables(
            Configuration.GetConnectionString("MyFeature"));
        options.UseSqlServer(connectionString);
    });

    services.AddServiceBus(bus =>
    {
        bus.AddMyFeatureCommandsRoute();
        bus.AddMyFeatureHandlers();
        bus.UseMyFeatureQueue();
    });

    services.AddControllers()
        .AddCqrsGateway(options =>
        {
            options.BasePath = "/v1";
            options.CqrsAssemblies.Add(typeof(AddMyItemCommand).Assembly);
        })
        .AddODataSupport()
        .AddNewtonsoftJson(options =>
            options.SerializerSettings.ConfigureForCqrs().ConfigureForOData());

    services.ConfigurePolicyOptions(Configuration.GetSection("Policies"));
    services.AddIndustria4Security(Configuration);
}

public void Configure(IApplicationBuilder app)
{
    app.UseRouting();
    app.UseAuthentication();
    app.UseAuthorization();
    app.UseEndpoints(endpoints => endpoints.MapControllers());
}
```

## OData Read Controller

```csharp title="Controllers/MyItemController.cs"
using Industria4.DataAccessObject;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Route("v1/[controller]")]
[ApiController]
public sealed class MyItemController : Controller
{
    [ODataPaging]
    [HttpGet]
    [Authorize("MyFeature.Items")]
    public IQueryable<MyItemRead> Get(
        [FromServices] IDataAccessObject<MyItemRead> data)
    {
        return data;
    }

    [HttpGet("{id}")]
    [Authorize("MyFeature.Item")]
    public async Task<ActionResult<MyItem>> GetSingle(
        string id,
        [FromServices] IRepository<MyItem> repository)
    {
        var item = await repository.GetAsync(id);
        if (item == null) return NotFound();

        return Ok(item);
    }
}
```

## Typed HTTP Client

```csharp title="MyItemClient.cs"
using Industria4.Http;
using Newtonsoft.Json;

public sealed class MyItemClient
{
    private readonly RestClient _restClient;
    private readonly Uri _uri;

    public MyItemClient(RestClient restClient, IOptions<HttpMyFeatureOptions> options)
    {
        _restClient = restClient;
        _uri = new Uri(options.Value.MyFeature, "v1/myitem");
        _restClient.JsonSerializerSettings.ConfigureForCqrs();
    }

    public Task<CountResult<MyItemRead>> GetAsync(
        Func<IQueryable<MyItemRead>, IQueryable<MyItemRead>> queryFactory,
        CancellationToken token = default)
    {
        var request = new GetRequest<MyItemRead>
        {
            WithCount = true,
            QueryFactory = queryFactory
        };

        return _restClient.GetAsync(_uri, request, token);
    }

    public Task<MyItem> GetAsync(string id, CancellationToken token = default)
    {
        return _restClient.GetAsync<MyItem>(
            new Uri($"{_uri}/{id}", UriKind.RelativeOrAbsolute),
            token);
    }

    public Task AddAsync(AddMyItemCommand command, CancellationToken token = default)
    {
        return _restClient.PostAsync<AddMyItemCommand, string>(_uri, command, token);
    }
}
```

## Query From A View Model

```csharp title="MyItemsViewModel.cs"
public sealed class MyItemsViewModel(MyItemClient client)
{
    public IReadOnlyList<MyItemRead> Items { get; private set; } = [];
    public int Count { get; private set; }

    public async Task LoadAsync(string? search, CancellationToken token)
    {
        var result = await client.GetAsync(query =>
        {
            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(x => x.Code.Contains(search));
            }

            return query
                .OrderBy(x => x.Code)
                .Skip(0)
                .Take(50);
        }, token);

        Items = result.Items.ToArray();
        Count = result.Count;
    }
}
```

## Raw OData Examples

```http
GET /v1/myitem?$filter=contains(Code,'PRESS')&$orderby=Code&$top=50&$count=true
```

```http
GET /v1/myitem?$select=Id,Code,State&$filter=State eq 'Ready'
```

## Step By Step

1. Register controllers with `AddCqrsGateway`, `AddODataSupport` and platform JSON settings.
2. Return `IQueryable<ReadModel>` from list endpoints.
3. Add `[ODataPaging]` to queryable endpoints.
4. Protect every endpoint with authorization policies.
5. Use repositories for full domain object endpoints.
6. Create a typed HTTP client in the `*.Http` package.
7. Use `GetRequest<T>` and `CountResult<T>` for queryable list screens.
8. Use command methods for mutations instead of ad-hoc API payloads.

## Validation

The API is platform-compliant when:

- OData `$filter`, `$orderby`, `$top` and `$count` work;
- list endpoints return paged results;
- command endpoints are available under the CQRS gateway base path;
- typed frontend clients can query and mutate without constructing URLs in views;
- OpenAPI still describes non-query endpoints correctly.

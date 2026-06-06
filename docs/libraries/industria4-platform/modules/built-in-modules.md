---
title: Built-In Modules
---

# Built-In Modules

This page describes the built-in modules present in the platform repository and how they are meant to be used.

## Hosting Web App Server

**Project:** `src/Hosting/Hosting.WebApp.Server`  
**Container manifest:** `src/Hosting/Hosting.WebApp.Server/module.json`  
**Package output:** `Industria4.zip`  
**Role:** main web shell and module host.

`Hosting.WebApp.Server` is the process that gives the platform its modular runtime. It registers hosting persistence, module services, HTTP clients, license handling, Razor Pages, SignalR and controllers. Its pipeline serves Blazor files, alternative static files and unknown file types, then exposes module catalog endpoints, package upload endpoints, assembly endpoints, API controllers and the fallback `index.html`.

Use it to:

- open and operate the platform web UI;
- upload and load module packages;
- expose module metadata and assemblies to the client;
- serve static assets from client packages;
- host the SignalR messaging hub at `/hubs/messaging`;
- inspect API documentation through Swagger at `/swagger`.

The build script publishes the self-contained web host and creates `src/build/<configuration>/Industria4.zip`. In Debug it also lowers the Blazor boot debug level and rewrites `blazor.boot.json`.

## Hosting Web App

**Project:** `src/Hosting/Hosting.WebApp`  
**Role:** Blazor client shell.

`Hosting.WebApp` contains the client-side application frame: `App.razor`, `MainLayout`, and platform pages such as module and license views. Other client packages are loaded into this shell and use shared services such as menus, dynamic routing, authorization, localization and component hooks.

Use it as the local frontend host when developing a new `Type: Client` package. Custom frontend modules should be tested through this shell because isolated Blazor pages do not exercise platform routing, menu registration, module loading or `_content/<AssemblyName>` static assets.

## IFrame

**Project:** `src/Hosting/Hosting.WebApp.IFrame`  
**Manifest:** `Name=IFrame`, `Type=Client`, `EntryPoint=Industria4.Hosting.WebApp.IFrame`  
**Container manifest:** `src/Hosting/Hosting.WebApp.IFrame/module.json`

The IFrame client module adds configurable iframe pages to the platform menu. Its default configuration uses the `_IFrame` section: each item defines a URI, icon, order, optional bottom placement and scrolling behavior.

Use it when a platform installation must embed an existing web UI without rewriting it as a native Blazor module. It is also useful for quick diagnostics pages, dashboards or external tools.

Important policy:

- `IFrame.Exit`: controls access to exit/navigation behavior.

## Identity API

**Project:** `src/Identity/Identity.WebApi`  
**Hosting package:** `src/Identity/Identity.WebApi.Hosting`  
**Manifest:** `Name=Identity.WebApi`, default URL `http://*:8004`  
**Container manifest:** `src/Identity/Identity.WebApi/module.json`

Identity API is the authentication and authorization service. It stores users, roles, audit logs and identity client configuration. Other APIs point their `Identity:Authority` to this service and validate tokens against their own audience.

Use it to:

- define users and roles;
- issue tokens for platform clients;
- protect backend APIs through policy configuration;
- provide the shared authority for bounded-context APIs.

Default configuration includes local SQLite storage and sample users intended for local/test environments. Production deployments should override credentials and clients through environment configuration or secrets.

Key policies:

- `Identity.Users`, `Identity.User`, `Identity.User.Save`, `Identity.User.Delete`;
- `Identity.Roles`, `Identity.Role.Save`, `Identity.Role.Delete`;
- `Identity.AuditLogs`.

## Identity Web App

**Project:** `src/Identity/Identity.WebApp`  
**Manifest:** `Name=Identity.WebApp`, `Type=Client`, `EntryPoint=Industria4.Identity.WebApp`  
**Container manifest:** `src/Identity/Identity.WebApp/module.json`

Identity Web App is the frontend for login, user management and role management. Its startup service replaces the default authentication and authorization services with OIDC-based client authentication, configures scopes and registers Identity HTTP clients and view models.

Use it when the platform shell must support:

- sign-in and sign-out;
- user administration;
- role administration;
- role-based policy checks inside the Blazor client.

The module registers `IdentitySectionsProvider`, dynamic routes, `IdentityModule`, `UsersViewModel`, `UserViewModel` and `RolesViewModel`.

## Globalization API

**Project:** `src/Globalization/Globalization.WebApi`  
**Hosting package:** `src/Globalization/Globalization.WebApi.Hosting`  
**Manifest:** `Name=Globalization.WebApi`, default URL `http://*:8003`  
**Container manifest:** `src/Globalization/Globalization.WebApi/module.json`

Globalization API stores unit sets, units and language-related data used by other modules. Its default configuration contains a local SQLite database, Identity authority/audience settings and default metric/imperial unit set examples.

Use it for:

- unit conversion and formatting;
- shared unit-set configuration;
- localized descriptions and language dictionaries;
- backend support for frontend language/unit selectors.

Key policies include `Globalization.Units`, `Globalization.Unit`, `Globalization.Unit.Save`, `Globalization.Unit.Delete`, `Globalization.UnitSets`, `Globalization.UnitSet.Save` and `Globalization.UnitSet.Delete`.

## Globalization Web App

**Project:** `src/Globalization/Globalization.WebApp`  
**Manifest:** `Name=Globalization.WebApp`, `Type=Client`, `EntryPoint=Industria4.Globalization.WebApp`  
**Container manifest:** `src/Globalization/Globalization.WebApp/module.json`

Globalization Web App adds language and unit selectors to the shell header. Its `GlobalizationSectionsProvider` contributes:

- `LanguageSelection` to `Hosting.MainLayout.AppHeader`;
- `UnitSelection` to `Hosting.MainLayout.AppHeader`.

The startup service registers `UnitSelectionViewModel`, `LanguageSelectionViewModel`, `IUnitContext`, `ILanguageContext`, local storage and the typed Globalization HTTP client.

Use it in nearly every user-facing deployment; it is the module that makes the common shell aware of language and unit context.

## Recipes API

**Project:** `src/Recipes/Recipes.WebApi`  
**Hosting package:** `src/Recipes/Recipes.WebApi.Hosting`  
**Manifest:** `Name=Recipes.WebApi`, default URL `http://*:8001`  
**Container manifest:** `src/Recipes/Recipes.WebApi/module.json`

Recipes API manages recipe models, recipes, imports, exports and recipe download/write flows. It also integrates with OPC UA through `Http:OpcUa` so selected recipe parameters can be written to configured nodes.

Use it to:

- define recipe models and parameter structures;
- create and edit recipes;
- import/export models and recipes;
- write recipe values to OPC UA;
- support remote recipes through configured server URIs.

Key policies:

- `Recipes.Models`, `Recipes.Model`, `Recipes.Model.Save`, `Recipes.Model.Delete`;
- `Recipes.Recipes`, `Recipes.Recipe`, `Recipes.Recipe.Save`, `Recipes.Recipe.Clone`, `Recipes.Recipe.Delete`;
- `Recipes.Recipes.Import`, `Recipes.Recipes.Export`, `Recipes.Models.Import`, `Recipes.Models.Export`;
- `Recipes.Recipe.Download`.

## Recipes Web App

**Project:** `src/Recipes/Recipes.WebApp`  
**Manifest:** `Name=Recipes.WebApp`, `Type=Client`, `EntryPoint=Industria4.Recipes.WebApp`  
**Container manifest:** `src/Recipes/Recipes.WebApp/module.json`

Recipes Web App is the Blazor UI for models and recipes. It registers recipe/model pages, view models, localization, policy options and the typed `Recipes` HTTP client. Configuration controls behavior such as move confirmation, remote servers and additional recipe fields.

Use it when operators or engineers need to:

- manage recipe models;
- edit recipes;
- clone/delete recipes;
- import/export recipe data;
- download recipes to OPC UA targets through the backend API.

## MES API

**Project:** `src/Mes/Mes.WebApi`  
**Hosting package:** `src/Mes/Mes.WebApi.Hosting`  
**Manifest:** `Name=Mes.WebApi`, default URL `http://*:8005`  
**Container manifest:** `src/Mes/Mes.WebApi/module.json`

MES API manages work orders, quantities, state transitions, priority and automatic promotion/expiration. Its options include active work-order mode, order number formatting, priority ordering and state automation intervals.

Use it for:

- work-order creation and editing;
- state transitions such as Ready, Running, Suspended, Completed, Aborted or Canceled;
- quantity changes and production progress;
- priority management;
- history/change tracking.

Key policies include `Mes.WorkOrders`, `Mes.WorkOrder`, `Mes.WorkOrders.New`, `Mes.WorkOrder.Save`, `Mes.WorkOrder.Delete`, `Mes.WorkOrder.ChangeState`, `Mes.WorkOrders.AddQuantity`, `Mes.WorkOrders.SetQuantity` and `Mes.WorkOrders.ChangePriority`.

## MES Web App

**Project:** `src/Mes/Mes.WebApp`  
**Manifest:** `Name=Mes.WebApp`, `Type=Client`, `EntryPoint=Industria4.Mes.WebApp`  
**Container manifest:** `src/Mes/Mes.WebApp/module.json`

MES Web App is the frontend for work orders. It registers work-order routes, menu entries, view models and the MES HTTP client. Configuration controls grid columns, default sorting, quantity-change defaults and optional restrictions on state/quantity operations.

Use it for operator-facing work-order screens and state/quantity workflows.

Registered view models include:

- `WorkOrdersViewModel`;
- `WorkOrderViewModel`;
- `ChangesViewModel`.

## MES Recipes

**Project:** `src/Mes/Mes.WebApp.Recipes`  
**Manifest:** `Name=Mes.WebApp.Recipes`, `Type=Client`, `EntryPoint=Industria4.Mes.WebApp.Recipes`

MES Recipes is a client extension that connects the MES work-order page to Recipes. It contributes a `Recipe` component to the `Mes.WorkOrder.InnerGeneral` section. The selected recipe id is stored in work-order metadata as `RecipeId`.

Configuration:

- `Mes:Recipes:RequiresRecipe`: block Ready/Running transitions when no recipe is selected;
- `Mes:Recipes:ShowDownloadButton`: show the recipe download action;
- `Mes:Recipes:ShowSelectButton`: show the selection UI.

Use it when an order cannot be executed without selecting a recipe, or when operators must download the selected recipe from the work-order screen.

## Sequences API

**Project:** `src/Sequences/Sequences.WebApi`  
**Hosting package:** `src/Sequences/Sequences.WebApi.Hosting`  
**Manifest:** `Name=Sequences.WebApi`, default URL `http://*:8006`

Sequences API manages ordered execution queues and can map sequence state and quantities to OPC UA nodes. Its configuration contains queue behavior and an `OpcUa` section for node mapping, credentials and server URI.

Use it for:

- sequence queues;
- quantity done updates;
- priority/state changes;
- optional OPC UA synchronization for current sequence state.

Key policies include `Sequences.Sequences` and `Sequences.Sequence`.

## Sequences Web App

**Project:** `src/Sequences/Sequences.WebApp`  
**Manifest:** `Name=Sequences.WebApp`, `Type=Client`, `EntryPoint=Industria4.Sequences.WebApp`

Sequences Web App is the frontend for sequence operations. It registers sequence UI, HTTP configuration and policies for add, update, delete, reset, toggle, quantity, priority and state changes.

It also contributes `RecipesDialog` to the global `dialogs` section through `SectionsProvider`, allowing recipe-related dialogs to be opened from the sequence workflow.

## OPC UA API

**Project:** `src/OpcUa/OpcUa.WebApi`  
**Hosting package:** `src/OpcUa/OpcUa.WebApi.Hosting`  
**Manifest:** `Name=OpcUa.WebApi`, default URL `http://*:8002`  
**Container manifest:** `src/OpcUa/OpcUa.WebApi/module.json`

OPC UA API manages OPC UA server definitions and read/write operations. It is the backend used by Recipes write flows, DataLogger subscriptions and machine integration modules.

Use it to:

- configure OPC UA servers;
- read nodes;
- write nodes;
- expose controlled OPC UA client operations to other modules;
- host OPC UA middleware extensions.

Key policies:

- `OpcUa.Servers`, `OpcUa.Server`, `OpcUa.Server.Save`, `OpcUa.Server.Delete`;
- `OpcUa.Client.Read`;
- `OpcUa.Client.Write`.

## OPC UA Communication Core

**Project:** `src/OpcUa/OpcUa.Comunication.Core`  
**Manifest:** `Name=OpcUa.Comunication.Core`, `TargetProcessNames=["Industria4.OpcUa.WebApi"]`

OPC UA Communication Core is an in-process extension loaded by `Industria4.OpcUa.WebApi`. It registers the generic OPC UA utility module and configuration for array/metadata node transformations.

Use it when recipe or production data needs generic OPC UA preprocessing before values are read or written.

Because it targets `Industria4.OpcUa.WebApi`, it is not a standalone service. It must be packaged and loaded into the OPC UA API process.

## DataLogger OPC UA

**Project:** `src/DataLogger/DataLogger.OpcUa`  
**Manifest:** `Name=DataLogger.OpcUa`, `TargetProcessNames=["Industria4.OpcUa.WebApi"]`

DataLogger OPC UA is an in-process extension for OPC UA data collection. Its startup registers:

- `DataLoggerModule`;
- `DataLoggerOptions`;
- `DataLoggerService`;
- OPC UA services.

Configuration maps logical measurements to subscription node ids, scan intervals, collected node ids and targets. The default target shape uses an InfluxDB-like URI section under `DataLogger:Targets`.

Use it to collect machine data from OPC UA and send it to configured storage/telemetry targets.

## DataLogger Web App

**Project:** `src/DataLogger/DataLogger.WebApp`  
**Manifest:** `Name=DataLogger.WebApp`, `Type=Client`, `EntryPoint=Industria4.DataLogger.WebApp`

DataLogger Web App is the frontend for viewing configured measurements. It registers `DataLoggerViewModel`, dynamic routes, globalization/localization services, policy options and `DataLoggerModule`.

Configuration controls:

- InfluxDB targets under `DataLogger:InfluxDbs`;
- measurement metadata under `DataLogger:Measurements`;
- localized column labels;
- visual styles and icons for measurement values.

Use it when operators need to inspect collected machine data from the platform UI.

## Production API

**Project:** `src/Production/Production.WebApi`  
**Hosting package:** `src/Production/Production.WebApi.Hosting`  
**Manifest:** `Name=Production.WebApi`, default URL `http://*:8007`  
**Container manifest:** `src/Production/Production.WebApi/module.json`

Production API manages production compositions and deployments. It can talk to Recipes through `Http:Recipes` and stores its data in the `Production` database.

Use it to:

- define production compositions;
- create deployments;
- persist deployment state;
- connect production configuration with recipe data.

Key policies include `Production.Compositions`, `Production.Production`, `Production.Production.Save`, `Production.Production.Delete`, `Production.Deployment`, `Production.Deployment.Save` and `Production.Deployment.Delete`.

## Production Web App

**Project:** `src/Production/Production.WebApp`  
**Manifest:** `Name=Production.WebApp`, `Type=Client`, `EntryPoint=Industria4.Production.WebApp`  
**Container manifest:** `src/Production/Production.WebApp/module.json`

Production Web App is the frontend for compositions and deployments. It registers view models, typed HTTP clients for Production, OPC UA and Recipes, toaster notifications, globalization/localization, policies and dynamic routes.

Use it when engineers or operators must:

- manage production compositions;
- create deployments;
- download deployment data;
- connect production items to recipe and OPC UA flows.

Configuration includes additional fields and `SupportOpcUa`.

## Gateway API

**Project:** `src/Gateway/Gateway.WebApi`  
**Role:** CQRS/OData gateway for selected bounded contexts.

Gateway API exposes command endpoints through `AddCqrsGateway`, enables OData support and configures command routing through the service bus. The current gateway scans OPC UA, Globalization and Recipes CQRS assemblies and exposes them under `/v1`.

Use it when a deployment needs a single command gateway instead of calling each bounded-context API directly.

It performs RabbitMQ dependency checks at startup and exposes Swagger at the root path.

## How To Choose A Template

| Need | Start from |
|---|---|
| New backend API process | `Recipes.WebApi.Hosting` or `Mes.WebApi.Hosting` |
| New Blazor page set | `Recipes.WebApp`, `Mes.WebApp` or `Production.WebApp` |
| Add UI to an existing built-in screen | `Mes.WebApp.Recipes` or the Silver-style `ISectionsProvider` pattern |
| Add a machine-specific OPC UA transform | `OpcUa.Comunication.Core`, `DataLogger.OpcUa` or the Silver OPC UA module pattern |
| Embed an external web page | `Hosting.WebApp.IFrame` |
| Add shared shell header controls | `Globalization.WebApp` |
| Add identity-aware UI | `Identity.WebApp` |

## Built-In Ports

| Service | Default URL |
|---|---|
| Recipes API | `http://localhost:8001` |
| OPC UA API | `http://localhost:8002` |
| Globalization API | `http://localhost:8003` |
| Identity API | `http://localhost:8004` |
| MES API | `http://localhost:8005` |
| Sequences API | `http://localhost:8006` |
| Production API | `http://localhost:8007` |

These defaults are local-development defaults. Override them with package configuration, environment variables or deployment settings in real environments.

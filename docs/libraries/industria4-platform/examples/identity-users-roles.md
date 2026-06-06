---
title: Identity Users and Roles
---

# Identity Users and Roles

## Scenario

Use the Identity module to create or update users, roles, claims and audit information.

## Source Pattern

`Identity.WebApi.Startup` wires IdentityServer, ASP.NET Identity, policies, CQRS routes and storage. `IdentityHandler` handles `AddOrUpdateUserCommand`, role creation, claim synchronization and audit events.

## Steps

1. Configure the Identity module connection string and authority.
2. Route identity commands through the CQRS bus.
3. Send an add/update user command with roles and claims.
4. Let the handler create missing roles and synchronize claims.
5. Consume validation or completion events from the command flow.

## Expected Result

Identity changes are applied through the same CQRS and event pipeline used by the rest of the platform.


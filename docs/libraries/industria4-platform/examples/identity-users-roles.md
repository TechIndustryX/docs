---
title: Identity Users Roles
---

# Identity Users Roles

## Scenario

Configure users and roles so operators, supervisors and administrators see the right functions in web apps and APIs.

## Role Model

```json title="identity-seed.json"
{
  "roles": [
    { "name": "Operator", "permissions": ["production.read", "recipes.read"] },
    { "name": "Supervisor", "permissions": ["production.read", "recipes.write", "orders.write"] },
    { "name": "Administrator", "permissions": ["*"] }
  ],
  "users": [
    { "userName": "operator01", "roles": ["Operator"] },
    { "userName": "shift-lead", "roles": ["Supervisor"] }
  ]
}
```

## Authorization Pattern

```csharp
[Authorize(Roles = "Supervisor,Administrator")]
public async Task<IActionResult> ReleaseOrder([FromBody] ReleaseOrderCommand command)
{
    await commandBus.Send(command);
    return Accepted();
}
```

## Step By Step

1. Define roles from real plant responsibilities.
2. Map permissions to screens, API operations and commands.
3. Seed default roles during environment setup.
4. Assign users to roles through the identity module.
5. Protect commands and routes with role checks.
6. Test every role with a dedicated user.

## Validation

An operator should be able to read production status but not release orders. A supervisor should be able to release orders but not change platform administration settings.

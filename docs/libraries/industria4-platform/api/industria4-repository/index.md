---
title: "Industria4.Repository"
---

# Industria4.Repository

This namespace contains 10 public API types.

## Types

- [IMultiRepository](./imultirepository.md) _interface_ - Represents the repository pattern for generic objects
- [IMultiRepository&lt;T&gt;](./imultirepository-2.md) _interface_ - Represents the repository pattern for a specific type
- [IRepository](./irepository.md) _interface_ - Represents the repository pattern for generic objects
- [IRepository&lt;T&gt;](./irepository-2.md) _interface_ - Represents the repository pattern for a specific type
- [IRepositoryTransaction](./irepositorytransaction.md) _interface_ - Represents an active database transaction that can be committed or rolled back.
- [ITransactionalRepository](./itransactionalrepository.md) _interface_ - Extends a repository with the ability to open explicit database transactions.
- [MultiRepository&lt;T&gt;](./multirepository.md) _class_ - Base implementation of repository which takes care of casting object to a specific type
- [Repository&lt;T&gt;](./repository.md) _class_ - Base implementation of repository which takes care of casting object to a specific type
- [RepositoryException](./repositoryexception.md) _class_ - Exception thrown when a repository operation fails due to a conflict, concurrency violation, or entity-not-found condition.
- [RepositoryExtensions](./repositoryextensions.md) _class_ - Extension methods for and its typed variants.

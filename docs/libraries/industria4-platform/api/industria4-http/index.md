---
title: "Industria4.Http"
---

# Industria4.Http

This namespace contains 8 public API types.

## Types

- [CommandResult](./commandresult.md) _class_ - Represents the result returned by the server after dispatching a command, including validation results.
- [CountResult&lt;T&gt;](./countresult.md) _class_ - Carries a paged result set together with the total item count before paging. The element type.
- [GetRequest&lt;T, TResult&gt;](./getrequest.md) _class_ - Encapsulates a GET query, pairing a projection factory with an optional total-count request. The source entity type. The projected result type.
- [GetRequest&lt;T&gt;](./getrequest-2.md) _class_ - Convenience variant of where the source and result types are the same. The entity type.
- [HttpValidationException](./httpvalidationexception.md) _class_ - Exception thrown when an HTTP command fails validation, carrying the full .
- [JsonContent](./jsoncontent.md) _class_ - Provides an implementation that serialises an object to JSON using the supplied .
- [ODataUriFactory](./odataurifactory.md) _class_ - Builds OData query URI strings from LINQ expressions so that queries can be sent to an OData-compliant HTTP endpoint.
- [RestClient](./restclient.md) _class_ - HTTP client wrapper that builds OData query strings from LINQ expressions and performs CRUD operations against a REST API.

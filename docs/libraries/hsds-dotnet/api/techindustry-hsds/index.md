---
title: "TechIndustry.Hsds"
---

# TechIndustry.Hsds

This namespace contains 9 public API types.

## Types

- [BinaryExtensions](./binaryextensions.md) _class_
- [DatasetInfo](./datasetinfo.md) _record_ - Holds the resolved path, HSDS identifier, and parent group ID of an HDF5 dataset. The HDF5 path of the dataset. The HSDS dataset identifier, or when the dataset does not exist. The HSDS group identifier of the parent, or when the parent was not found.
- [GetDomainsItemResponse](./getdomainsitemresponse.md) _record_ - Describes a single HSDS domain entry within a . The domain name. The root group ID of the domain. The owner of the domain. The domain class identifier. Unix epoch timestamp (seconds) when the domain was created. Unix epoch timestamp (seconds) of the last modification.
- [GetDomainsResponse](./getdomainsresponse.md) _record_ - Response returned by the HSDS `GET /domains` endpoint listing available domains. The array of domain descriptors returned by the server.
- [GroupInfo](./groupinfo.md) _record_ - Holds the resolved path, HSDS identifier, and parent group ID of an HDF5 group. The HDF5 path of the group. The HSDS group identifier, or when the group does not exist. The HSDS group identifier of the parent, or when the parent was not found.
- [H5Path](./h5path.md) _struct_ - Represents an immutable HDF5 hierarchical path composed of one or more name segments. Paths are normalized on construction and compared case-insensitively.
- [HttpClientExtensions](./httpclientextensions.md) _class_
- [ObjectExtensions](./objectextensions.md) _class_ - Extension methods for converting .NET values to HSDS/HDF5-compatible representations.
- [SimpleHsdsClient](./simplehsdsclient.md) _class_ - High-level HSDS client that wraps the generated with convenience operations for domains, groups, datasets, attributes, and binary values.

---
title: "System.Resources"
---

# System.Resources

This namespace contains 12 public API types.

## Types

- [AssemblyNamesTypeResolutionService](./assemblynamestyperesolutionservice.md) _class_
- [Converter](./converter.md) _class_ - Type converter for that converts to and from a string representation.
- [DataNodeInfo](./datanodeinfo.md) _class_
- [IAliasResolver](./ialiasresolver.md) _interface_ - Summary of IAliasResolver.
- [MultitargetUtil](./multitargetutil.md) _class_ - Helper class supporting Multitarget type assembly qualified name resolution for ResX API. Note: this file is compiled into different assemblies (runtime and VSIP assemblies ...)
- [ResXDataNode](./resxdatanode.md) _class_ - Represents a resource data node in a .resx file, holding either a value object or a .
- [ResXFileRef](./resxfileref.md) _class_ - ResX File Reference class. This allows the developer to represent a link to an external resource. When the resource manager asks for the value of the resource item, the external resource is loaded.
- [ResXNullRef](./resxnullref.md) _class_ - ResX Null Reference class. This class allows ResX to store null values. It is a placeholder that is written into the file. On read, it is replaced with null.
- [ResXResourceReader](./resxresourcereader.md) _class_ - ResX resource reader.
- [ResXResourceSet](./resxresourceset.md) _class_ - ResX resource set.
- [ResXResourceWriter](./resxresourcewriter.md) _class_ - ResX resource writer. See the text in "ResourceSchema" for more information.
- [ResXSerializationBinder](./resxserializationbinder.md) _class_

---
title: "MultitargetUtil"
---

# MultitargetUtil

_internal class_

Namespace: `System.Resources`

Source: `src/Shared/Globalization/Resources/MultitargetUtil.cs`

## Summary

Helper class supporting Multitarget type assembly qualified name resolution for ResX API. Note: this file is compiled into different assemblies (runtime and VSIP assemblies ...)

## Methods

### GetAssemblyQualifiedName

_method_

```csharp
string GetAssemblyQualifiedName(Type type,Func<Type,string> typeNameConverter)
```

This method gets assembly info for the corresponding type. If the delegate is provided it is used to get this information.


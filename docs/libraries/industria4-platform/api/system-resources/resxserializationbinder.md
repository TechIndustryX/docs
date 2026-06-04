---
title: "ResXSerializationBinder"
---

# ResXSerializationBinder

_internal class_

Namespace: `System.Resources`

Source: `src/Shared/Globalization/Resources/ResXDataNode.cs`

## Constructors

### ResXSerializationBinder

_constructor_

```csharp
ResXSerializationBinder(Func<Type,string> typeNameConverter)
```

### ResXSerializationBinder

_constructor_

```csharp
ResXSerializationBinder(ITypeResolutionService typeResolver)
```

## Methods

### BindToName

_method_

```csharp
void BindToName(Type serializedType,out string assemblyName,out string typeName)
```

### BindToType

_method_

```csharp
Type BindToType(string assemblyName,string typeName)
```


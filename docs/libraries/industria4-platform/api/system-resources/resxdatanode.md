---
title: "ResXDataNode"
---

# ResXDataNode

_public class_

Namespace: `System.Resources`

Source: `src/Shared/Globalization/Resources/ResXDataNode.cs`

## Summary

Represents a resource data node in a .resx file, holding either a value object or a .

## Constructors

### ResXDataNode

_constructor_

```csharp
ResXDataNode(DataNodeInfo nodeInfo,string basePath)
```

### ResXDataNode

_constructor_

```csharp
ResXDataNode(string name,object value,Func<Type,string> typeNameConverter)
```

Initialises a new instance of with the specified name, value, and type name converter. The name of the resource node. The resource value object. A callback that converts a to its assembly-qualified name, used for multi-targeting.

### ResXDataNode

_constructor_

```csharp
ResXDataNode(string name,object value)
```

Initialises a new instance of with the specified name and value. The name of the resource node. The resource value object.

### ResXDataNode

_constructor_

```csharp
ResXDataNode(string name,ResXFileRef fileRef,Func<Type,string> typeNameConverter)
```

Initialises a new instance of that references an external file via a with a type name converter. The name of the resource node. The file reference describing the external resource. A callback that converts a to its assembly-qualified name, used for multi-targeting.

### ResXDataNode

_constructor_

```csharp
ResXDataNode(string name,ResXFileRef fileRef)
```

Initialises a new instance of that references an external file via a . The name of the resource node. The file reference describing the external resource.

## Methods

### DeepClone

_method_

```csharp
ResXDataNode DeepClone()
```

### GetDataNodeInfo

_method_

```csharp
DataNodeInfo GetDataNodeInfo()
```

### GetNodePosition

_method_

```csharp
Point GetNodePosition()
```

Might return the position in the resx file of the current node, if known otherwise, will return Point(0,0) since point is a struct

### GetValue

_method_

```csharp
object GetValue(AssemblyName[] names)
```

Get the value contained in this datanode

### GetValue

_method_

```csharp
object GetValue(ITypeResolutionService typeResolver)
```

Get the value contained in this datanode

### GetValueTypeName

_method_

```csharp
string GetValueTypeName(AssemblyName[] names)
```

Get the FQ type name for this datanode

### GetValueTypeName

_method_

```csharp
string GetValueTypeName(ITypeResolutionService typeResolver)
```

Get the FQ type name for this datanode. We return typeof(object) for ResXNullRef


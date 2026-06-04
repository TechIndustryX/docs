---
title: "ResXFileRef"
---

# ResXFileRef

_public class_

Namespace: `System.Resources`

Source: `src/Shared/Globalization/Resources/ResXFileRef.cs`

## Summary

ResX File Reference class. This allows the developer to represent a link to an external resource. When the resource manager asks for the value of the resource item, the external resource is loaded.

## Constructors

### ResXFileRef

_constructor_

```csharp
ResXFileRef(string fileName,string typeName,Encoding textFileEncoding)
```

Creates a new ResXFileRef that points to the specified file. The type refered to by typeName must support a constructor that accepts a System.IO.Stream as a parameter.

### ResXFileRef

_constructor_

```csharp
ResXFileRef(string fileName,string typeName)
```

Creates a new ResXFileRef that points to the specified file. The type refered to by typeName must support a constructor that accepts a System.IO.Stream as a parameter.

## Methods

### Clone

_method_

```csharp
ResXFileRef Clone()
```

### MakeFilePathRelative

_method_

```csharp
void MakeFilePathRelative(string basePath)
```

### ToString

_method_

```csharp
string ToString()
```


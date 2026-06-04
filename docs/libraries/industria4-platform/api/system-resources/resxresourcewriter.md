---
title: "ResXResourceWriter"
---

# ResXResourceWriter

_public class_

Namespace: `System.Resources`

Source: `src/Shared/Globalization/Resources/ResXResourceWriter.cs`

## Summary

ResX resource writer. See the text in "ResourceSchema" for more information.

## Constructors

### ResXResourceWriter

_constructor_

```csharp
ResXResourceWriter(Stream stream,Func<Type,string> typeNameConverter)
```

Initialises a new instance of that will write to the specified stream using a custom type name converter. The to write the .resx content to. A callback that converts a to its assembly-qualified name for multi-targeting.

### ResXResourceWriter

_constructor_

```csharp
ResXResourceWriter(Stream stream)
```

Creates a new ResXResourceWriter that will write to the specified stream.

### ResXResourceWriter

_constructor_

```csharp
ResXResourceWriter(string fileName,Func<Type,string> typeNameConverter)
```

Initialises a new instance of that will write to the specified file using a custom type name converter. The path to the output .resx file. A callback that converts a to its assembly-qualified name for multi-targeting.

### ResXResourceWriter

_constructor_

```csharp
ResXResourceWriter(string fileName)
```

Creates a new ResXResourceWriter that will write to the specified file.

### ResXResourceWriter

_constructor_

```csharp
ResXResourceWriter(TextWriter textWriter,Func<Type,string> typeNameConverter)
```

Initialises a new instance of that will write to the specified using a custom type name converter. The to write the .resx content to. A callback that converts a to its assembly-qualified name for multi-targeting.

### ResXResourceWriter

_constructor_

```csharp
ResXResourceWriter(TextWriter textWriter)
```

Creates a new ResXResourceWriter that will write to the specified TextWriter.

## Properties

### BasePath

_property_

```csharp
string BasePath
```

Base Path for ResXFileRefs.

## Methods

### AddAlias

_method_

```csharp
void AddAlias(string aliasName,AssemblyName assemblyName)
```

Adds aliases to the resource file...

### AddMetadata

_method_

```csharp
void AddMetadata(string name,byte[] value)
```

Adds the given value to the collection of metadata. These name/value pairs will be emitted to the elements in the .resx file.

### AddMetadata

_method_

```csharp
void AddMetadata(string name,object value)
```

Adds the given value to the collection of metadata. These name/value pairs will be emitted to the elements in the .resx file.

### AddMetadata

_method_

```csharp
void AddMetadata(string name,string value)
```

Adds the given value to the collection of metadata. These name/value pairs will be emitted to the elements in the .resx file.

### AddResource

_method_

```csharp
void AddResource(ResXDataNode node)
```

Adds a string resource to the resources.

### AddResource

_method_

```csharp
void AddResource(string name,byte[] value)
```

Adds a blob resource to the resources. add resource.

### AddResource

_method_

```csharp
void AddResource(string name,object value)
```

Adds a resource to the resources. If the resource is a string, it will be saved that way, otherwise it will be serialized and stored as in binary. add resource.

### AddResource

_method_

```csharp
void AddResource(string name,string value)
```

Adds a string resource to the resources. add resource.

### Close

_method_

```csharp
void Close()
```

Closes any files or streams locked by the writer. close.

### Dispose

_method_

```csharp
void Dispose()
```

### Dispose

_method_

```csharp
void Dispose(bool disposing)
```

### Generate

_method_

```csharp
void Generate()
```

Writes the resources out to the file or stream. generate.


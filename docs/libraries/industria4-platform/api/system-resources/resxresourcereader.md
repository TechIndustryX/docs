---
title: "ResXResourceReader"
---

# ResXResourceReader

_public class_

Namespace: `System.Resources`

Source: `src/Shared/Globalization/Resources/ResXResourceReader.cs`

## Summary

ResX resource reader.

## Constructors

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(Stream stream,AssemblyName[] assemblyNames,IAliasResolver aliasResolver)
```

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(Stream stream,AssemblyName[] assemblyNames)
```

Initialises a new instance of that reads from the specified using the given assembly names. The providing the .resx content. An array of objects used to resolve types in the resource file.

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(Stream stream,ITypeResolutionService typeResolver,IAliasResolver aliasResolver)
```

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(Stream stream,ITypeResolutionService typeResolver)
```

Initialises a new instance of that reads from the specified using the given type resolver. The providing the .resx content. The type resolver used to locate types referenced in the resource file.

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(Stream stream)
```

Initialises a new instance of that reads from the specified . The providing the .resx content.

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(string fileName,AssemblyName[] assemblyNames,IAliasResolver aliasResolver)
```

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(string fileName,AssemblyName[] assemblyNames)
```

Initialises a new instance of that reads from the specified file using the given assembly names. The path to the .resx resource file. An array of objects used to resolve types in the resource file.

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(string fileName,ITypeResolutionService typeResolver,IAliasResolver aliasResolver)
```

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(string fileName,ITypeResolutionService typeResolver)
```

Initialises a new instance of that reads from the specified file using the given type resolver. The path to the .resx resource file. The type resolver used to locate types referenced in the resource file.

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(string fileName)
```

Initialises a new instance of that reads from the specified file. The path to the .resx resource file.

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(TextReader reader,AssemblyName[] assemblyNames,IAliasResolver aliasResolver)
```

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(TextReader reader,AssemblyName[] assemblyNames)
```

Initialises a new instance of that reads from the specified using the given assembly names. The providing the .resx content. An array of objects used to resolve types in the resource file.

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(TextReader reader,ITypeResolutionService typeResolver,IAliasResolver aliasResolver)
```

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(TextReader reader,ITypeResolutionService typeResolver)
```

Initialises a new instance of that reads from the specified using the given type resolver. The providing the .resx content. The type resolver used to locate types referenced in the resource file.

### ResXResourceReader

_constructor_

```csharp
ResXResourceReader(TextReader reader)
```

Initialises a new instance of that reads from the specified . The providing the .resx content.

## Methods

### Close

_method_

```csharp
void Close()
```

Closes and files or streams being used by the reader. Closes any files or streams being used by the reader.

### Dispose

_method_

```csharp
void Dispose(bool disposing)
```

### FromFileContents

_method_

```csharp
ResXResourceReader FromFileContents(string fileContents,AssemblyName[] assemblyNames)
```

Creates a reader with the specified file contents.

### FromFileContents

_method_

```csharp
ResXResourceReader FromFileContents(string fileContents,ITypeResolutionService typeResolver)
```

Creates a reader with the specified file contents.

### FromFileContents

_method_

```csharp
ResXResourceReader FromFileContents(string fileContents)
```

Creates a reader with the specified file contents.

### GetEnumerator

_method_

```csharp
IDictionaryEnumerator GetEnumerator()
```

### GetMetadataEnumerator

_method_

```csharp
IDictionaryEnumerator GetMetadataEnumerator()
```

Returns a dictionary enumerator that can be used to enumerate the elements in the .resx file.


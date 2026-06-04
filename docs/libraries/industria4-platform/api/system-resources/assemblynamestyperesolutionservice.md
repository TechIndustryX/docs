---
title: "AssemblyNamesTypeResolutionService"
---

# AssemblyNamesTypeResolutionService

_internal class_

Namespace: `System.Resources`

Source: `src/Shared/Globalization/Resources/ResXDataNode.cs`

## Constructors

### AssemblyNamesTypeResolutionService

_constructor_

```csharp
AssemblyNamesTypeResolutionService(AssemblyName[] names)
```

## Methods

### GetAssembly

_method_

```csharp
Assembly GetAssembly(AssemblyName name,bool throwOnError)
```

### GetAssembly

_method_

```csharp
Assembly GetAssembly(AssemblyName name)
```

### GetPathOfAssembly

_method_

```csharp
string GetPathOfAssembly(AssemblyName name)
```

### GetType

_method_

```csharp
Type GetType(string name,bool throwOnError,bool ignoreCase)
```

### GetType

_method_

```csharp
Type GetType(string name,bool throwOnError)
```

### GetType

_method_

```csharp
Type GetType(string name)
```

### ReferenceAssembly

_method_

```csharp
void ReferenceAssembly(AssemblyName name)
```


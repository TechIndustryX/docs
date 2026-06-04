---
title: "LicenseGenerator"
---

# LicenseGenerator

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/LicenseGenerator.cs`

## Summary

Generates and validates Industria4 license keys using asymmetric cryptography.

## Properties

### PrivateKey

_property_

```csharp
string PrivateKey
```

Gets or sets the path to the PFX file containing the private signing key. Defaults to `License.pfx` in the current directory.

### PublicKey

_property_

```csharp
string PublicKey
```

Gets or sets the path to the CER file containing the public verification key. Defaults to `License.cer` in the current directory.

## Methods

### CheckLicense

_method_

```csharp
bool CheckLicense(string machineCode,string key,out License item)
```

Verifies the provided license key against the given machine code. The hardware-derived machine code to check against. The license key to verify. When this method returns , contains the decoded ; otherwise . if the key is valid for the machine code; otherwise .

### GenerateLicense

_method_

```csharp
string GenerateLicense(string requestCode,DateTimeOffset? expiration)
```

Generates a signed license key from the request code and optional expiration date. The hex-encoded request code containing machine code and package list. An optional expiration date; pass for a perpetual license. The hex-encoded license key, or if generation fails.

### GetMachineCode

_method_

```csharp
string GetMachineCode(string source)
```

Computes a deterministic machine code hash from the provided source string. A source string, typically derived from hardware identifiers.

### GetMachineCodeFromRequestCode

_method_

```csharp
string GetMachineCodeFromRequestCode(string requestCode)
```

Decodes the machine code embedded in the provided request code. The hex-encoded request code to decode.

### GetPackagesFromRequestCode

_method_

```csharp
IReadOnlyList<string> GetPackagesFromRequestCode(string requestCode)
```

Decodes the list of package names embedded in the provided request code. The hex-encoded request code to decode.

### GetRequestCode

_method_

```csharp
string GetRequestCode(string machineCode,IEnumerable<string> installedPackages)
```

Encodes the machine code and list of installed packages into a license request code. The hardware-derived machine code. The package names that should be covered by the license.

### Hash

_method_

```csharp
string Hash<T>(T obj)
```

Computes a SHA-256 hex hash of the JSON-serialized form of the given object. The type of the object to hash. The object to serialize and hash.


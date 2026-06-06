---
title: Module Packaging
---

# Module Packaging

## Scenario

Package backend and frontend modules with the same `build.ps1` pattern already used by the platform repository.

The platform packages are zip files under `src/build/<configuration>/`. Each package includes a `package.json` manifest plus the binaries needed by the host.

## Root Build Script

The root `src/build.ps1` orchestrates all module builds. It builds both `Debug` and `Release` by default; with `-onlyWebApp` it builds only frontend packages in `Release`.

```powershell title="src/build.ps1"
param(
    [switch]$onlyWebApp
)

$list = @("Debug", "Release")
if ($onlyWebApp) {
    # WebApp-only builds are intended for deployable client packages.
    $list = @("Release")
}

foreach ($configuration in $list) {
    # Child build.ps1 scripts read this environment variable.
    $env:configuration = $configuration

    Remove-Item -r build/$configuration -ErrorAction SilentlyContinue
    New-Item -Path build/$configuration -ItemType Directory -ErrorAction SilentlyContinue

    function Invoke-ModuleBuild($path) {
        # Child scripts use relative project/package paths, so run them from their folder.
        pushd $path
        ./build.ps1
        popd
    }

    if ($onlyWebApp -eq $False) {
        # Backend and service packages are skipped by -onlyWebApp.
        Invoke-ModuleBuild .\Hosting\Hosting.WebApp.Server
        Invoke-ModuleBuild .\DataLogger\DataLogger.OpcUa
        Invoke-ModuleBuild .\Recipes\Recipes.WebApi.Hosting
        Invoke-ModuleBuild .\OpcUa\OpcUa.WebApi.Hosting
        Invoke-ModuleBuild .\OpcUa\OpcUa.Comunication.Core
        Invoke-ModuleBuild .\Globalization\Globalization.WebApi.Hosting
        Invoke-ModuleBuild .\Identity\Identity.WebApi.Hosting
        Invoke-ModuleBuild .\Mes\Mes.WebApi.Hosting
        Invoke-ModuleBuild .\Sequences\Sequences.WebApi.Hosting
        Invoke-ModuleBuild .\Production\Production.WebApi.Hosting
    }

    # Client packages are always built; -onlyWebApp limits the run to these packages.
    Invoke-ModuleBuild .\Hosting\Hosting.WebApp.IFrame
    Invoke-ModuleBuild .\Mes\Mes.WebApp.Recipes
    Invoke-ModuleBuild .\Mes\Mes.WebApp
    Invoke-ModuleBuild .\Sequences\Sequences.WebApp
    Invoke-ModuleBuild .\DataLogger\DataLogger.WebApp
    Invoke-ModuleBuild .\Globalization\Globalization.WebApp
    Invoke-ModuleBuild .\Identity\Identity.WebApp
    Invoke-ModuleBuild .\Recipes\Recipes.WebApp
    Invoke-ModuleBuild .\Production\Production.WebApp
}
```

The repository script repeats the same `pushd`, `./build.ps1`, `popd` block explicitly for each folder; the example above is compressed to show the complete package set.

## Backend Package Pattern

Backend packages are built from the `*.WebApi.Hosting` project. The zip contains:

- the hosting assembly at the package root;
- the published API executable and dependencies under `bin`;
- `package.json` at the package root.

```powershell title="Mes/Mes.WebApi.Hosting/build.ps1"
$moduleName = 'Mes.WebApi'
$configuration = if ($env:configuration -eq $null) { 'debug' } else { $env:configuration }

$output = [System.IO.Path]::GetTempFileName()
Remove-Item $output -Recurse -Force
Write-Host "Preparing into $output"

# Build the hosting project so the host can load Industria4.Mes.WebApi.Hosting.dll.
dotnet build --configuration $configuration

# Publish the process that will be started by ProcessModule.
dotnet publish --runtime win-x64 `
    $(if ($configuration -eq "Release") { "-p:PublishReadyToRun=true" }) `
    --output $output/bin `
    --configuration $configuration `
    ..\$moduleName

# The host loads this assembly first, then the module starts the executable in bin.
cp bin/$configuration/net8.0/Industria4.$moduleName.Hosting.dll $output
cp package.json $output

Compress-Archive -Path $output/* `
    -CompressionLevel Optimal `
    -DestinationPath ../../build/$configuration/$moduleName.zip `
    -Force
```

## Frontend Package Pattern

Frontend packages are built from the `*.WebApp` project. They are client packages, so the script publishes the project, removes unrelated files and keeps only the assemblies needed by the host.

```powershell title="Mes/Mes.WebApp/build.ps1"
$moduleName = 'Mes.WebApp'
$configuration = if ($env:configuration -eq $null) { 'debug' } else { $env:configuration }

$output = [System.IO.Path]::GetTempFileName()
Remove-Item $output -Recurse -Force
Write-Host "Preparing into $output"

dotnet publish --runtime win-x64 `
    $(if ($configuration -eq "Release") { "-p:PublishReadyToRun=true" }) `
    --output $output `
    --configuration $configuration

# Keep only platform assemblies and shared dependencies needed by client package loading.
Remove-Item $output\* -Exclude Industria4.*,Rebus*,System.Net.Http* -Force -Recurse
cp package.json $output

Compress-Archive -Path $output/* `
    -CompressionLevel Optimal `
    -DestinationPath ../../build/$configuration/$moduleName.zip `
    -Force
```

## Frontend Extension Package

`Mes.WebApp.Recipes` follows the frontend pattern but has a narrower manifest: it contributes a section provider and module registration rather than owning full pages.

```json title="Mes/Mes.WebApp.Recipes/package.json"
{
  "Name": "Mes.WebApp.Recipes",
  "EntryPoint": "Industria4.Mes.WebApp.Recipes",
  "Version": "1.0",
  "Type": "Client",
  "DefaultConfiguration": {
    "Mes": {
      "Recipes": {
        "RequiresRecipe": false,
        "ShowDownloadButton": false,
        "ShowSelectButton": true
      }
    }
  }
}
```

## Backend Manifest

Backend API packages omit `"Type": "Client"` and provide process configuration such as `ASPNETCORE_URLS`, connection strings and policies.

```json title="Mes/Mes.WebApi.Hosting/package.json"
{
  "Name": "Mes.WebApi",
  "Version": "1.0",
  "EntryPoint": "Industria4.Mes.WebApi.Hosting",
  "DefaultConfiguration": {
    "ASPNETCORE_URLS": "http://*:8005",
    "ConnectionStrings": {
      "Mes": "data source=%ProgramData%\\Industria4\\Mes.WebApi\\Mes.db"
    },
    "Policies": {
      "Mes.WorkOrders": {
        "Roles": []
      }
    }
  }
}
```

## Full Build Commands

```powershell
# From src/
./build.ps1
```

```powershell
# From src/, rebuild only frontend packages in Release.
./build.ps1 -onlyWebApp
```

```powershell
# From a module folder, build only one module using the active configuration.
$env:configuration = "Release"
./build.ps1
```

## Output Layout

```text
src/build/
  Debug/
    Industria4.zip
    DataLogger.OpcUa.zip
    DataLogger.WebApp.zip
    Globalization.WebApi.zip
    Globalization.WebApp.zip
    IFrame.zip
    Identity.WebApi.zip
    Identity.WebApp.zip
    Mes.WebApi.zip
    Mes.WebApp.zip
    Mes.WebApp.Recipes.zip
    OpcUa.Comunication.Core.zip
    OpcUa.WebApi.zip
    Production.WebApi.zip
    Production.WebApp.zip
    Recipes.WebApi.zip
    Recipes.WebApp.zip
    Sequences.WebApi.zip
    Sequences.WebApp.zip
  Release/
    Industria4.zip
    DataLogger.OpcUa.zip
    DataLogger.WebApp.zip
    Globalization.WebApi.zip
    Globalization.WebApp.zip
    IFrame.zip
    Identity.WebApi.zip
    Identity.WebApp.zip
    Mes.WebApi.zip
    Mes.WebApp.zip
    Mes.WebApp.Recipes.zip
    OpcUa.Comunication.Core.zip
    OpcUa.WebApi.zip
    Production.WebApi.zip
    Production.WebApp.zip
    Recipes.WebApi.zip
    Recipes.WebApp.zip
    Sequences.WebApi.zip
    Sequences.WebApp.zip
```

## Step By Step

1. Create `package.json` next to the module `build.ps1`.
2. For backend APIs, put the script in `*.WebApi.Hosting`.
3. For frontend/client modules, put the script in `*.WebApp` or the frontend extension project.
4. Set `$moduleName` to the package name used in the zip.
5. Publish to a temporary output folder.
6. Copy `package.json` into the output folder.
7. For backend packages, copy the hosting DLL to the package root and publish the process under `bin`.
8. For frontend packages, prune output to platform assemblies and shared runtime dependencies.
9. Compress the temporary output to `../../build/$configuration/$moduleName.zip`.
10. Add the module script to root `src/build.ps1` when it should be built with the platform bundle.

## Validation

A package is valid when:

- the zip exists under `src/build/<configuration>/`;
- `package.json` is at the zip root;
- backend packages contain the `*.Hosting.dll` at the root and executable output under `bin`;
- frontend packages contain `"Type": "Client"` in `package.json`;
- the `EntryPoint` assembly matches the module startup assembly loaded by the host.

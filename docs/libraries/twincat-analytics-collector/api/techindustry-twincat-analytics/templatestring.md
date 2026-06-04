---
title: "TemplateString"
---

# TemplateString

_public class_

Namespace: `TechIndustry.TwinCAT.Analytics`

Source: `TechIndustry.TwinCAT.Analytics/TemplateString.cs`

## Summary

Provides named-placeholder string formatting similar to `string.Format`, using `&#123;key&#125;` or `&#123;key:format&#125;` tokens.

## Methods

### Format

_method_

```csharp
string Format(string format,IDictionary<string,object> args)
```

Replaces named placeholders in `format` with values from `args`. A template string containing `&#123;key&#125;` or `&#123;key:format&#125;` placeholders. A dictionary mapping placeholder keys to their replacement values. The formatted string with all matching placeholders replaced.


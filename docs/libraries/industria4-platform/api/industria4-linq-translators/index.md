---
title: "Industria4.Linq.Translators"
---

# Industria4.Linq.Translators

This namespace contains 9 public API types.

## Types

- [CastTranslator](./casttranslator.md) _class_
- [DefaultExpressionTranslatorProvider](./defaultexpressiontranslatorprovider.md) _class_ - A default backed by a mutable list of translators.
- [DefaultExpressionTranslatorProvider&lt;T&gt;](./defaultexpressiontranslatorprovider-2.md) _class_ - A typed variant of for a specific element type `T`. The element type whose query expressions are translated.
- [IExpressionTranslator](./iexpressiontranslator.md) _interface_ - Defines a translator that can rewrite a specific kind of expression before it is evaluated.
- [IExpressionTranslatorProvider](./iexpressiontranslatorprovider.md) _interface_ - Provides a collection of instances used to rewrite query expressions.
- [ITranslatorQueryable](./itranslatorqueryable.md) _interface_
- [TranslationContext](./translationcontext.md) _class_ - Carries the state for a single expression translation step, including the root expression, the current sub-expression being translated, and a callback to recursively apply translators.
- [TranslatorQueryable&lt;T&gt;](./translatorqueryable.md) _class_
- [TranslatorsExtensions](./translatorsextensions.md) _class_ - Extensions to

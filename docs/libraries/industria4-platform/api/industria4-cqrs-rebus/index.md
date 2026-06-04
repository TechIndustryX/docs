---
title: "Industria4.Cqrs.Rebus"
---

# Industria4.Cqrs.Rebus

This namespace contains 7 public API types.

## Types

- [AutoSetMessageIdStep](./autosetmessageidstep.md) _class_ - Automatically set message id and correlation headers
- [CatchMessagesSentStep](./catchmessagessentstep.md) _class_ - Rebus outgoing step that captures each outgoing in the scoped , enabling assertions in tests.
- [CommandsErrorHandler](./commandserrorhandler.md) _class_
- [CompleteCommandEventStep](./completecommandeventstep.md) _class_ - Rebus incoming step that automatically publishes a for successfully processed commands that have not disabled auto-completion.
- [LogMessageStep](./logmessagestep.md) _class_ - Rebus pipeline step that logs outgoing and incoming message bodies at `Debug` level.
- [ServiceProviderStep](./serviceproviderstep.md) _class_ - Rebus pipeline step that propagates an scope across both incoming and outgoing steps, creating a fresh DI scope when none is active.
- [SimpleTopicNameConvention](./simpletopicnameconvention.md) _class_ - Rebus that produces short, human-readable topic names for assemblies listed in .

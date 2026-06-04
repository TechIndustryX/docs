---
title: "Industria4.Cqrs.Messaging"
---

# Industria4.Cqrs.Messaging

This namespace contains 8 public API types.

## Types

- [IMessage](./imessage.md) _interface_ - Represents a bus message
- [IMessagesCatcher](./imessagescatcher.md) _interface_ - Accumulates dispatched messages in memory, typically used in tests to assert that specific messages were sent.
- [IMessagesWaiter](./imessageswaiter.md) _interface_ - Creates awaitable message waiter handles for one or more message types.
- [IMessageWaiter](./imessagewaiter.md) _interface_ - Represents a handle that waits asynchronously for a single dispatched message, then releases the registration.
- [MessageBase](./messagebase.md) _class_ - Base class for all CQRS messages, providing a stable unique identifier per instance.
- [MessagesCatcher](./messagescatcher.md) _class_ - Rebus-based implementation of that accumulates dispatched messages for test inspection.
- [MessagesWaiter](./messageswaiter.md) _class_
- [MessagesWaiterBase](./messageswaiterbase.md) _class_ - Base class for implementations that manages in-memory waiter registrations keyed by message type.

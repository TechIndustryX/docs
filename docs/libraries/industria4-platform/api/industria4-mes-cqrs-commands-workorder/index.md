---
title: "Industria4.Mes.Cqrs.Commands.WorkOrder"
---

# Industria4.Mes.Cqrs.Commands.WorkOrder

This namespace contains 11 public API types.

## Types

- [AddQuantityWorkOrderCommand](./addquantityworkordercommand.md) _class_ - Command to add a produced (or waste) quantity to a work order.
- [AddWorkOrderChangeCommand](./addworkorderchangecommand.md) _class_ - Command to record a change (state or quantity event) on a work order without altering quantities.
- [AddWorkOrderCommand](./addworkordercommand.md) _class_ - Command to create a new work order.
- [ChangeWorkOrderPriority](./changeworkorderpriority.md) _class_ - Represents a single work-order priority change item within a .
- [ChangeWorkOrderPriorityCommand](./changeworkorderprioritycommand.md) _class_ - Command to change the scheduling priorities of one or more work orders in a single operation.
- [ChangeWorkOrderStateCommand](./changeworkorderstatecommand.md) _class_ - Command to transition a work order to a new lifecycle state.
- [DeleteWorkOrderCommand](./deleteworkordercommand.md) _class_ - Command to delete a work order by identifier.
- [ExpireWorkOrdersCommand](./expireworkorderscommand.md) _class_ - Command that triggers expiry processing for all work orders whose due date has passed.
- [PromoteWorkOrdersCommand](./promoteworkorderscommand.md) _class_ - Command that triggers promotion (auto-advance) of eligible work orders to the next lifecycle state.
- [SetQuantityWorkOrderCommand](./setquantityworkordercommand.md) _class_ - Command to set (overwrite) the produced or waste quantity of a work order.
- [UpdateWorkOrderCommand](./updateworkordercommand.md) _class_ - Command to update the details of an existing work order.

---
title: "Industria4.Mes.Cqrs.Handlers"
---

# Industria4.Mes.Cqrs.Handlers

This namespace contains 5 public API types.

## Types

- [ActiveWorkOrderMode](./activeworkordermode.md) _enum_ - Controls how many work orders may be in `Running` state at the same time.
- [MesHandler](./meshandler.md) _class_
- [MesOptions](./mesoptions.md) _class_ - Runtime configuration options for the MES command handler and scheduler.
- [SchedulerHostedService](./schedulerhostedservice.md) _class_ - Background service that dispatches scheduled and messages at configurable intervals.
- [WorkOrderPriorityMode](./workorderprioritymode.md) _enum_ - Determines the sort direction used when ordering work orders by priority.

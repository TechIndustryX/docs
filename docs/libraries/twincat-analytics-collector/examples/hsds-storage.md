---
title: HSDS Storage
---

# HSDS Storage

## Scenario

Persist recordings into HSDS using groups and datasets that mirror stream aliases, record ids and symbols.

## Source Pattern

`AddHsdsStorage` registers `SimpleHsdsClient` and `HsdsRecordsStorage`. The storage implementation ensures the domain, creates groups, writes datasets in chunks and attaches attributes.

## Steps

1. Set `Storage` to `Hsds`.
2. Configure `Hsds:Uri`, credentials and target domain.
3. Configure record grouping and chunk size.
4. Start the collector.
5. Confirm groups and datasets under the expected stream path.

## Expected Result

The HSDS domain contains a navigable hierarchy of streams, records and signal datasets.

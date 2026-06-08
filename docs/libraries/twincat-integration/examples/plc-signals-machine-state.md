---
title: PLC Signals And Machine State
---

# PLC Signals And Machine State

## Scenario

Use `TechIndustry.TwinCAT.IoTCore` signals and machine-state blocks when PLC values must be represented consistently across local logic, message events, MQTT integration, and external services.

The relevant primitives are:

- `ST_Value` and `U_Value`: a typed value container.
- `V_BOOL`, `V_INT`, `V_STRING`, and conversion helpers: builders and readers for `ST_Value`.
- `FB_SignalBase` and typed signal blocks: observable PLC values.
- `FB_ComplexBase`: groups signals and notifies observers.
- `FB_EquipmentBase`, `FB_UnitOrchestrator`, and state interfaces: reusable machine-state structure.

## Observer Model

Signals are built on top of the observer pattern. `FB_Subject` owns a list of `I_Observer` instances and calls `Update()` when the subject changes. `FB_Observer` is the base implementation. `FB_ComplexBase` implements `I_Observer` and can attach itself to one or more signals.

```pascal title="FB_Subject model"
METHOD PUBLIC Attach : BOOL
VAR_INPUT
    ipObserver : I_Observer;
END_VAR

IF ipObserver = 0 THEN
    RETURN;
END_IF

// Store the observer interface for later notifications.
aObservers.AddEntry(ADR(ipObserver));
```

```pascal title="FB_Subject.Notify model"
FOR iIndex := 0 TO aObservers.LastIndex DO
    IF aObservers.GetEntryEx(iIndex, pMemoryPtr => ipObserver) THEN
        // The subject passes itself so the observer can identify the source.
        ipObserver^.Update(THIS^);
    END_IF
END_FOR
```

`FB_ComplexBase.Init()` attaches the complex object to every signal in the provided array.

```pascal title="FB_ComplexBase.Init model"
THIS^.aSignals := aSignals;

FOR iIndex := 0 TO Constants.iMaxSignals DO
    ipSignal := aSignals[iIndex];

    IF ipSignal <> 0 AND __QUERYINTERFACE(ipSignal, ipSubject) THEN
        // The complex block will receive Update() calls from the signal.
        ipSubject.Attach(ipObserver := THIS^);
    END_IF
END_FOR
```

`FB_ComplexBase.FB_exit()` detaches from every subject, which avoids stale observers after online changes.

## Typed Values

`ST_Value` lets commands and signals carry a typed scalar without creating a different message class for every data type.

```pascal title="Create typed values"
VAR
    stBool : ST_Value;
    stSpeed : ST_Value;
    stName : ST_Value;
END_VAR

// Use helper constructors so the type discriminator is set correctly.
stBool := V_BOOL(TRUE);
stSpeed := V_INT(120);
stName := V_STRING('Line 1');
```

```pascal title="Read typed values"
CASE stSpeed.eType OF
    E_ArgType.ARGTYPE_INT:
        // Conversion helpers read the correct field from the value union.
        nSpeed := V_TOINT(stSpeed);

    E_ArgType.ARGTYPE_STRING:
        sName := V_TOSTRING(stSpeed);
END_CASE
```

## Signal-Backed Counter

The sample `FB_Counter` receives an `I_Signal` dependency, registers it in `FB_ComplexBase`, and updates the counter when the signal changes.

```pascal title="FB_Counter.FB_init"
METHOD FB_init : BOOL
VAR_INPUT
    bInitRetains : BOOL;
    bInCopyCode : BOOL;
    ipContext : I_Context;
    ipSignal : I_Signal;
END_VAR
VAR
    // FB_ComplexBase accepts an array of signals to observe.
    fbSignals : ARRAY[0..TechIndustry_TwinCAT_IoTCore.Constants.iMaxSignals] OF I_Signal := [ipSignal];
END_VAR

// Store the signal so Update() can read its current value.
THIS^.ipSignal := ipSignal;

// Register this complex object against the signal list.
Init(aSignals := fbSignals);
```

```pascal title="FB_Counter.Update"
METHOD Update
VAR_INPUT
    ipSubject : I_Subject;
END_VAR
VAR
    stSignalValue : ST_Value;
END_VAR

IF ipSignal <> 0 THEN
    stSignalValue := ipSignal.Value;

    CASE stSignalValue.eType OF
        E_ArgType.ARGTYPE_BOOL:
            // The sample increments the counter when a BOOL signal changes.
            udValue := udValue + 1;
    END_CASE
END_IF

// Clamp the value before publishing it.
IF udValue < udMinimum THEN
    udValue := udMinimum;
ELSIF udValue > udMaximum THEN
    udValue := udMaximum;
END_IF

SetValue(udValue);
```

## Signal Composition

The sample `FB_Machine1` composes typed signals with a context object, then passes one signal to `FB_Counter`.

```pascal title="FB_Machine1 signal composition"
VAR
    stContext : ST_Context := (deviceId := 'test', plant := 'plant');
    ipContext : FB_MesContext(stContext := stContext);

    // Each signal can expose the same context to downstream listeners.
    fbButton1 : FB_BoolSignal(ipContext := ipContext);
    fbNumber1 : FB_IntSignal(ipContext := ipContext);
    fbString : FB_StringSignal(ipContext := ipContext);

    // Counter observes fbButton1 through the I_Signal interface.
    fbCounter : FB_Counter(ipSignal := fbButton1, ipContext := ipContext);
END_VAR
```

If a machine block wants to observe multiple signals directly, pass them to `Init()`.

```pascal title="Attach multiple signals"
METHOD FB_init : BOOL
VAR
    fbSignals : ARRAY[0..TechIndustry_TwinCAT_IoTCore.Constants.iMaxSignals] OF I_Signal :=
        [fbButton1, fbNumber1, fbString];
END_VAR

// FB_ComplexBase attaches THIS^ as observer to each signal subject.
Init(aSignals := fbSignals);
```

Then override `Update()` and inspect the subject pointer.

```pascal title="FB_Machine1.Update"
METHOD Update
VAR_INPUT
    ipSubject : I_Subject;
END_VAR
VAR
    fbLocalNumber1 : POINTER TO FB_IntSignal;
END_VAR

IF __QUERYPOINTER(ipSubject, fbLocalNumber1) AND fbLocalNumber1 = ADR(fbNumber1) THEN
    // React only to the signal you need.
END_IF
```

## Publish Changes As Events

The counter publishes a domain event only when the value changes.

```pascal title="FB_Counter.SetValue"
THIS^.udValue := udValue;

IF udPreValue <> udValue THEN
    udPreValue := udValue;

    // Notify local observers first.
    THIS^.Notify();

    // Then publish a message-bus event for integration layers.
    fbMessage := __NEW(FB_CounterChangedEventMessage(
        iMessageType := 2,
        stTimestamp := ServiceLocator.fbDateTimeOffset.DateTime,
        udValue := udValue));

    ServiceLocator.fbMessenger.Send(ipSender := THIS, ipMessage := fbMessage);
END_IF
```

## Machine-State Pattern

Use equipment and unit blocks when the PLC needs a structured state model instead of isolated booleans. The sample project includes:

- `FB_Machine3`: machine-level state composition.
- `FB_Equipment1`: equipment-level state object.
- `FB_UnitOrchestrator`: unit orchestration helper.
- `FB_ManualStateSignal`: state signal exposed as an observable value.

```pascal title="MAIN machine-state wiring"
VAR
    fbMachine3 : FB_Machine3();
END_VAR

// Run the machine-state block from the cyclic program when enabled.
fbMachine3();
```

## Design Rules

1. Use typed signals for values that are observed by more than one block.
2. Convert external command payloads into `ST_Value` at the boundary.
3. Keep machine-state objects responsible for state transitions, not MQTT or ADS details.
4. Publish domain events when values change; avoid publishing every scan.
5. Run signal tasks from `ServiceLocator.fbTasks` so observers are processed consistently.
6. Detach observers in `FB_exit` when you implement custom subject/observer code.
7. Use `I_ContextProvider` when signal events must carry machine, device or plant metadata.

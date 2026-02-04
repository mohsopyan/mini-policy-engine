# Mini Policy Engine

Mini Policy Engine adalah project pembelajaran yang mensimulasikan
bagaimana sistem policy / rule engine bekerja di dunia nyata.

Project ini dirancang bertahap untuk menunjukkan:
- Pemisahan rule, policy, registry, dan engine
- Cara berpikir arsitektural (bukan sekadar coding)
- Pendekatan yang human-readable dan maintainable

## Design Philosophy
This project intentionally avoids frameworks and abstractions
that hide control flow. Every decision is explicit and traceable,
mirroring how real-world policy engines are reasoned about in production systems.

## Decision Output Contract
This engine produces a clear and explicit decision object.
The shape of the output depends on the evaluation mode and result.

### Success
Returned when all rules pass.

```js
{
  passed: true,
  results: {
    ruleName: { state: "PASSED", error: null }
  }
}
```

### Fail-fast Mode
Evaluation stops at the first failed rule.

```js
{
  passed: false,
  error: { ... },
  results: {
    failedRule: { state: "FAILED", error: { ... } }
  }
}
```

### Full Evaluation Mode
All rules are evaluated and all errors are collected.

```js
{
  passed: false,
  errors: [ { ... }, { ... } ],
  results: {
    ruleA: { state: "FAILED", error: { ... } },
    ruleB: { state: "PASSED", error: null }
  }
}
```

This explicit contract ensures the caller never needs to infer intent
from empty arrays or nullable fields.

## Extensibility: Adding New Action Without Modifying the Engine
This engine is designedto be closed for modification and open for extension.

Adding a new business action (e.g. WITHDRAW) does not require any change to the rule engine or existing rules.

## Current Status
- [x] Project structure
- [x] Rule registry
- [x] Policy resolver
- [x] Action policies
- [x] Core rules (Active, KYC, AML, Age)
- [x] Rule Engine (fail-fast mode)
- [x] Full evaluation mode
- [x] Integration & scenario tests(fail-fast, full, success, withdraw)
- [x] Explicit decision output contract
- [x] Proven extensibility via policy configuration.

## Goal
Project ini dibuat sebagai bagian dari:
- Portfolio GitHub
- Persiapan technical interview
- Personal branding untuk kerja remote / freelance

> Built step-by-step with intention, not generated blindly.

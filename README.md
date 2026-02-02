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


## Current Status
- [x] Project structure
- [x] Rule registry
- [x] Policy resolver
- [x] Action policies
- [x] Core rules (Active, KYC, AML, Age)
- [x] Rule Engine (fail-fast mode)
- [x] Full evaluation mode
- [x] Integration & scenario tests(fail-fast, full, success)
- [x] Explicit decision output contract

## Goal
Project ini dibuat sebagai bagian dari:
- Portfolio GitHub
- Persiapan technical interview
- Personal branding untuk kerja remote / freelance

> Built step-by-step with intention, not generated blindly.

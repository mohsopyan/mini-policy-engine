/**
 * Rule Engine Context Contract
 *
 * Engine ini mengasumsikan semua rule menerima `context`
 * dengan struktur FLAT (tidak nested).
 *
 * Contoh:
 * {
 *   active: true,
 *   kycVerified: true,
 *   amlCleared: false,
 *   age: 25
 * }
 */

const RULE_STATE = require("./rule-states");

function runRules(context, rules, options = { mode: "FAIL_FAST" }) {
  const results = {};
  const errors = [];

  for (const rule of rules) {
    const result = rule.run(context);

    results[rule.name] = result;

    if (result.state === RULE_STATE.FAILED) {
      if (options.mode === "FAIL_FAST") {
        return {
          passed: false,
          error: result.error,
          results,
        };
      }

      if (options.mode === "FULL") {
        errors.push(result.error);
      }
    }
  }

  if (errors.length > 0) {
    return {
      passed: false,
      errors,
      results,
    };
  }

  return {
    passed: true,
    errors: [],
    results,
  };
}

module.exports = runRules;

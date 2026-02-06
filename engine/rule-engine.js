const RULE_STATE = require("./rule-states");

function runRules(context, rules, options = { mode: "FAIL_FAST" }) {
  const results = {};
  const errors = [];
  const executedResults = {};

  for (const entry of rules) {
    const { rule, dependsOn } = entry;

    if (dependsOn) {
      const dependencyResult = executedResults[dependsOn];

      if (!dependencyResult || dependencyResult.state !== RULE_STATE.PASSED) {
        results[rule.name] = {
          state: RULE_STATE.SKIPPED,
          error: null
        };
        executedResults[rule.name] = results[rule.name];
        continue;
      }
    } 
    const result = rule.run(context);

    results[rule.name] = result;
    executedResults[rule.name] = result;

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
    results,
  };
}

module.exports = runRules;

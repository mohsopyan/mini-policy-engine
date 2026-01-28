const RuleRegistry = require("./registry/rule-registry");
const PolicyResolver = require("./resolver/policy-resolver");
const runRules = require("./engine/rule-engine");

const activeRule = require("./rules/active.rule");
const kycRule = require("./rules/kyc.rule");
const amlRule = require("./rules/aml.rule");
const ageRule = require("./rules/age.rule");

const actionPolicies = require("./policies/action-policies");

const registry = new RuleRegistry();
const policyResolver = new PolicyResolver(registry, actionPolicies);

registry.register(activeRule);
registry.register(kycRule);
registry.register(amlRule);
registry.register(ageRule);

// const action = "WITHDRAW";
const action = "TRANSFER";

const mode = "FAIL_FAST";

const rulesToRun = policyResolver.resolve(action);

const context = {
  active: true,
  kycVerified: true,
  amlCleared: false,
  age: 25,
};

const decision = runRules(context, rulesToRun, { mode });

console.log("Decision result:");
console.dir(decision, { depth: null });

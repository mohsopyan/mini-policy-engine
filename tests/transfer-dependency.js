const RuleRegistry = require("../registry/rule-registry");
const PolicyResolver = require("../resolver/policy-resolver");
const runRules = require("../engine/rule-engine");

const actionPolicies = require("../policies/action-policies");

const activeRule = require("../rules/active.rule");
const kycRule = require("../rules/kyc.rule");
const amlRule = require("../rules/aml.rule");
const ageRule = require("../rules/age.rule");

const registry = new RuleRegistry();
registry.register(activeRule);
registry.register(kycRule);
registry.register(amlRule);
registry.register(ageRule);

const policyResolver = new PolicyResolver(registry, actionPolicies);

const context = {
  active: true,
  kycVerified: false,
  amlCleared: false,
  age: 30,
};

const action = "TRANSFER";
const rulesToRun = policyResolver.resolve(action);

const decision = runRules(context, rulesToRun, { mode: "FULL" });

console.log("Transfer dependency decision:");
console.log(JSON.stringify(decision, null, 2));

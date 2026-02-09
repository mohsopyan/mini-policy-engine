const runRules = require("../engine/rule-engine");
const PolicyResolver = require("../resolver/policy-resolver");
const RuleRegistry = require("../registry/rule-registry");
const actionPolicies = require("../policies/action-policies");
const summarizeDecision = require("../decision/decision-summary");

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
  active: false,
  kycVerified: true,
  amlCleared: true,
  age: 25,
};

const action = "TRANSFER";
const rulesToRun = policyResolver.resolve(action);

const decision = runRules(context, rulesToRun, { mode: "FULL" });

const summary = summarizeDecision(decision, action)

console.log("Decision summary:");
console.log(summary);
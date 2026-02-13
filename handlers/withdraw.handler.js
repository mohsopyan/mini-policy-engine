const RuleRegistry = require("../registry/rule-registry");
const PolicyResolver = require("../resolver/policy-resolver");
const runRules = require("../engine/rule-engine");
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

function withdrawDecisionHandler(req, res) {
  try {
    const context = req.body;
    const rules = policyResolver.resolve("WITHDRAW");

    const decision = runRules(context, rules, { mode: "FULL" });
    const summary = summarizeDecision(decision, "WITHDRAW");

    return res.status(200).json(summary);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

module.exports = withdrawDecisionHandler;

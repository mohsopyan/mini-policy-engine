const express = require("express");
const router = express.Router();

const RuleRegistry = require("../../registry/rule-registry");
const PolicyResolver = require("../../resolver/policy-resolver");
const runRules = require("../../engine/rule-engine");
const actionPolicies = require("../../policies/action-policies");

const validateTransferInput = require("../../validators/transfer.validator");
const validateWithdrawInput = require("../../validators/withdraw.validator");

const activeRule = require("../../rules/active.rule");
const kycRule = require("../../rules/kyc.rule");
const amlRule = require("../../rules/aml.rule");
const ageRule = require("../../rules/age.rule");

const summarizeDecision = require("../../decision/decision-summary");

const registry = new RuleRegistry();
registry.register(activeRule);
registry.register(kycRule);
registry.register(amlRule);
registry.register(ageRule);

const policyResolver = new PolicyResolver(registry, actionPolicies);

router.post("/transfer/decision", (req, res) => {
  try {
    const context = req.body;

    const validation = validateTransferInput(context);
    if (!validation.valid) {
      return res.status(400).json({
        error: "INVALID_INPUT",
        details: validation.errors,
      });
    }

    const rules = policyResolver.resolve("TRANSFER");
    const decision = runRules(context, rules, { mode: "FULL" });

    const summary = summarizeDecision(decision, "TRANSFER");

    return res.status(200).json(summary);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.post("/withdraw/decision", (req, res) => {
  try {
    const context = req.body;

    const validation = validateWithdrawInput(context);

    if (!validation.valid) {
      return res.status(400).json({
        error: "INVALID_INPUT",
        details: validation.errors,
      });
    }

    const rules = policyResolver.resolve("WITHDRAW");
    const decision = runRules(context, rules, { mode: "FULL" });

    const summary = summarizeDecision(decision, "WITHDRAW");

    return res.status(200).json(summary);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;

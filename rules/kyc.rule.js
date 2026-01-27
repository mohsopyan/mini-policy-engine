const RULE_STATE = require("../engine/rule-states");
const ERROR_CODES = require("../errors/error-codes");
const { createError } = require("../errors/error-factory");
const ERROR_TYPES = require("../errors/error-types");

const kycRule = {
  name: "kycRule",
  priority: 2,

  run(context) {
    if (context.kycVerified !== true) {
      return {
        state: RULE_STATE.FAILED,
        error: createError({
          type: ERROR_TYPES.COMPLIANCE,
          code: ERROR_CODES.KYC_NOT_VERIFIED.code,
          message: ERROR_CODES.KYC_NOT_VERIFIED.message,
          field: "kycVerified",
        }),
      };
    }

    return {
      state: RULE_STATE.PASSED,
      error: null,
    };
  },
};

module.exports = kycRule;

const RULE_STATE = require("../engine/rule-states");
const ERROR_CODES = require("../errors/error-codes");
const { createError } = require("../errors/error-factory");
const ERROR_TYPES = require("../errors/error-types");

const amlRule = {
  name: "amlRule",
  priority: 3,

  run(context) {
    if (context.amlCleared !== true) {
      return {
        state: RULE_STATE.FAILED,
        error: createError({
          type: ERROR_TYPES.COMPLIANCE,
          code: ERROR_CODES.AML_NOT_CLEARED.code,
          message: ERROR_CODES.AML_NOT_CLEARED.message,
          field: "amlCleared",
        }),
      };
    }

    return {
      state: RULE_STATE.PASSED,
      error: null,
    };
  },
};

module.exports = amlRule;

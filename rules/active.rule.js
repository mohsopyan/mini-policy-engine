const RULE_STATE = require("../engine/rule-states");
const ERROR_CODES = require("../errors/error-codes");
const { createError } = require("../errors/error-factory");
const ERROR_TYPES = require("../errors/error-types");

const activeRule = {
  name: "activeRule",
  priority: 1,

  run(context) {
    if (context.active !== true) {
      return {
        state: RULE_STATE.FAILED,
        error: createError({
          type: ERROR_TYPES.ACCESS,
          code: ERROR_CODES.INACTIVE_ACCOUNT.code,
          message: ERROR_CODES.INACTIVE_ACCOUNT.message,
          field: "active",
        }),
      };
    }

    return {
      state: RULE_STATE.PASSED,
      error: null,
    };
  },
};

module.exports = activeRule;

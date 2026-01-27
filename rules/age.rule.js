const RULE_STATE = require("../engine/rule-states");
const ERROR_CODES = require("../errors/error-codes");
const { createError } = require("../errors/error-factory");
const ERROR_TYPES = require("../errors/error-types");

const ageRule = {
  name: "ageRule",
  priority: 4,

  run(context) {
    if (typeof context.age !== "number" || context.age < 18) {
      return {
        state: RULE_STATE.FAILED,
        error: createError({
          type: ERROR_TYPES.VALIDATION,
          code: ERROR_CODES.AGE_NOT_ALLOWED.code,
          message: ERROR_CODES.AGE_NOT_ALLOWED.message,
          field: "age",
        }),
      };
    }

    return {
      state: RULE_STATE.PASSED,
      error: null,
    };
  },
};

module.exports = ageRule;

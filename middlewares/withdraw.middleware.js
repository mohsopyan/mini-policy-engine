const validateWithdrawInput = require("../validators/withdraw.validator");
const ValidationError = require("../errors/validation-error");

function validateWithdrawMiddleware(req, res, next) {
  const result = validateWithdrawInput(req.body);

  if (!result.valid) {
    throw new ValidationError(result.errors.join(", "));
  }

  next();
}

module.exports = validateWithdrawMiddleware;

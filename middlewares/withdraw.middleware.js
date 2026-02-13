const validateWithdrawInput = require("../validators/withdraw.validator");

function validateWithdrawMiddleware(req, res, next) {
  const result = validateWithdrawInput(req.body);

  if (!result.valid) {
    return res.status(400).json({
      error: "INVALID_INPUT",
      details: result.errors,
    });
  }

  next();
}

module.exports = validateWithdrawMiddleware;

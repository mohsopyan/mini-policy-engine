const validateTransferInput = require("../validators/transfer.validator");
const ValidationError = require("../errors/validation-error");

function validateTransferMiddleware(req, res, next) {
  const result = validateTransferInput(req.body);

  if (!result.valid) {
    throw new ValidationError(result.errors.join(", "));
  }

  next();
}

module.exports = validateTransferMiddleware;

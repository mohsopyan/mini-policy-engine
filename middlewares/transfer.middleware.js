const validateTransferInput = require("../validators/transfer.validator");

function validateTransferMiddleware(req, res, next) {
  const result = validateTransferInput(req.body);

  if (!result.valid) {
    return res.status(400).json({
      error: "INVALID_INPUT",
      details: result.errors,
    });
  }

  next();
}

module.exports = validateTransferMiddleware;

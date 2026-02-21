const AppError = require("./app-error");

class BusinessError extends AppError {
  constructor(message = "Business rule violation") {
    super(message, 403, "BUSINESS_RULE_VIOLATION");
  }
}

module.exports = BusinessError;
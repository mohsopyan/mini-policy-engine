const AppError = require("./app-error");

class ValidationError extends AppError {
    constructor(message = "Invalid input") {
        super(message, 400, "INVALID_INPUT");
    }
}

module.exports = ValidationError;
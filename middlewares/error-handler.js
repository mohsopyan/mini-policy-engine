const logger = require("../utils/logger");

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const code = err.code || "INTERNAL_SERVER_ERROR";
  const message = statusCode === 500 ? "Something went wrong" : err.message;

  logger.error({
    message: err.message,
    requestId: req.requestId,
    method: req.method,
    path: req.originalUrl,
    stack: err.stack,
  });

  res.status(statusCode).json({
    error: code,
    message,
    requestId: req.requestId,
  });
}

module.exports = errorHandler;

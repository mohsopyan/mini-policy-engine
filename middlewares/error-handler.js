const logger = require("../utils/logger");

function errorHandler(err, req, res, next) {
  logger.error("Unhandled error", {
    message: err.message,
    path: req.originalUrl,
    method: req.method,
  })

  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).json({
    error: "INTERNAL_SERVER_ERROR",
    message: err.message || "Something went wrong",
  });
}

module.exports = errorHandler;

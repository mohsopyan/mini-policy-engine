const logger = require("../utils/logger");
const requestId = require("../middlewares/request-id");

function requestLogger(req, res, next) {
  const start = Date.now();

  logger.info("Incoming request", {
    requestId: req.requestId,
    method: req.method,
    path: req.originalUrl,
  });

  res.on("finish", () => {
    const duration = Date.now() - start;

    logger.info("Request completed", {
      requestId: req.requestId,
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
    });
  });

  next();
}

module.exports = requestLogger;

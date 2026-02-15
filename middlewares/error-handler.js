function errorHandler(err, req, res, next) {
  console.error("GLOBAL ERROR:", err.message);

  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).json({
    error: "INTERNAL_SERVER_ERROR",
    message: err.message || "Something went wrong",
  });
}

module.exports = errorHandler;

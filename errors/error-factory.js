function createError({ type, code, message, field }) {
  return {
    type,
    code,
    message,
    field,
  };
}

module.exports = {
  createError,
};

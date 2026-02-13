function validateTransferInput(body) {
  const errors = [];

  if (typeof body.active !== "boolean") {
    errors.push("active must be boolean");
  }

  if (typeof body.kycVerified !== "boolean") {
    errors.push("kycVerified mus be boolean");
  }

  if (typeof body.amlCleared !== "boolean") {
    errors.push("amlCleared must be boolean");
  }

  if (typeof body.age !== "number") {
    errors.push("age must be number");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
 module.exports = validateTransferInput;
function validateWithdrawInput(data) {
  const errors = [];

  if (typeof data.active !== "boolean") {
    errors.push("active must be boolean");
  }

  if (typeof data.kycVerified !== "boolean") {
    errors.push("kycVerified must be boolean");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

module.exports = validateWithdrawInput;
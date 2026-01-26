const ERROR_CODES = {
  USER_INACTIVE: {
    code: "USER_INACTIVE",
    message: "User is not active",
  },

  KYC_NOT_VERIFIED: {
    code: "KYC_NOT_VERIFIED",
    message: "KYC is not verified",
  },

  AML_NOT_CLEARED: {
    code: "AML_NOT_CLEARED",
    message: "AML is not cleared",
  },

  AGE_NOT_ALLOWED: {
    code: "AGE_NOT_ALLOWED",
    message: "User age is not allowed",
  },
};

module.expports = ERROR_CODES;

module.exports = {
  REGISTER: ["activeRule", "ageRule"],
  WITHDRAW: ["activeRule", "kycRule"],
  TRANSFER: [
    "activeRule",
    "kycRule",
    { rule: "amlRule", dependsOn: "kycRule" },
    "ageRule"
  ]
};

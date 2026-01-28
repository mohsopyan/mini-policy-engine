module.exports = {
  REGISTER: ["activeRule", "ageRule"],
  WITHDRAW: ["activeRule", "kycRule", "amlRule"],
  TRANSFER: ["activeRule", "kycRule", "amlRule", "ageRule"],
};

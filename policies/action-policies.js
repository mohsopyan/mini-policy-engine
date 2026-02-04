module.exports = {
  REGISTER: ["activeRule", "ageRule"],
  WITHDRAW: ["activeRule", "kycRule"],
  TRANSFER: ["activeRule", "kycRule", "amlRule", "ageRule"],
};

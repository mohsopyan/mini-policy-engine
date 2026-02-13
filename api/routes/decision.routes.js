const express = require("express");
const router = express.Router();

const validateTransferMiddleware = require("../../middlewares/transfer.middleware");
const validateWithdrawMiddleware = require("../../middlewares/withdraw.middleware");

const transferDecisionHandler = require("../../handlers/transfer.handler");
const withdrawDecisionHandler = require("../../handlers/withdraw.handler");

router.post("/transfer/decision", validateTransferMiddleware, transferDecisionHandler);

router.post("/withdraw/decision", validateWithdrawMiddleware, withdrawDecisionHandler);

module.exports = router;

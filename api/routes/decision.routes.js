const express = require("express");
const router = express.Router();
const asyncHandler = require("../../utils/async-handler");

const validateTransferMiddleware = require("../../middlewares/transfer.middleware");
const validateWithdrawMiddleware = require("../../middlewares/withdraw.middleware");

const transferDecisionHandler = require("../../handlers/transfer.handler");
const withdrawDecisionHandler = require("../../handlers/withdraw.handler");

router.post("/transfer/decision", validateTransferMiddleware, asyncHandler(transferDecisionHandler));

router.post("/withdraw/decision", validateWithdrawMiddleware, asyncHandler(withdrawDecisionHandler));

module.exports = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;
exports.ClaimTime = new mongoose.Schema({
    prof: { type: ObjectId, ref: 'Profile' },
    org: ObjectId,
    minutes: Number,
    notes: String,
    transactionId: String,
    reward: {
        amount: Number,
        symbol: String
    },
    blockTime: String
});

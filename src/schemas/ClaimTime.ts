import * as mongoose from "mongoose";
var ObjectId = mongoose.Schema.Types.ObjectId;


export const ClaimTime = new mongoose.Schema({
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
})
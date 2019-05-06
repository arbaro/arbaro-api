import * as mongoose from "mongoose";

export const Org = new mongoose.Schema({
    owner: String,
    tokensym: String,
    tokencon: String,
    friendlyname: String,
    blockTime: String
})
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.Org = new mongoose.Schema({
    owner: String,
    tokensym: String,
    tokencon: String,
    friendlyname: String,
    blockTime: String
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;
exports.Profile = new mongoose.Schema({
    prof: { type: String, required: true },
    friendly: String,
    about: String,
    pic: String,
    orgs: [{ type: ObjectId, ref: 'Org' }],
    entries: [{ type: ObjectId, ref: 'ClaimTime' }],
    isOrg: Boolean,
    git: String
});

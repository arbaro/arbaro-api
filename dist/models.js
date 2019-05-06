"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas");
const mongoose = require("mongoose");
exports.ProfileModel = mongoose.model('Profile', schemas_1.Profile);
exports.OrgModel = mongoose.model('Org', schemas_1.Org);
exports.ClaimTimeModel = mongoose.model('ClaimTime', schemas_1.ClaimTime);

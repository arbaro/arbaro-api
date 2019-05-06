"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const models_1 = require("../../models");
const router = express.Router();
router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const result = yield models_1.ProfileModel.find().select("-_id -__v");
    res.send(result);
}));
router.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { accounts } = req.body;
    const searchTerms = accounts.map(account => ({ prof: account }));
    const profiles = yield models_1.ProfileModel.find({ $or: searchTerms }).select("-_id -__v");
    res.send(profiles);
}));
exports.default = router;

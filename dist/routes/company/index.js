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
const interfaces_1 = require("../../interfaces");
const router = express.Router();
router.get("/:companyName", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { companyName } = req.params;
    const OrgModel = new interfaces_1.Org().getModelForClass(interfaces_1.Org);
    const result = yield OrgModel.findOne({ owner: companyName }).select("-_id -__v");
    res.send(result);
}));
router.get("/:companyName/workEntries", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { companyName } = req.params;
    const ProfileModel = new interfaces_1.Profile().getModelForClass(interfaces_1.Profile);
    const ClaimTimeModel = new interfaces_1.ClaimTime().getModelForClass(interfaces_1.ClaimTime);
    const result = yield ClaimTimeModel.find({ org: companyName }).select("-_id -__v");
    const uniqueUsers = result.map(workEntry => workEntry.worker).filter((value, index, self) => self.indexOf(value) === index);
    const searchTerms = uniqueUsers.map(accountName => ({ prof: accountName }));
    const profiles = yield ProfileModel.find({ $or: searchTerms }).select("-_id -__v");
    const dictionary = profiles.reduce((acc, item) => {
        return Object.assign({}, acc, { [item.prof]: item });
    }, {});
    const data = result.map(({ worker, org, minutes, notes, transactionId, reward, blockTime }) => {
        if (dictionary[worker].pic) {
            const { pic, friendly } = dictionary[worker];
            return ({ worker, org, minutes, notes, transactionId, reward, blockTime, pic, friendly });
        }
        else {
            return { worker, org, minutes, notes, transactionId, reward, blockTime };
        }
    });
    res.send(data);
}));
exports.default = router;

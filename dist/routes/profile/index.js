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
router.get("/:worker", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { worker } = req.params;
    const ClaimTimeModel = new interfaces_1.ClaimTime().getModelForClass(interfaces_1.ClaimTime);
    const ProfileModel = new interfaces_1.Profile().getModelForClass(interfaces_1.Profile);
    // // Could return just this result
    // const result = await ClaimTimeModel.find({ worker }).select("-_id -__v");
    const result = yield ProfileModel.findOne({ prof: worker }).select("-_id -__v");
    if (!result) {
        res.status(404).send();
        return;
    }
    const workEntries = yield ClaimTimeModel.find({ worker: result._id }).select("-_id -__v");
    res.send(workEntries);
    // let entries = result
    // if (entries.length > 0) {
    //     // Extra code used to pull the friendly name of the organisation
    //     // Get unique organisations out of the work entries and pull their data
    //     const uniqueOrgs = result.map(workEntry => workEntry.org).filter((value, index, self) => self.indexOf(value) === index)
    //     const searchTerms = uniqueOrgs.map(orgName => ({ owner: orgName }))
    //     const OrgModel = new Org().getModelForClass(Org);
    //     const orgs = await OrgModel.find({ $or: searchTerms }).select(
    //         "-_id -__v"
    //     );
    //     // Compose a dictionary, orgName => orgFriendlyName
    //     const orgDictionary = {}
    //     orgs.forEach(org => orgDictionary[org.owner] = org.friendlyname)
    //     // Destructure and restructure original data, funky mongoose stuff happens when mutating the objects
    //     const entriesWithFriendly = result.map(({ worker, org, minutes, notes, transactionId, reward, blockTime }) => ({
    //         worker,
    //         org,
    //         minutes,
    //         notes,
    //         transactionId, reward, blockTime,
    //         orgFriendly: orgDictionary[org]
    //     }))
    //     // @ts-ignore
    //     entries = entriesWithFriendly
    // }
    // let profileInstance = await ProfileModel.findOne({ prof: worker }).select("-_id -__v");
    // if (!profileInstance) {
    //     // @ts-ignore
    //     profileInstance = {
    //         prof: worker,
    //         friendly: "",
    //         about: "",
    //         pic: "",
    //         git: ""
    //     }
    // }
    // profileInstance['entries'] = entries.reverse()
    res.send(result);
}));
exports.default = router;

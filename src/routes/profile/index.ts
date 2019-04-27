import * as express from "express";
import { ClaimTime, Profile, Org } from "../../interfaces";

const router = express.Router();

router.get("/:worker", async (req, res) => {
    const { worker } = req.params;

    const ClaimTimeModel = new ClaimTime().getModelForClass(ClaimTime);
    const ProfileModel = new Profile().getModelForClass(Profile);
    // Could return just this result
    const result = await ClaimTimeModel.find({ worker }).select("-_id -__v");

    let entries = result
    if (entries.length > 0) {
        // Extra code used to pull the friendly name of the organisation
        // Get unique organisations out of the work entries and pull their data
        const uniqueOrgs = result.map(workEntry => workEntry.org).filter((value, index, self) => self.indexOf(value) === index)
        const searchTerms = uniqueOrgs.map(orgName => ({ owner: orgName }))
        const OrgModel = new Org().getModelForClass(Org);
        const orgs = await OrgModel.find({ $or: searchTerms }).select(
            "-_id -__v"
        );
        
        // Compose a dictionary, orgName => orgFriendlyName
        const orgDictionary = {}
        orgs.forEach(org => orgDictionary[org.owner] = org.friendlyname)
        
        // Destructure and restructure original data, funky mongoose stuff happens when mutating the objects
        const entriesWithFriendly = result.map(({ worker, org, minutes, notes, transactionId, reward, blockTime}) => ({
            worker,
            org,
            minutes,
            notes,
            transactionId, reward, blockTime, 
            orgFriendly: orgDictionary[org]
        }))
        // @ts-ignore
        entries = entriesWithFriendly
    }


    const profileInstance = await ProfileModel.findOne({ prof: worker }).select("-_id -__v");
    // const profile = {
    //     ...profileInstance,
    //     entries: result
    // }
    profileInstance['entries'] = entries
    res.send(profileInstance);
});

export default router;



import * as express from "express";
import { ProfileModel, ClaimTimeModel } from "../../models"

const router = express.Router();

router.get("/:worker", async (req, res) => {
    const { worker } = req.params;

    // Could return just this result
    const result = await ProfileModel
        .findOne({ prof: worker })
        .populate({ path: 'entries', populate:  {path: 'org', model: 'Org'}})
        .populate('orgs')

    if(!result) {
        res.status(404).send()
        return;
    }
    res.send(result)
    
});

export default router;



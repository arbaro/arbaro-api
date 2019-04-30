import * as express from "express";
import { ClaimTime, Org, Profile } from "../../interfaces";

const router = express.Router();

router.get("/:companyName", async (req, res) => {
  const { companyName } = req.params;

  const OrgModel = new Org().getModelForClass(Org);
  const result = await OrgModel.findOne({ owner: companyName }).select(
    "-_id -__v"
  );
  res.send(result);
});



router.get("/:companyName/workEntries", async (req, res) => {
  const { companyName } = req.params;

  const ProfileModel = new Profile().getModelForClass(Profile);
  const ClaimTimeModel = new ClaimTime().getModelForClass(ClaimTime);
  const result = await ClaimTimeModel.find({ org: companyName }).select("-_id -__v");

  const uniqueUsers = result.map(workEntry => workEntry.worker).filter((value, index, self) => self.indexOf(value) === index)
  const searchTerms = uniqueUsers.map(accountName => ({ prof: accountName }))
  const profiles = await ProfileModel.find({ $or: searchTerms }).select("-_id -__v");
  const dictionary = profiles.reduce((acc, item) => {
     return {...acc, [item.prof] : item}
  }, {})

  const data = result.map(({ worker, org, minutes, notes, transactionId, reward, blockTime }) => {
    if (dictionary[worker].pic) {
      const { pic, friendly } = dictionary[worker]
      return ({ worker, org, minutes, notes, transactionId, reward, blockTime, pic, friendly })
    } else {
      return { worker, org, minutes, notes, transactionId, reward, blockTime }
    }
  })

  res.send(data);


});

export default router;

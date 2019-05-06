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

  const OrgModel = new Org().getModelForClass(Org);
  const ClaimTimeModel = new ClaimTime().getModelForClass(ClaimTime);
  const org = await OrgModel.findOne({ owner: companyName});
  const result = await ClaimTimeModel.find({ org: org._id }).populate('prof').select("-_id -__v");

  res.send(result);


});

export default router;

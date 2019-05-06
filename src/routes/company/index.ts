import * as express from "express";
import {  ClaimTimeModel, OrgModel } from "../../models"


const router = express.Router();

router.get("/:companyName", async (req, res) => {
  const { companyName } = req.params;

  const result = await OrgModel.findOne({ owner: companyName }).select(
    "-_id -__v"
  );
  res.send(result);
});



router.get("/:companyName/workEntries", async (req, res) => {
  const { companyName } = req.params;
  const org = await OrgModel.findOne({ owner: companyName});
  const result = await ClaimTimeModel.find({ org: org._id }).populate('prof').select("-_id -__v");

  res.send(result);
});

export default router;

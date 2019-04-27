import * as express from "express";
import { ClaimTime, Org } from "../../interfaces";

const router = express.Router();

router.get("/:companyName", async (req, res) => {
  const { companyName } = req.params;

  const OrgModel = new Org().getModelForClass(Org);
  const result = await OrgModel.findOne({ owner: companyName }).select(
    "-_id -__v"
  );
  res.send(result);
});

/**
 * Represents a book.
 * @constructor
 */
router.get("/:companyName/workEntries", async (req, res) => {
  const { companyName } = req.params;

  const ClaimTimeModel = new ClaimTime().getModelForClass(ClaimTime);
  const result = await ClaimTimeModel.find({ org: companyName }).select("-_id -__v");
  res.send(result);
});

export default router;

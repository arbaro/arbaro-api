import * as express from "express";
import { ClaimTime } from "../../interfaces";

const router = express.Router();

router.get("/:companyName/workEntries", async (req, res) => {
  const { companyName } = req.params;

  const ClaimTimeModel = new ClaimTime().getModelForClass(ClaimTime);
  const result = await ClaimTimeModel.find().select("-_id -__v");
  res.send(result);
});

export default router;

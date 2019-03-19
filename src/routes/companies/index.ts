import * as express from "express";
import { Org } from "../../interfaces";

const router = express.Router();

/**
 * Represents a book.
 * @constructor
 */
router.get("/", async (req, res) => {
  const OrgModel = new Org().getModelForClass(Org);
  const result = await OrgModel.find().select("-_id -__v");
  res.send(result);
});

export default router;

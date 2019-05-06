import * as express from "express";
import { OrgModel } from "../../models"

const router = express.Router();

/**
 * Represents a book.
 * @constructor
 */
router.get("/", async (req, res) => {
  const result = await OrgModel.find().select("-_id -__v");
  res.send(result);
});

export default router;

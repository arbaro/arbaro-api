import * as express from "express";
import { Profile } from "../../interfaces";

const router = express.Router();

router.get("/", async (req, res) => {
  const ProfileModel = new Profile().getModelForClass(Profile);
  const result = await ProfileModel.find().select("-_id -__v");
  res.send(result);
});

export default router;

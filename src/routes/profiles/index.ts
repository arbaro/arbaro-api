import * as express from "express";
import { Profile } from "../../interfaces";

const router = express.Router();
const ProfileModel = new Profile().getModelForClass(Profile);

router.get("/", async (req, res) => {
  const result = await ProfileModel.find().select("-_id -__v");
  res.send(result);
});

router.post("/", async (req, res) => {
    const { accounts } = req.body
    const searchTerms = accounts.map(account => ({ prof: account }))
    const profiles = await ProfileModel.find({ $or: searchTerms }).select(
        "-_id -__v"
    );
    res.send(profiles)
})

export default router;

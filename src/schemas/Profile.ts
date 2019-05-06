import * as mongoose from "mongoose";
var ObjectId = mongoose.Schema.Types.ObjectId;

export const Profile = new mongoose.Schema({
    prof: { type: String, required: true },
    friendly: String,
    about: String,
    pic: String,
    orgs: [{ type: ObjectId, ref: 'Org' }],
    entries: [{ type: ObjectId, ref: 'ClaimTime' }],
    isOrg: Boolean,
    git: String
})

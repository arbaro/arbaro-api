import { ClaimTime, Org, Profile } from './schemas'
import * as mongoose from 'mongoose';

export const ProfileModel = mongoose.model('Profile', Profile)
export const OrgModel = mongoose.model('Org', Org)
export const ClaimTimeModel = mongoose.model('ClaimTime', ClaimTime)

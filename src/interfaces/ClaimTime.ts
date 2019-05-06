import { prop, Typegoose, Ref } from "typegoose";
import { Profile, Org } from './index'

export class ClaimTime extends Typegoose {

    @prop({ ref: Profile })
    prof: Ref<Profile>;
  
    @prop({ ref: Org })
    org: Ref<Org>;
  
    @prop()
    minutes: number;
  
    @prop()
    notes: string;
  
    @prop()
    transactionId: string;
  
    @prop()
    reward: {
      amount: number;
      symbol: string;
    };
  
    @prop()
    blockTime: string;
  }
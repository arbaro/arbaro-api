import { prop, Typegoose, ModelType, InstanceType } from "typegoose";

export class ClaimTime extends Typegoose {
  @prop()
  worker: string;

  @prop()
  dechours: number;

  @prop()
  notes: string;

  @prop()
  transactionId: string;

  @prop()
  role: string;

  @prop()
  reward: {
    amount: number;
    symbol: string;
  };

  @prop()
  blockTime: Date;
}

export class Org extends Typegoose {
  @prop()
  owner: string;

  @prop()
  tokensym: string;

  @prop()
  tokencon: string;

  @prop()
  friendlyname: string;

  @prop()
  blockTime: Date;
}

import { prop, Typegoose, ModelType, InstanceType } from "typegoose";

export class ClaimTime extends Typegoose {
  @prop()
  worker: string;

  @prop()
  minutes: number;

  @prop()
  notes: string;

  @prop()
  transactionId: string;

  @prop()
  org: string;

  @prop()
  reward: {
    amount: number;
    symbol: string;
  };

  @prop()
  blockTime: string;
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
  blockTime: string;
}

export class Profile extends Typegoose {
  @prop()
  prof: string;

  @prop()
  friendly?: string

  @prop()
  about?: string

  @prop()
  pic?: string;

  @prop()
  entries: ClaimTime[]
}


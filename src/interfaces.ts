import { prop, Typegoose, Ref, InstanceType } from "typegoose";

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
  @prop({ unique: true })
  prof: string;

  @prop()
  friendly?: string;

  @prop()
  about?: string;

  @prop()
  pic?: string;

  @prop({ ref: Org, unique: true })
  orgs?: Ref<Org>[];

  @prop({ ref: ClaimTime })
  entries: Ref<ClaimTime>[];

  @prop()
  isOrg: boolean;


  @prop()
  git?: string;
}

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


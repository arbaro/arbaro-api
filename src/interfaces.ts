import { prop, Typegoose, ModelType, InstanceType } from "typegoose";

export class ClaimTime extends Typegoose {
  @prop()
  worker: string;

  @prop()
  dechours: string;

  @prop()
  notes: string;

  @prop()
  transactionId: string;
}

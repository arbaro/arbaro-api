import { prop, Typegoose, Ref } from "typegoose";


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
  
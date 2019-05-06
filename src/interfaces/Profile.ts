import { prop, Typegoose, Ref, arrayProp } from "typegoose";
import { Org, ClaimTime } from './index';

export class Profile extends Typegoose {
    @prop({ unique: true })
    prof: string;

    @prop()
    friendly?: string;

    @prop()
    about?: string;

    @prop()
    pic?: string;

    @arrayProp({ itemsRef: Org, unique: true })
    orgs: Ref<Org>[];

    @arrayProp({ itemsRef: ClaimTime })
    entries?: Ref<ClaimTime>[];

    @prop()
    isOrg: boolean;


    @prop()
    git?: string;
}
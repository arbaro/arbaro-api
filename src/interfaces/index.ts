export { ClaimTime } from './ClaimTime';
export { Profile } from './Profile';
export { Org } from './Org';

export interface Data {
    worker: string;
    dechours: string;
    notes: string;
}

export interface Authorization {
    actor: string;
    permission: string;
}

export interface BlockMeta {
    blockTime?: Date;
    blockHash?: string;
    blockNum?: string;
    transactionId: string;
}

export interface GenericTx<Data> {
    authorization: Authorization;
    data: Data;
    blockMeta: BlockMeta;
}

export interface Handler {
    versionName: string;
    actionType: string;
    apply: (payload: GenericTx<any>) => Promise<void>;
}

export interface ActionTraceInput {
    account: string;
    action_name: string;
}

export interface upsertroleAction {
    org: string;
    worker: string;
    payrate: string;
    active: string;
}

export interface upsertprofAction {
    prof: string;
    friendly: string;
    about: string;
    pic: string;
    git: string;
}

export interface upsertorgAction {
    owner: string;
    tokensym: string;
    tokencon: string;
    friendlyname: string;
}

export interface claimtimeAction {
    worker: string;
    org: string;
    minutes: string;
    notes: string;
}
import { Action } from '@ngrx/store';
import { Fb } from './fb.model';

export enum FbActionTypes {
  UPSERT_ONE = '[fb] Upsert_one',
  UPSERT_ALL = '[fb] Upsert_all',
  UPDATE = '[fb] Update',
  RESET = '[fb] Reset',
  DELETE_ONE = '[fb] Delete_one_'
}



export class ActionfbUpsertAll implements Action {
  readonly type = FbActionTypes.UPSERT_ALL;
  constructor(readonly payload: { fbs: any }) {}
}

export class ActionfbUpsertOne implements Action {
  readonly type = FbActionTypes.UPSERT_ONE;
  constructor(readonly payload: { fb: Fb }) {}
}

export class ActionfbDeleteOne implements Action {
  readonly type = FbActionTypes.DELETE_ONE;
  constructor(readonly payload: { id: string }) {}
}

export class ActionfbUpdate implements Action {
  readonly type = FbActionTypes.UPDATE;
  constructor(readonly payload: { fb: Fb }) {}
}

export class ActionfbReset implements Action {
  readonly type = FbActionTypes.RESET;
}




export type FbActions =
  | ActionfbUpdate
  | ActionfbReset
  | ActionfbUpsertOne
  | ActionfbDeleteOne
  | ActionfbUpsertAll

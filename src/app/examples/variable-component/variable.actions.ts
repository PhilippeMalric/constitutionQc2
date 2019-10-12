import { Action } from '@ngrx/store';
import { Variable } from './variable.model';

export enum variableActionTypes {
  UPSERT_ONE = '[variable] Upsert_one',
  UPSERT_ALL = '[variable] Upsert_all',
  UPDATE = '[variable] Update',
  RESET = '[variable] Reset',
  DELETE_ONE = '[variable] Delete_one_'
}



export class ActionVariableUpsertAll implements Action {
  readonly type = variableActionTypes.UPSERT_ALL;
  constructor(readonly payload: { variables: any }) {}
}

export class ActionVariableUpsertOne implements Action {
  readonly type = variableActionTypes.UPSERT_ONE;
  constructor(readonly payload: { variable: Variable }) {}
}

export class ActionVariableDeleteOne implements Action {
  readonly type = variableActionTypes.DELETE_ONE;
  constructor(readonly payload: { id: string }) {}
}

export class ActionVariableUpdate implements Action {
  readonly type = variableActionTypes.UPDATE;
  constructor(readonly payload: { variable: Variable }) {}
}

export class ActionVariableReset implements Action {
  readonly type = variableActionTypes.RESET;
}




export type VariableActions =
  | ActionVariableUpdate
  | ActionVariableReset
  | ActionVariableUpsertOne
  | ActionVariableDeleteOne
  | ActionVariableUpsertAll

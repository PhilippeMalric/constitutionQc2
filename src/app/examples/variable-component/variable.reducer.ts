import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Vote, VoteState } from './vote.model';
import { Variable, VariableState } from './Variable.model';
import { VariableActions, variableActionTypes } from './Variable.actions';

export function sortByEtat(a: Variable, b: Variable): number {
  return a.fromText.localeCompare(b.fromText);
}

export const VariableAdapter: EntityAdapter<Variable> = createEntityAdapter<Variable>({
  sortComparer: sortByEtat
});

export const initialState: VariableState = VariableAdapter.getInitialState({
  ids: [],
  entities: {}
});

export function VariableReducer(
  state: VariableState = initialState,
  action: VariableActions
): VariableState {
  switch (action.type) {
    case variableActionTypes.UPSERT_ONE:
      console.log('action.payload.vote');
      console.log(action.payload.variable);
      console.log("state")
      console.log(state)
      return VariableAdapter.upsertOne(action.payload.variable, state);


    case variableActionTypes.UPSERT_ALL:
        console.log("state")
        console.log(state)
        console.log('action.payload.');
        console.log(action.payload.variables);
        let Variables: any = []

        Variables = action.payload.variables.ids.map((id)=>action.payload.variables.entities[id])

      return VariableAdapter.upsertMany(Variables, state);

    case variableActionTypes.UPSERT_ALL:
      return VariableAdapter.removeAll(state);


    case variableActionTypes.UPSERT_ONE:
      return VariableAdapter.upsertOne(action.payload.variable, state);

    case variableActionTypes.DELETE_ONE:
      return VariableAdapter.removeOne(action.payload.id, state);

    case variableActionTypes.RESET:
      return initialState;



    default:
      return state;
  }
}

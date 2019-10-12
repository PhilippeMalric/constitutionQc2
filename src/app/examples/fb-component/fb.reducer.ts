import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Vote, VoteState } from './vote.model';
import { Fb, FbState } from './Fb.model';
import { FbActions, FbActionTypes } from './Fb.actions';

export function sortByEtat(a: Fb, b: Fb): number {
  return a.fromText.localeCompare(b.fromText);
}

export const FbAdapter: EntityAdapter<Fb> = createEntityAdapter<Fb>({
  sortComparer: sortByEtat
});

export const initialState: FbState = FbAdapter.getInitialState({
  ids: [],
  entities: {}
});

export function FbReducer(
  state: FbState = initialState,
  action: FbActions
): FbState {
  switch (action.type) {
    case FbActionTypes.UPSERT_ONE:
      console.log('action.payload.vote');
      console.log(action.payload.fb);
      console.log("state")
      console.log(state)
      return FbAdapter.upsertOne(action.payload.fb, state);


    case FbActionTypes.UPSERT_ALL:
        console.log("state")
        console.log(state)
        console.log('action.payload.');
        console.log(action.payload.fbs);
        let Fbs: any = []

        Fbs = action.payload.fbs.ids.map((id)=>action.payload.fbs.entities[id])

      return FbAdapter.upsertMany(Fbs, state);

    case FbActionTypes.UPSERT_ALL:
      return FbAdapter.removeAll(state);


    case FbActionTypes.UPSERT_ONE:
      return FbAdapter.upsertOne(action.payload.fb, state);

    case FbActionTypes.DELETE_ONE:
      return FbAdapter.removeOne(action.payload.id, state);

    case FbActionTypes.RESET:
      return initialState;



    default:
      return state;
  }
}

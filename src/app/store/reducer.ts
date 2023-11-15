import { createReducer, on } from '@ngrx/store';
import { updateRemovedState, updateCheckedState } from './actions';
import { AppState } from '../models/AppState.interface';

export const initialState: AppState = {
  app: {
    removed: false
  },
  removed: false,
};

export const appReducer = createReducer(
    initialState,
    on(updateRemovedState, (state, { removed }) => {
        return { ...state, removed } as AppState;
    }),
  );
  
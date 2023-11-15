import { createAction, props } from '@ngrx/store';

export const updateRemovedState = createAction(
    '[Employee] Update Removed State',
    props<{ removed?: boolean }>()
  );
  
  export const updateCheckedState = createAction(
    '[Employee] Update Checked State',
    props<{ checked?: boolean }>()
  );
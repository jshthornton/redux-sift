import { createReducer } from 'redux-create-reducer';
import Immutable from 'immutable';
import {
  M_RESET,
  M_ADD_FILTER,
  M_REMOVE_FILTER
} from '../messages';

export const initialState = new Immutable.Map({});

const reducer = createReducer(initialState, {
  [M_ADD_FILTER]: (state, action) => {
    return state.set(action.payload.key, action.payload.value);
  },
  [M_RESET]: (state, action) => {
    return initialState;
  },
  [M_REMOVE_FILTER]: (state, action) => {
    return state.delete(action.payload);
  }
});

export default reducer;
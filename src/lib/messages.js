import { createAction } from 'redux-actions';

export const NAMESPACE = 'redux-sift';

export const M_RESET = `${NAMESPACE}/M_RESET`;
export const M_ADD_FILTER = `${NAMESPACE}/M_ADD_FILTER`;
export const M_INITALIZE = `${NAMESPACE}/M_INITALIZE`;
export const M_DESTROY = `${NAMESPACE}/M_DESTROY`;
export const M_REMOVE_FILTER = `${NAMESPACE}/M_REMOVE_FILTER`;

export const initialize = createAction(M_INITALIZE);
export const addFilter = createAction(M_ADD_FILTER);
export const destroy = createAction(M_DESTROY);
export const reset = createAction(M_RESET);
export const removeFilter = createAction(M_REMOVE_FILTER);
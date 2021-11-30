import { SET_CURRENT_USER, SET_CURRENT_USER_ERROR, SIGN_OUT } from '../action-types';

export const onCurrentUser = (currentUser) => ({ type: SET_CURRENT_USER, payload: currentUser });
export const onCurrentUserError = () => ({ type: SET_CURRENT_USER_ERROR });
export const onSignout = () => ({ type: SIGN_OUT });

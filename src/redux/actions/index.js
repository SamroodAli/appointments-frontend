import { SET_CURRENT_USER, SET_CURRENT_USER_ERROR, SIGN_OUT } from '../action-types';

export const onCurrentUser = (currentUser) => ({ type: SET_CURRENT_USER, payload: currentUser });
export const onCurrentUserError = (message) => ({ type: SET_CURRENT_USER_ERROR, payload: message });
export const onSignout = () => ({ type: SIGN_OUT });

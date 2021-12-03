import {
  SET_CURRENT_USER, SET_CURRENT_USER_ERROR, SIGN_OUT, SET_REDIRECT_ROUTE,
} from '../action-types';

export const onCurrentUser = (currentUser) => ({ type: SET_CURRENT_USER, payload: currentUser });
export const onCurrentUserError = (message) => {
  let payload;
  if (typeof message === 'string') {
    payload = [message];
  } else if (Array.isArray(message)) {
    payload = message;
  } else {
    payload = 'An error occurred, please sign in';
  }

  return ({ type: SET_CURRENT_USER_ERROR, payload });
};
export const onSignout = () => ({ type: SIGN_OUT });

export const onRedirect = (route) => ({ type: SET_REDIRECT_ROUTE, payload: route });

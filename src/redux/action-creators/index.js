import rails from '../../api/rails';
import {
  onCurrentUser,
  onCurrentUserError,
  onRedirect,
  onSignout,
} from '../actions';

export const autoSignin = (username) => onCurrentUser(username);
export const signinError = (message) => onCurrentUserError(message);

export function signup(
  username,
  email,
  password,
  passwordConfirmation,
  navigate,
) {
  return async function reduxThunkSignUp(dispatch, getState) {
    const { redirect } = getState();

    try {
      const { data } = await rails.post('/auth/signup', {
        user: {
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
      dispatch(onCurrentUser(data.username));
      navigate(redirect);
    } catch (err) {
      dispatch(onCurrentUserError(err.response.data));
    }
  };
}

export function signin(email, password, navigate) {
  return async function reduxThunkSignin(dispatch, getState) {
    const { redirect } = getState();

    try {
      const { data } = await rails.post('/auth/signin', {
        auth: {
          email,
          password,
        },
      });
      if (data) {
        dispatch(onCurrentUser(data.username));
      }
      if (navigate) {
        navigate(redirect);
      }
    } catch (err) {
      dispatch(onCurrentUserError('Invalid credentials'));
    }
  };
}

export function signout() {
  return async function reduxThunkSignout(dispatch) {
    try {
      await rails.delete('/auth/signout');
      dispatch(onSignout());
    } catch (err) {
      dispatch(onCurrentUser(null));
    }
  };
}

export const storeRedirect = (route) => onRedirect(route);

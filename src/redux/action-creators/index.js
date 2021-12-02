import rails from '../../api/rails';
import { onCurrentUser, onCurrentUserError, onSignout } from '../actions';

export const autoSignin = (username) => onCurrentUser(username);
export const signinError = (message) => onCurrentUserError(message);

export const signup = (
  username,
  email,
  password,
  passwordConfirmation, navigate,
) => async (dispatch, getState) => {
  const { currentUser } = getState();

  if (currentUser.username) {
    return;
  }

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
    navigate('/');
  } catch (err) {
    dispatch(onCurrentUserError('Invalid credentials'));
  }
};

export const signin = (email, password, navigate) => async (dispatch, getState) => {
  const { currentUser } = getState();

  if (currentUser.username) {
    return;
  }

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
      navigate('/');
    }
  } catch (err) {
    dispatch(onCurrentUserError('Invalid credentials'));
  }
};

export const signout = () => async (dispatch) => {
  try {
    await rails.delete('/auth/signout');
    dispatch(onSignout());
  } catch (err) {
    console.error(err);
  }
};

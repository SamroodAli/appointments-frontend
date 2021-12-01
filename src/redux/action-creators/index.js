import rails from '../../api/rails';
import { onCurrentUser, onCurrentUserError, onSignout } from '../actions';

const signup = (
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
    if (navigate) {
      navigate('/');
    }
  } catch (err) {
    dispatch(onCurrentUserError('Invalid credentials'));
  }
};

const signin = (email, password, navigate) => async (dispatch, getState) => {
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

    dispatch(onCurrentUser(data.username));
    if (navigate) {
      navigate('/');
    }
  } catch (err) {
    dispatch(onCurrentUserError('Invalid credentials'));
  }
};

export const signout = (navigate) => async (dispatch) => {
  try {
    await rails.delete('/auth/signout');
    dispatch(onSignout());
    if (navigate) {
      navigate('/');
    }
  } catch (err) {
    console.error(err);
  }
};

export const getCurrentUser = (navigate) => async (dispatch) => {
  try {
    const { data } = await rails.get('/auth/current_user');
    dispatch(onCurrentUser(data.username));
    navigate('/');
    if (navigate) {
      navigate('/');
    }
  } catch (err) {
    console.error(err);
  }
};

const signinError = (message) => onCurrentUserError(message);

export default {
  signin, signout, getCurrentUser, signinError, signup,
};

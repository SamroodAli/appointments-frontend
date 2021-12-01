import rails from '../../api/rails';
import { onCurrentUser, onCurrentUserError, onSignout } from '../actions';

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
    dispatch(onCurrentUserError());
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

export default { signin, signout, getCurrentUser };

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

export const signout = () => async (dispatch) => {
  try {
    await rails.delete('/auth/signout');
    dispatch(onSignout());
  } catch (err) {
    console.error(err);
  }
};

export default { signin };

import rails from '../../api/rails';
import { onCurrentUser, onCurrentUserError } from '../actions';

const signin = (email, password) => async (dispatch, getState) => {
  const { currentUser } = getState();

  if (currentUser) {
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
  } catch (err) {
    dispatch(onCurrentUserError());
  }
};

export default signin;

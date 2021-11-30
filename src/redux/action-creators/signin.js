import rails from '../../api/rails';
import { setCurrentUser } from '../actions';

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

    dispatch(setCurrentUser(data.username));
  } catch (err) {
  }
};

export default signin;

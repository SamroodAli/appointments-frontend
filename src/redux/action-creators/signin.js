import rails from '../../api/rails';
import currentUser from '../reducers/current-user';

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

    dispatch(currentUser(data.currentUser));
  } catch (err) {
    console.error(err);
  }
};

export default signin;

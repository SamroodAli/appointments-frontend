import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_ERROR,
  SIGN_OUT,
} from '../action-types';

const initialState = {
  username: '',
  errorMessage: '',
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return { username: action.payload, errorMessage: '' };
    }
    case SET_CURRENT_USER_ERROR: {
      return { username: '', errorMessage: 'Invalid credentials' };
    }
    case SIGN_OUT: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default currentUser;

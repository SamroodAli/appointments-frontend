import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_ERROR,
  SIGN_OUT,
} from '../action-types';

const initialState = {
  username: '',
  errorMessages: [],
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return { username: action.payload, errorMessages: [] };
    }
    case SET_CURRENT_USER_ERROR: {
      return { username: '', errorMessages: action.payload };
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

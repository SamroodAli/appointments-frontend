import { SET_REDIRECT_ROUTE } from '../action-types';

const initialState = '/';

const redirect = (state = initialState, action) => {
  switch (action.type) {
    case SET_REDIRECT_ROUTE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default redirect;

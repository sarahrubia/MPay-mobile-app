import { AUTHENTICATE, LOGOUT } from './actions';

const initialState = {
  token: undefined,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return { token: action.payload };
    case LOGOUT:
      return { token: undefined };
    default:
      return state;
  }
}

export default authReducer;

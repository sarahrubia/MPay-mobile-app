export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = token => {
  return {
    type: AUTHENTICATE,
    payload: token,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

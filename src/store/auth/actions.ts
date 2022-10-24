export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export function authenticate(token) {
  return {
    type: AUTHENTICATE,
    payload: token,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

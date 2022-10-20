const initialState = {
  email: '',
  password: '',
};

function loginAuth(state = initialState, action) {
  switch (action.type) {
    case 'login/success':
      return {
        ...state,
        email: state.email === 'teste@teste.com',
        password: state.password === 'teste123',
      };
    case 'login/failed':
      return {
        ...state,
        email: state.email !== 'teste@teste.com',
        password: state.password !== 'teste123',
      };
    default:
      return state;
  }
}

export default loginAuth;

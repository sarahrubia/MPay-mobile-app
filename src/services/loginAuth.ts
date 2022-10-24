async function loginAuth(email: string, password: string) {
  const data = { email, password };

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    'https://simple-auth-node.herokuapp.com/auth/login',
    requestOptions,
  );

  if (response.status !== 200) {
    throw new Error('Login incorreto, tente novamente.');
  }

  const result = await response.json();
  return result.token;
}

export default loginAuth;

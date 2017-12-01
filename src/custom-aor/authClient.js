import { AUTH_LOGIN } from 'admin-on-rest';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request(`${process.env.REACT_APP_API_URL}/authenticate`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })

    return fetch(request)
      .then(response => {
        console.log('authentication response: ', response);
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        console.log('setting token: ', token);
        localStorage.setItem('user', token);
      })
  }
  return Promise.resolve();
}

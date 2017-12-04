import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'admin-on-rest';

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
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((user) => {
        console.log('setting token: ', user);
        localStorage.setItem('user', JSON.stringify(user));
        return Promise.resolve(user);
      })
      .catch((e) => {
        console.error('Error during authentication: ', e);
      });
  }
  if (type === AUTH_LOGOUT) {
    console.log('Logging out!');
    localStorage.removeItem('user');
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    console.log('Seems like there is an Auth_Error');
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    console.log('Doing an Auth_Check!');

    return Promise.resolve();
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user && user.roles) {
        return Promise.resolve(user.roles)
      }
    } else {
      return Promise.resolve([])
    }


  }
  return Promise.reject('Unknown method');
}

import { jsonServerRestClient, fetchUtils } from 'admin-on-rest';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const user = localStorage.getItem('user');
  console.log('user in restClient: ', user);
  if (user) {
    options.headers.set('Authorization', `Bearer ${user.token}`);
  }
  return fetchUtils.fetchJson(url, options);
}

const restClient = jsonServerRestClient(process.env.REACT_APP_API_URL, httpClient);

export { restClient };

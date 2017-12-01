import { jsonServerRestClient, fetchUtils } from 'admin-on-rest';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const restClient = jsonServerRestClient(process.env.REACT_APP_API_URL, httpClient);

export { restClient };

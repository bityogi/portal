import { simpleRestClient } from 'admin-on-rest';

const restClient = simpleRestClient(process.env.REACT_APP_API_URL);

export { restClient };

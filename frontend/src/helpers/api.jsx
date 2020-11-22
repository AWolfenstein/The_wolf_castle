import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

const apiEndpoint = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiEndpoint,
  headers: {
    'Content-type': 'application/json-patch+json',
    'Cache-Control': 'no-cache,no-store,must-revalidate,max-age=-1,private',
  },
});

export { api };

export default makeUseAxios({
  axios: api,
});

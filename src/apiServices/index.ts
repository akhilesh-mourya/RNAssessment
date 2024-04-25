import axios from 'axios';
import {BASE_URL} from '@env';

const api = axios.create({
  baseURL: BASE_URL,
});
console.log('BASE ULR  ====> ', BASE_URL);
api.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;

import axios, { AxiosError } from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

export const request = axios.create({
  baseURL,
  timeout: 100000,
});

const instance = axios.create({
  baseURL,
  timeout: 100000,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

export default instance;

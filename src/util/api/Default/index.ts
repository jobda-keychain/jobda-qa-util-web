import axios, { AxiosError } from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL,
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

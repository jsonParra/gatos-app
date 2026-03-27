import axios from 'axios';
import Config from 'react-native-config';
const Key = Config.API_KEY;
const url = Config.API_URL;

const defaultOptions = {
  baseURL: url,
  params: {
    api_key: Key,
    limit: 20,
  },
};

export const theCatApi = axios.create(defaultOptions);
theCatApi.interceptors.request.use(
  async config => config,
  error => {
    return Promise.reject(error);
  },
);

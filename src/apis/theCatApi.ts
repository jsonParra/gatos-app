import axios from 'axios';

const apiKey =
  'live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr';

const defaultOptions = {
  baseURL: 'http://api.thecatapi.com/v1/',
  params: {
    api_key: apiKey,
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

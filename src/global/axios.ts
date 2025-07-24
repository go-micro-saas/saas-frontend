import axios, {AxiosError} from 'axios'
import {MyProjectStore} from "./store_instance.ts"
import {HasValidAccessToken, NeedRefreshAccessToken} from "./store_helper.ts";

const {authToken} = MyProjectStore();

const MyHTTPClient = axios.create({
  baseURL: '',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request
MyHTTPClient.interceptors.request.use(
  (config) => {
    if (HasValidAccessToken()) {
      config.headers.Authorization = "Bearer " + authToken.accessToken;
    }
    if (NeedRefreshAccessToken()) {
      console.log("==> need refresh access token");
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// reply
MyHTTPClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('Client1 API error:', error);
    return Promise.reject(error);
  }
);

export default MyHTTPClient;
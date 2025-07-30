import axios, {AxiosError} from 'axios'
import {ProjectStore} from "@src/global/store/store_instance.ts";
import {HasValidAccessToken, NeedRefreshAccessToken} from "@src/global/store/store_helper.ts";
import {toast} from '@src/global/toast/toast_service.ts';


const MyHTTPClient = axios.create({
  baseURL: '',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

// request
MyHTTPClient.interceptors.request.use(
  (config) => {
    const authToken = ProjectStore.getState().authToken;
    if (HasValidAccessToken(authToken)) {
      config.headers.Authorization = "Bearer " + authToken.accessToken;
    }
    // const refreshAccessToken = NeedRefreshAccessToken()
    if (NeedRefreshAccessToken(authToken)) {
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
    toast.error({message: error.message});
    console.log('==> error', error);
    return Promise.reject(error);
  }
);

export default MyHTTPClient;
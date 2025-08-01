import axios, {AxiosError} from 'axios'
import {ProjectStore} from "@src/global/store/store_instance.ts";
import {HasValidAccessToken, Logout, NeedRefreshAccessToken} from "@src/global/store/store_helper.ts";
import {toast} from '@src/global/toast/toast_service.ts';
import {
  GetReasonCodeFromReplyHeader,
  GetReplyHeaderFromResponseData,
  GetStatusFromAxiosResponse,
  GetTipMessage
} from "@src/global/axios/axios_data.tsx";


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
      void 1;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// reply
MyHTTPClient.interceptors.response.use(
  (response) => {
    const replyHeader = GetReplyHeaderFromResponseData(response?.data);
    const reasonCode = GetReasonCodeFromReplyHeader(replyHeader);
    if (reasonCode != 0 && (reasonCode < 200 || reasonCode >= 300)) {
      toast.error({message: GetTipMessage(GetStatusFromAxiosResponse(response), replyHeader)});
    }
    if (reasonCode === 401) {
      Logout()
    }
    return response.data;
  },
  (error: AxiosError) => {
    //console.log('==> axios api error', error);
    const status = GetStatusFromAxiosResponse(error.response);
    const replyHeader = GetReplyHeaderFromResponseData(error.response?.data);
    toast.error({message: GetTipMessage(status, replyHeader)});
    if (status.status === 401) {
      Logout()
    }
    return Promise.reject(error);
  }
);

export default MyHTTPClient;
import {MyProjectStore} from "./store_instance.ts";
import type {AuthToken, UserInfo} from "@src/global/store/store_const.ts";

export const Signup = (authToken: AuthToken, userInfo: UserInfo) => {
  const {setAuthToken, setUserInfo} = MyProjectStore();
  setAuthToken(authToken);
  setUserInfo(userInfo);
}

export const Logout = () => {
  const {setAuthToken, setUserInfo, setCompanyInfo} = MyProjectStore();
  setAuthToken({});
  setUserInfo({});
  setCompanyInfo({});
}

export const HasValidAccessToken = () => {
  const {authToken} = MyProjectStore();
  const nowUnix = Math.ceil((new Date()).getTime() / 1000);


  return authToken.accessTokenExpires && authToken.accessTokenExpires > nowUnix &&
    authToken.accessToken && authToken.accessToken.length > 0;
}

export const NeedRefreshAccessToken = () => {
  const {authToken} = MyProjectStore();
  const nowUnix = Math.ceil((new Date()).getTime() / 1000);
  // invalid refresh token
  if (!authToken.refreshTokenExpires || authToken.refreshTokenExpires <= nowUnix ||
    !authToken.refreshToken || authToken.refreshToken.length < 1) {
    return false
  }

  // invalid access token
  if (!authToken.accessTokenExpires || authToken.accessTokenExpires <= nowUnix ||
    !authToken.accessToken || authToken.accessToken.length < 1) {
    return true
  }

  // Expires in 10 minutes
  const expiresIn = 10 * 60;
  return (authToken.accessTokenExpires || 0) + expiresIn >= nowUnix;
}

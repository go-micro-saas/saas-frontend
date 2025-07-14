import {MyProjectStore} from "./store.tsx";
import type {AuthToken, UserInfo} from "@src/global/store_const.tsx";

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
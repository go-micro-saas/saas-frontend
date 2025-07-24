import {MyProjectStore} from "./store_instance.ts";
import type {AuthToken, UserInfo} from "@src/global/store_const.ts";

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
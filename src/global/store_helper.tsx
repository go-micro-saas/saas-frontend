import {ProjectStore} from "./store.tsx";
// import type {MyStore} from "@src/global/store_const.tsx";

// export const GetAuthToken = () => {
//   return ProjectStore((state: MyStore) => state.userInfo);
// }

// export const Signup = (authToken: AuthToken, userInfo: UserInfo) => {
//   ProjectStore((state: MyStore) => {
//     state.setAuthToken(authToken);
//     state.setUserInfo(userInfo);
//   });
// }

// export const Logout = () => {
//   ProjectStore((state: MyStore) => {
//     state.setAuthToken({});
//     state.setUserInfo({});
//     state.setCompanyInfo({});
//   });
// }

export const GetVerifyCodeTime = () => {
  return ProjectStore(state => state.verifyCodeTime);
}

// export const SetLoginVerifyCodeTime = (time: number) => {
//   ProjectStore((state: MyStore) => {
//     state.setLoginVerifyCodeTime(time);
//   });
// }
//
// export const SetSignupVerifyCodeTime = (time: number) => {
//   ProjectStore((state: MyStore) => {
//     state.setSignupVerifyCodeTime(time);
//   });
// }

export const SetResetPasswordVerifyCodeTime = (time: number) => {
  console.log("==> time:", time);
  const t = ProjectStore(state => state.verifyCodeTime);
  console.log(t);
  // const newCodeTime = {...verifyCodeTime, resetPasswdVerifyCodeTime: time};
  //
  // const setVerifyCodeTime = ProjectStore((state) => state.setVerifyCodeTime);
  // setVerifyCodeTime(newCodeTime);
}
import {type LoginParam} from "@src/components/auth/validate_rule/form_values.ts";
import MD5 from 'crypto-js/md5';
import {
  type Resourcev1LoginByEmailReq, type Resourcev1LoginByPhoneReq,
  type Resourcev1LoginResp,
} from "@src/apis/api/backend_auth.service.v1/data-contracts"
import {ApiClient} from "@src/apis/api/backend_auth.service.v1/Api.ts"
import {CheckEmail, CheckPhone} from "@src/global/rule/validate_rules.ts";
import {WrapApiResponse, type ApiResult} from "@src/apis/api/wrap_api.ts";
import {Login as SetLoginStore} from '@src/global/store/store_helper.ts';
import type {AuthToken, UserInfo} from "@src/global/store/store_const.ts";


export const Login = async (param: LoginParam) => {
  if (CheckEmail(param.account)) {
    return await LoginByEmailAndPassword(param);
  } else if (CheckPhone(param.account)) {
    return await LoginByPhoneAndPassword(param);
  }
  const res: ApiResult<Resourcev1LoginResp> = {
    resp: {},
    err: new Error("账号格式错误"),
  }
  return res;
}

export const LoginByEmailAndPassword = async (param: LoginParam) => {
  const req: Resourcev1LoginByEmailReq = {
    email: param.account,
    password: MD5(param.password).toString(),
    code: "",
  };
  const res = await WrapApiResponse(ApiClient.srvSaasBackendAuthV1LoginByEmail(req));
  if (res.err) {
    return res;
  }
  SetLoginState(res.resp as Resourcev1LoginResp);
  return res;
}

export const LoginByPhoneAndPassword = async (param: LoginParam) => {
  const req: Resourcev1LoginByPhoneReq = {
    phone: param.account,
    password: MD5(param.password).toString(),
    code: "",
  };
  const res = await WrapApiResponse(ApiClient.srvSaasBackendAuthV1LoginByPhone(req))
  if (res.err) {
    return res;
  }
  SetLoginState(res.resp as Resourcev1LoginResp);
  return res;
}

export const SetLoginState = (resp: Resourcev1LoginResp) => {
  const data = resp.data;
  if (!data) {
    return;
  }
  const authToken: AuthToken = {
    accessToken: data.access_token,
    accessTokenExpires: Number(data.access_token_expired_at),
    refreshToken: data.access_token,
    refreshTokenExpires: Number(data.access_token_expired_at),
  };
  const userData = data.user_info || {};
  const userInfo: UserInfo = {
    uid: userData.user_id,
    name: userData.user_nickname,
    avatar: userData.user_avatar,
  };
  SetLoginStore(authToken, userInfo)
}
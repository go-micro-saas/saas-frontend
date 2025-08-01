import {type LoginParam} from "@src/components/auth/validate_rule/form_values.ts";
import MD5 from 'crypto-js/md5';
import {
  type Resourcev1LoginByEmailReq, type Resourcev1LoginByPhoneReq,
} from "@src/apis/api/backend_auth.service.v1/data-contracts"
import {ApiClient} from "@src/apis/api/backend_auth.service.v1/Api.ts"
import {CheckEmail, CheckPhone} from "@src/global/rule/validate_rules.ts";
import {WrapRequestAPI} from "@src/apis/api/wrap_api.ts";


export const Login = async (param: LoginParam) => {
  if (CheckEmail(param.account)) {
    return await LoginByEmailAndPassword(param);
  } else if (CheckPhone(param.account)) {
    return await LoginByPhoneAndPassword(param);
  }
  return Promise.reject(new Error("账号格式错误"));
}

export const LoginByEmailAndPassword = async (param: LoginParam) => {
  const req: Resourcev1LoginByEmailReq = {
    email: param.account,
    password: MD5(param.password).toString(),
    code: "",
  };
  const {resp, err} = await WrapRequestAPI(ApiClient.srvSaasBackendAuthV1LoginByEmail(req));
  console.log("login success", resp);
  console.log("login success", err);
}

export const LoginByPhoneAndPassword = async (param: LoginParam) => {
  const req: Resourcev1LoginByPhoneReq = {
    phone: param.account,
    password: MD5(param.password).toString(),
    code: "",
  };
  return ApiClient.srvSaasBackendAuthV1LoginByPhone(req)
}
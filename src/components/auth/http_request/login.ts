import {type LoginParam} from "@src/components/auth/validate_rule/form_values.ts";
import MD5 from 'crypto-js/md5';
import {
  type Resourcev1LoginByEmailReq,
} from "@src/apis/api/backend_auth.service.v1/data-contracts"
import {Api} from "@src/apis/api/backend_auth.service.v1/Api.ts"


export const LoginByEmailAndPassword = async (param: LoginParam) => {
  const req: Resourcev1LoginByEmailReq = {
    email: param.account,
    password: MD5(param.password).toString(),
    code: "",
  }
  return (new Api()).srvSaasBackendAuthV1LoginByEmail(req)
}
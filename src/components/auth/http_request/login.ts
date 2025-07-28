import {type LoginParam} from "@src/components/auth/validate_rule/form_values.tsx";
import MD5 from 'crypto-js/md5';
import {
  type Resourcev1LoginByEmailReq,
  type Resourcev1LoginResp
} from "@src/apis/api/backend_auth.service.v1/data-contracts"
import {Api} from "@src/apis/api/backend_auth.service.v1/Api.ts"


export const LoginByEmailAndPassword = async (param: LoginParam): Promise<Resourcev1LoginResp> => {
  const req: Resourcev1LoginByEmailReq = {
    email: param.account,
    password: MD5(param.password).toString(),
    code: "",
  }
  const resp = await (new Api()).srvSaasBackendAuthV1LoginByEmail(req)
  console.log("==> resp: ", resp)
  return resp.data;
}
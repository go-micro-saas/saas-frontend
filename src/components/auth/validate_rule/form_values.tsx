import * as yup from 'yup';

import {CheckLoginAccount, CheckPassword} from "@src/global/validate_rules.ts";

export interface LoginParam {
  account: string;
  password: string; // 提交前md5加密
  remember: boolean;
}

export const DefaultLoginParamRule = () => {
  return yup.object().shape({
    account: yup.string().required('请输入电子邮箱/手机号码').test(
      'isEmailOrPhone',
      '请输入有效的手机号或邮箱',
      (value) => {
        if (!value) return false; // 空值由required处理
        return CheckLoginAccount(value);
      }
    ),
    password: yup.string().required('请输入密码').test(
      'isValidPassword',
      '请输入长度至少6位，且同时包含字母和数字的密码',
      (value) => {
        if (!value) return false; // 空值由required处理
        return CheckPassword(value);
      }
    ),
    remember: yup.boolean(),
  });
}

export function DefaultLoginParam(options?: Partial<LoginParam>): LoginParam {
  const baseDefault: LoginParam = {
    account: '',
    password: '',
    remember: true,
  };
  return {...baseDefault, ...options};
}
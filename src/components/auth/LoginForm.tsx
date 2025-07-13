import React, {useState} from 'react';

import "@src/assets/login/css/login.css"
import "@src/assets/layouts/css/layout.css"
import "@src/assets/icons/css/icon.css"
import {LinkPath} from "@src/global/link_path.tsx";
import {EmailRegex, PasswordRegex, PhoneRegex} from "@src/global/validate_rules.tsx";

function LoginForm() {
  // show password
  const [showPassword, setShowPassword] = useState(false);
  const doShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const showPasswordIcon = showPassword ? 'icon-off' : 'icon-eye-open';
  const passwordType = showPassword ? 'text' : 'password';

  // checkLoginAccount
  const checkLoginAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    if (EmailRegex.test(value) || PhoneRegex.test(value)) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    }
  };
  // checkLoginPassword
  const checkLoginPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    if (PasswordRegex.test(value)) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    }
  };

  return (
    <>
      <form id="login-form">
        <div className="row mb-3">
          <label htmlFor="inputLoginAccount" className="col-sm-3 col-form-label">Account:</label>
          <div className="col-sm-9">
            <input id="inputLoginAccount" type="text"
                   className="form-control"
                   placeholder="电子邮箱 / 手机号码"
                   required={true} onInput={checkLoginAccount}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputLoginPassword" className="col-sm-3 col-form-label">Password:</label>
          <div className="input-group col-sm-9 my-col-sm-9">
            <input id="inputLoginPassword" type={passwordType}
                   className="form-control "
                   placeholder="登陆密码"
                   required={true} onInput={checkLoginPassword}/>
            <span className="input-group-text" onClick={doShowPassword}>
              <i className={showPasswordIcon}></i>
            </span>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputLoginRemember" className="col-sm-3 col-form-label">Remember:</label>
          <div className="col-sm-9 align-content-center">
            <div className="form-check">
              <input id="inputLoginRemember" type="checkbox"
                     className="form-check-input" value=""/>
              <label className="form-check-label" htmlFor="inputLoginRemember">
                记住登陆
              </label>
            </div>
          </div>
        </div>
        <div className="col-12 form-actions">
          <span className="pull-left">
            <a type="button" className="btn btn-info"
               href={LinkPath.AuthResetPassword}>忘记密码 ?</a>
          </span>
          <span className="pull-right">
                <button type="submit" className="btn btn-primary">登陆</button>
            </span>
        </div>
      </form>
    </>
  )
}

export default LoginForm;
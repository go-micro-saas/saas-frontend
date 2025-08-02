import React, {useEffect, useState} from "react";

import "@src/assets/login/css/login.css"
import {GetCurrentURLQueryRaw, LinkPath} from "@src/global/link/link_path.ts";
import {MyProjectStore} from "@src/global/store/store_instance.ts";

const RegisterForm: React.FC = () => {
  // show password
  const [showPassword, setShowPassword] = useState(false);
  const doShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const showPasswordIcon = showPassword ? 'icon-off' : 'icon-eye-open';
  const passwordType = showPassword ? 'text' : 'password';

  // getVerifyCode
  const {verifyCodeTime, setSignupVerifyCodeNextTime} = MyProjectStore();
  const [canGetVerifyCode, setCanGetVerifyCode] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [nextGetCodeTime, setNextGetCodeTime] = useState((new Date()).getTime());
  const getVerifyCodeText = canGetVerifyCode ? '获取验证码' : `重新获取(${remainingSeconds}s)`;
  const doGetVerifyCode = () => {
    const totalSeconds = 60;
    setCanGetVerifyCode(false);
    setRemainingSeconds(totalSeconds);
    const nextTime = new Date(new Date().getTime() + totalSeconds * 1000).getTime();
    setNextGetCodeTime(nextTime);
    setSignupVerifyCodeNextTime(nextTime);
  };
  // 计算初始剩余时间
  useEffect(() => {
    // getVerifyCode
    const storeNextGetCodeTime = verifyCodeTime.signupVerifyCodeNextTime || 0;
    if (storeNextGetCodeTime > nextGetCodeTime) {
      setNextGetCodeTime(storeNextGetCodeTime);
    }
    // calc
    const calculateRemaining = () => {
      const totalSeconds = Math.ceil((nextGetCodeTime - (new Date()).getTime()) / 1000);
      setRemainingSeconds(Math.max(totalSeconds, 0));
    };
    calculateRemaining();
    const timer = setInterval(calculateRemaining, 1000);
    return () => clearInterval(timer);
  }, [nextGetCodeTime, verifyCodeTime.signupVerifyCodeNextTime]);
  // 倒计时结束时的逻辑
  useEffect(() => {
    // console.log("remainingSeconds: ", remainingSeconds);
    if (remainingSeconds > 0) {
      setCanGetVerifyCode(false);
      return;
    }
    if (remainingSeconds === 0) {
      setCanGetVerifyCode(true);
    }
  }, [remainingSeconds]);

  // path
  const loginPath = LinkPath.AuthLogin + GetCurrentURLQueryRaw();

  return (
    <>
      <form id="login-form">
        <div className="row mb-3">
          <label htmlFor="inputLoginAccount" className="col-sm-3 col-form-label">
            Email:<span className="text-danger align-middle">*</span>
          </label>
          <div className="col-sm-9">
            <input id="inputLoginAccount" type="email"
                   className="form-control"
                   placeholder="电子邮箱"
                   required={true}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputLoginCode" className="col-sm-3 col-form-label">
            Code:<span className="text-danger align-middle">*</span>
          </label>
          <div className="input-group col-sm-9 my-col-sm-9">
            <input id="inputLoginCode" type="text"
                   className="form-control"
                   placeholder="验证码"
                   required={true}/>
            <button className="btn btn-outline-success" type="button"
                    disabled={!canGetVerifyCode}
                    onClick={doGetVerifyCode}>
              {getVerifyCodeText}
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputLoginPassword" className="col-sm-3 col-form-label">
            Password:<span className="text-danger align-middle">*</span>
          </label>
          <div className="input-group col-sm-9 my-col-sm-9">
            <input id="inputLoginPassword" type={passwordType}
                   className="form-control "
                   placeholder="登陆密码"
                   required={true}/>
            <span className="input-group-text" onClick={doShowPassword}>
              <i className={showPasswordIcon}></i>
            </span>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputLoginPassword2" className="col-sm-3 col-form-label">
            PasswdAgain:<span className="text-danger align-middle">*</span>
          </label>
          <div className="input-group col-sm-9 my-col-sm-9">
            <input id="inputLoginPassword2" type={passwordType}
                   className="form-control "
                   placeholder="再次输入密码"
                   required={true}/>
            <span className="input-group-text" onClick={doShowPassword}>
              <i className={showPasswordIcon}></i>
            </span>
          </div>
        </div>
        <div className="col-12">
          <span className="pull-left">
            <a type="button" className="btn btn-info"
               href={loginPath}>&laquo; 返回登陆</a>
          </span>
          <span className="pull-right">
                <button type="submit" className="btn btn-primary">注册</button>
            </span>
        </div>
      </form>
    </>
  )
}

export default RegisterForm;
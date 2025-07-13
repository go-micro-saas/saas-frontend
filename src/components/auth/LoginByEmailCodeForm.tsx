import React, {useState, useEffect} from 'react';

import "@src/assets/login/css/login.css"
import "@src/assets/layouts/css/layout.css"
import "@src/assets/icons/css/icon.css"
import {LinkPath} from "@src/global/link_path.tsx";
import {EmailRegex, VerificationCodeRegex} from "@src/global/validate_rules.tsx";

function LoginByEmailCodeForm() {
  // getVerifyCode
  const [canGetVerifyCode, setCanGetVerifyCode] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [nextGetCodeTime, setNextGetCodeTime] = useState((new Date()).getTime());
  const getVerifyCodeText = canGetVerifyCode ? '获取验证码' : `重新获取(${remainingSeconds}s)`;
  const doGetVerifyCode = () => {
    const totalSeconds = 60;
    setCanGetVerifyCode(false);
    setRemainingSeconds(totalSeconds);
    setNextGetCodeTime(new Date(new Date().getTime() + totalSeconds * 1000).getTime());
  };
  // 计算初始剩余时间
  useEffect(() => {
    const calculateRemaining = () => {
      const totalSeconds = Math.ceil((nextGetCodeTime - (new Date()).getTime()) / 1000);
      setRemainingSeconds(Math.max(totalSeconds, 0));
    };
    calculateRemaining();
    const timer = setInterval(calculateRemaining, 1000);
    return () => clearInterval(timer);
  }, [nextGetCodeTime]);
  // 倒计时结束时的逻辑
  useEffect(() => {
    if (remainingSeconds === 0) {
      setCanGetVerifyCode(true);
      // console.log('倒计时结束！');
    }
    // console.log("remainingSeconds: ", remainingSeconds);
  }, [remainingSeconds]);

  // checkLoginAccount
  const checkLoginAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    if (EmailRegex.test(value)) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    }
  };
  // checkVerifyCode
  const checkVerifyCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    if (VerificationCodeRegex.test(value)) {
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
          <label htmlFor="inputLoginAccount" className="col-sm-3 col-form-label">Email:</label>
          <div className="col-sm-9">
            <input id="inputLoginAccount" type="email"
                   className="form-control"
                   placeholder="电子邮箱"
                   required={true} onInput={checkLoginAccount}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputLoginCode" className="col-sm-3 col-form-label">Code:</label>
          <div className="input-group col-sm-9 my-col-sm-9">
            <input id="inputLoginCode" type="text"
                   className="form-control"
                   placeholder="验证码"
                   required={true} onInput={checkVerifyCode}/>
            <button className="btn btn-outline-success" type="button"
                    disabled={!canGetVerifyCode}
                    onClick={doGetVerifyCode}>
              {getVerifyCodeText}
            </button>
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

export default LoginByEmailCodeForm;
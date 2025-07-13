import "@src/assets/login/css/login.css"
import {useEffect, useState} from "react";
import {LinkPath} from "@src/paths/link_path.tsx";

function RegisterForm() {
  // show password
  const [showPassword, setShowPassword] = useState(false);
  const doShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const showPasswordIcon = showPassword ? 'icon-off' : 'icon-eye-open';
  const passwordType = showPassword ? 'text' : 'password';

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

  return (
    <>
      <form id="login-form">
        <div className="row mb-3">
          <label htmlFor="inputLoginAccount" className="col-sm-3 col-form-label">Email:</label>
          <div className="col-sm-9">
            <input id="inputLoginAccount" type="email"
                   className="form-control"
                   placeholder="电子邮箱"/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputLoginCode" className="col-sm-3 col-form-label">Code:</label>
          <div className="input-group col-sm-9 my-col-sm-9">
            <input id="inputLoginCode" type="text"
                   className="form-control" placeholder="验证码"/>
            <button className="btn btn-outline-success" type="button"
                    disabled={!canGetVerifyCode}
                    onClick={doGetVerifyCode}>
              {getVerifyCodeText}
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputLoginPassword" className="col-sm-3 col-form-label">Password:</label>
          <div className="input-group col-sm-9 my-col-sm-9">
            <input id="inputLoginPassword" type={passwordType}
                   className="form-control "
                   placeholder="登陆密码"/>
            <span className="input-group-text" onClick={doShowPassword}>
              <i className={showPasswordIcon}></i>
            </span>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputLoginPassword2" className="col-sm-3 col-form-label">PasswdAgain:</label>
          <div className="input-group col-sm-9 my-col-sm-9">
            <input id="inputLoginPassword2" type={passwordType}
                   className="form-control "
                   placeholder="再次输入密码"/>
            <span className="input-group-text" onClick={doShowPassword}>
              <i className={showPasswordIcon}></i>
            </span>
          </div>
        </div>
        <div className="col-12 form-actions">
          <span className="pull-left">
            <a type="button" className="btn btn-info"
               href={LinkPath.AuthLogin}>&laquo; 返回登陆</a>
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
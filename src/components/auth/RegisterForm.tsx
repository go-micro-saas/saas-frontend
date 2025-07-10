import "@src/assets/login/css/login.css"
import {useState} from "react";
import {LinkPath} from "@src/paths/link_path.tsx";

function RegisterForm() {
  // show password
  const [showPassword, setShowPassword] = useState(false);
  const doShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const showPasswordIcon = showPassword ? 'icon-off' : 'icon-eye-open';
  const passwordType = showPassword ? 'text' : 'password';

  return (
    <>
      <form id="login-form">
        <div className="row mb-3">
          <label htmlFor="inputLoginAccount" className="col-sm-3 col-form-label">Email:</label>
          <div className="col-sm-9">
            <input id="inputLoginAccount" type="text"
                   className="form-control"
                   placeholder="电子邮箱 / 手机号码"/>
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
        <div className="row mb-3">
          <label htmlFor="inputLoginCode" className="col-sm-3 col-form-label">Code:</label>
          <div className="col-sm-9">
            <input id="inputLoginCode" type="text"
                   className="form-control"
                   placeholder="验证码"/>
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
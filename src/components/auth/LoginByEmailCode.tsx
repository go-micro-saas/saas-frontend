import "@src/assets/layouts/css/page_top_border.css"
import "@src/assets/login/css/login.css"

import AuthLogo from "./AuthLogo.tsx"
import LoginByEmailCodeForm from "./LoginByEmailCodeForm.tsx"

import {LinkPath} from "@src/paths/link_path.tsx";

function LoginByEmailCode() {
  return (
    <>
      {/*<div className="page_top_border"></div>*/}
      <div className="container-fluid my-auth-login-container">
        <div id="login-box" className="row">
          {/*logo*/}
          <AuthLogo/>
          {/*form*/}
          <LoginByEmailCodeForm/>
          {/*register*/}
          <div className="col-12 to-register">
            <p className="normal_text">
              <a className="text-decoration-none"
                 href={LinkPath.AuthSignup}>
                没有账号？注册&nbsp;&raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginByEmailCode;
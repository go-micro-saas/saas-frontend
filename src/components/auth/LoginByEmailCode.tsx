import React from 'react';

import "@src/assets/layouts/css/page_top_border.css"
import "@src/assets/login/css/login.css"

import {LinkPath} from "@src/global/link_path.ts";
import AuthLogo from "./AuthLogo.tsx"
import LoginByEmailCodeForm from "./LoginByEmailCodeForm.tsx"
import PageFooter from "@src/components/layouts/PageFooter.tsx";
import Container from 'react-bootstrap/Container';

const LoginByEmailCode: React.FC = () => {
  return (
    <>
      {/*<div className="page_top_border"></div>*/}
      <Container fluid className="my-auth-login-container">
        <div id="login-box" className="row">
          {/*logo*/}
          <AuthLogo/>
          {/*form*/}
          <LoginByEmailCodeForm/>
          {/*register*/}
          <div className="col-12 to-register">
            <p className="normal_text">
              {/*login*/}
              <span className="pull-left">
                <a className="text-decoration-none"
                   href={LinkPath.AuthLogin}>
                &laquo;&nbsp;密码登录
              </a>
              </span>
              {/*register*/}
              <span className="pull-right">
                <a className="text-decoration-none"
                   href={LinkPath.AuthSignup}>
                  没有账号？注册&nbsp;&raquo;
                </a>
              </span>
            </p>
          </div>
        </div>
      </Container>
      {/*footer*/}
      <PageFooter/>
    </>
  );
}

export default LoginByEmailCode;
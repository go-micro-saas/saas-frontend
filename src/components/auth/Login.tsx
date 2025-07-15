import "@src/assets/layouts/css/page_top_border.css"
import "@src/assets/login/css/login.css"

import {LinkPath} from "@src/global/link_path.tsx";
import AuthLogo from "./AuthLogo.tsx"
import LoginForm from "./LoginForm.tsx"
import PageFooter from "@src/components/layouts/PageFooter.tsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Login() {
  return (
    <>
      {/*<div className="page_top_border"></div>*/}
      <Container fluid className="my-auth-login-container">
        <Row id="login-box">
          {/*logo*/}
          <AuthLogo/>
          {/*form*/}
          <LoginForm/>
          {/*register*/}
          <div className="col-12 to-register">
            <p className="normal_text">
              {/*login*/}
              <span className="pull-left">
                <a className="text-decoration-none"
                   href={LinkPath.AuthLoginByEmailCode}>
                &laquo;&nbsp;验证码登录
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
        </Row>
      </Container>
      {/*footer*/}
      <PageFooter/>
    </>
  );
}

export default Login;
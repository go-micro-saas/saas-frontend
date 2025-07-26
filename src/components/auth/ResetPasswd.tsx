import React from 'react';

import "@src/assets/layouts/css/page_top_border.css"
import "@src/assets/login/css/login.css"

import AuthLogo from "./AuthLogo.tsx"
import ResetPasswordForm from "./ResetPasswdForm.tsx"
import PageFooter from "@src/components/layouts/PageFooter.tsx";
import Container from 'react-bootstrap/Container';

const ResetPassword: React.FC = () => {
  return (
    <>
      {/*<div className="page_top_border"></div>*/}
      <Container fluid className="my-auth-login-container">
        <div id="login-box" className="row">
          {/*logo*/}
          <AuthLogo/>
          {/*form*/}
          <ResetPasswordForm/>
        </div>
      </Container>
      {/*footer*/}
      <PageFooter/>
    </>
  );
}

export default ResetPassword;
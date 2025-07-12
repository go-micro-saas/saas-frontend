import "@src/assets/layouts/css/page_top_border.css"
import "@src/assets/login/css/login.css"

import AuthLogo from "./AuthLogo.tsx"
import ResetPasswordForm from "./ResetPasswdForm.tsx"

function ResetPassword() {
  return (
    <>
      {/*<div className="page_top_border"></div>*/}
      <div className="container-fluid my-auth-login-container">
        <div id="login-box" className="row">
          {/*logo*/}
          <AuthLogo/>
          {/*form*/}
          <ResetPasswordForm/>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
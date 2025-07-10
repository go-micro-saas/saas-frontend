import "@src/assets/layouts/css/page_top_border.css"
import "@src/assets/login/css/login.css"
import AuthLogo from "./AuthLogo.tsx"
import RegisterForm from "./RegisterForm.tsx"

function Register() {
  return (
    <>
      {/*<div className="page_top_border"></div>*/}
      <div className="container-fluid my-auth-login-container">
        <div id="login-box" className="row">
          {/*logo*/}
          <AuthLogo/>
          {/*form*/}
          <RegisterForm/>
        </div>
      </div>
    </>
  );
}

export default Register;
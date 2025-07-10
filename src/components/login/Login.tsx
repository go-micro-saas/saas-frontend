import "@src/assets/layouts/css/page_top_border.css"
import "@src/assets/login/css/login.css"
import myLogo from '@src/assets/react-login.svg'
import LoginForm from "./LoginForm.tsx"

function Login() {
  return (
    <>
      {/*<div className="page_top_border"></div>*/}
      <div className="container-fluid my-auth-login-container">
        <div id="login-box" className="row">
          {/*logo*/}
          <div className="login-box-logo">
            <h3>
              <img src={myLogo} alt="Logo"/>
            </h3>
          </div>
          {/*form*/}
          <LoginForm/>
          {/*register*/}
          <div className="col-12 to-register">
            <p className="normal_text"><a>没有账号？注册</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
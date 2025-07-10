import "@src/assets/login/css/login.css"
import myLogo from '@src/assets/react-login.svg'
import LoginForm from "./LoginForm.tsx"

function Login() {
  return (
    <>
      <div id="my-auth-login-container" className="container-fluid">
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
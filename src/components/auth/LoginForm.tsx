import {useState} from 'react';

import "@src/assets/login/css/login.css"
import "@src/assets/layouts/css/layout.css"
import "@src/assets/icons/css/icon.css"
import {LinkPath} from "@src/global/link_path.ts";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function LoginForm() {
  // show password
  const [showPassword, setShowPassword] = useState(false);
  const doShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const showPasswordIcon = showPassword ? 'icon-off' : 'icon-eye-open';
  const passwordType = showPassword ? 'text' : 'password';

  return (
    <>
      <Form id="login-form">
        <Row className="mb-3">
          <Form.Label htmlFor="inputLoginAccount" className="col-sm-3 col-form-label">
            Account:<span className="text-danger align-middle">*</span>
          </Form.Label>
          <Col className="col-sm-9">
            <Form.Control
              type="text"
              placeholder="电子邮箱 / 手机号码"
              required
            />
            <Form.Control.Feedback type="invalid">
              Looks good!
            </Form.Control.Feedback>
            {/*<input id="inputLoginAccount" type="text"*/}
            {/*       className="form-control"*/}
            {/*       placeholder="电子邮箱 / 手机号码"*/}
            {/*       required={true} onInput={CheckLoginAccount}/>*/}
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label htmlFor="inputLoginPassword" className="col-sm-3 col-form-label">
            Password:<span className="text-danger align-middle">*</span>
          </Form.Label>
          <Col className="input-group col-sm-9 my-col-sm-9">
            <input id="inputLoginPassword" type={passwordType}
                   className="form-control "
                   placeholder="登陆密码"
                   required={true}/>
            <span className="input-group-text" onClick={doShowPassword}>
              <i className={showPasswordIcon}></i>
            </span>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label htmlFor="inputLoginRemember" className="col-sm-3 col-form-label">Remember:</Form.Label>
          <Col className="col-sm-9 align-content-center">
            <div className="form-check">
              <input id="inputLoginRemember" type="checkbox"
                     className="form-check-input" value=""/>
              <Form.Label className="form-check-label" htmlFor="inputLoginRemember">
                记住登陆
              </Form.Label>
            </div>
          </Col>
        </Row>
        <Col className="col-12">
          <span className="pull-left">
            <a type="button" className="btn btn-info"
               href={LinkPath.AuthResetPassword}>忘记密码 ?</a>
          </span>
          <span className="pull-right">
                <button type="submit" className="btn btn-primary">登陆</button>
            </span>
        </Col>
      </Form>
    </>
  )
}

export default LoginForm;
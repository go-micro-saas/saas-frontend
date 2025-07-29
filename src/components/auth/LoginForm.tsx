import React, {useState} from 'react';

import "@src/assets/login/css/login.css"
import "@src/assets/layouts/css/layout.css"
import "@src/assets/icons/css/icon.css"
import {LinkPath} from "@src/global/link/link_path.ts";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import * as formik from 'formik';
import {
  DefaultLoginParam,
  DefaultLoginParamRule,
  type LoginParam,
} from "@src/components/auth/validate_rule/form_values.ts";
import {CheckEmail, CheckPhone} from "@src/global/rule/validate_rules.ts";
import {GetGlobalToast} from '@src/global/toast/global_toast.tsx';
import {LoginByEmailAndPassword} from "@src/components/auth/http_request/login.ts";
import {Loading} from "@src/global/loading/loading.tsx";

const LoginForm: React.FC = () => {
  // show password
  const [showPassword, setShowPassword] = useState(false);
  const doShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const showPasswordIcon = showPassword ? 'icon-off' : 'icon-eye-open';
  const passwordType = showPassword ? 'text' : 'password';

  // toast
  const toast = GetGlobalToast();

  // form
  const {Formik} = formik;
  const loginParam = DefaultLoginParam()
  const loginParamRule = DefaultLoginParamRule();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLoginForm = async (values: LoginParam) => {
    setIsSubmitting(true);
    if (CheckEmail(values.account)) {
      const data = await LoginByEmailAndPassword(values).finally(() => {
        setIsSubmitting(false)
      });
      console.log("==> data:", data);
      // MyHTTPClient.get("/api/v1/saas-backend/ping")
    } else if (CheckPhone(values.account)) {
      console.log("phone");
    } else {
      toast.error({
        message: '账号格式错误',
      })
    }
    setIsSubmitting(false)
  }

  return (
    <>
      <Formik initialValues={loginParam}
              validationSchema={loginParamRule}
              onSubmit={submitLoginForm}>
        {({handleSubmit, handleChange, values, errors}) => (
          <Form id="login-form" noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Label htmlFor="inputLoginAccount" className="col-sm-3 col-form-label">
                Account:<span className="text-danger align-middle">*</span>
              </Form.Label>
              <Col className="col-sm-9">
                <Form.Control
                  id="inputLoginAccount"
                  type="text"
                  placeholder="电子邮箱 / 手机号码"
                  name="account"
                  value={values.account}
                  required={true}
                  onChange={handleChange}
                  isInvalid={!!errors.account}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.account}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Form.Group className="mb-3 row" controlId="inputLoginPassword">
              <Form.Label className="col-sm-3 col-form-label">
                Password:<span className="text-danger align-middle">*</span>
              </Form.Label>
              <InputGroup className="col-sm-9 my-col-sm-9">
                <Form.Control
                  className="form-control"
                  type={passwordType}
                  placeholder="登陆密码"
                  name="password"
                  value={values.password}
                  required={true}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <InputGroup.Text className="input-group-text" onClick={doShowPassword}>
                  <i className={showPasswordIcon}></i>
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Row className="mb-3">
              <Form.Label htmlFor="inputLoginRemember" className="col-sm-3 col-form-label">Remember:</Form.Label>
              <Col className="col-sm-9 align-content-center">
                <div className="form-check">
                  <input id="inputLoginRemember"
                         className="form-check-input"
                         type="checkbox"
                         name="remember"
                         checked={values.remember}
                         onChange={handleChange}
                  />
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
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  登陆
                  {isSubmitting && <Loading/>}
                </button>
              </span>
            </Col>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm;
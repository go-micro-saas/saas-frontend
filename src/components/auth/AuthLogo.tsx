import React from 'react';

import "@src/assets/login/css/login.css"
import myLogo from "@src/assets/react-login.svg";

const AuthLogo: React.FC = () => {
  return (
    <>
      <div className="login-box-logo">
        <h3>
          <img src={myLogo} alt="Logo"/>
        </h3>
      </div>
    </>
  );
}

export default AuthLogo;
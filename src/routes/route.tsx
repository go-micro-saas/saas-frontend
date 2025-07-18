import {createBrowserRouter} from "react-router";
import {LinkPath} from "@src/global/link_path.tsx";

import Dashboard from "@src/components/dashboard/Dashboard.tsx";
import Login from "@src/components/auth/Login.tsx";
import Register from "@src/components/auth/Register.tsx";
import ResetPassword from "@src/components/auth/ResetPasswd.tsx";
import Status404 from "@src/components/status/Status404.tsx";
import LoginByEmailCode from "@src/components/auth/LoginByEmailCode.tsx";

const router = createBrowserRouter([
  // default
  {path: LinkPath.Root, Component: Dashboard},
  {path: LinkPath.Dashboard, Component: Dashboard},
  {path: LinkPath.Home, Component: Dashboard},

  // auth
  {path: LinkPath.AuthLogin, Component: Login},
  {path: LinkPath.AuthLoginByEmailCode, Component: LoginByEmailCode},
  {path: LinkPath.AuthSignup, Component: Register},
  {path: LinkPath.AuthResetPassword, Component: ResetPassword},
  {path: LinkPath.AuthForgotPassword, Component: ResetPassword},

  // 404
  {path: LinkPath.NotFound, Component: Status404},
  {path: "*", Component: Status404},
]);

export default router;
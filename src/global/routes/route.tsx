import {createBrowserRouter} from "react-router";
import {lazy} from 'react';
import {LinkPath} from "@src/global/link/link_path.ts";

// ===== default =====
const Dashboard = lazy(
  () => import ( "@src/components/dashboard/Dashboard.tsx"),
);

// ===== auth =====
const Login = lazy(
  () => import ( "@src/components/auth/Login.tsx"),
);
const Register = lazy(
  () => import ( "@src/components/auth/Register.tsx"),
);
const ResetPassword = lazy(
  () => import ( "@src/components/auth/ResetPasswd.tsx"),
);
const LoginByEmailCode = lazy(
  () => import ( "@src/components/auth/LoginByEmailCode.tsx"),
);

// ===== status =====
const Status404 = lazy(
  () => import ( "@src/components/status/Status404.tsx"),
);

export const router = createBrowserRouter([
  // default
  {path: LinkPath.Root, Component: Dashboard},
  {path: LinkPath.Dashboard, element: <Dashboard/>},
  {path: LinkPath.Home, element: <Dashboard/>},

  // auth
  {path: LinkPath.AuthLogin, element: <Login/>},
  {path: LinkPath.AuthLoginByEmailCode, element: <LoginByEmailCode/>},
  {path: LinkPath.AuthSignup, element: <Register/>},
  {path: LinkPath.AuthResetPassword, element: <ResetPassword/>},
  {path: LinkPath.AuthForgotPassword, element: <ResetPassword/>},


  // 404
  {path: LinkPath.NotFound, element: <Status404/>},
  {path: "*", element: <Status404/>},
]);

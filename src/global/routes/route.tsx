import {createBrowserRouter} from "react-router";
import {lazy} from 'react';
import {LinkPath} from "@src/global/link/link_path.ts";

// ===== default =====
export const Dashboard = lazy(
  () => import ( "@src/components/dashboard/Dashboard.tsx"),
);

// ===== auth =====
export const Login = lazy(
  () => import ( "@src/components/auth/Login.tsx"),
);
export const Register = lazy(
  () => import ( "@src/components/auth/Register.tsx"),
);
export const ResetPassword = lazy(
  () => import ( "@src/components/auth/ResetPasswd.tsx"),
);
export const LoginByEmailCode = lazy(
  () => import ( "@src/components/auth/LoginByEmailCode.tsx"),
);

// ===== status =====
export const Status404 = lazy(
  () => import ( "@src/components/status/Status404.tsx"),
);

export const Routes = createBrowserRouter([
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
])

import {createBrowserRouter} from "react-router";
import Dashboard from "@src/components/dashboard/Dashboard.tsx";
import Login from "@src/components/auth/Login.tsx";
import Register from "@src/components/auth/Register.tsx";

import {LinkPath} from "@src/paths/link_path.tsx";

const router = createBrowserRouter([
  {path: LinkPath.Root, Component: Dashboard},
  {path: LinkPath.Dashboard, Component: Dashboard},
  {path: LinkPath.Home, Component: Dashboard},
  {path: LinkPath.AuthLogin, Component: Login},
  {path: LinkPath.AuthSignup, Component: Register},
]);

export default router;
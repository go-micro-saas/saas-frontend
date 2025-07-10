import {createBrowserRouter} from "react-router";
import Dashboard from "@src/components/dashboard/Dashboard.tsx";
import Login from "@src/components/auth/Login.tsx";
import Register from "@src/components/auth/Register.tsx";


const router = createBrowserRouter([
  {path: "/", Component: Dashboard},
  {path: "/auth/login", Component: Login},
  {path: "/auth/signup", Component: Register},
]);

export default router;
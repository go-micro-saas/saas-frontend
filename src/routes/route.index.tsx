import {createBrowserRouter} from "react-router";
import Dashboard from "@src/components/dashboard/Dashboard.tsx";
import Login from "@src/components/login/Login.tsx";


const router = createBrowserRouter([
  {path: "/auth/login", Component: Login},
  {path: "/", Component: Dashboard},
]);

export default router;
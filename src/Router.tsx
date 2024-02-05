import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import LoginLayout from "./layouts/LoginLayout";
import LoginPage from "./pages/LoginPage";
import {
  ADMIN_DASHBOARD_ROUTE,
  LOGIN_ROUTE,
} from "./constants/RouterConstants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: LOGIN_ROUTE,
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: ADMIN_DASHBOARD_ROUTE,
    element: <AdminLayout />,
    children: [],
  },
]);

export default router;

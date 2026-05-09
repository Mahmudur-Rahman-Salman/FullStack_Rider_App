import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "./../pages/Auth/Login/Login";
import Register from "./../pages/Auth/Register/Register";

import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Auth/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenters.json"),
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json"),
      },
    ],
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts></DashboardLayouts>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
    ],
  },
]);

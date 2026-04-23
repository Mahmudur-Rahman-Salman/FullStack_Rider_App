import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from './../pages/Auth/Login/Login';
import Register from './../pages/Auth/Register/Register';

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
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json"),
      },
      {
        path: "/",
        Component : AuthLayout, 
        children: [
          {
            path: "login", 
            Component: Login
          }, 
          {
            path: "register", 
            Component: Register
          }
        ]
      }
    ],
  },
]);

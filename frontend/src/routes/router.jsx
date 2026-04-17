import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>
  },
]);

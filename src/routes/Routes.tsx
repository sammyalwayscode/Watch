import React from "react";
import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layout/WebLayout";

const Home = React.lazy(
  () => import(/* webpackChunkName: "AppLayout" */ "../pages/Home")
);
const Shop = React.lazy(
  () => import(/* webpackChunkName: "AppLayout" */ "../pages/Shop")
);

export const mainRouth = createBrowserRouter([
  {
    path: "*/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

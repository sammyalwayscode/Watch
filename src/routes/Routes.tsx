import React from "react";
import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layout/WebLayout";
// import { Home } from "../pages";

const Home = React.lazy(
  () => import(/* webpackChunkName: "AppLayout" */ "../pages/Home")
);

export const mainRouth = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

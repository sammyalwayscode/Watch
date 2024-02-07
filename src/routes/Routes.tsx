import React from "react";
import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layout/WebLayout";
import HomeLayout from "../layout/HomeLayout";
import ShopDetails from "../pages/ShopDetails";

const Home = React.lazy(
  () => import(/* webpackChunkName: "AppLayout" */ "../pages/Home")
);
const Shop = React.lazy(
  () => import(/* webpackChunkName: "AppLayout" */ "../pages/Shop")
);

export const mainRouth = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },

  {
    element: <WebLayout />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/detail",
        element: <ShopDetails />,
      },
    ],
  },
]);

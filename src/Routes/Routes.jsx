import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader:()=>fetch('bookData.json'),
        path: "/",
        Component: Home,
      },
      {
        path:'/about',
        Component:About
      }
    ],
  },
]);

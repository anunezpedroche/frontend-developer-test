import React from "react";
import PostPage from "../pages/post";

const HomePage = React.lazy(() => import("../pages/home/index"));
const LoginPage = React.lazy(() => import("../pages/login/index"));
export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

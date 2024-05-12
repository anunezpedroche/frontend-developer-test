import HomePage from "../pages/home";
import LoginPage from "../pages/login";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/post/:id",
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

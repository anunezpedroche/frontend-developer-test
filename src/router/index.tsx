import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} element={route.element} path={route.path} />
        ))}
      </Routes>
    </Router>
  );
}

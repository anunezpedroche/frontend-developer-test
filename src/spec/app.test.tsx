import { render, screen } from "@testing-library/react";
import App from "../App";
import HomePage from "../pages/home";

test("App initial runs", () => {
  render(<App />);
  const element = screen.getByText(/Loading/i);
  expect(element).toBeInTheDocument();
});

test("Home page renders", () => {
  render(<HomePage />, { wrapper: App });
  const element = screen.getByText(/Home/i);
  expect(element).toBeInTheDocument();
});

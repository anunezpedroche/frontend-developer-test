import "./index.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <Link className="nav-bar__link" to={"/"}>
        Home
      </Link>
    </nav>
  );
}

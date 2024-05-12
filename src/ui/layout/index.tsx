import Navigation from "./components/navigation";
import "./index.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="nav-bar">
        <Navigation />
      </header>
      <main className="content">{children}</main>
      <footer>Prueba footer</footer>
    </>
  );
}

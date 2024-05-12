import './index.css'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="nav-bar">Prueba</header>
      <main className='content'>{children}</main>
      <footer>Prueba footer</footer>
    </>
  );
}

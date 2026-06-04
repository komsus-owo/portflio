import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        KOMAN OHOUO Joseph
      </Link>

      <nav className="nav-links">
        <a href="/#about">À propos</a>
        <a href="/#skills">Compétences</a>
        <a href="/#projects">Projets</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
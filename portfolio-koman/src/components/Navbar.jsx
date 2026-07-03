import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/#home" className="logo">
        KOMAN OHOUO JOSEPH
      </Link>

      <nav className="navbar-links" aria-label="Navigation principale">
        <Link to="/#home">Accueil</Link>
        <Link to="/#about">À propos</Link>
        <Link to="/#skills">Compétences</Link>
        <Link to="/#projects">Projets</Link>
        <Link to="/#experience">Expériences</Link>

        <Link to="/#contact" className="navbar-contact">
          Me contacter
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
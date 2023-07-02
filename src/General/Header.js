import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/Logo.jpeg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-container"> {/* Agrega un contenedor para la navegación */}
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={handleMenuToggle}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/eventos" onClick={handleMenuToggle}>
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/miembros" onClick={handleMenuToggle}>
              Miembros
            </Link>
          </li>
          <li>
            <Link to="/anuncios" onClick={handleMenuToggle}>
              Anuncios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

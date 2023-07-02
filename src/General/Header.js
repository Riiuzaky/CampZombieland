import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/Logo.jpeg';

export function Header() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
      <Link to='/'> Inicio </Link>
      <Link to='/eventos'> Eventos </Link>
      <Link to='/miembros'> Miembros </Link>
      <Link to='/anuncios'> Anuncios </Link>
      </ul>
    </nav>
  );
}



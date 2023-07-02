import React from 'react';
import './Header.css';
import logo from '../Imagenes/Logo.jpeg';

export function Header() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/eventos">Eventos</a></li>
        <li><a href="/miembros">Miembros</a></li>
        <li><a href="/anuncios">Anuncios</a></li>
      </ul>
    </nav>
  );
}



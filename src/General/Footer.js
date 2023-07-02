import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contacto</h3>
        <ul>
          <li>Teléfono: 123-456-789</li>
          <li>Email: ejemplo@example.com</li>
          <li>Dirección: Calle Principal, Ciudad</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Enlaces</h3>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
}




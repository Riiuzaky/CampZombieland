import React, { useState } from 'react';
import './Miembros.css';
import fondo from '../Imagenes/MiembrosFondo.jpg';

export function Miembros() {
  const miembros = [
    {
      id: 1,
      nombre: 'Riiuzaky',
      cargo: 'Lider',
      info: 'Miembro fundador del campamento',
    },
    {
      id: 2,
      nombre: 'Lechuguita',
      cargo: 'Elite',
      info: 'General con mas daño del clan, y mas aportes en eventos pvp',
    },
    {
      id: 3,
      nombre: 'Osita',
      cargo: 'Elite',
      info: 'General del clan, persona en cargada de dar orden',
    },
    {
      id: 4,
      nombre: 'Thmine',
      cargo: 'Sub-Lider',
      info: 'General del clan, persona en cargada de ofrecer ayuda y acompañamiento a los oficiales para llevar a cabo sus labores',
    },
    // Agrega más miembros aquí
  ];

  return (
    <div className="miembros-container">
      
      <div className="miembros-background">
        <img src={fondo} alt="Fondo" />
      </div>
      <div className="miembros-content">
        <h2 className="titulo">Nuestros Miembros Más Activos</h2>
        <div className="miembros-table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {miembros.map((miembro) => (
                <tr key={miembro.id}>
                  <td>{miembro.nombre}</td>
                  <td>{miembro.cargo}</td>
                  <td>{miembro.info}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}



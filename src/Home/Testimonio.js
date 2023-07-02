import React from 'react';
import './Testimonio.css'

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={props.imagen} 
      alt='imagen testimonio'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong>
        </p>
        <p className='texto-testimonio'>
          {props.descripcion}
        </p>
        {props.usuarios}
      </div>
    </div>
  );   
}

export default Testimonio;
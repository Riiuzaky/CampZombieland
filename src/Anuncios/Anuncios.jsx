import React from 'react';
import './Anuncios.css';
import fondo from '../Imagenes/fondoMiembros.jpg';
import EventoCasa from '../Imagenes/EventoCasa.png';
import EventoSurvival from '../Imagenes/EventoSurvival.png';


export function Anuncios() {
  const noticias = [
    {
      id: 1,
      titulo: 'Evento de construccion',
      contenido: 'En este evento tendras que construir una casa de la que estes orgulloso y postularla el dia 6 de julio de 2023 para postularla al concurso',
      imagen: EventoCasa,
    },
    {
      id: 2,
      titulo: 'Evento de supervivencia',
      contenido: 'En este evento seras enviado a una isla con solamente en cuchillo y deberas intentar sobrevivir 3 dias para poder ganar y obtener recompensas',
      imagen: EventoSurvival,
    },
    {
      id: 3,
      titulo: 'Noticia 3',
      contenido: 'Contenido de la noticia 2',
      imagen: EventoCasa,
    },
    {
      id: 4,
      titulo: 'Noticia 4',
      contenido: 'Contenido de la noticia 2',
      imagen: EventoCasa,
    },
    {
      id: 5,
      titulo: 'Noticia 5',
      contenido: 'Contenido de la noticia 2',
      imagen: EventoCasa,
    },
  
    // Agrega más noticias aquí
  ];

  return (
    <div className="anuncios-container">
      <div className="anuncios-background">
        <img src={fondo} alt="Fondo" />
      </div>
      <div className="anuncios-content">
        <h2>Anuncios</h2>
        <div className="noticias-container">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="noticia">
              <img src={noticia.imagen} alt={noticia.titulo} />
              <h3>{noticia.titulo}</h3>
              <p>{noticia.contenido}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



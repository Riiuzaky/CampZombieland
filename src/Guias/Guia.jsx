import React from 'react';
import './Guia.css'
import YouTubeVideo from './VideoYoutube';
import Card from '../Home/Card';
import guias from '../Imagenes/Guias.jpg';

export function Guias() {
  const videoList = [
    { videoId: 'IgWaAh83EWA', name: 'Como hacer isla radiacion MISION', description: 'En este video podras ver como realizar la Mision NO los eventos de isla radiacion en menos de 5 minutos y asi aportar a la clasificacion del campamento' },
    { videoId: 'IgWaAh83EWA', name: 'Video 2' },
    { videoId: 'IgWaAh83EWA', name: 'Video 4' },
    { videoId: 'IgWaAh83EWA', name: 'Video 5' },
    { videoId: 'IgWaAh83EWA', name: 'Video 6' },
    { videoId: 'IgWaAh83EWA', name: 'Video 7' },
    { videoId: 'IgWaAh83EWA', name: 'Video 7' },
    { videoId: 'IgWaAh83EWA', name: 'Video 7' },
    { videoId: 'IgWaAh83EWA', name: 'Video 7' },
    // Agrega más videos aquí
  ];

  return (
    <div className='contenedor-principal-Guias'>
      <div className='contenedor-cards'>
        <Card
          title='Guias'
          img={guias}
        />
      </div>
      <div className="video-library">
        {videoList.map((video, index) => (
          <YouTubeVideo key={index} videoId={video.videoId} name={video.name} description={video.description} />
        ))}
      </div>
    </div>

  );
}






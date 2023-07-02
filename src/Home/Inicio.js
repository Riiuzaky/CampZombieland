import React from 'react';
import './Inicio.css';
import Testimonio from './Testimonio';
import Card from './Card';
import logoCamp from '../Imagenes/Logo.jpeg';
import reglas from '../Imagenes/reglas.jpg';
import oficiales from '../Imagenes/oficiales.jpg';
import pilar from '../Imagenes/pilar.jpg';
import foto from '../Imagenes/portada.jpg';

export function Inicio() {
  return (
    <div className="App">

      <div className='contenedor-principal'>
        
        <div className='contenedor-card'>
          <Card
            title='Bienvenidos a Zombieland'
            img={foto}
          />
        </div>

        <div className='contenedor-columna'>
          {/* Aquí puedes agregar tu imagen para la columna */}
          <img src={pilar} alt="Columna" />
        </div>
        <div className='contenedor-testimonios'>
          <Testimonio
            nombre='¿Quienes somos?'
            descripcion={`Somos un campamento de Undawn, del servidor 1004 Ciudad Perdida, que busca compañeros habiles
          para unirse a sus tropas
          `}
            imagen={logoCamp} />

          <Testimonio
            nombre='¿Nuestras reglas?'
            descripcion={(
              <React.Fragment>
                1. Uso obligatorio de Whatsapp o discord.<br />
                2. El nivel de ingreso es cinco niveles por debajo del nivel máximo del servidor.<br />
                3. Hacer las misiones del campamento todos los días.<br />
                4. Obligatorio la participación en los eventos del clan (avisar al líder o algún oficial si no podrás asistir).<br />
                5. Dos días sin conectarte al juego serás expulsado (avisar si vas a estar más tiempo al líder u oficiales).<br />
                6. Ayudar a los miembros que soliciten ayuda para hacer misiones.
              </React.Fragment>
            )}
            imagen={reglas} />

          <Testimonio
            nombre='¿Como Unirte a nosotros?'
            descripcion={(
              <React.Fragment>
                Si quieres pertenecer a nuestra familia deberás comunicarte con uno de nuestros oficiales dentro del juego: <br />
                1. Riiuzaky<br />
                2. Osita.<br />
                3. Thmine.<br />

                Una vez tengas contacto con uno de ellos, te brindarán toda la información necesaria y te incluirán en el clan

              </React.Fragment>
            )}
            imagen={oficiales} />
        </div>

      </div>
    </div>
  );
}

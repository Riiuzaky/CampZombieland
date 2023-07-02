
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './Home/Inicio';
import { Header } from './General/Header';
import { Footer } from './General/Footer';
import { Guias } from './Guias/Guia';
import { Anuncios } from './Anuncios/Anuncios';
import { Miembros } from './Miembros/Miembros';

export function App() {
  return (
    <div>
        <div>
          <Router>
            <Header />
            <div className='cont-general'>
              <Routes>
                
                <Route path='/' element={<Inicio />} />
                <Route path='/eventos' element={<Guias />} />
                <Route path='/anuncios' element={<Anuncios />} />    
                <Route path='/miembros' element={<Miembros />} />        
                <Route path="*" element={<div className='cont-not-found'><h2>Error:404</h2><h2>página no encontrada</h2></div>} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </div>
    </div>
  );
};
export default App;


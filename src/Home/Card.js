import React from 'react';
import './Card.css';


function Card({title, img}) {
  return (
    <div class = "card">
      <div class="card-front">
        <img 
          src={img}
          alt='foto' 
        />
        <h2>
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Card;


    

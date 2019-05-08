import React from 'react';
import './GameCard.css';

const GameCard = (props) =>{
  const imageURL = `character_images/${props.image}`;

  return(
    <img className='card' src={imageURL} alt={props.name}/>
  )
}

export default GameCard

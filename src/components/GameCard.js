import React from 'react';
import './GameCard.css';

const GameCard = (props) =>{
  const imageURL = `character_images/${props.image}`;

  return(
    <img class='card' src={imageURL} alt={props.name}/>
  )
}

export default GameCard

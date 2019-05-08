import React from 'react';
import GameCard from './GameCard';

const GameCards = (props) =>{
  const characterList = props.characters.map((character,i)=>{
    return(
      <GameCard image={character.image} name={character.name} key={i} />
    )
  });
  return(
    <div className='GameCards'>
      {characterList}
    </div>
  )
}

export default GameCards

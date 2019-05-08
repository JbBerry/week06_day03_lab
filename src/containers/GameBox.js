import React, {Component} from 'react';
import GameCards from '../components/GameCards';
import Guesses from '../components/Guesses';
import Questions from '../components/Questions';
import Title from '../components/Title'


class GameBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters:[
         {
            "name": "Harry Potter",
            "gender": "Male",
            "hair": "Black",
            "house": "Gryffindor",
            "death eater": "False",
            "image": "harry.jpg"
         },
         {
            "name": "Ron Weasley",
            "gender": "Male",
            "hair": "Red",
            "house": "Gryffindor",
            "death eater": "False",
            "image": "ron.jpg"
         },
         {
            "name": "Hermione Granger",
            "gender": "Female",
            "hair": "Brown",
            "house": "Gryffindor",
            "death eater": "False",
            "image": "hermione.jpeg"
         },
         {
            "name": "Luna Lovegood",
            "gender": "Female",
            "hair": "Blonde",
            "house": "Ravenclaw",
            "death eater": "False",
            "image": "luna.jpg"
         },
         {
            "name": "Draco Malfoy",
            "gender": "Male",
            "hair": "Blonde",
            "house": "Slytherin",
            "death eater": "True",
            "image": "draco.jpg"
         },
         {
            "name": "Cedric Diggory",
            "gender": "Male",
            "hair": "Blonde",
            "house": "Hufflepuff",
            "death eater": "False",
            "image": "cedric.png"
         },
         {
            "name": "Cho Chang",
            "gender": "Female",
            "hair": "Black",
            "house": "Ravenclaw",
            "death eater": "False",
            "image": "cho.jpg"
         },
         {
            "name": "Rubeus Hagrid",
            "gender": "Male",
            "hair": "Brown",
            "house": "Gryffindor",
            "death eater": "False",
            "image": "hagrid.png"
         }

      ],
      chosenCharacter:{}
    }
  };

  chooseCharacter(){
    const number = this.state.characters.length
    const result = Math.floor(Math.random()*(number)+1)
    this.setState({chosenCharacter:this.state.characters[result]})
  }
  render(){
    return (
      <div className='GameBox'>
        <Title/>
        <GameCards characters = {this.state.characters}/>
        <Questions chosenCharacter = {this.state.chosenCharacter}/>
        <Guesses characters = {this.state.characters} chosenCharacter = {this.state.chosenCharacter}/>
      </div>
    );
  }

}

export default GameBox;

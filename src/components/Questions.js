import React, {Component} from 'react';
import './Questions.css';
class Questions extends Component{
  constructor(props){
    super(props);
    this.state ={
      atributes:[],
      selectedAtribute:'',
      selectedChosenAtribute:'',
      guessAnswer:''

    };

    this.atributes = Object.keys(props.chosenCharacter)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.populateAtributeValues=this.populateAtributeValues.bind(this);
    this.populateChosenAtributeValues=this.populateChosenAtributeValues.bind(this);
    this.handleAtributeChange = this.handleAtributeChange.bind(this);
    this.handleChosenAtributeChange = this.handleChosenAtributeChange.bind(this);

  }

  render(){
    return(
      <div>
        <h4>Ask Your Questions</h4>
        <form onSubmit={this.handleSubmit}>
          <label> is their...</label>
          <select
            value={this.state.selectedAtribute}
            onChange={this.handleAtributeChange}
          >
            {this.populateAtributeValues()}
          </select>

          <select
            value={this.state.selectedChosenAtribute}
            onChange={this.handleChosenAtributeChange}
          >
            {this.populateChosenAtributeValues()}
          </select>

          <input
            className='Button'
            type="submit"
            value = "Ask Question"
          />
        </form>
        <h4 className="answer">{this.state.guessAnswer}</h4>
      </div>
    )
  }

  handleAtributeChange(event){
    this.setState({selectedAtribute:event.target.value})
    this.setState({})
  }

  handleChosenAtributeChange(event){
    this.setState({selectedChosenAtribute:event.target.value})
  }

  populateAtributeValues(){
    return this.atributes.map((atribute,i)=>{
      return(
        <option key={i}>{atribute}</option>
      );
    });
  };

  populateChosenAtributeValues(){
    const arrOptions = this.props.characters.map((character,i,characters)=>{
        return(
          character[this.state.selectedAtribute]
        )
      });
    const uniqueArrOptions = []
      arrOptions.forEach((option,i)=>{
        if (arrOptions.indexOf(option) === i){
          uniqueArrOptions.push(option)
        }
      })

    const arrElements = uniqueArrOptions.map((option,i)=>{
      return(
        <option key={i}>{option}</option>
      )
    })
    arrElements.unshift(<option defaultValue key={-1}>Select your option</option>)
    return arrElements;
  }

  handleSubmit(event){
    event.preventDefault();
    let answer = null;
    console.log(this.state.selectedAtribute);
    console.log(this.state.selectedChosenAtribute);
    if(this.state.selectedChosenAtribute === this.props.chosenCharacter.name){
      answer = 'YOU WIN THE GAME'
      this.setState({guessAnswer:'YOU WIN THE GAME'})
    }else
    if(this.state.selectedChosenAtribute === this.props.chosenCharacter[this.state.selectedAtribute]){
      answer = 'yes'
      this.setState({guessAnswer:'Yes'})
    }else{
      answer = 'no'
      this.setState({guessAnswer:'No'})
    }
    console.log(answer);

  }

}

export default Questions;

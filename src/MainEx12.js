import React, { Component } from 'react';
import './main.css';
import Validations from './Validations/Validations';
import CharBox from './CharBox/CharBox';

class Main extends Component {

  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharBox
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className='Main'>
        <hr className='main-hr' />
        <input
          type='text'
          className='main-input'
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <hr className='main-hr' /><br />
        {this.state.userInput}
        <Validations inputLength={this.state.userInput.length} />
        <br />
        {charList}
      </div>
    );
  }

}

export default Main;

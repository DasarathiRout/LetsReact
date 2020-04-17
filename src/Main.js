import React, { Component } from 'react';
import './main.css';
import Person from './Person/Person'

class Main extends Component {

  wasClicked = false;

  state = {
    person: [
      { name: 'USR1', age: 31 },
      { name: 'USR2', age: 32 },
      { name: 'USR3', age: 33 },
      { name: 'USR4', age: 34 }
    ]
  }

  switchNameHandler = () => {
    console.log('Clicked For switchNameHandler()');
    if (this.wasClicked) {
      this.wasClicked = false;
      this.setState({
        person: [
          { name: 'ADMIN-1', age: 21 },
          { name: 'ADMIN-2', age: 22 },
          { name: 'ADMIN-3', age: 23 },
          { name: 'ADMIN-4', age: 24 }
        ]
      });

    } else {
      this.wasClicked = true;
      this.setState({
        person: [
          { name: 'USER-1', age: 31 },
          { name: 'USER-2', age: 32 },
          { name: 'USER-3', age: 33 },
          { name: 'USER-4', age: 34 }
        ]
      });
    }
  }

  nameChangedHandler = (event) =>{
    this.setState({
      person: [
        { name: event.target.value , age: 21 },
        { name: 'ADMIN-2', age: 22 },
        { name: 'ADMIN-3', age: 23 },
        { name: 'ADMIN-4', age: 24 }
      ]
    });
  }

  render() {

    const cssStyle= {
      border: '4px solid blue',
      padding: '8px',
    }
    return (
      <div className="Main">
        <header className="main-header">
          <div>
            <div>Lets React To Main.JS !!!</div>

            <button onClick={this.switchNameHandler} style= {cssStyle}>Switch Name</button>

            <Person name={this.state.person[0].name} age={this.state.person[0].age} changed= {this.nameChangedHandler}>Skills: Java, Spring, SQL</Person>
            <Person name={this.state.person[1].name} age={this.state.person[1].age}>Skills: Python, Linux</Person>
            <Person name={this.state.person[2].name} age={this.state.person[2].age}>Skils: JavaScript, Node, HTML</Person>
            <Person name={this.state.person[3].name} age={this.state.person[3].age} />

          </div>
        </header>
      </div>
      //     React.createElement('div',{className:Main},"Lets React To Main.JS !")
    );
  }

}

export default Main;

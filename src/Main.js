import React, { Component } from 'react';
import './main.css';
import Person from './Person/Person'

class Main extends Component {

  state = {
    persons: [
      { name: 'UESR1', age: 31 },
      { name: 'USER2', age: 32 },
      { name: 'USER3', age: 33 },
      { name: 'USER4', age: 34 }
    ],
    canShowPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.canShowPersons;
    this.setState({ canShowPersons: !doesShow });
  }

  render() {

    if (this.state.canShowPersons) {
     return <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
    }

    return (
      <div className="Main">
        {this.state.persons.map(
          person => {
           return <Person name={person.name} age={person.age} />
          }
        )}
      </div>
    );
  }

}

export default Main;

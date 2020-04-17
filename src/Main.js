import React, {Component} from 'react';
import './main.css';
import Person from './Person/Person'

class Main extends Component{
  
  state = {
    person: [
      {name: 'USR1', age:31},
      {name: 'USR2', age:32},
      {name: 'USR3', age:33},
      {name: 'USR4', age:34}
    ]
  }

  render() {
    return (
      <div className="Main">
        <header className="main-header">
          <div>
            <div>Lets React To Main.JS !!!</div>

            <Person name={this.state.person[0].name} age={this.state.person[0].age}>Skills: Java, Spring, SQL</Person>
            <Person name={this.state.person[1].name} age={this.state.person[1].age}>Skills: Python, Linux</Person>
            <Person name={this.state.person[2].name} age={this.state.person[2].age}>Skils: JavaScript, Node, HTML</Person>
            <Person name={this.state.person[3].name} age={this.state.person[3].age}/>

          </div>
        </header>
      </div>
      //     React.createElement('div',{className:Main},"Lets React To Main.JS !")
    );
  }

}

export default Main;

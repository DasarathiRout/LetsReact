import React, { Component } from 'react';
import './main.css';
class Main extends Component {

  state = {
    canBeShown: false
  }
  
  render() {

    return (
      <div className='Main'>
        <hr className='main-hr' />
      </div>
    );
  }

}

export default Main;

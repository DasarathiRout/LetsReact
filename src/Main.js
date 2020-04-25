import React, { Component } from 'react';
import './main.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
class Main extends Component {

  state = {
    canBeShown: false
  }
  
  render() {

    return (
      <div className='Main'>
        <hr className='main-hr' />
        <ErrorBoundary>Error Boundary Works Fine.</ErrorBoundary>
      </div>
    );
  }

}

export default Main;

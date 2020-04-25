import React, { Component } from 'react';
import './main.css';

class Main extends Component {

  state = {
    canBeShown: false,
    buttonStyle: {}
  }

  toggleButton = () => {
    const nowShown = this.state.canBeShown;
    this.setState({ canBeShown: !nowShown });

    if (nowShown) {
      this.setState({
        buttonStyle:
        {
          backgroungColor: 'Red',
          color: 'white '
        }
      });
    } else {
      this.setState(
        {
          buttonStyle:
          {
            backgroungColor: 'Green',
            color: 'white '
          }
        }
      );
    }

  }

  render() {

    return (
      <div className='Main'>
        <button 
        style={this.state.buttonStyle}
        onClick = {this.toggleButton}
        >Flip Color</button>
        <hr className='main-hr' />
      </div>
    );
  }

}

export default Main;

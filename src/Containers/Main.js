import React, { Component } from 'react';
import './Main.css';
import Layout from '../Components/Layouts/Layout';
import BurgerBuilder from '../Containers/BurgerBuilder/BurgerBuilder';
class Main extends Component {

  render() {
    console.log('[Main.js] @Render');
    return (
      <div>
        <div>
          <Layout>
            <BurgerBuilder />
          </Layout>
          <hr className='main-hr' />
          Burger Builder Manager
        </div>
      </div>
    );
  }

}

export default Main;

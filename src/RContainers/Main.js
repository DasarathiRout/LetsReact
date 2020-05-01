import React, { Component } from 'react';
import classes from './Main.css';
import Products from '../RComponents/Products/Products';
import Cockpit from '../RComponents/Cockpit/Cockpit';

class Main extends Component {

  constructor(props) {
    super(props);
    console.log('[Main.js] @Constructor');
  }

  state = {
    products: [
      { itemId: 'Item Id-1000', itemName: 'Product-P0', review: 5.0 },
      { itemId: 'Item Id-1001', itemName: 'Product-P1', review: 4.5 },
      { itemId: 'Item Id-1002', itemName: 'Product-P2', review: 4.2 }
    ],
    otherState: 'Un-Used Other Values',
    showProducts: false
  };

  productNameChangedHandler = (event, id) => {
    const productIndex = this.state.products.findIndex(P => {
      return P.id === id;
    });
    const product = { ...this.state.products[productIndex] };
    // const product = Object.assign({}, this.state.products[productIndex]);
    product.itemName = event.target.value;
    const products = [...this.state.products];
    products[productIndex] = products;
    this.setState({ products: products });
  };

  deletePrductHandler = productIndex => {
    // const products = this.state.products.slice();
    const products = [...this.state.products];
    products.splice(productIndex, 1);
    this.setState({ products: products });
  };

  toggleProductHandler = () => {
    const doesShow = this.state.showProducts;
    this.setState({ showProducts: !doesShow });
  };

  render() {

    console.log('[Main.js] @Render');
    let products = null;

    if (this.state.showProducts) {
      products = (
        <Products
          products={this.state.products}
          clicked={this.deletePrductHandler}
          changed={this.productNameChangedHandler}
        />
      );
    }

    return (
      <div>
        <div className={classes.Main}>
          <Cockpit
            title={this.props.applicationTitle}
            showProducts={this.state.showProducts}
            products={this.state.products}
            clicked={this.toggleProductHandler}
          />
          <hr className='main-hr' />
          {products}
        </div>
      </div>
    );
  }

}

export default Main;

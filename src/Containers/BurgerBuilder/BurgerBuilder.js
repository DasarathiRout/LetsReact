import React, { Component } from 'react';
import AuxConnect from '../../HOC/AuxConnect';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <AuxConnect>
            <div>
                <Burger></Burger>
                <div>Burger BUilder Controlers</div>
            </div>
            </AuxConnect>
        );
    }
}

export default BurgerBuilder;

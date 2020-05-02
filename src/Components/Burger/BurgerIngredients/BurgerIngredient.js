import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        let ingredients = null;
        switch (this.props.type) {
            case ('BREADE_BUTTOM'):
                ingredients = <div className='BreadBottom'></div>;
                break;

            case ('BREADE_TOP'):
                ingredients = (
                    <div className='BreadTop'>
                        <div className='Seeds1'></div>
                        <div className='Seeds2'></div>
                        <div></div>
                    </div>
                );
                break;
            case ('MEAT'):
                ingredients = <div className='Meat'></div>;
                break;
            case ('CHEESE'):
                ingredients = <div className='Cheese'></div>;
                break;
            case ('SALAD'):
                ingredients = <div className='Salad'></div>;
                break;
            default:
                ingredients = null;
        }
        return ingredients;
    }
};

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngredient;

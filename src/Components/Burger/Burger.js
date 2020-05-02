
import React from 'react';
import AuxConnect from '../../HOC/AuxConnect';
import BurgerIngredients from './BurgerIngredients/BurgerIngredient';
import './Burger.css';

const burger = (burgerProps) => {
    return (
        <div className='Burger'>
            <AuxConnect>
                {burgerProps.children}
                <BurgerIngredients type='BREADE_TOP' />
                <BurgerIngredients type='CHEESE' />
                <BurgerIngredients type='MEAT' />
                <BurgerIngredients type='SALAD' />
                <BurgerIngredients type='BREADE_BUTTOM' />
            </AuxConnect>
        </div>
    );

};
export default burger;
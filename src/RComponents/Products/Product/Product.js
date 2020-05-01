import React from 'react';
import classes from './Product.css';

const product = (props) => {
  console.log('[Product.js] @Rendering');
  return (
    <div className={classes.Product}>
      <p onClick={props.click}>
        {props.itemName} , Review : {props.itemReview}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.itemName} />
      <div></div>
    </div>
  );
};

export default product;

import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showProducts) {
        btnClass = classes.Red;
    }

    if ( props.products.length <= 2 ) {
      assignedClasses.push( classes.red );
    }
    if ( props.products.length <= 1 ) {
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}>
            <b>{props.title}</b>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Products</button>
        </div>
    );
};

export default cockpit;
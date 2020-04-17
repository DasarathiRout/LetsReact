import React from 'react';
import './Person.css';

const person = (props) => {
    return <div className='Person'> Hey Browser, Person {props.name} And {props.age} Years Old. <br />
        {props.children}<br />
        <input onChange={props.changed} type='text' defaultValue={props.name}/><br />
    </div>
}
export default person
import React from 'react';

const person = (props) => {
    return <div> Hey Browser I'M Person {props.name} And {props.age} Years Old. <br />
        {props.children}<br />
        <input onChange={props.changed} type='text' defaultValue={props.name}/><br />
    </div>
}
export default person
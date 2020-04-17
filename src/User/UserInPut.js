import React from 'react';
import './User.css';

const userInPut = (props) => {
    return <div className='UserInPut'>
        <input
            type="text"
            onChange={props.changed}
            value={props.currentName} />;
    <br />
    </div>
}
export default userInPut
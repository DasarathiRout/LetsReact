import React from 'react';
import './User.css';

const userOutPut = (props) => {
    return <div className='UserOutPut'>
        User Name: {props.userName} I hope I'll be Overwritten !
        <br />
    </div>
}
export default userOutPut
import React from 'react';
import AuxConnect from '../../HOC/AuxConnect';
import './Layout.css';

const layout = (layoutProps) => {
    return (
        <AuxConnect>
            <div>ToolBar, SideDrawer,BackDrop</div>
            <main className='layout-contents'>{layoutProps.children}</main>
        </AuxConnect>
    );

};
export default layout;

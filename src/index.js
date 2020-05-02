import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Containers/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Main applicationTitle= 'Product Catalog Manager' />
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();
serviceWorker.register();

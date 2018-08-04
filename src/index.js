import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/base.scss';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

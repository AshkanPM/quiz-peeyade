import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './assets/sass/base.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import Application from './components/Application';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';

const rootElement = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  )
}

render(Application);

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();

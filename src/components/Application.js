import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import configureStore from 'modules/store/configureStore';
import Routes from 'components/Routes';
import { beforeLeave } from 'helpers';

const history = createBrowserHistory();

const store = configureStore({ history });

const Application = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  </Provider>
);

window.onbeforeunload = (e) => {
  beforeLeave('Close Application');
}

export default Application;

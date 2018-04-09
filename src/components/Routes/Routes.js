import { Route , Switch} from 'react-router';
import React from 'react';

import { LOGIN, ADMIN, LANDING, FORM } from 'constants/urls';
import Header from 'containers/Header';
import logo from 'assets/logo.svg';
import PageAdmin from 'containers/PageAdmin';
import PageForm from 'containers/PageForm';
import PageLanding from 'containers/PageLanding';
import PageLogin from 'containers/PageLogin';
import PrivateRoute from './components/PrivateRoute'
import './Routes.css';

const Routes = (props) => {
  return (
    <div className="app">
      <Header logo={logo}/>
      <Switch>
        <Route exact path={LANDING} component={PageLanding} />
        <PrivateRoute path={ADMIN} component={PageAdmin} />
        <Route path={FORM} component={PageForm} />
        <Route path={LOGIN} component={PageLogin}/>
      </Switch>
    </div>
  );
};

export default Routes;

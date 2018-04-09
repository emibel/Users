import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SESSION } from 'constants/props';
import { LOGIN } from 'constants/urls';

const PrivateRoute = ({ component: Component, session, ...rest }) => (
  <Route
    {...rest}
    render={props => session.currentSession
      ? <Component {...props} />
      : <Redirect to={{ pathname: LOGIN }} />}
  />
);

PrivateRoute.propTypes = {
  session: SESSION.isRequired,
  component: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session
  }
};

export default connect(mapStateToProps, null)(PrivateRoute);

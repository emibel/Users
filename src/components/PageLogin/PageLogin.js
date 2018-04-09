import { autobind } from 'core-decorators';
import React, { Component } from 'react';

import { ACTIONS, SESSION } from 'constants/props';
import { LANDING } from 'constants/urls';
import FormLogin from './components/FormLogin';
import './PageLogin.css';

class PageLogin extends Component {

  static propTypes = {
    sessionActions: ACTIONS.isRequired,
    session: SESSION,
  }

  static defaultPropTypes = {
    session: {},
  }

  constructor(props) {
    super(props);

    const { session } = this.props;
    if(session.currentSession) {
      props.history.push(LANDING);
    }
  }

  @autobind
  handleClick(credentials) {
    const { sessionActions } = this.props;

    sessionActions.fetchLogin(credentials)
    .then(response => {
      console.log(response);
    });

  }

  render() {
    const { session } = this.props;

    return (
      <div className="page">
        <h3>Enter your credentials to login</h3>
        <FormLogin onSubmit={this.handleClick} />
        {
          session &&
          session.error &&
          <div>{session.error}</div>
        }
      </div>
    );
  }
}

export default PageLogin;

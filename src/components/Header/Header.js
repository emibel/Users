import { autobind } from 'core-decorators';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatButton } from'material-ui';

import { ADMIN, LANDING, LOGIN , FORM} from  'constants/urls';
import { ACTIONS, CURRENT_SESSION } from 'constants/props';
import Menu from 'components/Menu';

import './Header.css';

class Header extends Component {
  static propTypes = {
    logo: PropTypes.node,
    sessionActions: ACTIONS.isRequired,
    currentSession: CURRENT_SESSION,
  }

  static defaultPropTypes = {
    currentSession: {},
    logo: null,
  }

  @autobind
  handleLogut() {
    const { sessionActions } = this.props;

    sessionActions.fetchLogout();
  }

  render() {
    const {
      currentSession,
      logo
    } = this.props;

    const links = []

    if(!currentSession) {
      links.push({
        label: 'Login',
        url: LOGIN,
      });
    }

    links.push(
      {
        label: 'HOME',
        url: LANDING
      },
      {
        label: 'FORM',
        url: FORM
      },
    );

    if(currentSession) {
      links.push({
        label: 'Admin',
        url: ADMIN
      })
    }

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <div>
          <Menu links={links} />
          { currentSession &&
            <FlatButton
              primary
              label="Logout"
              onClick={this.handleLogut}
            />
          }
        </div>

      </header>
    )
  }
}


export default Header;

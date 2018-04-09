import { autobind } from 'core-decorators';
import { Col, Container, Row } from 'reactstrap';
import FormUser from './components/FormUser'
import React, { Component } from 'react';
import Idle from 'react-idle';

import { ACTIONS } from 'constants/props';
import api from 'api';

import './PageForm.css';

class PageForm extends Component {

  state = {
    message: null,
  }

  static propTypes = {
    usersActions: ACTIONS.isRequired,
  }

  @autobind
  handleClick(user) {
    const { usersActions } = this.props;

    usersActions.fetchSaveUser(user)
    .then(() => {
      api.actions.save({msg: `Saved user with email: ${user.email}`});
      this.setState(prevState => ({ ...prevState, message: 'Your data has been registered'}))
    });
  }

  render() {
    const { countries } = this.props;

    const { message } = this.state;

    return (
        <div className="page">
          <Idle
            onChange={({idle}) => {
              if (idle) {
                api.actions.save({msg: `Inactive in Form Page`});
              }
            }}
            timeout={3600000}
          />
          <h3>Register your data</h3>
          <Container>
            <Row>
              <Col>
                <FormUser
                  countriesList={countries}
                  onSubmit={this.handleClick}
                />
              </Col>
            </Row>
          </Container>
          { message && <span>{message}</span>}
        </div>
    );
  }
}

export default PageForm;

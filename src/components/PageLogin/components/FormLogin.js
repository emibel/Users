
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';

import { TextField } from 'redux-form-material-ui';

import { validateEmail } from 'constants/formValidations';

import './FormLogin.css';

// TODO use validator class
const validate = ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.email = "Empty Email";
  } else if (validateEmail(email)) {
    errors.email = "Invalid Email";
  }
  if (!password) {
    errors.password = 'Empty Password';
  }
  return errors;
};

const FormLogin = props => {
  const {
    handleSubmit,
    submitting,
    valid
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col>
            <Field
              name="email"
              type="email"
              component={TextField}
              floatingLabelText="Email"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Field
              name="password"
              type="password"
              component={TextField}
              floatingLabelText="Password"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <RaisedButton
              className="login-submit"
              label="Submit"
              primary
              disabled={!valid || submitting}
              type="submit"
            />
          </Col>
        </Row>
      </Container>
    </form>
  );
}


export default
  reduxForm({
    form: 'login',
    validate,
  })(FormLogin);

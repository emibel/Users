import { Col, Container, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { MenuItem, RaisedButton } from 'material-ui';
import { SelectField, TextField } from 'redux-form-material-ui';
import PropTypes from 'prop-types';
import React from 'react';

import {
  validateEmail,
  validateMaxLength,
  validateMinLength,
  validatePhone,
  validatePostalCode,
  validateString,
} from 'constants/formValidations';

import { COUNTRIES } from 'constants/props';
import './FormUser.css';

const validate = ({
  address,
  city,
  country,
  countryId,
  email,
  firstName,
  lastName,
  phone,
  postalCode,
}) => {

  const errors = {};
  if (!firstName) {
    errors.firstName = 'Required';
  } else if (validateMinLength(firstName)) {
    errors.firstName = 'Min length 2 characters';
  } else if (validateMaxLength(firstName)) {
    errors.firstName = 'Max length 252 characters'
  } else if (validateString(firstName)) {
    errors.firstName = 'spechal characters are not allowed'
  }

  if (!lastName) {
    errors.lastName = 'Required';
  } else if (validateMinLength(lastName)) {
    errors.lastName = 'Min length 2 characters';
  } else if (validateMaxLength(lastName)) {
    errors.lastName = 'Max length 252 characters'
  } else if (validateString(lastName)) {
    errors.lastName = 'spechal characters are not allowed'
  }

  if (!email) {
    errors.email = "Empty Email";
  } else if (validateEmail(email)) {
    errors.email = "Invalid Email";
  }

  if (phone) {
    if (validateMaxLength(phone)) {
      errors.phone = 'Max length 252 characters'
    } else if (phone && validatePhone(phone)) {
      errors.phone = 'Phone is not valid'
    } else if (validateMinLength(phone)) {
      errors.phone = 'Min length 2 characters';
    }
  }

  if (!address) {
    errors.address = "Empty Address";
  }

  if (!city) {
    errors.city = "Empty City";
  }

  if (!postalCode) {
    errors.postalCode = "Empty Postal Code";
  } else if (validatePostalCode(postalCode)) {
    errors.postalCode = "Invalid Postal Code";
  }

  if (!countryId) {
    errors.countryId = "Empty Country";
  }

  return errors;
};

const FormUser = props => {
  const {
    countriesList,
    handleSubmit,
    submitting,
    invalid
  } = props;

  const floatingLabelStyle = {
    color: 'rgba(0, 0, 0, 0.38)',
    lineHeight: 1.5,
  };

  const countriesMenuList = countriesList
  .map(({ code, name }) => (
    <MenuItem
      key={code}
      primaryText={name}
      value={code}
    />
  ));

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col xs="12" lg="6">
            <Field
              fullWidth
              name="firstName"
              type="text"
              component={TextField}
              floatingLabelText="First Name"
            />
          </Col>
          <Col xs="12" lg="6">
            <Field
              fullWidth
              name="lastName"
              type="text"
              component={TextField}
              floatingLabelText="Last Name"
            />
          </Col>
        </Row>

        <Row>
          <Col  xs="12" lg="6">
            <Field
              fullWidth
              name="email"
              type="email"
              component={TextField}
              floatingLabelText="Email Address"
            />
          </Col>

          <Col  xs="12" lg="6">
            <Field
              fullWidth
              name="phone"
              type="text"
              component={TextField}
              floatingLabelText="Phone Number"
            />
          </Col>
        </Row>

        <Row>
          <Col  xs="12" lg="6">
            <Field
              fullWidth
              name="address"
              type="text"
              component={TextField}
              floatingLabelText="Address"
            />
          </Col>

          <Col xs="12" lg="6">
            <Field
              fullWidth
              name="city"
              type="text"
              component={TextField}
              floatingLabelText="City"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="12" lg="6">
            <Field
              fullWidth
              name="postalCode"
              type="text"
              component={TextField}
              floatingLabelText="Postal Code"
            />
          </Col>

          <Col>
            <div className="country">
              <Field
                fullWidth
                component={SelectField}
                floatingLabelStyle={floatingLabelStyle}
                hintText="Select country"
                name="countryId"
                labelStyle={{ color: '#0094c6' }}
                selectedMenuItemStyle={{ color: '#0094c6' }}
              >
                {countriesMenuList}
              </Field>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Field
              fullWidth
              name="comments"
              floatingLabelText="Comments"
              floatingLabelStyle={{left: '0'}}
              multiLine
              component={TextField}
              rows={6}
              rowsMax={6}
            />
          </Col>
        </Row>

        <div className="user-submit">
          <Row>
            <Col>
              <RaisedButton
                disabled={invalid || submitting}
                label="Submit"
                primary
                type="submit"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </form>
  );
}

FormUser.propTypes = {
  countriesList: COUNTRIES.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default
  reduxForm({
    form: 'user',
    validate,
  })(FormUser);

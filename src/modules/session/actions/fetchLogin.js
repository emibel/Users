
import { replace } from 'react-router-redux';

import { LANDING } from 'constants/urls';
import actionTypes from 'modules/session/constants';
import api from 'api';
// Actions

export const fetchLoginFailure = error => ({
  payload: error,
  type: actionTypes.FETCH_LOGIN_FAILURE,
});

export const fetchLoginRequest = () => ({
  payload: {},
  type: actionTypes.FETCH_LOGIN_REQUEST,
});

export const fetchLoginSuccess = response => ({
  payload: response,
  type: actionTypes.FETCH_LOGIN_SUCCESS,
});


// thunks

export const fetchLogin = (loginOptions) => {
  const thunk = (dispatch) => {
    dispatch(fetchLoginRequest());

    return api.session.login(loginOptions)
    .then(response => {
      if (response.length > 0 ){
        dispatch(fetchLoginSuccess(response[0]));
        dispatch(replace(LANDING));
        api.actions.save({msg: `Log-in: ${response[0].email}`});
      }
      else {
        const error = new Error('Email or password are incorrect.');
        console.log(error);
        dispatch(fetchLoginFailure('Email or password are incorrect.'));
      }
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchLoginFailure(error));
    })
  }
  thunk.type = actionTypes.FETCH_LOGIN;

  return thunk;
}

export default fetchLogin;

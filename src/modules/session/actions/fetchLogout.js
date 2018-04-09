
import { replace } from 'react-router-redux';

import { LOGIN } from 'constants/urls';
import actionTypes from 'modules/session/constants';
import api from 'api';
// Actions

export const fetchLogoutFailure = error => ({
  payload: error,
  type: actionTypes.FETCH_LOGOUT_FAILURE,
});

export const fetchLogoutRequest = () => ({
  payload: {},
  type: actionTypes.FETCH_LOGOUT_REQUEST,
});

export const fetchLogoutSuccess = response => ({
  payload: response,
  type: actionTypes.FETCH_LOGOUT_SUCCESS,
});


// thunks

export const fetchLogout = (loginOptions) => {
  const thunk = (dispatch) => {
    api.actions.save({msg: `Log-out.`})
    .then(() => {
      dispatch(fetchLogoutRequest());
      dispatch(fetchLogoutSuccess());

      dispatch(replace(LOGIN));
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchLogoutFailure(error));
    });

  }
  thunk.type = actionTypes.FETCH_LOGOUT;

  return thunk;
}

export default fetchLogout;

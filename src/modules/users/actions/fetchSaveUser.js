import {reset} from 'redux-form';

import actionTypes from 'modules/users/constants';
import { fetchUsers } from './fetchUsers';
import api from 'api';

// Actions

export const fetchSaveUserFailure = error => ({
  payload: error,
  type: actionTypes.FETCH_SAVE_USER_FAILURE,
});

export const fetchSaveUserRequest = () => ({
  payload: {},
  type: actionTypes.FETCH_SAVE_USER_REQUEST,
});

export const fetchSaveUserSuccess = response => ({
  payload: response,
  type: actionTypes.FETCH_SAVE_USER_SUCCESS,
});


// thunks

export const fetchSaveUser = (user) => {
  const thunk = (dispatch) => {
    dispatch(fetchSaveUserRequest());

    return api.users.fetchSaveUser(user)
    .then(response => {
      dispatch(fetchSaveUserSuccess(response));
      dispatch(fetchUsers());
      dispatch(reset('user'));
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchSaveUserFailure(error));
    })
  }
  thunk.type = actionTypes.FETCH_SAVE_USER;

  return thunk;
}

export default fetchSaveUser;

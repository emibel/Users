
import actionTypes from 'modules/users/constants';
import api from 'api';

// Actions

export const fetchUsersFailure = error => ({
  payload: error,
  type: actionTypes.FETCH_USERS_FAILURE,
});

export const fetchUsersRequest = () => ({
  payload: {},
  type: actionTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = response => ({
  payload: response,
  type: actionTypes.FETCH_USERS_SUCCESS,
});


// thunks

export const fetchUsers = () => {
  const thunk = (dispatch) => {
    dispatch(fetchUsersRequest());

    return api.users.fetchUsers()
    .then(response => {
      dispatch(fetchUsersSuccess(response));
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchUsersFailure(error));
    })
  }
  thunk.type = actionTypes.FETCH_USERS;

  return thunk;
}

export default fetchUsers;

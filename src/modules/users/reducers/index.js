import initialState from 'modules/store/initialState.json';
import actionTypes from './../constants';
import sessionActionTypes from 'modules/session/constants';

const users = (state = initialState.users, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_USERS_REQUEST:
    case actionTypes.FETCH_USERS_FAILURE:
    case sessionActionTypes.FETCH_LOGOUT_SUCCESS:
      return []

    case actionTypes.FETCH_USERS_SUCCESS:
      return [ ...payload ]

    default:
      return state;
  }
}

export default users;

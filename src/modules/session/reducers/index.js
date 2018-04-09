import actionTypes from './../constants';
import initialState from 'modules/store/initialState.json';

const session = (state = initialState.session, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_LOGIN_REQUEST:
    case actionTypes.FETCH_LOGOUT_SUCCESS:
      return {}

    case actionTypes.FETCH_LOGIN_FAILURE:
      return {
        ...state,
        error: payload
      }

    case actionTypes.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        currentSession: {...payload}
      }

    default:
      return state;
  }
}

export default session;

import { combineReducers } from 'redux';

import form from 'modules/redux-form/reducers';
import session from 'modules/session/reducers';
import users from 'modules/users/reducers';

const rootReducer = combineReducers({
  form,
  session,
  users,
});

export default rootReducer;

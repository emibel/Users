import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import countries from 'constants/countries';
import PageAdmin from 'components/PageAdmin';
import usersActions from 'modules/users/actions';
import * as usersSelectors from 'modules/users/selectors';
import * as sessionSelectors from 'modules/session/selectors';

const mapStateToProps = state => ({
  users: usersSelectors.users(state),
  session: sessionSelectors.session(state),
  countries,
});

const mapDispatchToProps = dispatch => ({
  usersActions: bindActionCreators(usersActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageAdmin);

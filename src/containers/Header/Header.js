import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from 'components/Header';
import sessionActions from 'modules/session/actions';
import * as sessionSelectors from 'modules/session/selectors';

const mapStateToProps = state => ({
  currentSession: sessionSelectors.currentSession(state),
});

const mapDispatchToProps = dispatch => ({
  sessionActions: bindActionCreators(sessionActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

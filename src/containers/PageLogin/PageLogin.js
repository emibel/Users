import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PageLogin from 'components/PageLogin';
import sessionActions from 'modules/session/actions';
import * as sessionSelectors from 'modules/session/selectors';

const mapStateToProps = state => ({
  session: sessionSelectors.session(state),
});

const mapDispatchToProps = dispatch => ({
  sessionActions: bindActionCreators(sessionActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);

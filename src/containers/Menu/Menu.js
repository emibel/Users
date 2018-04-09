import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from 'components/Menu';
import * as sessionSelectors from 'modules/session/selectors';

const mapStateToProps = state => ({
  currentSesssion: sessionSelectors.currentSesssion(state),
});

export default connect(mapStateToProps, null)(Menu);

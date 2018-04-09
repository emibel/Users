import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import countries from 'constants/countries';
import PageForm from 'components/PageForm';
import usersActions from 'modules/users/actions';

const mapStateToProps = state => ({
  countries
});

const mapDispatchToProps = dispatch => ({
  usersActions: bindActionCreators(usersActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageForm);

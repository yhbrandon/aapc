import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App';

function mapStateToProps(state) {
  return {
    title: state.app.title,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(App)

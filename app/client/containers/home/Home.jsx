import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Home from '../../components/Home'

function mapStateToProps(state) {
  return {
    title: state.app.title,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Home)

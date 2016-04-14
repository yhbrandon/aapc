import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../actions/auth'
import Login from '../../components/Login'
import { setTitle } from '../../actions/app'

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTitle,
    login
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

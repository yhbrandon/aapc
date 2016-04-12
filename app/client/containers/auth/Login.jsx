import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginWithPassword } from '../../actions/auth'
import Login from '../../components/Login'
import { setTitle } from '../../actions/app'

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTitle,
    loginWithPassword
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

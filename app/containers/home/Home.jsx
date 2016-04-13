import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setTitle } from '../../actions/app'
import Home from '../../components/Home'

function mapStateToProps(state) {
  return {
    title: state.app.title
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTitle
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/posts'

import App from '../components/App';

function mapStateToProps(state) {
  return {
    title: state.app.title
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

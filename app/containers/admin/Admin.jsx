import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setTitle } from '../../actions/app'
import { createPost, deletePost, editPost } from '../../actions/posts'

import Admin from '../../components/Admin'

function mapStateToProps(state) {
  return {
    title: state.app.title,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTitle,
    createPost
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

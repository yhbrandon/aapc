import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setTitle } from '../../actions/app'
import { createPost, selectAdminPost } from '../../actions/posts'

import Admin from '../../components/Admin'

function mapStateToProps(state) {
  return {
    title: state.app.title,
    posts: state.posts.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTitle,
    createPost,
    selectAdminPost
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

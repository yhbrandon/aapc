import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setTitle } from '../../actions/app'
import { createPost, deletePost, editPost } from '../../actions/posts'

import Blog from '../../components/Blog'

function mapStateToProps(state) {
  return {
    title: state.app.title,
    posts: state.posts.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTitle,
    createPost: createPost(),
    deletePost: deletePost(),
    editPost: editPost()
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

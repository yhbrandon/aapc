import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Posts } from 'app/collections/posts'

import { setTitle } from '../../actions/app'
import { createPost, deletePost, editPost, loadPosts } from '../../actions/posts'

import Blog from '../../components/Blog'

function mapStateToProps(state) {
  return {
    title: state.app.title,
    user: state.auth.user,
    posts: state.posts.items,
    ready: state.posts.ready
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTitle,
    createPost: createPost(Posts),
    deletePost: deletePost(Posts),
    editPost: editPost(Posts),
    loadPosts: loadPosts(Posts)
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

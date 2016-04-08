import React, { Component, PropTypes } from 'react'
import Content from './Content'
import Posts from './Posts/Posts'
import NewPost from './Posts/NewPost'
import Subheader from './Subheader'

function getStyles() {
  return {
    root: {
      width: '100%',
      maxWidth: '1140px',
      margin: '0 auto'
    }
  }
}

class Blog extends Component {
  static propTypes = {
    setTitle: PropTypes.func,
    createPost: PropTypes.func,
    deletePost: PropTypes.func,
    editPost: PropTypes.func,
    loadPosts: PropTypes.func
  }

  componentDidMount() {
    this.props.setTitle('Blog')
    this.props.loadPosts()
  }

  onNewPost() {

  }

  render() {
    const styles = getStyles()

    return (
      <Content layout="column" align="flex-start" justify="center" margin="8px" padding="8px" style={styles.root}>
        <Subheader title="Blog Posts"></Subheader>
        <Posts></Posts>
        <NewPost createPost={this.props.createPost}></NewPost>
      </Content>
    )
  }
}

export default Blog

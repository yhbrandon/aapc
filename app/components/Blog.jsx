import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Content from './Content'
import Posts from './posts/Posts'
import moment from 'moment'
import NewPost from './posts/NewPost'
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
    editPost: PropTypes.func
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.setTitle('Blog')
  }

  onNewPost(title, content) {
    const currentDate = moment().startOf('day').toDate()

    this.props.createPost(currentDate, title, content)
  }

  render() {
    const { title } = this.props
    const styles = getStyles()

    return (
      <div>
        <AppBar title={title} zDepth={0} />
        <Content layout="column" align="flex-start" justify="center" margin="8px" padding="8px" style={styles.root}>
          <Subheader title="Blog Posts"></Subheader>
          <Posts></Posts>
          <NewPost createPost={this.onNewPost.bind(this)}></NewPost>
        </Content>
      </div>
    )
  }
}

Blog.propTypes = {
  setTitle: PropTypes.func,
  createPost: PropTypes.func,
  deletePost: PropTypes.func,
  editPost: PropTypes.func,
  title: PropTypes.string,
  user: PropTypes.string
}

export default Blog

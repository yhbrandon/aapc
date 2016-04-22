import React, { Component, PropTypes } from 'react'
import { filter } from 'lodash'
import Styles from '../constants/Styles'
import { push } from 'react-router-redux'
import AppBar from 'material-ui/lib/app-bar'
import Content from './app/Content'
import Posts from './posts/Posts'
import PostHandler from './posts/PostHandler'
import Subheader from './app/Subheader'

function getStyles() {
  return {
    root: Styles.container,
    appbar: {
      height: 128
    },
    button: {
      position: 'absolute',
      bottom: 23,
      right: 23
    },
    posts: {
      marginTop: '-64px',
      zIndex: 1200,
      position: 'relative'
    }
  }
}

class Admin extends Component {

  constructor (props) {
    super(props)
    this.state = {
      type: 'create',
      isDialogOpen: false,
      selectedPost: {}
    }
  }

  componentWillMount() {
    this.props.setTitle('Admin')
  }

  handleCreateClick = () => {
    this.setState({ type: 'create', isDialogOpen: true })
  }

  handleCreatePost = (post) => {
    this.props.createPost(post)
    this.setState({ isDialogOpen: false })
  }

  handleEditPost = (id, title, banner, content) => {
    this.props.editPost(id, title, banner, content)
    this.setState({ isDialogOpen: false })
  }

  handleSelectPost = (id) => {
    this.setState({
      type: 'edit',
      isDialogOpen: true,
      selectedPost: this.props.posts.find(post => post.id === id)
    })
  }

  render() {
    const { title, posts } = this.props
    const styles = getStyles()

    return (
      <div>
        <AppBar title={title} zDepth={0} style={ styles.appbar }/>
        <div style={ Styles.container }>
          <Content layout="column">
            <Posts
              posts={ posts }
              style={ styles.posts }
              selectPost={ this.handleSelectPost }></Posts>
            <PostHandler
              createPost={ this.handleCreatePost }
              editPost={ this.handleEditPost }
              style={ styles.button }
              type={ this.state.type }
              onCreateClick={ this.handleCreateClick }
              isOpen={ this.state.isDialogOpen }
              selectedPost={ this.state.selectedPost }></PostHandler>
          </Content>
        </div>
      </div>
    )
  }
}

Admin.propTypes = {
  setTitle: PropTypes.func,
  createPost: PropTypes.func,
  editPost: PropTypes.func,
  title: PropTypes.string,
  posts: PropTypes.array
}

export default Admin

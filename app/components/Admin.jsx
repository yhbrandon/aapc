import React, { Component, PropTypes } from 'react'
import Styles from '../constants/Styles'
import { push } from 'react-router-redux'
import AppBar from 'material-ui/lib/app-bar'
import Content from './app/Content'
import Posts from './posts/Posts'
import moment from 'moment'
import CreatePost from './posts/CreatePost'
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
  }

  componentWillMount() {
    this.props.setTitle('Admin')
  }

  onNewPost(title, banner, content) {
    const currentDate = moment().startOf('day').toDate()

    this.props.createPost(currentDate, title, banner, content)
  }

  render() {
    const { title, posts } = this.props
    const styles = getStyles()
    
    return (
      <div>
        <AppBar title={title} zDepth={0} style={ styles.appbar }/>
        <div style={ Styles.container }>
          <Content layout="column">
            <Posts posts={ posts } style={ styles.posts }></Posts>
            <CreatePost createPost={ this.onNewPost.bind(this) } style={ styles.button }></CreatePost>
          </Content>
        </div>
      </div>
    )
  }
}

Admin.propTypes = {
  setTitle: PropTypes.func,
  createPost: PropTypes.func,
  deletePost: PropTypes.func,
  editPost: PropTypes.func,
  title: PropTypes.string,
  posts: PropTypes.array
}

export default Admin

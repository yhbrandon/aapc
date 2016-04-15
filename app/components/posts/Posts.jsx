import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import Avatar from 'material-ui/lib/avatar'
import Colors from 'material-ui/lib/styles/colors'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Paper from 'material-ui/lib/paper'

class Posts extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    const { posts, deletePost, editPost, style } = this.props;

    let items = []

    posts.forEach((post) => {
      let avatar = post.banner ? <Avatar src={ post.banner } /> : <Avatar>{ post.title.charAt(0).toUpperCase() }</Avatar>

      items.push(<ListItem key={ post.id } leftAvatar={ avatar } primaryText={ post.title } secondaryText={ moment(post.date).format("MMM Do YYYY") }></ListItem>)
    }, this)

    const content = items.length > 0 ? (<Paper><List>{ items }</List></Paper>) : 'No posts have been written'

    return (
      <div style={ style }>
        {content}
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  deletePost: PropTypes.func,
  editPost: PropTypes.func
}

export default Posts

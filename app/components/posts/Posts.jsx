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

  handleSelect = (id) => {
    console.log(id)
    this.props.selectPost(id)
  }

  render() {
    const { posts, style } = this.props;

    const hasPosts = posts.length > 0
    const nodes = !hasPosts ?
      <em>Please create some posts</em> :
      posts.map(post =>
        <ListItem
          key={ post.id }
          leftAvatar={ post.banner ? <Avatar src={ post.banner } /> : <Avatar>{ post.title.charAt(0).toUpperCase() }</Avatar> }
          primaryText={ post.title }
          secondaryText={ moment(post.date).format("MMM Do YYYY") }
          onClick={() => this.handleSelect(post.id)}></ListItem>
      )

    return (
      <div style={ style }>
        <Paper>
          <List>{ nodes }</List>
        </Paper>
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  selectPost: PropTypes.func
}

export default Posts

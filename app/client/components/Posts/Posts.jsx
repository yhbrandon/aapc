import { forEach } from 'lodash'
import React, { Component, PropTypes } from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Paper from 'material-ui/lib/paper'

class Posts extends Component {
  static propTypes = {
    items: PropTypes.array,
    deletePost: PropTypes.func,
    editPost: PropTypes.func
  }

  render() {
    const { items, deletePost, editPost } = this.props;

    let content;
    if (items && items.length > 0) {
      let posts;

      forEach(items, function(item) {
        console.log('here')
      });
      conent = <Paper><List>{posts}</List></Paper>
    } else {
      content = 'No posts have been written'
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default Posts

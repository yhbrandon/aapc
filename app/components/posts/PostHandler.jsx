import React, { Component, PropTypes } from 'react'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import TextField from 'material-ui/lib/text-field'

function getStyles() {
  return {
    dialog: {
      maxWidth: '500'
    },
    input: {
      width: '100%'
    }
  }
}

class PostHandler extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      banner: '',
      content: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.selectedPost.title,
      banner: nextProps.selectedPost.banner,
      content: nextProps.selectedPost.content
    })
  }

  handleOpen = () => {
    this.props.onCreateClick()
  }

  handleClose = () => {
    this.props.handleCancel()
  }

  handleSave = (type) => {
    if (this.state.title === '' && this.state.content === '' ) {
      alert('Fill that shit out yo!')
    } else {
      if ( type === 'create' ) {
        this.props.createPost(this.state.title, this.state.banner, this.state.content)
      } else if ( type === 'edit' ) {
        this.props.editPost(this.props.selectedPost.id, this.state.title, this.state.banner, this.state.content)
      } else if ( type === 'delete' ) {
        this.props.deletePost(this.state.post.id)
      }

      this.setState({title: '', banner: '', content: ''})
    }
  }

  handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value

    this.setState(obj)
  }

  render() {
    const { createPost, editPost, style, type, post, isOpen } = this.props
    const actions = []
    const styles = getStyles()
    const title = type === 'create' ? 'Create new post' : 'Edit Post'

    if ( type === 'create' ) {
      actions.push(<FlatButton label="Cancel" secondary={true} onClick={() => this.handleClose()}/>)
      actions.push(<FlatButton label="Save" primary={true} onClick={() => this.handleSave('create')} />)
    } else {
      actions.push(<FlatButton label="Delete" secondary={true} onClick={() => this.handleSave('delete')} />)
      actions.push(<FlatButton label="Edit" primary={true} onClick={() => this.handleSave('edit')} />)
    }

    return (
      <div style={ style }>
        <FloatingActionButton
          onClick={() => this.props.onCreateClick() }
          style={ styles.button }>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title={ title }
          actions={ actions }
          modal={false}
          open={ isOpen }
          onRequestClose={this.handleClose}
          contentStyle={styles.dialog}>
          <TextField
            name="title"
            floatingLabelText="Title"
            onChange={this.handleChange}
            style={styles.input}
            value={ this.state.title }/>
          <br/>
          <TextField
            name="banner"
            floatingLabelText="Banner URL"
            onChange={this.handleChange}
            style={styles.input}
            value={ this.state.banner }/>
          <br/>
          <TextField
            name="content"
            floatingLabelText="Content"
            onChange={this.handleChange}
            multiLine={true}
            rows={20}
            style={styles.input}
            value={ this.state.content } />
        </Dialog>
      </div>
    )
  }
}

PostHandler.propTypes = {
  createPost: PropTypes.func,
  editPost: PropTypes.func,
  deletePost: PropTypes.func,
  onCreateClick: PropTypes.func,
  type: PropTypes.string,
  selectedPost: PropTypes.object
}

export default PostHandler

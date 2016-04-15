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

class CreatePost extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      title: '',
      content: ''
    }
  }

  handleOpen = () => {
    this.setState({isOpen: true})
  }

  handleClose = () => {
    this.setState({isOpen: false})
  }

  handleSave = () => {
    if (this.state.title === '' && this.state.content === '' ) {
      alert('Fill that shit out yo!')
    } else {
      this.props.createPost(this.state.title, this.state.banner, this.state.content)
      this.setState({isOpen: false})
    }
  }

  handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value

    this.setState(obj)
  }

  render() {
    const { createPost, style } = this.props;
    const styles = getStyles()

    const actions = [
     <FlatButton
       label="Cancel"
       secondary={true}
       onClick={this.handleClose}
     />,
     <FlatButton
       label="Save"
       primary={true}
       onClick={this.handleSave}
     />,
    ]

    return (
      <div style={ style }>
        <FloatingActionButton onClick={this.handleOpen} style={styles.button}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Create new post"
          actions={actions}
          modal={false}
          open={this.state.isOpen}
          onRequestClose={this.handleClose}
          contentStyle={styles.dialog}>
          <TextField name="title" floatingLabelText="Title" onChange={this.handleChange} style={styles.input}/>
          <br/>
          <TextField name="banner" floatingLabelText="Banner URL" onChange={this.handleChange} style={styles.input}/>
          <br/>
          <TextField name="content" floatingLabelText="Content" onChange={this.handleChange} multiLine={true} rows={20} style={styles.input} />
        </Dialog>
      </div>
    )
  }
}

CreatePost.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default CreatePost

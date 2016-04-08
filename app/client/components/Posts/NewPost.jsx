import React, { Component, PropTypes } from 'react'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import moment from 'moment'
import TextField from 'material-ui/lib/text-field'

function getStyles() {
  return {
    button: {
      position: 'absolute',
      marginRight: '23',
      marginBottom: '23'
    },
    dialog: {
      maxWidth: '500'
    },
    input: {
      width: '100%'
    }
  }
}

class NewPost extends Component {
  static propTypes = {
    createPost: PropTypes.func.isRequired
  }

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
    const currentDate = moment().startOf('day')

    if (this.state.title === '' && this.state.title === '' ) {
      alert('Fill that shit out yo!')
    } else {
      this.props.createPost(currentDate, this.state.title, this.state.content)
    }
  }

  handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value

    this.setState(obj)
  }

  render() {
    const { createPost } = this.props;
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
      <div>
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
          <TextField name="content" floatingLabelText="Content" onChange={this.handleChange} multiLine={true} rows={3} style={styles.input} />
        </Dialog>
      </div>
    )
  }
}

export default NewPost

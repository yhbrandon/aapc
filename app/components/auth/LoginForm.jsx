import React, { Component, PropTypes } from 'react'
import Avatar from 'material-ui/lib/avatar'
import Content from '../Content'
import Card from 'material-ui/lib/card/card'
import FlatButton from 'material-ui/lib/flat-button'
import TextField from 'material-ui/lib/text-field'

function getStyles() {
  return {
    card: {
      margin: '128px auto 0',
      maxWidth: 400,
      position: 'relative',
      padding: 16,
      overflow: 'visible'
    },
    avatar: {
      position: 'absolute',
      top: '-40px',
      left: '50%',
      marginLeft: '-40px'
    }
  }
}

class LoginForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }

  onClear (event) {
    event.preventDefault()
    this.setState({ username: null, password: null })
  }

  onFieldChanged (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault()
    const { username, password } = this.state
    this.props.handleSubmit(username, password)
  }

  render() {
    const { login } = this.props
    const styles = getStyles()

    return(
      <Card style={styles.card}>
        <Avatar src="https://media.licdn.com/media/p/7/005/035/0ff/0d9b887.jpg" size={80} style={styles.avatar}/>
        <form onChange={::this.onFieldChanged} onSubmit={::this.onSubmit}>
          <Content layout="column" align="center">
            <br/>
            <TextField name="username" type="text" floatingLabelText="Username" style={styles.inputs} value={ this.state.username } />
            <TextField name="password" type="password" floatingLabelText="Password" style={styles.inputs} value={ this.state.password }/>
            <br/>
            <Content layout="row" align="cneter" justify="flex-end">
              <FlatButton type="button" onClick={ ::this.onClear }>Clear</FlatButton>
              <FlatButton type="submit">Submit</FlatButton>
            </Content>
          </Content>
        </form>
      </Card>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default LoginForm

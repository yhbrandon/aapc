import React, { Component, PropTypes } from 'react'
import Avatar from 'material-ui/lib/avatar'
import Content from './Content'
import Card from 'material-ui/lib/card/card'
import Colors from 'material-ui/lib/styles/colors'
import FlatButton from 'material-ui/lib/flat-button'
import TextField from 'material-ui/lib/text-field'


function getStyles() {
  return {
    root: {
      position: 'absolute',
      backgroundColor: Colors.teal500,
      width: '100%',
      height: '100%'
    },
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

class Login extends Component {
  static propTypes = {
    setTitle: PropTypes.func,
    loginWithPassword: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this.props.setTitle('Login')
  }

  onChange(event) {
    let obj = {}
    obj[event.target.name] = event.target.value

    this.setState(obj)
  }

  onLogin(event) {
    if (this.state.email === '' && this.state.password === '' ) {
      alert('Fill that shit out yo!')
    } else {
      console.log('here')
      this.props.loginWithPassword(this.state.email, this.state.password)
    }

    this.setState({email: '', password: ''})
  }

  render() {
    const styles = getStyles()

    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          <Avatar src="https://media.licdn.com/media/p/7/005/035/0ff/0d9b887.jpg" size={80} style={styles.avatar}/>
          <Content layout="column" align="center">
            <br/>
            <TextField name="email" value={this.state.email} floatingLabelText="Email" style={styles.inputs} onChange={this.onChange.bind(this)}/>
            <TextField name="password" value={this.state.password} type="password" floatingLabelText="Password" style={styles.inputs} onChange={this.onChange.bind(this)}/>
            <br/>
            <FlatButton onClick={this.onLogin.bind(this)}>Submit</FlatButton>
          </Content>
        </Card>
      </div>
    )
  }
}

export default Login

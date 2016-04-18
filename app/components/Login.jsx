import React, { Component, PropTypes } from 'react'
import Colors from 'material-ui/lib/styles/colors'
import LoginForm from './auth/LoginForm'
import Theme from '../constants/Theme'

function getStyles() {
  return {
    root: {
      position: 'absolute',
      backgroundColor: Theme.palette.primary1Color,
      width: '100%',
      height: '100%'
    }
  }
}

class Login extends Component {
  static propTypes = {
    setTitle: PropTypes.func,
    login: PropTypes.func
  }

  componentDidMount() {
    this.props.setTitle('Login')
  }

  render() {
    const styles = getStyles()

    return (
      <div style={styles.root}>
        <LoginForm handleSubmit={this.props.login}></LoginForm>
      </div>
    )
  }
}

export default Login

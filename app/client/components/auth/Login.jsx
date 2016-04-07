import React, { Component, PropTypes } from 'react'


class Login extends Component {

  static propTypes = {
    loginWithPassword: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(event, type) {
    if (type === 'email') {
      this.setState({email: event.target.value})
    } else {
      this.setState({password: event.target.value})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginWithPassword(this.state.email, this.state.password)
    this.setState({email: '', password: ''});
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="email" placeholder="email"/>
          <input type="password" ref="password" placeholder="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login

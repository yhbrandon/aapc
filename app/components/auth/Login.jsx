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

  onChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value

    this.setState(obj)
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.loginWithPassword(this.state.email, this.state.password)
    this.setState({email: '', password: ''});
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="email" placeholder="email" onChange={this.onChange.bind(this)}/>
          <input type="password" ref="password" placeholder="password" onChange={this.onChange.bind(this)/>
          <button type="submit" onClick={this.handleSubmit.bind(this)>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login

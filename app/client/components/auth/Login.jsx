import React, { Component, PropTypes } from 'react'


class Login extends Component {

  static propTypes = {
    loginWithPassword: PropTypes.func
  }

  constructor(props) {
    super(props)
  }

  onSubmit(email, password) {
    console.log('here')
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Yay!')
      }
    })
  }

  render() {
    const { loginWithPassword } = this.props

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="email" placeholder="email"/>
          <input type="text" name="password" placeholder="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login

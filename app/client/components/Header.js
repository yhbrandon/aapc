import '../styles/components/header.scss'
import React, { Component, PropTypes } from 'react'
import Avatar from 'material-ui/lib/avatar'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { background, avatar } = this.props

    const backgroundStyle = {
      backgroundColor: background,
    }

    return (
      <header>
        <div className="header-background" style={backgroundStyle}></div>
        <div className="header-contact">
          <Avatar size={120} />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  background: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default Header

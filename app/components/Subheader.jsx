import React, { Component, PropTypes } from 'react'


function getStyles(props) {
  const styles = {
    display: 'block',
    fontSize: '14',
    fontWeight: '500',
    lineHieght: '1em',
    margin: '0',
    position: 'relative',
    color: 'rgba(0, 0, 0, 0.54)'
  }

  return styles
}

class Subheader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    const styles = getStyles(this.props)

    return <span {...this.props} style={styles}>{this.props.title}</span>
  }
}

export default Subheader

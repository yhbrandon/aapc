import React, { Component, PropTypes } from 'react'


function getStyles(props) {
  const styles = {
    display: 'flex'
  }

  styles.flexDirection = props.layout

  if (props.align) styles.alignItems = props.align
  if (props.justify) styles.justifyContent = props.justify
  if (props.margin) styles.margin = props.margin
  if (props.padding) styles.padding = props.padding

  if (props.style) return {...props.style, ...styles}
  else return styles
}

class Content extends Component {
  static propTypes = {
    layout: PropTypes.string.isRequired,
    align: PropTypes.string,
    justify: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
  }

  render() {
    const styles = getStyles(this.props)

    return <div {...this.props} style={styles}>{this.props.children}</div>
  }
}

export default Content
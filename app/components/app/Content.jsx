import React, { Component, PropTypes } from 'react'


function getStyles(props) {
  const styles = {
    display: 'flex',
    flex: '0 1 auto'
  }

  styles.flexDirection = props.layout

  if (props.align) styles.alignItems = props.align
  if (props.justify) styles.justifyContent = props.justify
  if (props.margin) styles.margin = props.margin
  if (props.padding) styles.padding = props.padding
  if (props.width) styles.maxWidth = props.width
  if (props.wrap) styles.flexWrap = 'wrap'
  if (props.basis) styles.flexBasis = props.basis

  if (props.style) return {...props.style, ...styles}
  else return styles
}

class Content extends Component {
  static propTypes = {
    layout: PropTypes.string.isRequired,
    align: PropTypes.string,
    justify: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    wrap: PropTypes.bool
  }

  render() {
    const styles = getStyles(this.props)

    return <div {...this.props} style={styles}>{this.props.children}</div>
  }
}

export default Content

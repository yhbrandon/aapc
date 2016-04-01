import '../styles/components/aside.scss'
import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'

class Aside extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title, subTitle, handleClick } = this.props

    return (
      <Paper id="aside" zDepth={1}>
        <div className="container">
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
          <p>Austin AP Center will begin scheduling appointments soon. To reserve your spot or to request further information please contact...</p>
          <RaisedButton label="Contact" primary={true} />
        </div>
      </Paper>
    )
  }
}

Aside.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}

export default Aside

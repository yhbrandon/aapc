import React, { Component, PropTypes } from 'react'
import Content from '../app/Content'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import Styles from '../../constants/Styles'

function getStyles() {
  return {
    root: {
      padding: '72px 0 32px'
    },
    headerThree: {
      margin: '0'
    },
    headerFour: {
      margin: '0',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    paragraph: {
      maxWidth: '550px',
      textAlign: 'center'
    }
  }
}

class Title extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  }

  render() {
    const { title, content } = this.props
    const styles = getStyles()

    return (
      <Paper id="aside" zDepth={1}>
        <Content layout="column" align="center" justify="center" style={Object.assign(styles.root, Styles.container)}>
          <h4 style={styles.headerThree}>{title}</h4>
          <h6 style={styles.headerFour}>Dr. Ashley Woodall</h6>
          <br/>
          <p style={styles.paragraph}>{content}</p>
          <br/>
          <RaisedButton label="Contact" primary={true} />
        </Content>
      </Paper>
    )
  }
}

export default Title

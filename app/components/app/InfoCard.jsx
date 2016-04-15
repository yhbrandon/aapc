import React, { Component, PropTypes } from 'react'
import Colors from 'material-ui/lib/styles/colors'
import Card from 'material-ui/lib/card/card'
import CardMedia from 'material-ui/lib/card/card-media'
import CardText from 'material-ui/lib/card/card-text'
import Content from './Content'
import FlatButton from 'material-ui/lib/flat-button'

function getStyles(props) {
  const styles = {
    root: {
      flex: '0 0 auto',
      padding: '8px',
      flexBasis: '50%',
      boxSizing: 'border-box'
    },
    header: {
      width: '100%',
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: 'rgba(0, 0, 0, 0.54)',
      textAlign: 'center'
    }
  }

  if (props.color) styles.header.backgroundColor = props.color

  return styles
}

class InfoCard extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { children, title, icon } = this.props

    const styles = getStyles(this.props)

    return (
      <div style={styles.root}>
        <Card>
          <CardMedia style={styles.header}>
            {icon}
          </CardMedia>
          <CardText style={styles.text}>
            <h5>{title}</h5>
            {children}
          </CardText>
        </Card>
      </div>
    )
  }
}

InfoCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  color: PropTypes.string
}

export default InfoCard

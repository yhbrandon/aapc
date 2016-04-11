import React, { Component, PropTypes } from 'react'
import Content from '../Content'
import Divider from 'material-ui/lib/divider'
import PricingCard from '../pricingCard/PricingCard'
import Styles from '../../constants/Styles'

function getStyles() {
  return {
    root: {
      padding: '36px 0'
    },
    header: {
      textTransform: 'uppercase'
    },
    width: {
      width: '100%'
    }
  }
}

class Services extends Component {
  static propTypes = {
    content: PropTypes.func
  }

  render() {
    const { content } = this.props
    const styles = getStyles()

    return (
      <Content id="about" layout="column" align="center" justify="flex-start" style={Object.assign(styles.root, Styles.container)}>
        <h1 style={styles.header}>Services</h1>
        <Content layout="row" align="center" justify="space-between" style={styles.width}>
          <PricingCard/>
          <PricingCard/>
          <PricingCard/>
        </Content>
      </Content>
    )
  }
}

export default Services

import '../styles/components/pricingCard.scss'
import React, { Component, PropTypes } from 'react'
import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import FlatButton from 'material-ui/lib/flat-button'

const styles = {
  card: {
    width: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
  },
  headerTitle: {
    fontSize: '14'
  },
  text: {
    paddingTop: 32,
    paddingBottom: 24,
    color: 'rgba(0, 0, 0, 0.54)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

class PricingCard extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="pricing-card">
        <Card style={styles.card}>
          <CardHeader title="Test Service" style={styles.header} titleStyle={styles.headerTitle}/>
          <CardText style={styles.text}>
           <ul>
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <li>Benefit 3</li>
            <li>Benefit 4</li>
           </ul>
           <FlatButton label="Call for Pricing" primary={true} />
          </CardText>
        </Card>
      </div>
    )
  }
}

PricingCard.propTypes = {
}

export default PricingCard

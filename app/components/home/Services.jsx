import React, { Component, PropTypes } from 'react'
import Colors from 'material-ui/lib/styles/colors'
import Avatar from 'material-ui/lib/avatar'
import Help from 'material-ui/lib/svg-icons/communication/live-help'
import People from 'material-ui/lib/svg-icons/social/people'
import Hearing from 'material-ui/lib/svg-icons/av/hearing'
import Assignment from 'material-ui/lib/svg-icons/action/assignment'
import Content from '../app/Content'
import Divider from 'material-ui/lib/divider'
import InfoCard from '../app/InfoCard'
import Styles from '../../constants/Styles'

function getStyles() {
  return {
    root: {
      padding: '36px 0'
    },
    avatar: {
      fill: 'rgba(255, 255, 255, 0.54)',
      height: 64,
      width: 64
    },
    header: {
      color: 'rgba(0, 0, 0, 0.54)',
      fontWeight: 300,
      marginBottom: 32
    }
  }
}

class Services extends Component {
  static propTypes = {
    content: PropTypes.string
  }

  render() {
    const { content } = this.props
    const styles = getStyles()

    return (
      <div style={ Styles.container }>
        <Content id="about" layout="column" align="center" justify="flex-start" style={ styles.root }>
          <h3 style={ styles.header }>A bit of information</h3>
          <Content layout="row" wrap={ true } margin="-8px">
            <InfoCard title="What to Expect" icon={ <Help style={ styles.avatar }/> } color={ Colors.teal300 }>
              <p>Brooklyn pork belly vice sriracha selfies wolf, pinterest chillwave quinoa letterpress 8-bit. Selfies artisan church-key, knausgaard letterpress synth gluten-free thundercats jean shorts helvetica chicharrones man bun.</p>
            </InfoCard>
            <InfoCard title="Impact on Populations" icon={ <People style={ styles.avatar }/> } color={ Colors.teal300 }>
              <p>Brooklyn pork belly vice sriracha selfies wolf, pinterest chillwave quinoa letterpress 8-bit. Selfies artisan church-key, knausgaard letterpress synth gluten-free thundercats jean shorts helvetica chicharrones man bun.</p>
            </InfoCard>
            <InfoCard title="ADP" icon={ <Hearing style={ styles.avatar }/> } color={ Colors.teal300 }>
              <p>Brooklyn pork belly vice sriracha selfies wolf, pinterest chillwave quinoa letterpress 8-bit. Selfies artisan church-key, knausgaard letterpress synth gluten-free thundercats jean shorts helvetica chicharrones man bun.</p>
            </InfoCard>
            <InfoCard title="Billing" icon={ <Assignment style={ styles.avatar }/> } color={ Colors.teal300 }>
              <p>Brooklyn pork belly vice sriracha selfies wolf, pinterest chillwave quinoa letterpress 8-bit. Selfies artisan church-key, knausgaard letterpress synth gluten-free thundercats jean shorts helvetica chicharrones man bun.</p>
            </InfoCard>
          </Content>
        </Content>
      </div>
    )
  }
}

export default Services

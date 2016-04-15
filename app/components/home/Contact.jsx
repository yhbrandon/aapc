import React, { Component, PropTypes } from 'react'
import Card from 'material-ui/lib/card/card'
import Colors from 'material-ui/lib/styles/colors'
import Content from '../app/Content'
import EmailIcon from 'material-ui/lib/svg-icons/communication/email'
import FlatButton from 'material-ui/lib/flat-button'
import LocationIcon from 'material-ui/lib/svg-icons/communication/location-on'
import PhoneIcon from 'material-ui/lib/svg-icons/communication/phone'
import Styles from '../../constants/Styles'
import TextField from 'material-ui/lib/text-field'

function getStyles() {
  return {
    button: {
      float: 'right',
      marginTop: 16
    },
    card: {
      marginTop: '64px !important'
    },
    contact: {
      maxWidth: 200,
      margin: '16px auto'
    },
    form: {
      padding: 32,
      flex: '2 0 0'
    },
    icon: {
      marginRight: 16
    },
    image: {
      background: 'url(http://maps.googleapis.com/maps/api/staticmap?center=711+W+38th+St+Austin+Tx&zoom=13&scale=2&size=640x600&maptype=roadmap&sensor=false&format=png&visual_refresh=true) center center no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      opacity: '0.5',
      position: 'absolute'
    },
    info: {
      flex: '1 0 0',
      backgroundColor: Colors.teal500,
      color: 'rgba(255, 255, 255, 0.87)',
      padding: '32px 0 0'
    },
    inputs: {
      flexGrow: 1,
      marginRight: 16
    }
  }
}

class Contact extends Component {
  render() {
    const styles = getStyles()

    return (
      <Content id="contact" layout="column">
        <div style={styles.image}></div>
        <Card style={Object.assign(styles.card, Styles.container)}>
          <Content layout="row">
            <form style={styles.form}>
              <h3>Contact Us</h3>
              <Content layout="row" wrap={true} align="center" justify="flex-start">
                <TextField hintText="Enter Name" floatingLabelText="Name" style={styles.inputs}/>
                <TextField hintText="Enter Email" floatingLabelText="Email" style={styles.inputs}/>
                <TextField hintText="Enter Phone number" floatingLabelText="Phone Number" style={styles.inputs}/>
                <TextField hintText="Enter Doctor" floatingLabelText="Referring Doctor" style={styles.inputs}/>
                <TextField hintText="Enter Message" floatingLabelText="Message" rows={3} style={styles.inputs}/>
              </Content>
              <FlatButton style={styles.button}>Submit</FlatButton>
            </form>
            <div style={styles.info}>
              <Content layout="column" align="center" justify="center" style={styles.contact}>
                <Content layout="row" align="center" justify="flex-start" margin="24">
                  <PhoneIcon style={styles.icon} color={Colors.lightWhite}/>
                  <span>(512) 111-2222</span>
                </Content>
                <Content layout="row" align="center" justify="flex-start" margin="24">
                  <EmailIcon style={styles.icon} color={Colors.lightWhite}/>
                  <span>info@austinapc.com</span>
                </Content>
                <Content layout="row" align="center" justify="flex-start" margin="24">
                  <LocationIcon style={styles.icon} color={Colors.lightWhite}/>
                  <div>
                    <span>711 West 38th Street</span>
                    <br/>
                    <span>Building B; Suite B14</span>
                    <br/>
                    <span>Austin, Texas 78705</span>
                  </div>
                </Content>
                <br/>
                <Content layout="row" align="center" justify="space-around">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-linkedin"></i>
                  <i className="fa fa-google-plus"></i>
                </Content>
              </Content>
            </div>
          </Content>
        </Card>
      </Content>
    )
  }
}

export default Contact

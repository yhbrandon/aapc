import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Avatar from 'material-ui/lib/avatar'
import Paper from 'material-ui/lib/paper'
import Divider from 'material-ui/lib/divider'
import RaisedButton from 'material-ui/lib/raised-button'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'
import TextField from 'material-ui/lib/text-field'
import GoogleMap from 'google-map-react'
import Icon from 'react-fa'

import Title from './home/Title'
import About from './home/Services'
import Doctors from './home/Doctors'

import './Home.scss'
import PricingCard from './pricingCard/PricingCard'

function getStyles() {
  return {
    root: {
      width: '100%'
    },
    avatar: {
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: 0,
      right: 0,
      top: '-64px',
      boxShadow: '0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23)',
      zIndex: '1200'
    }
  }
}

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const styles = getStyles()

    return (
      <section id="home" style={styles.root}>
        <Avatar src="https://media.licdn.com/media/p/7/005/035/0ff/0d9b887.jpg" size={120} style={styles.avatar}/>
        <Title title="Austin Auditory Processing Center" content="Austin AP Center will begin scheduling appointments soon. To reserve your spot or to request further information please contact..." />
        <About content="Austin Auditory Processing Center is a speciality clinic providing comprehensive diagnostic testing and treatment recommendations for children and adults with Auditory Processing Disorder (APD) concerns."/>
        <Doctors/>

        <section id="blog" className="container flex-column">
          <h1>Blog</h1>
          <Divider />
          Blog will go here
        </section>

        <section id="contact" className="flex-column">
          <h1>Contact</h1>
          <div className="contact-background">
            <div className="container">
              <Card>
                <div className="flex-row">
                  <div className="contact-email flex-column center-center flex-padding">
                    <a href="mailto:info@austinapc.com"><i className="fa fa-envelope fa-4x"></i></a>
                    <span className="caption">Click icon to send message</span>
                  </div>
                  <div className="contact-info">
                    <h2>Where to find us</h2>
                    <div className="flex-row">
                      <div className="contact-info-section">
                        <h3>Phone</h3>
                        <p>(512) 111-2222</p>
                      </div>
                      <div className="contact-info-section">
                        <h3>Email</h3>
                        <p>info@austinapc.com</p>
                      </div>
                    </div>
                    <div className="flex-row center-start">
                      <div className="contact-info-section">
                        <h3>Location</h3>
                        <p>711 West 38th Street</p>
                        <p>Building B; Suite B14</p>
                        <p>Austin, Texas 78705</p>
                      </div>
                      <div className="flex-row row-auto flex-margin flex-padding start-center">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-google-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

      </section>
    )
  }
}

export default Home

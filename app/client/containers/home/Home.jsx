import React, { Component, PropTypes } from 'react'
import shouldPureComponentUpdate from 'react-pure-render/function';
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

import './Home.scss'
import PricingCard from '../../components/pricingCard/PricingCard'

class Home extends Component {

  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props)
  }

  render() {

    const avatarStyles = {
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: 0,
      right: 0,
      top: '-64px',
      boxShadow: '0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23)',
      zIndex: '1200'
    }

    return (
      <section id="home">

        <Avatar src="https://media.licdn.com/media/p/7/005/035/0ff/0d9b887.jpg" size={120} style={avatarStyles}/>

        <Paper id="aside" zDepth={1}>
          <div className="container flex-column center-center">
            <h3>Austin Auditory Processing Center</h3>
            <h4>Dr. Ashley Woodall</h4>
            <p>Austin AP Center will begin scheduling appointments soon. To reserve your spot or to request further information please contact...</p>
            <RaisedButton label="Contact" primary={true} />
          </div>
        </Paper>

        <section id="about" className="container flex-column center-center">
          <h1>About AAPC</h1>
          <Divider />
          <p>Austin Auditory Processing Center is a speciality clinic providing comprehensive diagnostic testing and treatment recommendations for children and adults with Auditory Processing Disorder (APD) concerns.</p>
          <div className="flex-row center-center flex-margin flex-padding">
            <PricingCard/>
            <PricingCard/>
            <PricingCard/>
          </div>
        </section>

        <section id="background" className="container">
          <h1>Our Doctors</h1>
          <Card>
            <div className="flex-row row-auto start-center flex-margin flex-padding">
              <div className="flex-margin flex-padding">
                <img src="https://media.licdn.com/media/p/7/005/035/0ff/0d9b887.jpg" />
              </div>
              <div className="flex-margin flex-padding title">
                <h2>Ashley Woodall</h2>
                <h4>Au.D., CCC-A, FAAA</h4>
                <small className="caption">Owner</small>
                <hr/>
                <p>
                  Dr. Ashley Woodall founded the Austin Auditory Processing Center to address the need for comprehensive Auditory Processing Disorder (APD) care for Central Texans. She is one of the only audiologists in Texas that specializes in APD evaluation for children, adolescents, and adults. Dr. Woodall has over 5 years experience diagnosing APD and its subtypes, as well as recommending appropriate accommodations and treatment options.
                </p>
                <p>
                  Dr. Woodall has extensive experience working with adults with lifelong APD, as well as those with acquired APD post-concussion and trauma. She is concurrently a staff pediatric audiologist at Seton Children’s Ear, Nose, and Throat Center where she provides pediatric audiological diagnostics and amplification devices. She works closely with schools to help children with hearing problems receive appropriate educational accommodations.
                </p>
                <p>
                  Dr. Woodall is a native Texan and completed her Bachelor of Science in Communication Sciences and Disorders as well as her Doctorate of Audiology at the University of Texas at Austin. During her graduate studies, she completed research in speech perception topics and recently published in the American Journal of Audiology. She also received the Best Young Presenter award at the 158th Meeting of the Acoustical Society of America in 2009. Dr. Woodall is certified through the American Speech Language Hearing Association, and is a Fellow of the American Academy of Audiology.
                </p>
              </div>
            </div>
          </Card>
        </section>

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

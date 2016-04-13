import React, { Component, PropTypes } from 'react'
import Avatar from 'material-ui/lib/avatar'
import Card from 'material-ui/lib/card/card'
import Colors from 'material-ui/lib/styles/colors'
import Content from '../Content'
import Divider from 'material-ui/lib/divider'
import PricingCard from '../pricingCard/PricingCard'
import Styles from '../../constants/Styles'

function getStyles() {
  return {
    root: Styles.container,
    avatar: {
      margin: '16'
    },
    card: {
      paddingBottom: '16'
    },
    header: {
      backgroundColor: Colors.teal300
    },
    title: {
      margin: '8',
      padding: '8',
      color: 'rgba(255, 255, 255, 0.87)'
    },
    content: {
      margin: '8',
      padding: '8'
    }
  }
}

class Doctors extends Component {
  render() {
    const styles = getStyles()

    return (
      <Content id="background" layout="column" align="center" style={styles.root}>
        <h1>Doctors</h1>
        <Card style={styles.card}>
          <Content layout="column" align="flex-start" justify="center">
            <Content layout="row" align="center" style={styles.header}>
              <Avatar src="https://media.licdn.com/media/p/7/005/035/0ff/0d9b887.jpg" size={120} style={styles.avatar}/>
              <div style={styles.title}>
                <h2 style={Styles.headerNoMargin}>Ashley Woodall</h2>
                <h4 style={Styles.headerNoMargin}>Au.D., CCC-A, FAAA</h4>
                <small >Owner</small>
              </div>
            </Content>
            <p style={styles.content}>
              Dr. Ashley Woodall founded the Austin Auditory Processing Center to address the need for comprehensive Auditory Processing Disorder (APD) care for Central Texans. She is one of the only audiologists in Texas that specializes in APD evaluation for children, adolescents, and adults. Dr. Woodall has over 5 years experience diagnosing APD and its subtypes, as well as recommending appropriate accommodations and treatment options.
            </p>
            <p style={styles.content}>
              Dr. Woodall has extensive experience working with adults with lifelong APD, as well as those with acquired APD post-concussion and trauma. She is concurrently a staff pediatric audiologist at Seton Children’s Ear, Nose, and Throat Center where she provides pediatric audiological diagnostics and amplification devices. She works closely with schools to help children with hearing problems receive appropriate educational accommodations.
            </p>
            <p style={styles.content}>
              Dr. Woodall is a native Texan and completed her Bachelor of Science in Communication Sciences and Disorders as well as her Doctorate of Audiology at the University of Texas at Austin. During her graduate studies, she completed research in speech perception topics and recently published in the American Journal of Audiology. She also received the Best Young Presenter award at the 158th Meeting of the Acoustical Society of America in 2009. Dr. Woodall is certified through the American Speech Language Hearing Association, and is a Fellow of the American Academy of Audiology.
            </p>
          </Content>
        </Card>
      </Content>
    )
  }
}

export default Doctors

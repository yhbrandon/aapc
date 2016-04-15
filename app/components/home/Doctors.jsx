import React, { Component, PropTypes } from 'react'
import Avatar from 'material-ui/lib/avatar'
import Card from 'material-ui/lib/card/card'
import Colors from 'material-ui/lib/styles/colors'
import Content from '../app/Content'
import Divider from 'material-ui/lib/divider'
import Styles from '../../constants/Styles'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import School from 'material-ui/lib/svg-icons/social/school'
import Public from 'material-ui/lib/svg-icons/social/public'
import Watch from 'material-ui/lib/svg-icons/action/watch-later'
import Person from 'material-ui/lib/svg-icons/social/person'
import RaisedButton from 'material-ui/lib/raised-button'

function getStyles() {
  return {
    root: {
      marginTop: 48,
      padding: '32px 0 48px',
      backgroundColor: Colors.fullWhite
    },
    avatar: {
      margin: 16,
      boxShadow: '0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)'
    },
    title: {
      margin: '8',
      padding: '8',
      color: 'rgba(0, 0, 0, 0.87)',
      textAlign: 'center'
    },
    list: {
      backgroundColor: 'transparent',
      margin: '0 -12px'
    }
  }
}

class Doctors extends Component {
  render() {
    const styles = getStyles()

    return (
      <div style={styles.root}>
        <Content layout="column" align="center" style={ Styles.container }>
          <Content layout="row" margin="0 -8px">
            <Content layout="column" padding="0 8px" basis="33.33%">
              <Content layout="column" align="center" justify="center">
                <Avatar src="https://media.licdn.com/media/p/7/005/035/0ff/0d9b887.jpg" size={150} style={ styles.avatar }/>
                <div style={ styles.title }>
                  <h4 style={ Styles.headerNoMargin }>Ashley Woodall</h4>
                  <h6 style={ Styles.headerNoMargin }>Au.D., CCC-A, FAAA</h6>
                  <small>Owner</small>
                </div>
                <RaisedButton label="Contact" primary={ true } />
              </Content>
            </Content>
            <Content layout="column" padding="0 8px" basis="66.66%">
              <List style={ styles.list }>
                <ListItem primaryText="From" secondaryText="Dallas, Texas" leftIcon={ <Public /> } disabled={true} />
                <ListItem primaryText="Education" secondaryText="Doctorate of Audiology at the University of Texas at Austin" leftIcon={ <School /> } disabled={ true } />
                <ListItem primaryText="Experience" secondaryText="5 years experience" leftIcon={ <Watch /> } disabled={ true } />
              </List>
              <p style={ styles.content }>
                Dr. Ashley Woodall founded the Austin Auditory Processing Center to address the need for comprehensive Auditory Processing Disorder (APD) care for Central Texans. She is one of the only audiologists in Texas that specializes in APD evaluation for children, adolescents, and adults. Dr. Woodall has over 5 years experience diagnosing APD and its subtypes, as well as recommending appropriate accommodations and treatment options.
              </p>
              <p style={ styles.content }>
                Dr. Woodall has extensive experience working with adults with lifelong APD, as well as those with acquired APD post-concussion and trauma. She is concurrently a staff pediatric audiologist at Seton Children’s Ear, Nose, and Throat Center where she provides pediatric audiological diagnostics and amplification devices. She works closely with schools to help children with hearing problems receive appropriate educational accommodations.
              </p>
              <p style={ styles.content }>
                Dr. Woodall is a native Texan and completed her Bachelor of Science in Communication Sciences and Disorders as well as her Doctorate of Audiology at the University of Texas at Austin. During her graduate studies, she completed research in speech perception topics and recently published in the American Journal of Audiology. She also received the Best Young Presenter award at the 158th Meeting of the Acoustical Society of America in 2009. Dr. Woodall is certified through the American Speech Language Hearing Association, and is a Fellow of the American Academy of Audiology.
              </p>
            </Content>
          </Content>
        </Content>
      </div>
    )
  }
}

export default Doctors

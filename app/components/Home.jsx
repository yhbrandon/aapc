import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import Avatar from 'material-ui/lib/avatar'
import Divider from 'material-ui/lib/divider'

import Title from './home/Title'
import About from './home/Services'
import Doctors from './home/Doctors'
import Blog from './home/Blog.jsx'
import Contact from './home/Contact'


function getStyles() {
  return {
    root: {
      positon: 'relative'
    },
    avatar: {
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: 0,
      right: 0,
      top: 128,
      boxShadow: '0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23)',
      zIndex: 1200
    }
  }
}

class Home extends Component {

  static propTypes = {
    setTitle: PropTypes.func
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.setTitle('Home')
  }

  render() {
    const { posts } = this.props
    const styles = getStyles()

    return (
      <div style={styles.root}>
        <AppBar showMenuIconButton={false} style={{height: '192'}} zDepth={0}/>
        <Avatar src="https://media.licdn.com/media/p/7/005/035/0ff/0d9b887.jpg" size={120} style={styles.avatar}/>
        <Title title="Austin Auditory Processing Center" content="Austin AP Center will begin scheduling appointments soon. For more information please contact us or register for our newsletter..." />
        <About content="Austin Auditory Processing Center is a speciality clinic providing comprehensive diagnostic testing and treatment recommendations for children and adults with Auditory Processing Disorder (APD) concerns."/>
        <Doctors />
        <Blog posts={posts} />
        <Contact />
      </div>
    )
  }
}

Home.propTypes = {
  posts: PropTypes.array
}

export default Home

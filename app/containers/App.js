import '../styles/containers/app.scss'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import About from '../components/About'
import Aside from '../components/Aside'
import Background from '../components/Background'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Paper from 'material-ui/lib/paper'

const paperStyle = {
  padding: 16,
}

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header background="#4DB6AC" avatar="ash"/>
        <main>
          <Aside title="Austin Auditory Processing Center" subTitle="Dr. Ashley Woodall" />
          <About title="About AAPC" />
          <Background title="Our Doctors" />
          <Blog title="Blog" />
          <Contact title="Contact" background="#4DB6AC" />
        </main>
      </div>
    )
  }
}

App.propTypes = {
  rooms: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    rooms: state
  }
}

export default connect(mapStateToProps)(App)

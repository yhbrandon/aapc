import '../styles/components/about.scss'
import React, { Component, PropTypes } from 'react'
import Divider from 'material-ui/lib/divider'
import PricingCard from '../components/PricingCard'

class About extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props

    return (
      <section id="about" className="container">
        <h1>{title}</h1>
        <Divider />
        <p>Austin Auditory Processing Center is a speciality clinic providing comprehensive diagnostic testing and treatment recommendations for children and adults with Auditory Processing Disorder (APD) concerns.</p>
        <div className="flex-row center-center flex-margin flex-padding">
          <PricingCard/>
          <PricingCard/>
          <PricingCard/>
        </div>
      </section>
    )
  }
}

About.propTypes = {
  title: PropTypes.string.isRequired
}

export default About

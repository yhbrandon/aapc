import '../styles/components/background.scss'
import React, { Component, PropTypes } from 'react'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'

const styles = {

}

class Background extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props

    return (
      <section id="background" className="container">
        <h1>{title}</h1>
        <Card>
          <div className="flex-row row-auto start-center flex-margin flex-padding">
            <div className="flex-margin flex-padding">
              
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
    )
  }
}

Background.propTypes = {
  title: PropTypes.string.isRequired
}

export default Background

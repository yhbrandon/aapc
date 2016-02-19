import '../styles/components/contact.scss'
import React, { Component, PropTypes } from 'react'
import Card from 'material-ui/lib/card'
import Divider from 'material-ui/lib/divider'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field'

const styles = {
  input: {
    width: 450
  },
  hint: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  border: {
    borderColor: '#ff4081'
  }
}

class Contact extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title, background} = this.props

    const backgroundStyle = {
      backgroundColor: background,
    }

    return (
      <section id="contact" className="flex-column">
        <h1>{title}</h1>
        <div style={backgroundStyle}>
          <div className="container">
            <div className="flex-row row-auto flex-margin flex-padding start-center">
              <i className="fa fa-facebook fa-2x"></i>
              <i className="fa fa-twitter fa-2x"></i>
              <i className="fa fa-linkedin fa-2x"></i>
              <i className="fa fa-google-plus fa-2x"></i>
            </div>
            <form>
              <div className="flex-column row-auto flex-margin flex-padding center-center">
                <TextField hintText="Name" style={styles.input} hintStyle={styles.hint} underlineFocusStyle={styles.border} />
                <TextField hintText="Email" style={styles.input} hintStyle={styles.hint} underlineFocusStyle={styles.border} />
                <TextField hintText="Message" style={styles.input} multiLine={true} rows={3} hintStyle={styles.hint} underlineFocusStyle={styles.border} />
              </div>
              <div className="flex-row row-auto flex-margin flex-padding center-center">
                <RaisedButton label="Submit" primary={true} />
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string
}

export default Contact

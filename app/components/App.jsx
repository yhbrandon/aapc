import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Snackbar from 'material-ui/lib/snackbar'
import Content from './app/Content'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator'

import Theme from '../constants/Theme'
import './App.scss';

@ThemeDecorator(ThemeManager.getMuiTheme(Theme))
class App extends Component {

  constructor(props) {
    super(props)
  }

  onRequestClose() {
    this.props.clearNotification()
  }

  render() {
    const { children, notify, message } = this.props;

    return (
      <section>
        {children}
        <Snackbar open={notify} message={message} autoHideDuration={4000} onRequestClose={this.onRequestClose.bind(this)} />
      </section>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  clearNotification: PropTypes.func,
  title: PropTypes.string,
  user: PropTypes.string,
  notify: PropTypes.bool,
  message: PropTypes.string
}

export default App

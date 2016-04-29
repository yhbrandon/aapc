import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Snackbar from 'material-ui/lib/snackbar'
import Content from './app/Content'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator'

import Theme from '../constants/Theme'
import './App.scss'

@ThemeDecorator(ThemeManager.getMuiTheme(Theme))
class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { children } = this.props

    return (
      <section>
        {children}
      </section>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  fetchPosts: PropTypes.func
}

export default App

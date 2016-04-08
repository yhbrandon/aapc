import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Content from './Content'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator'

import Theme from '../constants/Theme'
import './App.scss';

@ThemeDecorator(ThemeManager.getMuiTheme(Theme))
class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { children, title } = this.props;

    let header;

    if (title !== 'Blog') {
      header = <AppBar showMenuIconButton={false} style={{height: '192'}}/>
    } else {
      header = <AppBar title={title} zDepth={0} />
    }

    return (
      <section id="app">
        <header>
          {header}
        </header>
        <Content layout="row" align="flex-start" justify="center">
          {children}
        </Content>
      </section>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App

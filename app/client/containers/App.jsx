import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

import Theme from '../constants/Theme'
import './App.scss';

@ThemeDecorator(ThemeManager.getMuiTheme(Theme))
class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props;

    const headerStyle = {
      height: '192'
    }

    return (
      <section id="app">
        <header>
          <AppBar showMenuIconButton={false} style={headerStyle}/>
        </header>
        <main>
          {children}
        </main>
      </section>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App

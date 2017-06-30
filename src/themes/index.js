import React from 'react'
import {
  PureComponent,
  ThemeProvider
} from 'react-native-mdcore'

import { theme as themeActions } from '@actions'
import { bindActionCreators, connect } from '@store'

import Theme from './theme'

const ThemeDeferrer = connect((state) => ({ theme: state.theme }), null)((props) => {
  return Object.values(props.theme).length > 0 ? props.children : null
})

class ThemeContainer extends PureComponent {

  render() {
    return (
      <ThemeProvider theme={Theme} onConfigChange={this._onConfigChange}>
        <ThemeDeferrer>{this.props.children}</ThemeDeferrer>
      </ThemeProvider>
    )
  }

  _onConfigChange = (config) => {
    this.props.themeActions.setConfig(config)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themeActions: bindActionCreators(themeActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ThemeContainer)

import React from 'react'
import {
  Platform,
  PropTypes,
  PureComponent,
  ThemeProvider,
  Utils
} from 'react-native-mdcore'

import { themeActions } from '@redux'
import { icons } from '@resources'
import { bindActionCreators, connect, getState } from '@store'

import Theme from './theme'

const ThemeDeferrer = connect(
  state => ({ theme: state.theme }),
  null
)(props => {
  return Object.values(props.theme).length > 0 ? props.children : null
})

class ThemeContainer extends PureComponent {
  static childContextTypes = {
    icons: PropTypes.any
  }

  _icons = {}

  getChildContext() {
    return { icons: this._icons }
  }

  render() {
    return (
      <ThemeProvider
        os={this.props.os}
        theme={Theme}
        onConfigChange={this._onConfigChange}>
        <ThemeDeferrer>
          {this.props.children}
        </ThemeDeferrer>
      </ThemeProvider>
    )
  }

  _onConfigChange = config => {
    const { theme } = getState()
    if (!Utils.deepEqual(config, theme)) {
      Object.assign(this._icons, icons.resolve([this.props.os]))
      this.props.themeActions.setConfig(config)
    }
  }
}

const mapStateToProps = _state => {
  return {
    os: Platform.OS
  }
}

const mapDispatchToProps = dispatch => {
  return {
    themeActions: bindActionCreators(themeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeContainer)

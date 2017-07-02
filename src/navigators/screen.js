import React from 'react'
import { PropTypes, PureComponent } from 'react-native-mdcore'
import { StackNavigator } from 'react-navigation'

import { Injector } from '@middlewares'

import Drawer from './drawer'

const ROUTERS = {
  home: {
    screen: Drawer
  }
}

const CARD_STYLE = {
  backgroundColor: 'transparent'
}

const Stack = StackNavigator(ROUTERS, {
  initialRouteName: 'home',
  cardStyle: CARD_STYLE,
  headerMode: 'none'
})

export default class ScreenComponent extends PureComponent {
  static contextTypes = {
    theme: PropTypes.object
  }

  componentDidMount() {
    Injector.inject({ screenNavigator: this.refs.navigator })
  }

  componentDidUpdate() {
    Injector.inject({ screenNavigator: this.refs.navigator })
  }

  render() {
    const { theme } = this.context
    CARD_STYLE.backgroundColor = theme.palette.background
    return <Stack ref="navigator" style={{ flex: 1 }} />
  }
}

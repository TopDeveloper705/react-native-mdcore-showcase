import React from 'react'
import { PropTypes, PureComponent, Utils } from 'react-native-mdcore'
import {
  addNavigationHelpers,
  NavigationActions,
  StackNavigator
} from 'react-navigation'

import { BottomNavigation, Buttons, Splash } from '@containers'
import { Injector } from '@middlewares'

import Drawer from './drawer'

const ROUTERS = {
  bottomNavigation: {
    screen: BottomNavigation
  },
  buttons: {
    screen: Buttons
  },
  home: {
    screen: Drawer
  },
  splash: {
    screen: Splash
  }
}

const CARD_STYLE = {
  backgroundColor: 'transparent'
}

const Stack = StackNavigator(ROUTERS, {
  initialRouteName: 'buttons',
  cardStyle: CARD_STYLE,
  headerMode: 'none'
})

export default class ScreenComponent extends PureComponent {
  static contextTypes = {
    theme: PropTypes.object
  }

  state = {
    navigation: Stack.router.getStateForAction({
      type: NavigationActions.INIT
    })
  }

  componentDidMount() {
    Injector.inject({ screenNavigator: this.refs.navigator.props.navigation })
    this._verifyNavigationState()
  }

  componentDidUpdate() {
    Injector.inject({ screenNavigator: this.refs.navigator.props.navigation })
  }

  render() {
    const { theme } = this.context
    CARD_STYLE.backgroundColor = theme.palette.background
    return (
      <Stack
        ref="navigator"
        navigation={addNavigationHelpers({
          dispatch: this._dispatch,
          state: this.state.navigation
        })}
      />
    )
  }

  _dispatch = action => {
    const { navigation } = this.state
    const latestRoute = navigation.routes[navigation.index]
    if (action.type === NavigationActions.NAVIGATE) {
      if (action.routeName === latestRoute.routeName) {
        if (!Utils.deepEqual(action.params, latestRoute.params)) {
          navigation.index -= 1
          navigation.routes.splice(-1)
        } else {
          return
        }
      }
    }
    const nextNavigation = Stack.router.getStateForAction(action, navigation)
    this._verifyNavigationState(nextNavigation)
  }

  _verifyNavigationState = (navigation = this.state.navigation) => {
    const { isAuthenticated } = this.props
    let latestRouteName = navigation.routes[navigation.index].routeName
    if (latestRouteName === 'splash') {
      latestRouteName = 'home'
      navigation = Stack.router.getStateForAction({
        type: NavigationActions.NAVIGATE,
        routeName: 'home'
      })
    }
    if (
      !isAuthenticated &&
      ROUTERS[latestRouteName].requireAuthentication === true
    ) {
      this.setState({
        navigation: Stack.router.getStateForAction({
          type: NavigationActions.NAVIGATE,
          routeName: 'signin'
        })
      })
    } else {
      this.setState({ navigation })
    }
  }
}

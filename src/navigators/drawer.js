import React from 'react'
import { PureComponent } from 'react-native-mdcore'
import { DrawerNavigator } from 'react-navigation'

import { Drawer as DrawerContent, Home } from '@containers'
import { Injector } from '@middlewares'

const ROUTERS = {
  home: {
    screen: Home
  }
}

const Drawer = DrawerNavigator(ROUTERS, {
  contentComponent: DrawerContent
})

export default class DrawerComponent extends PureComponent {
  componentDidMount() {
    Injector.inject({ drawerNavigator: this.refs.navigator })
  }

  componentDidUpdate() {
    Injector.inject({ drawerNavigator: this.refs.navigator })
  }

  render() {
    return <Drawer ref="navigator" style={{ flex: 1 }} />
  }
}

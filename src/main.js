import React from 'react'
import {
  AppRegistry,
  PureComponent
} from 'react-native-mdcore'

import { Screen as ScreenNavigator } from '@navigators'
import Store from '@store'
import Theme from '@themes'

class Main extends PureComponent {

  render() {
    return (
      <Store>
        <Theme>
          <ScreenNavigator />
        </Theme>
      </Store>
    )
  }
}

AppRegistry.registerComponent('project', () => Main)

import React from 'react'
import {
  BottomNavigation, BottomNavigationItem,
  Divider,
  InteractionManager,
  PropTypes,
  PureComponent,
  Text,
  View
} from 'react-native-mdcore'

export default class Home extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Hello</Text>
      </View>
    )
  }
}

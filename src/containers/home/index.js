import React from 'react'
import {
  Divider,
  PropTypes,
  PureComponent,
  StatusBar,
  Text,
  View
} from 'react-native-mdcore'

export default class Home extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    console.log('aaaaaaaaa home', this.props)
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Text>Hello</Text>
      </View>
    )
  }
}

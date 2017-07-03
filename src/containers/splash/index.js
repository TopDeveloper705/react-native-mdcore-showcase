import React from 'react'
import { PureComponent, StyleSheet, View } from 'react-native-mdcore'

export default class Splash extends PureComponent {
  render() {
    const styles = Styles.get()
    return <View style={styles.container} />
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

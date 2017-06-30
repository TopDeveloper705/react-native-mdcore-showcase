import React from 'react'
import {
  Component,
  Divider,
  PropTypes,
  PureComponent,
  StatusBar,
  StyleSheet,
  Text,
  ThemeComponent,
  View
} from 'react-native-mdcore'

import { connect } from '@store'

class List extends ThemeComponent {

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme)
    console.log('aaaaaaaa list render')
    return (
      <View style={styles.flexStyle}>
      </View>
    )
  }
}

class Home extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    console.log('aaaaaaaa home render')
    return (
      <List />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, null)(Home)

const Styles = StyleSheet.create((theme) => {
  const flexStyle = {
    flex: 1,
    backgroundColor: theme.palette.primary
  }
  return { flexStyle }
})

import React from 'react'
import {
  PropTypes,
  PureComponent,
  StyleSheet,
  ThemeComponent,
  View
} from 'react-native-mdcore'

import { connect } from '@store'

class List extends ThemeComponent {
  render() {
    const { theme } = this.context
    const styles = Styles.get(theme)
    return <View style={styles.flexStyle} />
  }
}

class Home extends PureComponent {
  static contextTypes = {
    theme: PropTypes.any
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({ test: new Date() })
    // }, 1000)
  }

  render() {
    return <List />
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, null)(Home)

const Styles = StyleSheet.create(theme => {
  const flexStyle = {
    flex: 1,
    backgroundColor: theme.palette.primary
  }
  return { flexStyle }
})

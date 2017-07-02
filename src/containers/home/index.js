import React from 'react'
import {
  PropTypes,
  PureComponent,
  StyleSheet,
  ThemeComponent,
  View
} from 'react-native-mdcore'

import { connect } from '@store'

class Home extends PureComponent {
  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const styles = Styles.get(this.context.theme)
    return <View style={styles.flexStyle} />
  }
}

export default connect(null, null)(Home)

const Styles = StyleSheet.create(theme => {
  const flexStyle = {
    flex: 1,
    backgroundColor: theme.palette.primary
  }
  return { flexStyle }
})

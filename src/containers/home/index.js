import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Subheader,
  Toolbar,
  View
} from 'react-native-mdcore'

import { connect } from '@store'

class Home extends PureComponent {
  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme)
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Toolbar title="ReactNativeMdCore" iconName="menu" />
        <ScrollView style={{ flex: 1 }}>
          <Subheader text="Material Components" />
        </ScrollView>
      </View>
    )
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

import React from 'react'
import {
  Divider,
  ListItem,
  ListPadding,
  PropTypes,
  PureComponent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Subheader,
  Toolbar,
  View
} from 'react-native-mdcore'

import { navigatorActions } from '@redux'
import { bindActionCreators, connect } from '@store'

class BottomNavigation extends PureComponent {
  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme)
    return (
      <View style={styles.container}>
        <StatusBar />
        <Toolbar
          title="BottomNavigation"
          iconName="menu"
          onNavigationPress={this._onBackPress}
        />
        <ScrollView style={{ flex: 1 }}>
          <ListPadding />
          <Subheader text="Material Components" />
          <ListItem
            secondaryText="Bottom navigation with cross-fading views"
            text="Bottom navigation"
            type="two-line-text-only"
          />
          <Divider />
          <ListPadding />
        </ScrollView>
      </View>
    )
  }

  _onBackPress = () => {
    this.props.navigatorActions.goBack()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navigatorActions: bindActionCreators(navigatorActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(BottomNavigation)

const Styles = StyleSheet.create(theme => {
  const container = {
    flex: 1
  }
  return { container }
})

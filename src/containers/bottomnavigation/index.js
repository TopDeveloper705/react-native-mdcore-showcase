import React from 'react'
import {
  BottomNavigation,
  BottomNavigationItem,
  Divider,
  ListItem,
  ListPadding,
  PropTypes,
  PureComponent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Toolbar,
  View
} from 'react-native-mdcore'

import { navigatorActions } from '@redux'
import { bindActionCreators, connect } from '@store'

const ITEMS = [
  {
    icon: 'alarm',
    title: 'Alarm'
  },
  {
    icon: 'stop',
    title: 'Box'
  },
  {
    icon: 'cloud',
    title: 'Cloud'
  },
  {
    icon: 'favorite',
    title: 'Favorites'
  },
  {
    icon: 'event-available',
    title: 'Event'
  }
]

class BottomNavigationContainer extends PureComponent {
  static contextTypes = {
    icons: PropTypes.any,
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme)
    return (
      <View style={styles.container}>
        <StatusBar />
        <Toolbar
          title="Bottom navigation"
          iconName={this.context.icons.back}
          onNavigationPress={this._onBackPress}
        />
        <ScrollView style={styles.content} />
        <Divider />
        <BottomNavigation
          initialItem={parseInt(ITEMS.length / 2)}
          onItemSelected={this._onBottomNavigationItemSelected}>
          {ITEMS.map((item, index) =>
            <BottomNavigationItem
              key={index}
              icon={item.icon}
              title={item.title}
            />
          )}
        </BottomNavigation>
      </View>
    )
  }

  _onBackPress = () => {
    this.props.navigatorActions.goBack()
  }

  _onBottomNavigationItemSelected = ({ index }) => {
    console.log('ccccccccc', index)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navigatorActions: bindActionCreators(navigatorActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(BottomNavigationContainer)

const Styles = StyleSheet.create(_theme => {
  const container = {
    flex: 1
  }
  const content = {
    flex: 1
  }
  return { container, content }
})

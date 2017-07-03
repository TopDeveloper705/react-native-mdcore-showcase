import React from 'react'
import {
  BottomNavigation,
  BottomNavigationContainer,
  BottomNavigationItem,
  Divider,
  Icon,
  ListItem,
  ListPadding,
  PropTypes,
  PureComponent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

class Container extends PureComponent {
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
        <BottomNavigationContainer
          ref="bottomNavigationContainer"
          initialItem={parseInt(ITEMS.length / 2)}>
          {ITEMS.map((item, index) =>
            <View key={index} style={styles.content}>
              <Icon color={theme.palette.primary} name={item.icon} size={96} />
            </View>
          )}
        </BottomNavigationContainer>
        <Divider />
        <BottomNavigation
          initialItem={parseInt(ITEMS.length / 2)}
          onItemSelected={this._onBottomNavigationItemSelected}>
          {ITEMS.map((item, index) =>
            <BottomNavigationItem
              key={index}
              color={this._getBottomNavigationItemColor}
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
    this.refs.bottomNavigationContainer.setItem(index)
  }

  _getBottomNavigationItemColor = ({ active }) => {
    return active ? this.context.theme.palette.primary : undefined
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navigatorActions: bindActionCreators(navigatorActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Container)

const Styles = StyleSheet.create(_theme => {
  const container = {
    flex: 1
  }
  const content = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
  return { container, content }
})

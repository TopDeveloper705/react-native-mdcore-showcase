import React from 'react'
import {
  Button,
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
  View,
  ViewPager
} from 'react-native-mdcore'

import { navigatorActions } from '@redux'
import { bindActionCreators, connect } from '@store'

class ButtonsContainer extends PureComponent {
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
          title="Buttons"
          iconName={this.context.icons.back}
          onNavigationPress={this._onBackPress}
        />
        <ScrollView>
          <Button title="sample" />
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

export default connect(null, mapDispatchToProps)(ButtonsContainer)

const Styles = StyleSheet.create(_theme => {
  const container = {
    flex: 1
  }
  return { container }
})

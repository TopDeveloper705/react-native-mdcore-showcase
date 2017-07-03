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
          <View style={{ alignItems: 'center' }}>
            <Button palette="background" title="sample" />
            <Button palette="primary" title="sample" />
            <Button palette="accent" title="sample" />
            <Button palette="warn" title="sample" />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Button palette="background" title="sample" type="flat" />
            <Button palette="primary" title="sample" type="flat" />
            <Button palette="accent" title="sample" type="flat" />
            <Button palette="warn" title="sample" type="flat" />
          </View>
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

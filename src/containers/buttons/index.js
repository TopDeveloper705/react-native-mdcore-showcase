import React from 'react'
import {
  Button,
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

const STATUS_BAR = <StatusBar />

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
        <Toolbar
          iconName={this.context.icons.back}
          title="Buttons"
          statusBar={STATUS_BAR}
          onNavigationPress={this._onBackPress}
        />
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Button palette="background" title="sample" onPress={() => {}} />
            <Button palette="primary" title="sample" onPress={() => {}} />
            <Button palette="accent" title="sample" onPress={() => {}} />
            <Button palette="warn" title="sample" onPress={() => {}} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Button
              palette="background"
              title="sample"
              type="flat"
              onPress={() => {}}
            />
            <Button
              palette="primary"
              title="sample"
              type="flat"
              onPress={() => {}}
            />
            <Button
              palette="accent"
              title="sample"
              type="flat"
              onPress={() => {}}
            />
            <Button
              palette="warn"
              title="sample"
              type="flat"
              onPress={() => {}}
            />
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

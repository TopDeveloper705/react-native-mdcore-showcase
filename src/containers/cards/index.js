import React from 'react'
import {
  Button,
  Card,
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

const BODY =
  "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, solider, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

class CardsContainer extends PureComponent {
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
          iconName={this.context.icons.back}
          title="Cards"
          onNavigationPress={this._onBackPress}
        />
        <ScrollView>
          <Card>
            <Text
              style={{
                marginLeft: theme.card.spacing,
                marginRight: theme.card.spacing,
                marginTop: theme.card.spacingLg
              }}
              numberOfLines={1}
              type="headline"
              value="Title goes here"
            />
            <Text
              style={{
                marginLeft: theme.card.spacing,
                marginRight: theme.card.spacing,
                marginTop: theme.card.spacingXs,
                marginBottom: theme.card.spacing
              }}
              numberOfLines={1}
              type="body1"
              subType="secondary"
              value="Subtitle here"
            />
            <Text
              style={{
                margin: theme.card.spacing,
                marginTop: 0
              }}
              type="body1"
              value={BODY}
            />
            <View style={{ flexDirection: 'row' }}>
              <Button title="Action 1" type="flat" onPress={() => {}} />
              <Button title="Action 2" type="flat" onPress={() => {}} />
            </View>
          </Card>
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

export default connect(null, mapDispatchToProps)(CardsContainer)

const Styles = StyleSheet.create(theme => {
  const container = {
    backgroundColor: theme.palette.backgroundDark,
    flex: 1
  }
  return { container }
})

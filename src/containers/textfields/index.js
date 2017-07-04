import React from 'react'
import {
  Button,
  Card,
  Image,
  ListItem,
  PropTypes,
  PureComponent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextField,
  Toolbar,
  View
} from 'react-native-mdcore'

import { navigatorActions } from '@redux'
import { bindActionCreators, connect } from '@store'

/* eslint-disable */
const GREY = '#ccc'
const TITLE = 'Title goes here'
const SUBTITLE = 'Subtitle here'
const URI = 'http://cdn.wallpapersafari.com/19/2/d2EIqH.jpg'
const BODY =
  "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, solider, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
/* eslint-enable */

const STATUS_BAR = <StatusBar />

class TextFieldsContainer extends PureComponent {
  static contextTypes = {
    icons: PropTypes.any,
    images: PropTypes.any,
    theme: PropTypes.any
  }

  state = {
    uri: ''
  }

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme)
    return (
      <View style={styles.container}>
        <Toolbar
          iconName={this.context.icons.back}
          title="Text fields"
          statusBar={STATUS_BAR}
          onNavigationPress={this._onBackPress}
        />
        <ScrollView>
          <TextField label={'Name'} highlightColor={'#00BCD4'} />
          <TextField.Ref label={'Name'} highlightColor={'#00BCD4'} />
          <TextField.Ref label={'Demo'} highlightColor={'#00BCD4'} />
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

export default connect(null, mapDispatchToProps)(TextFieldsContainer)

const Styles = StyleSheet.create(theme => {
  const container = {
    backgroundColor: theme.palette.backgroundDark,
    flex: 1
  }
  const content = {
    padding: theme.card.spacingSm
  }
  return { container, content }
})

import React from 'react'
import {
  ListItem,
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
          <ListItem
            style={{ backgroundColor: '#ccaaee' }}
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="single-line-text-only"
          />
          <ListItem
            style={{ backgroundColor: '#cce331' }}
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="single-line-icon-with-text"
          />
          <ListItem
            style={{ backgroundColor: '#ccaaee' }}
            avatar="abc"
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="single-line-avatar-with-text"
          />
          <ListItem
            style={{ backgroundColor: '#cce331' }}
            avatar="abc"
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="single-line-avatar-with-text-and-icon"
          />

          <ListItem
            style={{ backgroundColor: '#ccaaee' }}
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="two-line-text-only"
          />
          <ListItem
            style={{ backgroundColor: '#cce331' }}
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="two-line-icon-with-text"
          />
          <ListItem
            style={{ backgroundColor: '#ccaaee' }}
            avatar="abc"
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="two-line-avatar-with-text"
          />
          <ListItem
            style={{ backgroundColor: '#cce331' }}
            avatar="abc"
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="two-line-avatar-with-text-and-icon"
          />

          <ListItem
            style={{ backgroundColor: '#ccaaee' }}
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="three-line-text-only"
          />
          <ListItem
            style={{ backgroundColor: '#cce331' }}
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="three-line-icon-with-text"
          />
          <ListItem
            style={{ backgroundColor: '#ccaaee' }}
            avatar="abc"
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="three-line-avatar-with-text"
          />
          <ListItem
            style={{ backgroundColor: '#cce331' }}
            avatar="abc"
            avatarStyle={{ backgroundColor: '#ccc' }}
            icon="apps"
            secondaryText="Bottom navigation with cross-fading views Bottom navigation with cross-fading views"
            text="Bottom navigation Bottom navigation Bottom navigation Bottom navigation Bottom navigation"
            type="three-line-avatar-with-text-and-icon"
          />
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

import { combineReducers } from 'redux'

import * as navigatorActions from './navigator'
import settings, * as settingsActions from './settings'
import theme, * as themeActions from './theme'

export default combineReducers({
  settings,
  theme
})

export { navigatorActions, settingsActions, themeActions }

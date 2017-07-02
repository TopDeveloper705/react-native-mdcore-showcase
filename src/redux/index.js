import { combineReducers } from 'redux'

import settings, * as settingsActions from './settings'
import theme, * as themeActions from './theme'

export default combineReducers({
  settings,
  theme
})

export { settingsActions, themeActions }

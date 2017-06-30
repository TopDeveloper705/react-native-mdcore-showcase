import { combineReducers } from 'redux'

import settings from './settings'
import theme from './theme'

export default combineReducers({
  settings,
  theme
})
